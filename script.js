/* OWN CODE STARTS HERE*/
const juiceData = {
    greenEnergy: {
        image: 'green.png',
        title: 'Green Energy',
        description: 'This is our best seller. It uses fresh kale, spinach, and apple for an energy-boosting drink.'
    },
    berryBlast: {
        image: 'pink.png',
        title: 'Berry Blast',
        description: 'A refreshing mix of mixed berries and pomegranate for the perfect treat!'
    },
    citrusSunrise: {
        image: 'orange.png',
        title: 'Citrus Sunrise',
        description: 'A zesty combination of orange, lemon, and grapefruit to brighten your day.'
    }
};

// DOM elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');

// Modal functions
function openModal(juiceId) {
    const juice = juiceData[juiceId];
    if (juice) {
        modalImage.src = juice.image;
        modalTitle.textContent = juice.title;
        modalText.textContent = juice.description;
        modal.style.display = 'flex';
    }
}
// closes modal when clicked close button
function closeModal() {
    modal.style.display = 'none';
}

// Event listeners
document.querySelectorAll('.juice-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.id));
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
/* OWN CODE ENDS HERE*/
