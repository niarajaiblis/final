// Back button functionality
document.querySelector('.button').addEventListener('click', function() {
    window.location.href = 'landing.html';
});

// Simple form submission handler
document.getElementById('shippingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const resi = document.getElementById('resi').value;
    const regOnline = document.getElementById('regOnline').value;
    const weight = document.getElementById('weight').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const streetAddress = document.getElementById('streetAddress').value;
    const streetAddress2 = document.getElementById('streetAddress2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const receiverFirstName = document.getElementById('receiverFirstName').value;
    const receiverLastName = document.getElementById('receiverLastName').value;
    const receiverStreetAddress = document.getElementById('receiverStreetAddress').value;
    const receiverStreetAddress2 = document.getElementById('receiverStreetAddress2').value;
    const receiverCity = document.getElementById('receiverCity').value;
    const receiverState = document.getElementById('receiverState').value;
    const receiverPhone = document.getElementById('receiverPhone').value;
    const from = document.getElementById('from').value;
    const propTujuan = document.getElementById('propTujuan').value;

    // Build receipt content
    let receipt = `
        <h3>Nomor Resi</h3>
        <p>Resi: ${resi}</p>
        <p>Reg. Online: ${regOnline}</p>
        <p>Berat: ${weight} kg</p>
        
        <h3>Pengirim</h3>
        <p>Nama: ${firstName} ${lastName}</p>
        <p>Alamat: ${streetAddress}${streetAddress2 ? ', ' + streetAddress2 : ''}</p>
        <p>Kota: ${city}</p>
        <p>Provinsi: ${state}</p>
        
        <h3>Penerima</h3>
        <p>Nama: ${receiverFirstName} ${receiverLastName}</p>
        <p>Alamat: ${receiverStreetAddress}${receiverStreetAddress2 ? ', ' + receiverStreetAddress2 : ''}</p>
        <p>Kota: ${receiverCity}</p>
        <p>Provinsi: ${receiverState}</p>
        <p>Telepon: ${receiverPhone}</p>
        
        <h3>Lokasi</h3>
        <p>Dari: ${from}</p>
        ${propTujuan ? `<p>Prop. Tujuan: ${propTujuan}</p>` : ''}
    `;

    // Display receipt
    document.getElementById('receiptContent').innerHTML = receipt;
    document.getElementById('receiptModal').style.display = 'block';
});

// Close modal handlers
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('receiptModal').style.display = 'none';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('receiptModal').style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('receiptModal')) {
        document.getElementById('receiptModal').style.display = 'none';
    }
});
