// 예시 데이터 (실제로는 서버에서 AJAX로 가져오기)
let people = ["ramsey.lee", "rosie.hi", "kai.dev", "adrian.kang", "sam.ce"];

const adminInput = document.getElementById("adminManager");
const adminContainer = document.getElementById("selectedManagers");

const privacyInput = document.getElementById("privacyManager");
const privacyContainer = document.getElementById("selectedPrivacyManagers");

// dropdown 생성 (공용)
const dropdown = document.createElement("div");
dropdown.classList.add("list-group");
dropdown.style.position = "absolute";
dropdown.style.zIndex = "1000";
document.body.appendChild(dropdown);

function setupAutocomplete(input, container, tagClass) {
    input.addEventListener("input", () => {
        const query = input.value.trim();
        dropdown.innerHTML = "";

        if (query.length > 0) {
            // 이미 선택된 값 목록
            const selectedNames = [...container.children].map(tag => tag.dataset.name);

            // people 배열에서 검색 + 이미 선택된 값 제외
            const matches = people.filter(p => p.includes(query) && !selectedNames.includes(p));

            matches.forEach(name => {
                const item = document.createElement("button");
                item.type = "button";
                item.classList.add("list-group-item", "list-group-item-action");
                item.textContent = name;
                item.onclick = () => {
                    addTag(name, container, tagClass);
                    input.value = "";
                    dropdown.innerHTML = "";
                };
                dropdown.appendChild(item);
            });

            const rect = input.getBoundingClientRect();
            dropdown.style.width = rect.width + "px";
            dropdown.style.left = rect.left + "px";
            dropdown.style.top = (rect.bottom + 4) + "px";
        }
    });
}

function addTag(name, container, tagClass) {
    // 같은 컨테이너 안에서만 중복 방지
    if ([...container.children].some(tag => tag.dataset.name === name)) return;

    const tag = document.createElement("div");
    tag.classList.add(tagClass);
    tag.dataset.name = name;
    tag.textContent = name;

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "&times;";
    removeBtn.onclick = () => tag.remove();

    tag.appendChild(removeBtn);
    container.appendChild(tag);
}

// 바깥 클릭 시 dropdown 닫기
document.addEventListener("click", (e) => {
    if (!adminInput.contains(e.target) && !privacyInput.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.innerHTML = "";
    }
});

// 각각 설정
setupAutocomplete(adminInput, adminContainer, "manager-tag");
setupAutocomplete(privacyInput, privacyContainer, "privacy-tag");