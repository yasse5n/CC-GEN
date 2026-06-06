// Protection Script - Block DevTools only (Right click allowed)
document.addEventListener('keydown', function (event) {
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault();
        return false;
    }
    if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'i' || event.keyCode === 73)) {
        event.preventDefault();
        return false;
    }
    if (event.ctrlKey && event.shiftKey && (event.key === 'J' || event.key === 'j' || event.keyCode === 74)) {
        event.preventDefault();
        return false;
    }
    if (event.ctrlKey && event.shiftKey && (event.key === 'C' || event.key === 'c' || event.keyCode === 67)) {
        event.preventDefault();
        return false;
    }
    if (event.ctrlKey && (event.key === 'U' || event.key === 'u' || event.keyCode === 85)) {
        event.preventDefault();
        return false;
    }
});

(function () {
    const threshold = 160;
    const checkDevTools = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {}
    };
    window.addEventListener('resize', checkDevTools);
})();