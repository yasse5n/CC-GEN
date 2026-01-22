// Protection Script - Block DevTools & Right Click

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', function (event) {
    // Block F12
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault();
        return false;
    }

    // Block Ctrl+Shift+I (DevTools)
    if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'i' || event.keyCode === 73)) {
        event.preventDefault();
        return false;
    }

    // Block Ctrl+Shift+J (Console)
    if (event.ctrlKey && event.shiftKey && (event.key === 'J' || event.key === 'j' || event.keyCode === 74)) {
        event.preventDefault();
        return false;
    }

    // Block Ctrl+Shift+C (Inspect Element)
    if (event.ctrlKey && event.shiftKey && (event.key === 'C' || event.key === 'c' || event.keyCode === 67)) {
        event.preventDefault();
        return false;
    }

    // Block Ctrl+U (View Source)
    if (event.ctrlKey && (event.key === 'U' || event.key === 'u' || event.keyCode === 85)) {
        event.preventDefault();
        return false;
    }
});

// Detect DevTools open (simple check)
(function () {
    const threshold = 160;
    const checkDevTools = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            // Optional: Action when DevTools detected, currently just silent or console specific behavior could be added
        }
    };
    window.addEventListener('resize', checkDevTools);
})();
