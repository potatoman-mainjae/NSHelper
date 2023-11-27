const toggleButton = document.getElementById("toggleUploadForm");
const postPage = document.getElementById("postPage");

// 토글 버튼을 클릭하면 글 업로드 페이지를 보이거나 감춥니다.
toggleButton.addEventListener("click", () => {
    postPage.style.display = postPage.style.display === "none" ? "block" : "none";
});

const uploadForm = document.getElementById("uploadForm");
const titleInput = document.getElementById("title");
const contentTextarea = document.getElementById("content");

uploadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const content = contentTextarea.value;

    // 서버로 데이터를 전송하는 코드를 추가할 수 있습니다.

    titleInput.value = "";
    contentTextarea.value = "";

    // 성공 메시지 또는 리디렉션을 처리할 수 있습니다.
});
