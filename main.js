// const display=document.getElementById("display");
// let timer=null;
// let startTime=0;
// let elapsedTime=0;
// let isRunning= false;
// function start(){
//     if(!isRunning){
//         startTime=Date.now()-elapsedTime;
//         timer=setInterval(update,10);
//         isRunning=true;
//     }
// }
// function stop(){
//     if (isRunning){
//         clearInterval(timer);
//         elapsedTime=Date.now()-startTime;
//         isRunning=false;
//     }
// }
// function reset(){
//     clearInterval(timer);
//     startTime=0;
//     elapsedTime=0;
//     isRunning=false;
//     display.content="00:00:00:00";
// }
// function update(){
//     const currentTime=Date.now();
//     elapsedTime=currentTime-startTime;
//     let hours =math.floor((elapsedTime/(1000*60*60)));
//     let minutes=math.floor((elapsedTime/(1000*60)%60));
//     let seconds=math.floor((elapsedTime/1000*60));
//     let milliseconds=math.floor((elapsedTime%1000/10));
// }

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    // Format the time string
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;

    // Update the display
    display.textContent = timeString;
}
