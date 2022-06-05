const unknownNumber = document.querySelector('#unknown-number')
const image = document.querySelector('#image')
const input = document.querySelector('#number')
const button = document.querySelector('#check-button')
const info = document.querySelector('#info')
const popup = document.querySelector('#popup')
const popupNumber = document.querySelector('#popup-number')
const maxValue = 10
const minValue = 0

const checkInput = () => {
	if (input.value !== '' && input.value <= maxValue) {
		info.textContent = `Ukryta liczba jest inna niż ${input.value}`
		compareNumbers()
	} else if (input.value == '') {
		info.textContent = `Najpierw wpisz liczbę`
	} else {
		info.textContent = `Liczba musi być w przedziale od 0 do 10`
	}
}

const generateNumber = () => {
	const number = Math.floor(Math.random() * 11)
	unknownNumber.textContent = number
}

const compareNumbers = () => {
	if (input.value == unknownNumber.textContent) {
		image.style.backgroundImage = `url()`
		info.textContent = 'Udało Ci się wygrać'
		showPopup()
	}
}

const showPopup = () => {
	popup.style.display = 'flex'
	popupNumber.textContent = unknownNumber.textContent
}

const checkEnter = e => {
	if (e.keyCode === 13) {
		checkInput()
	}
}
input.addEventListener('keyup', checkEnter)
generateNumber()
button.addEventListener('click', checkInput)
