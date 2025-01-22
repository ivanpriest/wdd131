const dateTime =document.querySelector("#lastModified");
let currentDate= new Date();
dateTime.innerText="Last Modification:"+currentDate.toLocaleDateString() + currentDate.toLocaleTimeString();
