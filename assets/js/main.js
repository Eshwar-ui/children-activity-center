/**
 * BrightSteps Interactive Template Bundle
 * Core functionality for navigation, dashboard UI, and scroll reveal animations.
 * 
 * SECTION: Configuration & Global Selectors
 */

document.addEventListener('DOMContentLoaded', () => {
    /* SECTION: Mobile Navigation Logic */
    // Handles the sliding drawer menu for mobile/tablet views.
    
    if (navToggle && navMenu) {
        // 1.1 Backdrop Creation
        let backdrop = document.getElementById('nav-backdrop');
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.id = 'nav-backdrop';
            backdrop.className = 'fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-[40] hidden transition-opacity duration-300 opacity-0';
            document.body.appendChild(backdrop);
        }

        const openMenu = () => {
            navMenu.classList.remove('hidden', 'lg:flex', 'space-x-8', 'items-center');
            navMenu.classList.add('fixed', 'top-0', 'right-0', 'h-screen', 'w-[85vw]', 'sm:w-80', 'bg-white', 'dark:bg-neutral-900', 'flex-col', 'z-[200]', 'p-8', 'shadow-2xl', 'flex', 'transition-all', 'duration-300', 'translate-x-[101%]');
            
            // Add close button if not exists
            if (!document.getElementById('drawer-close')) {
                const closeBtn = document.createElement('button');
                closeBtn.id = 'drawer-close';
                closeBtn.className = 'mb-12 self-end p-2 text-neutral-500 hover:text-primary transition-colors';
                closeBtn.innerHTML = '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>';
                closeBtn.onclick = closeMenu;
                navMenu.prepend(closeBtn);
            }

            // Immediate redraw
            navMenu.offsetHeight;
            
            navMenu.classList.remove('translate-x-[101%]');
            navMenu.classList.add('translate-x-0');
            
            backdrop.classList.remove('hidden');
            setTimeout(() => backdrop.classList.add('opacity-100'), 10);
            document.body.classList.add('overflow-hidden');

            // Format links for vertical menu
            const navElements = navMenu.querySelectorAll('a, .nav-link');
            navElements.forEach(el => {
                if (el.id !== 'drawer-close') {
                    el.classList.add('w-full', 'py-4', 'border-b', 'border-neutral-100', 'dark:border-neutral-800', 'text-lg', 'flex', 'justify-between', 'items-center');
                }
            });
        };

        const closeMenu = () => {
            navMenu.classList.add('translate-x-[101%]');
            navMenu.classList.remove('translate-x-0');
            backdrop.classList.remove('opacity-100');
            
            setTimeout(() => {
                if (navMenu.classList.contains('translate-x-[101%]')) {
                    navMenu.classList.add('hidden', 'lg:flex', 'items-center', 'space-x-8');
                    navMenu.classList.remove('fixed', 'top-0', 'right-0', 'h-screen', 'w-[85vw]', 'sm:w-80', 'bg-white', 'dark:bg-neutral-900', 'flex-col', 'z-[200]', 'p-8', 'shadow-2xl', 'flex', 'transition-all', 'duration-300', 'translate-x-[101%]');
                    backdrop.classList.add('hidden');
                    
                    const navElements = navMenu.querySelectorAll('a, .nav-link');
                    navElements.forEach(el => {
                        el.classList.remove('w-full', 'py-4', 'border-b', 'border-neutral-100', 'dark:border-neutral-800', 'text-lg', 'flex', 'justify-between', 'items-center');
                    });

                    // Remove close button
                    const cb = document.getElementById('drawer-close');
                    if (cb) cb.remove();
                }
            }, 300);
            document.body.classList.remove('overflow-hidden');
        };

        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('translate-x-0');
            if (isOpen) closeMenu(); else openMenu();
        });

        backdrop.addEventListener('click', closeMenu);

        // Auto-close menu when a link is clicked
        const mobileLinks = navMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // 1.2 DASHBOARD DRAWER TOGGLE
    const dashboardToggle = document.getElementById('dashboard-toggle');
    const sidebar = document.getElementById('sidebar');
    
    if (dashboardToggle && sidebar) {
        // Create Dashboard Backdrop
        let dbBackdrop = document.getElementById('dashboard-backdrop');
        if (!dbBackdrop) {
            dbBackdrop = document.createElement('div');
            dbBackdrop.id = 'dashboard-backdrop';
            dbBackdrop.className = 'fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-[90] hidden transition-opacity duration-300 opacity-0';
            document.body.appendChild(dbBackdrop);
        }

        const openSidebar = () => {
            sidebar.classList.add('open');
            dbBackdrop.classList.remove('hidden');
            setTimeout(() => dbBackdrop.classList.add('opacity-100'), 10);
            document.body.classList.add('overflow-hidden');
        };

        const closeSidebar = () => {
            sidebar.classList.remove('open');
            dbBackdrop.classList.remove('opacity-100');
            setTimeout(() => {
                if (!sidebar.classList.contains('open')) {
                    dbBackdrop.classList.add('hidden');
                }
            }, 300);
            document.body.classList.remove('overflow-hidden');
        };

        const dbClose = document.getElementById('sidebar-close');

        dashboardToggle.addEventListener('click', openSidebar);
        dbBackdrop.addEventListener('click', closeSidebar);
        if (dbClose) dbClose.addEventListener('click', closeSidebar);

        // Close sidebar on link click (mobile)
        const sidebarLinks = sidebar.querySelectorAll('a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', closeSidebar);
        });
    }

    // 2. DARK MODE TOGGLE
    const themeToggleBtn = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    
    // Initial Icons: Flip logic - show icon for the mode we can switch TO
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        document.documentElement.dataset.theme = 'dark';
        if (lightIcon) lightIcon.classList.remove('hidden'); // Show Sun to go Light
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.removeAttribute('data-theme');
        if (darkIcon) darkIcon.classList.remove('hidden'); // Show Moon to go Dark
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            // toggle icons inside button
            if (darkIcon) darkIcon.classList.toggle('hidden');
            if (lightIcon) lightIcon.classList.toggle('hidden');
            
            // toggle leading class + theme attribute (local CSS contract)
            document.documentElement.classList.toggle('dark');
            
            // store preference
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.dataset.theme = 'dark';
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('color-theme', 'light');
            }
        });
    }

    // 3. RTL TOGGLE
    const rtlToggleBtn = document.getElementById('rtl-toggle');
    if (rtlToggleBtn) {
        rtlToggleBtn.addEventListener('click', () => {
             const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
             if (currentDir === 'rtl') {
                 document.documentElement.setAttribute('dir', 'ltr');
                 localStorage.setItem('dir', 'ltr');
             } else {
                 document.documentElement.setAttribute('dir', 'rtl');
                 localStorage.setItem('dir', 'rtl');
             }
        });
    }

    // Initialize RTL
    if (localStorage.getItem('dir') === 'rtl') {
        document.documentElement.setAttribute('dir', 'rtl');
    }

    // 4. ACTIVE NAVIGATION HIGHLIGHTING
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('text-primary', 'border-b-2', 'border-primary', 'font-black');
            link.classList.remove('text-neutral-600');
        }
        
        // Special case for Home dropdown sublinks
        if (currentPath === 'index.html' || currentPath === 'index-2.html' || currentPath === '404.html') {
             // Find the home button and highlight it if one of the index pages is active
             const homeBtn = document.querySelector('.relative.group button');
             if (homeBtn) {
                 homeBtn.classList.add('text-primary', 'border-b-2', 'border-primary', 'font-black');
                 homeBtn.classList.remove('text-neutral-600');
             }
        }
    });

    // 5. STICKY NAV BLUR EFFECT ON SCROLL
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 20) {
            header.classList.add('bg-white/90', 'dark:bg-neutral-800/90', 'shadow-sm');
            header.classList.remove('bg-white/70', 'dark:bg-neutral-800/70');
            header.classList.add('py-3');
            header.classList.remove('py-4');
        } else {
            header.classList.remove('bg-white/90', 'dark:bg-neutral-800/90', 'shadow-sm');
            header.classList.add('bg-white/70', 'dark:bg-neutral-800/70');
            header.classList.remove('py-3');
            header.classList.add('py-4');
        }
    });
});
