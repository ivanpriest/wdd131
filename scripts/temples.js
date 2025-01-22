const dateTime =document.querySelector("#lastModified");
let currentDate= new Date();
dateTime.innerText="Last Modification:"+currentDate.toLocaleDateString() + currentDate.toLocaleTimeString();

const nav = document.querySelector('.navigation');
const hamb = document.querySelector('.ham');
hamb.addEventListener('click', () => {
	nav.classList.toggle('show');
	hamb.classList.toggle('show');
});