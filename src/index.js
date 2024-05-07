import loadHome from './home';
import loadLocations from './locations';
import loadMenu from './menu';

function switchPage(e) {
  const { page } = e.target.dataset
  console.log(`Clicou em ${page}`);

  if (!page) {
    return
  }

  const contentDiv = document.querySelector("#content")
  contentDiv.textContent = ""

  if (page === "home") {
    loadHome()
  } else if (page === "menu") {
    loadMenu()
  } else if (page === "locations") {
    loadLocations()
  }

}

const nav = document.querySelector("nav") 
nav.addEventListener("click", switchPage)

loadHome()