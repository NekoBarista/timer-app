const startButton = document.querySelector('#start')
const durationInput = document.querySelector('#minutes')
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        console.log("Started")
    },

 onTick() {
    console.log("tick")
 },

 onComplete(
   
 )
 
 {
    console.log('done!')
 }

})

