import './style.css';
import Background from '../src/skyrim-food.png';

function loadHome() {
  document.body.style.background = `url(${Background})`
  document.body.style.backgroundSize = "cover"

  const heroDiv = document.createElement("div")
  heroDiv.innerHTML = `
  <div class="hero">
    <p>Greetings, adventurer!</p>
    <p>Seeking Skyrim's finest treats and drinks?</p>
    <p>Check out the closets place to you!</p>
  </div> 
  `

  const contentDiv = document.querySelector("#content")
  contentDiv.append(heroDiv)
}

export default loadHome;