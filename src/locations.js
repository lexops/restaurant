import './style.css';
import Background from '../src/skyrim-map.png';

function loadLocations() {
  document.body.style.background = `url(${Background})`
  document.body.style.backgroundSize = "cover"

  const locationsDiv = document.createElement("div")
 locationsDiv.innerHTML = `
  <h1>Check out the closest place to you!</h1>
  <div class="locations">
    <div class="location-card">
    <h2>Whiterun Hold</h2>
    <ul>
      <li>Sleeping Giant Inn</li>
      <li>The Bannered Mare</li>
      <li>Frostfruit Inn</li>
      <li>The Drunken Huntsman (functions differently)</li>
    </ul>
  </div>

  <div class="location-card">
    <h2>Falkreath Hold</h2>
    <ul>
      <li>Dead Man's Drink</li>
      <li>The destroyed tavern in Helgen</li>
    </ul>
  </div>

  <div class="location-card">
    <h2>The Rift</h2>
    <ul>
      <li>The Bee and Barb</li>
      <li>Vilemyr Inn</li>
      <li>The Ragged Flagon</li>
    </ul>
  </div>

  <div class="location-card">
    <h2>The Reach</h2>
    <ul>
      <li>Silver-Blood Inn</li>
      <li>Old Hroldan Inn</li>
    </ul>
  </div>

  <div class="location-card">
    <h2>Haafingar</h2>
    <ul>
      <li>The Winking Skeever</li>
      <li>Four Shields Tavern</li>
      <li>Hjaalmarch</li>
      <li>Moorside Inn</li>
    </ul>
  </div>

  <div class="location-card">
    <h2>The Pale</h2>
    <ul>
      <li>Windpeak Inn</li>
      <li>Nightgate Inn</li>
      <li>The Stumbling Sabrecat in Fort Dunstad (overrun by bandits, not functioning)</li>
    </ul>
  </div>

  <div class="location-card">
    <h2>Winterhold Hold</h2>
    <ul>
      <li>The Frozen Hearth</li>
    </ul>
  </div>

  <div class="location-card">
    <h2>Eastmarch</h2>
    <ul>
      <li>Candlehearth Hall</li>
      <li>New Gnisis Cornerclub</li>
      <li>Braidwood Inn</li>
    </ul>
  </div>

  <div class="location-card">
    <h2>Solstheim</h2>
    <ul>
      <li>The Retching Netch</li>
    </ul>
  </div>
  `

  const contentDiv = document.querySelector("#content")
  contentDiv.append(locationsDiv)
}

export default loadLocations;