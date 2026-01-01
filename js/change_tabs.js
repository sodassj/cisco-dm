// ====== GALERÍA ======
function toExchangeImage(img) {
  const main = document.getElementById("img_main");
  if (main) main.src = img.src;
}

// ====== MODAL ZOOM ======
function viewImage(src) {
  const modal = document.createElement("div");
  modal.className =
    "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[999]";
  modal.innerHTML = `
    <img src="${src}" class="max-h-[90vh] max-w-[90vw] rounded shadow-lg">
  `;
  modal.addEventListener("click", () => modal.remove());
  document.body.appendChild(modal);
}