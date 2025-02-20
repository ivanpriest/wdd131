// Select elements only if they exist
const select = document.querySelector("#products");
if (select) {
  const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];

  products.forEach(product => {
    let option = document.createElement("option");
    option.textContent = product.name;
    option.setAttribute("value", product.id);
    select.appendChild(option);
  });
}

// Year and Last Modified (common to both pages)
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

if (currentYear && lastModified) {
  let date = new Date();
  currentYear.textContent = `${date.getFullYear()}`;
  lastModified.textContent = `Last Modification: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

// Review Count (Only runs on the form page)
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", () => {
    
    let reviewCount = localStorage.getItem("reviewCount");

    if (!reviewCount) {
      reviewCount = 1;
      
    } else {
      reviewCount = parseInt(reviewCount) + 1;

    }
    
    localStorage.setItem("reviewCount", reviewCount);
  });
}
let display = document.querySelector(".count");
if(display)
  {
    document.addEventListener("DOMContentLoaded", () => {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        // let display = document.querySelector(".count");
    
        // Update the page with the number of reviews
        if (reviewCount == 1) {
            display.innerHTML = `<b>This is your first review.</b>`;
        } else {
            display.innerHTML = `<b>You have submitted ${reviewCount} reviews.</b>`;
        }
    });
    

}
