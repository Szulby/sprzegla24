const url =
	'https://cors-anywhere.herokuapp.com/https://clutchlit.sprzeglo.com.pl/rekrutacja/produkty'
let container = document.querySelector('.container')
let boxes = 10
let showButton = document.querySelector('.show-more')
let listButton = document.querySelector('.list')
let scroll = document.querySelector('.scroll-top')

listButton.addEventListener('click', function() {
	container.classList.toggle('container-list')
	this.classList.toggle('active')
})
window.addEventListener('scroll', function() {
	this.scrollY > 800
		? scroll.classList.add('active')
		: scroll.classList.remove('active')
})

fetch(url)
	.then(res => res.json())
	.then(res => {
		let data = res.data
		showButton.addEventListener('click', function() {
			boxes += 10

			data.forEach((item, id) => {
				if (id >= boxes - 10 && id < boxes) {
					addItem(item)
				}
			})
		})
		data.forEach((item, id) => {
			if (id < boxes) {
				addItem(item)
			}
		})
		listButton.classList.add('show')
		showButton.style.display = 'block'
	})
function addItem(item) {
	let box = document.createElement('div')
	box.setAttribute('class', 'box')

	let img = document.createElement('img')
	img.src = 'images/image.jpg'
	img.alt = 'clutch'
	let description = document.createElement('div')
	description.setAttribute('class', 'box-description')

	let pTitle = document.createElement('p')
	pTitle.textContent = item.name
	pTitle.setAttribute('class', 'title')

	let manufacturer = document.createElement('p')
	manufacturer.setAttribute('class', 'description-hidden')
	manufacturer.textContent = `Producent: ${item.manufacturer}`

	let reference = document.createElement('p')
	reference.textContent = `Numer części: ${item.reference}`
	reference.setAttribute('class', 'description-hidden')

	let pPrice = document.createElement('p')
	pPrice.textContent = `${item.grossPrice.toFixed(2)}zł`
	pPrice.setAttribute('class', 'price')

	let link = document.createElement('a')
	link.textContent = 'KUP TERAZ'
	link.href = '#'

	description.appendChild(pTitle)
	description.appendChild(manufacturer)
	description.appendChild(reference)
	description.appendChild(pPrice)

	box.appendChild(img)
	box.appendChild(description)
	box.appendChild(link)

	container.appendChild(box)
}
