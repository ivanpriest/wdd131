let newSec=document.createElement("section");
let newH2=document.createElement("h2");
let para=document.createElement("p");
para.innerText= "This was added through Javascript";
newH2.innerText="DOM Basics";
newSec.appendChild(newH2);
newSec.appendChild(para);
document.body.appendChild(newSec);

