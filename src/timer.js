

class Timer {
    constructor(durationInput, startButton, pauseButton, callBacks){
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.onStart = callBacks.onStart
    this.onTick = callBacks.onTick
    this.onComplete = callBacks.onComplete
    
    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)}
    
    start = () => {
    this.tick()
    this.onStart()
    this.intervalID = setInterval(this.tick, 1000)};
    
    tick = () => {
    if (this.timeRemaining <=0) {
        this.onComplete()   
        this.pause()}
    
    else {this.timeRemaining = this.timeRemaining - 1
    this.on}
    }
    
    get timeRemaining() {
        return parseInt(this.durationInput.value)
    }
    
    set timeRemaining(time) {
    this.durationInput.value = time
    }
    
    pause = () => {
    
    clearInterval(this.intervalID)
    }
    }
    