const qrFormEl = document.getElementById("qr-form")
const qrContainerEl = document.getElementById("qr-container")
const qrImgEl = document.getElementById("qr-img")


const renderQrCode = (url) => {
    if (!url) return;
    qrImgEl.src = url;
    qrContainerEl.classList.add("show")
}


qrFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(qrFormEl);
    const text = formData.get("qrText");
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`



    renderQrCode(qrCodeUrl);
})