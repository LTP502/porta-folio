const closeBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");

closeBtn.addEventListener("click", () => {
    popup.classList.add("close");
});