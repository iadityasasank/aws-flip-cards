// Flip card functionality - This script is used for standalone HTML files
// The main index.html has its own initialization logic for dynamic content

// Only initialize if flip cards exist on page load (for standalone pages)
document.addEventListener('DOMContentLoaded', function() {
    const flipCards = document.querySelectorAll('.flip-card');
    if (flipCards.length === 0) {
        // Cards will be loaded dynamically, skip initialization
        return;
    }
    
    initializeFlipCards();
});

// Export function for use in main index.html
function initializeFlipCardsStatic() {
    const flipCards = document.querySelectorAll('.flip-card');
    if (flipCards.length === 0) return;
    initializeFlipCards();
}

function initializeFlipCards() {
    const flipCards = document.querySelectorAll('.flip-card');
    let currentCardIndex = 0;
    let flippedCards = new Set();

    // Initialize stats
    updateStats();

    // Flip card on click
    flipCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
            if (card.classList.contains('flipped')) {
                flippedCards.add(index);
            } else {
                flippedCards.delete(index);
            }
            updateStats();
        });
    });

    // Keyboard navigation
    const keyboardHandler = function(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            goToNext();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            goToPrevious();
        } else if (e.key === ' ') {
            e.preventDefault();
            if (flipCards[currentCardIndex]) {
                flipCards[currentCardIndex].classList.toggle('flipped');
                const index = currentCardIndex;
                if (flipCards[index].classList.contains('flipped')) {
                    flippedCards.add(index);
                } else {
                    flippedCards.delete(index);
                }
                updateStats();
            }
        } else if (e.key === 'r' || e.key === 'R') {
            resetAll();
        } else if (e.key === 'f' || e.key === 'F') {
            flipAll();
        }
    };
    
    document.addEventListener('keydown', keyboardHandler);

    // Next button
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.onclick = goToNext;
    }

    // Previous button
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        prevBtn.onclick = goToPrevious;
    }

    // Reset button
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.onclick = resetAll;
    }

    // Flip all button
    const flipAllBtn = document.getElementById('flipAllBtn');
    if (flipAllBtn) {
        flipAllBtn.onclick = flipAll;
    }

    function goToNext() {
        if (flipCards.length === 0) return;
        
        // Reset current card
        flipCards[currentCardIndex].classList.remove('flipped');
        
        // Move to next card
        currentCardIndex = (currentCardIndex + 1) % flipCards.length;
        
        // Scroll to card
        flipCards[currentCardIndex].scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
        
        updateStats();
    }

    function goToPrevious() {
        if (flipCards.length === 0) return;
        
        // Reset current card
        flipCards[currentCardIndex].classList.remove('flipped');
        
        // Move to previous card
        currentCardIndex = (currentCardIndex - 1 + flipCards.length) % flipCards.length;
        
        // Scroll to card
        flipCards[currentCardIndex].scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
        
        updateStats();
    }

    function resetAll() {
        flipCards.forEach(card => {
            card.classList.remove('flipped');
        });
        flippedCards.clear();
        currentCardIndex = 0;
        updateStats();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function flipAll() {
        flipCards.forEach((card, index) => {
            card.classList.add('flipped');
            flippedCards.add(index);
        });
        updateStats();
    }

    function updateStats() {
        const totalCards = flipCards.length;
        const flippedCount = flippedCards.size;
        const remainingCount = totalCards - flippedCount;
        
        const totalSpan = document.getElementById('totalCards');
        const flippedSpan = document.getElementById('flippedCards');
        const remainingSpan = document.getElementById('remainingCards');
        
        if (totalSpan) totalSpan.textContent = totalCards;
        if (flippedSpan) flippedSpan.textContent = flippedCount;
        if (remainingSpan) remainingSpan.textContent = remainingCount;
    }
}

