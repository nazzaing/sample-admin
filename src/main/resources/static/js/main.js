document.addEventListener("DOMContentLoaded", function () {
    // 사이드바 펼침/닫힘
    const collapses = document.querySelectorAll(".collapse");
    collapses.forEach(collapse => {
        collapse.addEventListener("show.bs.collapse", function () {
            collapses.forEach(other => {
                if (other !== collapse && other.classList.contains("show")) {
                    const bsCollapse = bootstrap.Collapse.getInstance(other);
                    if (bsCollapse) bsCollapse.hide();
                }
            });
        });
    });

    // 다크/라이트 모드 전환
    const toggleBtn = document.getElementById("themeToggle");
    const icon = document.getElementById("themeIcon");
    const root = document.documentElement;

    // 초기 설정
    if (localStorage.getItem("theme") === "dark") {
        root.setAttribute("data-theme", "dark");
        icon.classList.replace("bi-moon", "bi-sun");
    }

    toggleBtn.addEventListener("click", function () {
        const current = root.getAttribute("data-theme");
        if (current === "dark") {
            root.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            icon.classList.replace("bi-sun", "bi-moon");
        } else {
            root.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            icon.classList.replace("bi-moon", "bi-sun");
        }
    });
});