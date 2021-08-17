const root = document.querySelector('#root') //equivalent a ecrire document.getElementById('root')

const clock = document.createElement('div') // const clock = <p></p>
const time = document.createElement('p')

// fonction qui va nous permettre de mettre du texte dans la balise <p></p>
function changeClockTime() { 
    const date = new Date()
    const hour = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}`
    const minute = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`
    const second = `${date.getSeconds() < 10 ? '0' : ''}${date.getSeconds()}` 
    time.textContent = `${hour}:${minute}:${second}` //<p>15:14:07</p>
    if(second % 5) {
        time.style.color = '' 
    }
    else {
        time.style.color = 'blue'
    }
}
changeClockTime() // appel de la function
const intervalId = setInterval(changeClockTime, 1000) // setInterval va appeler la fonction changeClockTime toute les 1000 millisecondes (1 seconde)

const timezoneList = ['UTC', 'Asia/Tokyo', 'America/Anchorage']
const timezone = document.createElement('p')
let currentTimezoneIndex = 0
timezone.textContent = timezoneList[currentTimezoneIndex]

// BUTTON NEXT, pour changer de timezone
const next = document.createElement('button')
next.textContent = 'next'

next.addEventListener('click', () => {
    currentTimezoneIndex = (currentTimezoneIndex + 1) % timezoneList.length // currentTimezoneIndez = currentTimezoneIndex + 1
    timezone.textContent = timezoneList[currentTimezoneIndex]
})


// BUTTON PREVIOUS, pour changer de timezone
const previous = document.createElement('button')
previous.textContent = 'previous'

previous.addEventListener('click', () => {
    currentTimezoneIndex = (currentTimezoneIndex <= 0 ? timezoneList.length : currentTimezoneIndex) - 1 // currentTimezoneIndez = currentTimezoneIndex + 1
    timezone.textContent = timezoneList[currentTimezoneIndex]

})

// BUTTON STOP POUR ARRETER L'INTERVAL
const stop = document.createElement('button')
stop.textContent = 'stop'

stop.addEventListener('click', () => clearInterval(intervalId)) // arrete le setInterval au moment ou on va cliquer sur le button

const controlButtons = document.createElement('div')
controlButtons.append(next, previous, stop)


clock.appendChild(time)
clock.appendChild(timezone)
clock.appendChild(controlButtons)



root.appendChild(clock) // ajoute la balise <p></p> a l'interieur de la div <div id="root"></div>

