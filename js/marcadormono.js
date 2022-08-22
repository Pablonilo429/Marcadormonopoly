/*function gametimer(){
    var timer = duration, minutes, seconds;
    duration = 1;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    var duration = 60 * 5; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer


    setInterval(marker_audio_one(),5000);
};
*/

function startTimer(duration, display) {
    console.log("duration: " + duration);
    var timer = duration; //minutes, seconds;
    display.innerHTML = "qualquer coisa";//minutes + ":" + seconds;
    console.log("passei por aqui");
    setInterval(function () {
        var minutes = parseInt(timer / 60, 10);
        console.log("minute: "+ minutes);
        var seconds = parseInt(timer % 60, 10);
        console.log("secinds: "+ seconds);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        if (--timer < 0) {
            timer = duration;
        }
        display.innerHTML = minutes + ":" + seconds; 
    }, 1000);
    return "iniciado";
}

function markercontrol(){
    
    var timer = document.getElementById("timer"); 
    duration = timer.value * 60;
    // // Converter para segundos
    display = document.getElementById("mensagem"); // selecionando o timer
    // display.innerHTML = "Hello World"
    var retorno = startTimer(duration, display); // iniciando o timer
    //setInterval(marker_audio_one, 5000);
    return retorno;
}


function marker_audio_one(){
    const audio = new Audio('js/sommarcador2.mp3');
    audio.play();
} 


function marker_audio_two(){
    const audio = new Audio('js/sommarcador.mp3');
    audio.play();
} 



function alterapag(){
    document.getElementById("viewcontrol").innerHTML = markercontrol();
    //  document.getElementById("mensagem").innerHTML = "hello world";

}