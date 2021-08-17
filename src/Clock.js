const root =  document.querySelector('#root')
const title = document.createElement('h1') // create H1
title.textContent = 'Clock'; 
root.appendChild(title)

const date = new Date();
const clock = document.createElement('p')

clock.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

console.log('HIHI')
const interval = setInterval(() => console.log('HIHI'), 1000 * 3)

root.appendChild(clock)