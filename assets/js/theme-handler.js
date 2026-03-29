/**
 * BrightSteps Theme & Direction Handler
 * Manages Dark Mode (via .dark class) and RTL/LTR switching.
 * Persistence: localStorage ('theme', 'direction')
 */

document.addEventListener('DOMContentLoaded', () => {
    /* SECTION: Initial Configuration & Selectors */
    const htmlElement = document.documentElement;

    // TODO: Add support for more granular themes if requested (e.g. system-auto)
    const currentTheme = localStorage.getItem('theme') || 'light';
    const currentDir = localStorage.getItem('direction') || 'ltr';

    initializeTemplate();

    /**
     * Bootstraps the template's visual state based on saved preferences.
     */
    function initializeTemplate() {
        applyTheme(currentTheme);
        applyDirection(currentDir);
    }

    /* SECTION: Template State Modifiers */

    /**
     * Toggles the 'dark' class and updates ARIA/Data attributes.
     * @param {string} theme - 'dark' or 'light'
     */
    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            htmlElement.setAttribute('data-theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            htmlElement.setAttribute('data-theme', 'light');
        }
        localStorage.setItem('theme', theme);
        
        // Dispatch event for UI synchronization (e.g. icon flips)
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }

    /**
     * Updates the text direction of the entire document.
     * @param {string} dir - 'rtl' or 'ltr'
     */
    function applyDirection(dir) {
        htmlElement.setAttribute('dir', dir);
        localStorage.setItem('direction', dir);
        window.dispatchEvent(new CustomEvent('directionChanged', { detail: { dir } }));
    }

    /* SECTION: Global API Exposure */
    // These methods are hooked directly into HTML button onclick handlers.

    /**
     * Primary Dark Mode Toggle Handler
     */
    window.toggleTheme = () => {
        const theme = htmlElement.classList.contains('dark') ? 'light' : 'dark';
        applyTheme(theme);
    };

    /**
     * Primary RTL/LTR Toggle Handler
     */
    window.toggleDirection = () => {
        const dir = htmlElement.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
        applyDirection(dir);
    };
});
