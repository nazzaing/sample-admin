document.addEventListener("DOMContentLoaded", function () {
    // =========================
    // Collapse 상태 복원 (페이지 로드 시)
    // =========================
    const openId = localStorage.getItem("openCollapse");
    if (openId) {
        const target = document.getElementById(openId);
        if (target) {
            new bootstrap.Collapse(target, { toggle: false }).show();
            const trigger = document.querySelector(
                `[data-bs-toggle="collapse"][href="#${openId}"], 
         [data-bs-toggle="collapse"][data-bs-target="#${openId}"]`
            );
            if (trigger) trigger.setAttribute("aria-expanded", "true");
        }
    }

    // =========================
    // Collapse 이벤트 (상태 저장, 단일 열림, 아이콘 회전)
    // =========================
    const collapses = document.querySelectorAll(".collapse");
    collapses.forEach(collapse => {
        const id = collapse.getAttribute("id");
        const trigger = document.querySelector(
            `[data-bs-toggle="collapse"][href="#${id}"], 
       [data-bs-toggle="collapse"][data-bs-target="#${id}"]`
        );

        // 다른 collapse 닫기
        collapse.addEventListener("show.bs.collapse", function () {
            collapses.forEach(other => {
                if (other !== collapse && other.classList.contains("show")) {
                    const bsOther = bootstrap.Collapse.getInstance(other) || new bootstrap.Collapse(other, { toggle: false });
                    bsOther.hide();
                }
            });
            // 아이콘 즉시 회전
            if (trigger) {
                trigger.setAttribute("aria-expanded", "true");
                const icon = trigger.querySelector(".bi-chevron-down");
                if (icon) icon.classList.add("rotate-180");
            }
        });

        // 상태 저장
        collapse.addEventListener("shown.bs.collapse", function () {
            localStorage.setItem("openCollapse", id);
        });

        // 닫힐 때 아이콘 원복
        collapse.addEventListener("hide.bs.collapse", function () {
            if (trigger) {
                trigger.setAttribute("aria-expanded", "false");
                const icon = trigger.querySelector(".bi-chevron-down");
                if (icon) icon.classList.remove("rotate-180");
            }
        });

        // 닫힌 뒤 상태 제거
        collapse.addEventListener("hidden.bs.collapse", function () {
            const saved = localStorage.getItem("openCollapse");
            if (saved === id) localStorage.removeItem("openCollapse");
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

                const trigger = document.querySelector(
                    `[data-bs-toggle="collapse"][href="#${collapseId}"], 
           [data-bs-toggle="collapse"][data-bs-target="#${collapseId}"]`
                );
                if (trigger) {
                    trigger.setAttribute("aria-expanded", "true");
                    const chevron = trigger.querySelector(".bi-chevron-down");
                    if (chevron) chevron.classList.add("rotate-180");
                }
            }
        }

        // ✅ collapse 없는 메뉴 클릭 시 상태 제거
        link.addEventListener("click", () => {
            const collapseWrapper = link.closest(".collapse");
            if (!collapseWrapper) {
                localStorage.removeItem("openCollapse");
            }
        });
    });
});