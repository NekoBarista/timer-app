const startButton = document.querySelector('#start')
const durationInput = document.querySelector('#minutes')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle')


perimeter = circle.getAttribute('r')*2*Math.PI
circle.setAttribute('stroke-dasharray', perimeter)

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration
    },

 onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', perimeter*timeRemaining / duration - perimeter)
   
 },

 onComplete()
 
 {
    console.log('done!')
 }

})

