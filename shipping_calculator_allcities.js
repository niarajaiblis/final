$(document).ready(function() {
    // Initialize select2 with all cities preloaded
    function initializeCitySelect(selector, placeholder) {
        $(selector).select2({
            placeholder: placeholder,
            minimumInputLength: 0 // Allow selection without typing
        });

        // Fetch cities from our BinderByte API
        fetch("binderbyte_api.php")
        .then(response => response.json())
        .then(data => {
            const cities = data.map(city => ({
                id: city.id,
                text: city.text
            }));
            $(selector).empty().select2({
                data: cities,
                placeholder: placeholder
            });
        })
        .catch(error => {
            console.error('Error loading cities:', error);
            alert('Gagal memuat daftar kota. Silakan coba lagi nanti.');
        });
    }

    // Initialize both dropdowns
    initializeCitySelect('#origin', 'Select origin city');
    initializeCitySelect('#destination', 'Select destination city');

    // Handle form submission
    document.getElementById('shipping-form').onsubmit = async function(e) {
        e.preventDefault();
        
        const origin = $('#origin').val();
        const destination = $('#destination').val();
        const weight = $('#weight').val();

        if (!origin || !destination || !weight) {
            alert('Please fill all required fields');
            return;
        }

        $('#calculate-btn').prop('disabled', true).text('Calculating...');
        
        try {
            const response = await fetch('api.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    origin,
                    destination,
                    weight
                })
            });

            const data = await response.json();
            displayResults(data.rajaongkir.results);
            
        } catch (error) {
            console.error('Error:', error);
            $('#results').html(`
                <div class="error">
                    <p>Failed to calculate shipping cost.</p>
                    <p>${error.message}</p>
                </div>
            `);
        } finally {
            $('#calculate-btn').prop('disabled', false).text('Calculate Cost');
        }
    };

    function displayResults(results) {
        let html = '<h2>Shipping Options</h2>';
        
        if (results && results.length > 0) {
            results.forEach(courier => {
                html += `<div class="courier-results">
                    <h3>${courier.name.toUpperCase()}</h3>`;
                
                courier.costs.forEach(service => {
                    html += `
                    <div class="shipping-option">
                        <h4>${service.service}</h4>
                        <p><strong>Description:</strong> ${service.description}</p>
                        <p><strong>Cost:</strong> ${formatCurrency(service.cost[0].value)}</p>
                        <p><strong>Estimated Delivery:</strong> ${service.cost[0].etd} days</p>
                    </div>`;
                });
                
                html += `</div>`;
            });
        } else {
            html = '<div class="no-results">No shipping options available for this route.</div>';
        }
        
        $('#results').html(html);
    }

    function formatCurrency(amount) {
        return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
});
