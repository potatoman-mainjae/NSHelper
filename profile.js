const profileLink = document.getElementById("profileLink");
const userId = document.getElementById("userId");
const logoutButton = document.getElementById("logoutButton");
const mypageButton = document.getElementById("mypageButton");
const loginButton = document.getElementById("loginButton");

// 사용자 정보를 로컬 스토리지에서 가져옵니다.
const userInfo = JSON.parse(localStorage.getItem("userInfo"));

if (userInfo) {
    // 사용자 정보가 저장되어 있는 경우 (로그인 중)
    // 유저 아이디를 표시하고 로그아웃 버튼과 마이페이지 버튼을 표시
    logoutButton.style.display = "none"; // 로그아웃 버튼을 숨김 (초기 상태)
    mypageButton.style.display = "none"; // 마이페이지 버튼을 숨김 (초기 상태)

    profileLink.addEventListener("click", () => {
        // 프로필 이미지 클릭 시 로그아웃 버튼과 마이페이지 버튼을 토글 표시/숨김
        logoutButton.style.display = logoutButton.style.display === "none" ? "block" : "none";
        mypageButton.style.display = mypageButton.style.display === "none" ? "block" : "none";
    });

    logoutButton.addEventListener("click", () => {
        // 로그아웃 코드 추가 (Firebase Authentication 등)
        // ...

        // 로그아웃 후 로컬 스토리지의 사용자 정보를 삭제
        localStorage.removeItem("userInfo");

        // 로그아웃 후 로그인 페이지로 리디렉션
        window.location.href = "login.html";
    });

    mypageButton.addEventListener("click", () => {
        // 마이페이지로 이동하는 코드 추가
        // 예: window.location.href = "mypage.html";
    });
} else {
    // 사용자 정보가 없는 경우 (로그아웃 중)
    // 로그인 버튼을 표시하고 유저 아이디를 숨김
    loginButton.style.display = "block";
    userId.style.display = "none";
}
