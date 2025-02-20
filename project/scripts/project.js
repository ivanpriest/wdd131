const pageTexts=[
    {
        pageName:"home",
        h2:"Who We Are",
        p1:"At PRIEST DEV STUDIO, we are a team of passionate and innovative web and software developers dedicated to crafting high-quality digital experiences. With expertise in modern technologies, we specialize in building dynamic, responsive, and user-friendly solutions tailored to meet the evolving needs of businesses and individuals.Our mission is to bridge the gap between creativity and technology, transforming ideas into reality through seamless web development, intuitive design, and robust software solutions. We believe that a strong online presence is key to success in today’s digital world, and we are here to make that happen.",
        h3:"Why Choose Us?",
        li1:"✔ Expertise & Innovation – We stay ahead of trends and use the latest technologies to deliver top-notch solutions.",
        li2:"✔ User-Centric Approach – Every project we build focuses on delivering an exceptional user experience.",
        li3:"✔ Custom Solutions – We tailor our services to fit your unique needs, ensuring a perfect match for your goals.",
        li4:"✔ Commitment to Quality – We don’t just build websites and software; we create solutions that drive results.",
        p2:"From personal portfolios to business websites and advanced software applications, we bring dedication, creativity, and technical excellence to every project. Whether you're starting from scratch or looking to enhance an existing digital platform, we're here to help. Let’s build something amazing together!",
        imgSrc:"images/team.webp",
        imgAlt:"team photo"
    },

    {
        pageName:"services",
        h2:"Our Services",
        p1:"At PRIEST DEV STUDIO, we offer a range of web and software development services designed to bring your ideas to life. Whether you're a business looking for a strong online presence or an individual in need of a customized solution, we have the expertise to deliver high-quality results.",
        firsth3:"Web Development",
        p2:"We build modern, responsive, and user-friendly websites tailored to your needs. From personal portfolios to business websites, we ensure a seamless online experience that engages visitors and drives results.",
        secondh3:"Software Development",
        p3:"Need a custom software solution? We specialize in developing efficient and scalable applications to streamline operations, automate tasks, and improve productivity.",
        thirdh3:"UI/UX Design",
        p4:"A great digital experience starts with intuitive design. Our UI/UX services focus on creating visually appealing and easy-to-navigate interfaces that enhance user engagement."
    },
    {
        pageName:"contact",
        h2:"Contact Us",
        phone:"00233591188211",
        email:"priestdevstudios@gmail.com",
        location:"Accra Ghana",
        instagram:"Priest Dev Studios"
    }


];


const currentyear=document.querySelector(".currentyear");
if (currentyear){
    let year= new Date().getFullYear();
    currentyear.innerText=`${year}`;

}
const home=document.querySelector("#home");
if(home){
    pageTexts.forEach((pagetext)=>{
        if(pagetext.pageName==="home"){
            const image=document.createElement("img");
            image.setAttribute("src",pagetext.imgSrc);
            image.setAttribute("alt",pagetext.imgAlt);
            document.querySelector(".team-pic").appendChild(image);
            const h2=document.querySelector("h2");
            h2.innerText=`${pagetext.h2}`;
            const about=document.querySelector(".about-team")
            const para1=document.createElement("p");
            para1.innerText=pagetext.p1;
            const para2=document.createElement("p");
            para2.innerText=pagetext.p2;
            const list=document.createElement("ul");
            const li1=document.createElement("li");
            li1.innerText=pagetext.li1;
            list.appendChild(li1);
            const li2=document.createElement("li");
            li2.innerText=pagetext.li2;
            list.appendChild(li2);
            const li3=document.createElement("li");
            li3.innerText=pagetext.li3;
            list.appendChild(li3);
            const li4=document.createElement("li");
            li4.innerText=pagetext.li4;
            list.appendChild(li4);
            const h3=document.createElement("h3");
            about.appendChild(para1);
            about.appendChild(list);
            about.appendChild(para2);


        }
    });
}
const services=document.querySelector("#services");
if(services){
    pageTexts.forEach((pagetext)=>{
        if(pagetext.pageName==="services"){
            const h2=document.querySelector("h2");
            h2.innerText=`${pagetext.h2}`;
            const para1=document.createElement("p");
            para1.innerText=pagetext.p1;
            document.querySelector(".firstp").appendChild(para1);
            const section2=document.querySelector(".sec2");
            const para2=document.createElement("p");
            para2.innerText=pagetext.p2;
            const para3=document.createElement("p");
            para3.innerText=pagetext.p3;
            const para4=document.createElement("p");
            para4.innerText=pagetext.p4;
            const firsth3=document.createElement("h3");
            firsth3.innerText=pagetext.firsth3;
            section2.appendChild(firsth3);
            section2.appendChild(para2);
            const secondh3=document.createElement("h3");
            secondh3.innerText=pagetext.secondh3;
            section2.appendChild(secondh3);
            section2.appendChild(para3);
            const thirdh3=document.createElement("h3");
            thirdh3.innerText=pagetext.thirdh3;
            section2.appendChild(thirdh3);
            section2.appendChild(para4);

        }

    })
}
const contact=document.querySelector("#contact");
if(contact){
    pageTexts.forEach((pagetext)=>
    {
        if(pagetext.pageName==="contact"){
            const h2=document.querySelector("h2");
            h2.innerText=`${pagetext.h2}`;
            const para1=document.createElement("p");
            para1.innerText=`Phone: ${pagetext.phone}`;
            const para2=document.createElement("p");
            para2.innerText=`E-mail: ${pagetext.email}`;
            const para3=document.createElement("p");
            para3.innerText=`Location: ${pagetext.location}`;
            const para4=document.createElement("p");
            para4.innerText=`Instagram: ${pagetext.instagram}`;
            const contactInfo=document.querySelector(".contact-info");
            contactInfo.appendChild(para1);
            contactInfo.appendChild(para2);
            contactInfo.appendChild(para3);
            contactInfo.appendChild(para4);

        }
        
    })

}
const thanks=document.querySelector("#thanks");
if(thanks)
    {
        const display=document.querySelector(".count")
      document.addEventListener("DOMContentLoaded", () => {
          let reviewCount = localStorage.getItem("reviewCount") || 0;
          // let display = document.querySelector(".count");
      
          // Update the page with the number of reviews
          if (reviewCount == 1) {
              display.innerHTML = `<b>Thank you for sending us a message. This is your first message.</b>`;
          } else {
              display.innerHTML = `<b>Thank you for sending us a message. You have sent ${reviewCount} messages.</b>`;
          }
      });
      
  
  }
  
  
const nav = document.querySelector('.navigation-container');
const hamb = document.querySelector('.hamburger');
if(hamb){
    hamb.addEventListener('click', () => {
        nav.classList.toggle('show');
        nav.classList.toggle('hide')
        hamb.classList.toggle('show');
    });
}

