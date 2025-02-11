const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName:"Accra Ghana",
        location:"Accra, Ghana",
        dedicated:"2004, January, 11",
        area:1626,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760.jpg"
    },
    {
        templeName:"Johannesburg South Africa",
        location:"Johannesburg, South Africa",
        dedicated:"1985, August, 24-25",
        area: 1782,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22473.jpg"
    },
    {
        templeName:"Madrid Spain",
        location:"Madrid, Spain",
        dedicated:"1999, March, 19-21",
        area: 4255,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/madrid-spain-temple/madrid-spain-temple-54286.jpg"
    },
    // Add more temple objects here...
  ];
const dateTime =document.querySelector("#lastModified");
let currentDate= new Date();
dateTime.innerText="Last Modification:"+currentDate.toLocaleDateString() + currentDate.toLocaleTimeString();

const nav = document.querySelector('.navigation');
const hamb = document.querySelector('.ham');
hamb.addEventListener('click', () => {
	nav.classList.toggle('show');
	hamb.classList.toggle('show');
});

let container=document.querySelector(".card-container");
createTempleCard(temples);
let home=document.querySelector("#home");
let old=document.querySelector("#old");
let neW=document.querySelector("#new");
let small=document.querySelector("#small");
let large=document.querySelector("#large")
home.addEventListener("click",()=>createTempleCard(temples));
old.addEventListener("click",()=>{const oldtemps=temples.filter(temp=>Number(temp.dedicated.split(",")[0])<1900);
    createTempleCard(oldtemps);
})
neW.addEventListener("click",()=>{const newtemps=temples.filter(temp=>Number(temp.dedicated.split(",")[0])>2000);
    createTempleCard(newtemps);
});
small.addEventListener("click",()=>{const smalltemps=temples.filter(temp=>temp.area<10000);
    createTempleCard(smalltemps);
});
large.addEventListener("click",()=>{const largetemps=temples.filter(temp=>temp.area>90000);
    createTempleCard(largetemps);
});

function createTempleCard(objectArray){
    container.innerHTML="";
    objectArray.forEach((object)=>{
        let card=document.createElement("div");
        card.setAttribute("class","card");
        let imgcon=document.createElement("div");
        let infocon=document.createElement("div");
        infocon.setAttribute("class","info-container")
        let cardImage=document.createElement("img");
        cardImage.setAttribute("loading","lazy");
        cardImage.setAttribute("alt",`${object.templeName} temple`);
        imgcon.appendChild(cardImage);
        let cardPara1=document.createElement("h3");
        let cardPara2=document.createElement("p");
        let cardPara3=document.createElement("p");
        let cardPara4=document.createElement("p");
        cardImage.setAttribute("src",object.imageUrl);
        cardPara1.innerHTML = ` ${object.templeName}`;
        cardPara2.innerHTML = `Location: ${object.location}`;
        cardPara3.innerHTML = `Dedicated: ${object.dedicated}`;
        cardPara4.innerHTML = `Area: ${object.area}`;
        infocon.appendChild(cardPara1);
        infocon.appendChild(cardPara2);
        infocon.appendChild(cardPara3);
        infocon.appendChild(cardPara4);
        card.appendChild(infocon);
        card.appendChild(imgcon);
        container.appendChild(card);});
}

