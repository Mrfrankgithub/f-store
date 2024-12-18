const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove the active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));

        // Add the active class to the clicked tab and corresponding content
        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Initially show seller content
    showSeller();
});

function showSeller() {
    // Activate Seller Tab
    document.getElementById('seller-tab').classList.add('aktive');
    document.getElementById('buyer-tab').classList.remove('aktive');
    
    // Show Seller Content
    document.getElementById('seller-content').classList.add('aktive');
    document.getElementById('buyer-content').classList.remove('aktive');
}

function showBuyer() {
    // aktivate Buyer Tab
    document.getElementById('buyer-tab').classList.add('aktive');
    document.getElementById('seller-tab').classList.remove('aktive');
    
    // Show Buyer Content
    document.getElementById('buyer-content').classList.add('aktive');
    document.getElementById('seller-content').classList.remove('aktive');
}

