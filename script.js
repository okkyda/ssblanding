// Hamburger & Responsive Menu
const navbarMenu = document.getElementById('navbarMenu');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarClose = document.getElementById('sidebarClose');

// Navbar menu (untuk mobile)
if (hamburgerBtn && navbarMenu) {
    hamburgerBtn.addEventListener('click', (e) => {
        // Jika sidebar visible, jangan toggle navbarMenu
        if (window.innerWidth <= 900) {
            e.stopPropagation();
            openSidebar();
        } else {
            navbarMenu.classList.toggle('show');
        }
    });
    // Optional: close menu if click outside (mobile)
    window.addEventListener('click', (e) => {
        if (!navbarMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            navbarMenu.classList.remove('show');
        }
    });
}

// --- Sidebar --- //
function openSidebar() {
    sidebarOverlay.classList.add('active');
    sidebarMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeSidebar() {
    sidebarOverlay.classList.remove('active');
    sidebarMenu.classList.remove('active');
    document.body.style.overflow = '';
}

if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSidebar();
});

// Dropdown accordion logic
document.querySelectorAll('.sidebar-dropdown').forEach(btn => {
    btn.addEventListener('click', function () {
        const active = btn.classList.contains('active');
        // Close all
        document.querySelectorAll('.sidebar-dropdown').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.sidebar-dropdown-content').forEach(c => c.style.display = 'none');
        // Toggle
        if (!active) {
            btn.classList.add('active');
            const dd = document.getElementById('dropdown-' + btn.dataset.dropdown);
            if (dd) dd.style.display = 'flex';
        }
    });
});

// Prevent menu close on sidebar click
if (sidebarMenu) sidebarMenu.addEventListener('click', e => e.stopPropagation());