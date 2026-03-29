// SECTION: Dashboard Enhancements
function initializeDashboardSidebar() {
  const sidebar = document.querySelector("[data-dashboard-sidebar]");
  const toggle = document.querySelector("[data-dashboard-toggle]");
  if (!sidebar || !toggle) return;
  toggle.addEventListener("click", () => {
    const hidden = sidebar.classList.toggle("is-collapsed");
    toggle.setAttribute("aria-expanded", String(!hidden));
  });
}

function animateCharts() {
  document.querySelectorAll(".chart-fill").forEach((bar) => {
    const target = bar.dataset.value || "0";
    requestAnimationFrame(() => {
      bar.style.width = `${target}%`;
    });
  });
}

function clearSkeletons() {
  window.setTimeout(() => {
    document.querySelectorAll(".skeleton").forEach((card) => {
      card.classList.remove("skeleton");
    });
  }, 450);
}

initializeDashboardSidebar();
animateCharts();
clearSkeletons();
