const playButton=document.getElementById('play-button')
const pauseButton=document.getElementById('pause-button')
const stopButton=document.getElementById('stop-button')
const textInput=document.getElementById('text')
const speedInput=document.getElementById('speed')
let currentCharacter;


playButton.addEventListener('click',()=>{
    playText(textInput.value)
})

pauseButton.addEventListener('click',pauseText)
stopButton.addEventListener('click', stopText)

speedInput.addEventListener('input',()=>{
    stopText()
    playText(utterThis.text.substring(currentCharacter))
})


var utterThis = new SpeechSynthesisUtterance(text);
    
    
    utterThis.addEventListener('end',()=>{

        textInput.disabled=false;
    })
    utterThis.addEventListener('boundary',e=>{
        currentCharacter=e.charIndex
    })


function playText(text){
    if(speechSynthesis.speaaking)
    return


    if(speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume();

    }
    utterThis.text=text;
    utterThis.rate=speedInput.value || 1;
    textInput.disabled=true;
    speechSynthesis.speak(utterThis);
}

function pauseText(){
    if(speechSynthesis.speaking){
        speechSynthesis.pause();
    }
}

function stopText(){
    speechSynthesis.resume(); 
    speechSynthesis.cancel();
    
}