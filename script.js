let digitalElemtent = document.querySelector('.digital'); //selecionando elemento "digital" do html
let sElement = document.querySelector('.p_s'); //selecionando o ponteiro de "segundos" do html
let mElement = document.querySelector('.p_m'); //selecionando o ponteiro de "minutos" do html
let hElement = document.querySelector('.p_h'); //selecionando o ponteiro de "horas" do html

function updateClock(){
    let now = new Date(); //pegando horário atual
    let hour = now.getHours(); //pegando hora atual
    let minute = now.getMinutes(); //pegando minuto atual
    let second = now.getSeconds(); //pegando segundo atual

    digitalElemtent.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`; //colocando a hora atual no relógio digital
    //ponteiro dos segundos
    let sDeg = ((360/60) * second) - 90; //identificando a posição de cada segundo. o 90 é para ajustar o ponteiro para iniciar as 12hrs. sem ele o início fica ás 3 horas 
    sElement.style.transform = `rotate(${sDeg}deg)`; //colocando uma propriedade CSS através do JS no "sElement"
    //ponteiro dos minutos
    let mDeg = ((360/60) * minute) - 90;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    //ponteiro das horas
    let hDeg = ((360/12) * hour) - 90;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;//acrescetando um "0" caso o valor seja menor que 10.
}

setInterval(updateClock, 1000); //função para setar um intervalor infinito de acordo com o tempo que for colocado como parâmetro
updateClock();