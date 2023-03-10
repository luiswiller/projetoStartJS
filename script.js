function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver liht mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
  } else {
    //se tiver moon mode, adicionar a imagem moon
    img.setAttribute('src', './assets/avatarMoon.png')
  }

  

  
}