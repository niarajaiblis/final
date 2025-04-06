document.addEventListener('DOMContentLoaded', function() {
    // Cek status login
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentUser = localStorage.getItem('currentUser');
    
    const beforeLogin = document.getElementById('beforeLogin');
    const afterLogin = document.getElementById('afterLogin');
    const userEmail = document.getElementById('userEmail');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (isLoggedIn === 'true' && currentUser) {
        // Tampilkan UI untuk user yang sudah login
        beforeLogin.style.display = 'none';
        afterLogin.style.display = 'flex';
        userEmail.textContent = currentUser;
    } else {
        // Tampilkan UI untuk user yang belum login
        beforeLogin.style.display = 'flex';
        afterLogin.style.display = 'none';
    }

    // Handle logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('currentUser');
            window.location.href = 'SignUp_LogIn_Form.html';
        });
    }

    // Perbaikan: Menghapus deklarasi dropdowns yang duplikat
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        // Event listener untuk mobile view
        if (dropdown.querySelector('.dropdown-toggle')) {
            dropdown.querySelector('.dropdown-toggle').addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const menu = this.nextElementSibling;
                    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                }
            });
        }

        // Event listener untuk mencegah hilangnya dropdown saat diklik
        dropdown.addEventListener('click', function(e) {
            if (e.target.classList.contains('dropdown-toggle')) {
                e.preventDefault();
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Tambahkan event listener untuk service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('span').textContent;
            if (serviceName === 'Cek Tarif') {
                window.location.href = 'cek-tarif.html';
            }
            // Tambahkan logika untuk layanan lain jika diperlukan
        });
    });

   // Modal logic
const modal = document.getElementById('trackingModal');
const tracking = document.getElementById('tracking');
const lacakPaketBtn = document.querySelector('.lacak-paket-btn');
const trackBtn = document.querySelector('.track-btn');
const detailbtn = document.querySelector('detail-btn');
const chatkurir = document.querySelector('.chat-btn')
const closeModalBtn = document.getElementsByClassName('close')[0];
const backBtn = document.getElementsByClassName('keluar')[0];

// Buka modal, tutup tracking
if (lacakPaketBtn) {
    lacakPaketBtn.onclick = function() {
        modal.style.display = 'block';
        tracking.style.display = 'none'; // Tutup track-page
    }
}

if (detailbtn) {
    detailbtn.onclick = function() {
        modal.style.display = 'block';
        tracking.style.display = 'none'; // Tutup track-page
    }
}

// Buka tracking, tutup modal
if (trackBtn) {
    trackBtn.onclick = function() {
        tracking.style.display = 'block';
        modal.style.display = 'none'; // Tutup modal
    }
}

// Close modal manual
if (closeModalBtn) {
    closeModalBtn.onclick = function() {
        modal.style.display = 'none';
    }
}

// Close tracking manual
if (backBtn) {
    backBtn.onclick = function() {
        tracking.style.display = 'none';
    }
}

// Klik di luar
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    if (event.target === tracking) {
        tracking.style.display = 'none';
    }
};

if (detailbtn) {
detailbtn.addEventListener('click', function() {
    modal.style.display = 'block';
    tracking.style.display = 'none';
});
}

//Klik chat kurir
if (chatkurir) {
    chatkurir.addEventListener('click', function() {
        window.location.href = 'chatkurir.html';
    });
}
}); 

// Handle chat widget
const chatWidget = document.querySelector('.chat-widget');
if (chatWidget) {
    chatWidget.addEventListener('click', function() {
        window.location.href = 'chatadmin.html';
    });
}

