const IBM_button = document.getElementById("IBM-button");
const IBM_cert = document.getElementById("IBM-cert");

IBM_button.addEventListener("click", () => {
    IBM_cert.classList.toggle("open");
});

const PBU_button = document.getElementById("PBU-button");
const PBU_cert = document.getElementById("PBU-cert");

PBU_button.addEventListener("click", () => {
    PBU_cert.classList.toggle("open");
});