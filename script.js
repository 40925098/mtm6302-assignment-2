
const $container = document.getElementById("container")
const $descriptions = document.getElementById("descriptions")

let heliimages = { 
  name: 'heli-',
}
let description = []
let images = []

const imagedescriptions = [
  `This is a Photo of the helicopter.`,
  `This is the internal components of the helicopter.`,
  `This is a landscape shot of downtown ottawa.`,
  `This is another shot of downtown with the river.`,
  `This is the pilot pointing somethingout.`,
  `This is the lac leamy casino fountain.`,
  `This is my girlfriend.`,
  `This is a building in quebec.`,
  `This is camp fortune.`,
  `This is a cool road in quebec.`,
  `This is a shot of some colorful trees in quebec.`,
  `This is shot of wellington.`,
  `This is the alexandria bridge.`,
  `This is my work. Cartier square drill hall`,
  `This is the ottawa-rockcliffe airport.`,
]

for (let i = 1 ; i < 16; i++ ) {
    images.push(`<img src="./images/${heliimages.name}${i}.jpg" id='${i}' width="300rem" class="imagegallery">`)
    }


$container.innerHTML = images.join('')
$container.addEventListener('mouseover', function(event) {
  $descriptions.textContent = imagedescriptions[event.target.id-1];
})
$container.addEventListener('mouseout', function(event) {
  $descriptions.textContent = '';
})
$container.addEventListener('click', function(event) {
  let image = event.target; 
  image.classList.toggle('imagegallerylarge');
})

