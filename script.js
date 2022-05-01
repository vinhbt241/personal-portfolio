let colors = ['#e27d60', '#85dcbb', '#e8a87c', '#c38d93', '#41b3a3', '#8d8741', '#659dbd', '#daad86', '#bc986a'];

projectImgs = document.getElementsByClassName("project-img");

for (let i = 0; i < projectImgs.length; i++) {
  let random_color = colors[Math.floor(Math.random() * colors.length)];
  projectImgs[i].style.backgroundColor = random_color;
}
