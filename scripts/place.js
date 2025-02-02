const calculateWindChill = (T, v) => (v < 4 || T > 10) ? T : (13.12 + 0.6215 * T - 11.37 * Math.pow(v, 0.16) + 0.3965 * T * Math.pow(v, 0.16));
const temp=15;
const windspeed=40;

const para=document.querySelector("#windchill");
if(temp<=10 && windspeed>4.8){
    para.innerText=`Windchill: ${calculateWindChill(temp,windspeed)}°C`;
}
else{
    para.innerText=`Windchill: "N/A"`
}
let currentYear=document.querySelector("#currentyear");
let currentDate=document.querySelector("#lastModified");
currentYear.innerText=`${new Date().getFullYear()}`;
currentDate.innerText=`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;

