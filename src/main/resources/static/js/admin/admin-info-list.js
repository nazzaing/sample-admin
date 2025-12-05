// 랜덤 이름 풀
const names = ["김민수", "박지현", "이서준", "최유진", "정하늘", "윤지호", "한도윤", "서민아", "장우혁", "김다은",
    "오세훈", "이하늘", "최민호", "박수진", "윤태호", "김예린", "강지훈", "이소연", "홍석민", "최다혜"];

const adminNames = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Theta", "Lambda", "Sigma", "Omega"];

// 랜덤 선택 함수
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// 샘플 데이터 50개 생성
var sampleData = [];
for (let i = 1; i <= 50; i++) {
    let adminLabel = "어드민" + pick(adminNames);
    let code = "ADM" + String(i).padStart(3, '0');
    let status = i % 2 === 0 ? "운영중" : "준비중";
    let pasta = i % 3 === 0 ? "연동" : "미연동";
    let confirm = i % 4 === 0 ? "확인완료" : "준비중";
    let log = i % 5 === 0 ? "연동" : "미연동";
    let detail = "메뉴정보<br>권한정보<br>사용자정보";
    let desc = "설명" + i;
    let url = "https://test" + i + ".com";
    let manager = pick(names);
    let privacy = pick(names);
    let regDate = "2025-12-" + String((i % 28) + 1).padStart(2, '0');
    let modDate = "2025-12-" + String((i % 28) + 2).padStart(2, '0');
    let buttons = "<button class='btn btn-sm btn-outline-primary me-2'>수정</button><button class='btn btn-sm btn-outline-primary'>삭제</button>";

    sampleData.push([i, adminLabel, code, status, pasta, confirm, log, detail, desc, url, manager, privacy, regDate, modDate, "", buttons]);
}

$(document).ready(function () {
    $('#adminTable').DataTable({
        language: {url: "/language/datatables/1.13.6/i18n/ko.json"},
        dom: 't<"bottom"p>',
        autoWidth: false,   // 자동 폭 계산 끔
        scrollX: true,      // 가로 스크롤 켜짐
        data: sampleData,
        columns: [
            {width: "40px"},  // no
            {width: "130px"},   // 어드민명
            {width: "60px"},  // 어드민코드
            {width: "60px"},  // 어드민상태
            {width: "100px"},  // PASTA 연동상태
            {width: "110px"},  // 연동확인여부
            {width: "100px"},  // 전사로그
            {width: "60px"},  // 상세정보
            {width: "180px"},  // 어드민설명
            {width: "150px"},  // URL
            {width: "100px"},  // 담당자
            {width: "100px"},  // 개인정보보호담당자
            {width: "100px"},  // 등록일자
            {width: "100px"},  // 최근수정일자
            {width: "80px"},  // 비고
            {width: "80px"}   // 수정/삭제
        ]
    });
    console.log("A");
});

// API 호출
function downloadExcel() {
    window.location.href = '/api/admin/excel';
}

function downloadSimpleExcel() {
    window.location.href = '/api/admin/excel/simple';
}