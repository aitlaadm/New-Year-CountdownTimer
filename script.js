const joursElement=document.getElementById('jours');
const heuresElement=document.getElementById('heures');
const minutesElement=document.getElementById('Minutes');
const secondesElement=document.getElementById('secondes');
const nvAn='1 janvier 2021';

function countdown(){
    const nvAnDate=new Date(nvAn);
    const Datecourante=new Date();

    const sec=(nvAnDate-Datecourante)/1000;

    const jours=Math.floor(sec/3600/24);
    const heures=Math.floor(sec/3600)%24;
    const minutes= Math.floor(sec/60)%60;
    const secondes=Math.floor(sec)%60

    console.log(sec);

joursElement.innerHTML=format(jours);
heuresElement.innerHTML=format(heures);
minutesElement.innerHTML=format(minutes);
secondesElement.innerHTML=format(secondes);
}
function format(temps){
    return temps<10?`0${temps}`:temps;
}
countdown();

setInterval(countdown,1000);