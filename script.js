function loadImages() {
  const container = document.getElementById("photoBox");
  container.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/150?random=${Math.floor(Math.random() * 1000)}`;
    container.appendChild(img);
  }
}
window.onload = loadImages;
