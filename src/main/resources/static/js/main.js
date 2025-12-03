document.addEventListener("DOMContentLoaded", function () {
    function getTrigger(id) {
        return document.querySelector(
            `[data-bs-toggle="collapse"][href="#${id}"],
             [data-bs-toggle="collapse"][data-bs-target="#${id}"]`
        );
    }

    function toggleChevron(trigger, rotate) {
        if (!trigger) return;
        trigger.setAttribute("aria-expanded", rotate ? "true" : "false");
        const icon = trigger.querySelector(".bi-chevron-down");
        if (icon) icon.classList.toggle("rotate-180", rotate);
    }

    // =========================
    // Collapse 이벤트 (단일 열림, 아이콘 회전)
    // =========================
    const collapses = document.querySelectorAll(".collapse");
    collapses.forEach(collapse => {
        const id = collapse.getAttribute("id");
        const trigger = getTrigger(id);

        collapse.addEventListener("show.bs.collapse", function () {
            collapses.forEach(other => {
                if (other !== collapse && other.classList.contains("show")) {
                    const bsOther = bootstrap.Collapse.getInstance(other) || new bootstrap.Collapse(other, { toggle: false });
                    bsOther.hide();
                }
            });
            toggleChevron(trigger, true);
        });

        collapse.addEventListener("hide.bs.collapse", function () {
            toggleChevron(trigger, false);
        });
    });

    // =========================
    // 다크/라이트 모드 전환
    // =========================
    const toggleBtn = document.getElementById("themeToggle");
    const icon = document.getElementById("themeIcon");
    const root = document.documentElement;

    if (localStorage.getItem("theme") === "dark") {
        root.setAttribute("data-theme", "dark");
        if (icon) icon.classList.replace("bi-moon", "bi-sun");
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            const current = root.getAttribute("data-theme");
            if (current === "dark") {
                root.setAttribute("data-theme", "light");
                localStorage.setItem("theme", "light");
                if (icon) icon.classList.replace("bi-sun", "bi-moon");
            } else {
                root.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
                if (icon) icon.classList.replace("bi-moon", "bi-sun");
            }
        });
    }

    // =========================
    // 현재 URL 기준 active 처리
    // =========================
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".sidebar .nav-link[href]");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        const isActive = linkPath === currentPath || (linkPath !== "/" && currentPath.startsWith(linkPath));
        if (isActive) {
            link.classList.add("active");

            const collapseWrapper = link.closest(".collapse");
            if (collapseWrapper) {
                const collapseId = collapseWrapper.getAttribute("id");
                const bsCollapse = bootstrap.Collapse.getInstance(collapseWrapper) || new bootstrap.Collapse(collapseWrapper, { toggle: false });
                bsCollapse.show();
                toggleChevron(getTrigger(collapseId), true);
            }
        }
    });
});