

const lamp = document.getElementById('lamp')
const bntOn = document.getElementById('on')
const bntOff = document.getElementById('off')

function lampOn() {

  lamp.src ='./img/ligada.jpg'
}

on.addEventListener('click', lampOn );

function lampOff() {

  lamp.src ='./img/desligada.jpg'
}

off.addEventListener('click', lampOff );

function lampBroken(){
lamp.src ='./img/quebrada.jpg'

}
lamp.addEventListener('dblclick', lampBroken );