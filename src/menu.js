import './style.css';
import Background from '../src/skyrim-cooking.png';
import sweetRoll from '../src/sweet-roll.png';
import jazbayCrostata from '../src/jazbay-crostata.png';
import lavenderDumpling from '../src/lavender-dumpling.png'

function loadMenu() {
  document.body.style.background = `url(${Background})`
  document.body.style.backgroundPosition = "center"
  document.body.style.backgroundSize = "cover"
  document.body.style.backgroundAttachment = "fixed"

  const foodCards = `
  <div class="card">
    <p class="title">Sweet Roll</p>
    <div class="info">
    <img class="food-pic" src="${sweetRoll}" alt="Sweet Roll">
      <ul class="ingredients">
        <li>Salt Pile</li>
        <li>Jug of Milk</li>
        <li>Sack of Flour</li>
        <li>Butter</li>
        <li>Chicken's Egg</li>
      </ul>
    </div>
  </div>

  <div class="card">
    <p class="title">Jazbay Crostata</p>
    <div class="info">
      <img class="food-pic" src="${jazbayCrostata}" alt="Jazbay Crostata">
      <ul class="ingredients">
        <li>Butter</li>
        <li>Jazbay Grapes</li>
        <li>Sack of Flour</li>
    </div>
    </ul>
  </div>

  <div class="card">
    <p class="title">Lavender Dumpling</p>
    <div class="info">
      <img class="food-pic" src="${lavenderDumpling}" alt="Lavender Dumpling">
      <ul class="ingredients">
        <li>Moon Sugar</li>
        <li>Sack of Flour</li>
        <li>Snowberries</li>
        <li>Lavender</li>
    </div>
    </ul>
  </div>
`

  const menuDiv = document.createElement("div")
  menuDiv.classList.add("menu")
  menuDiv.innerHTML = foodCards

  const contentDiv = document.querySelector("#content")
  contentDiv.append(menuDiv)
}

export default loadMenu;