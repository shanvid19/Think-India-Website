burger= document.querySelector(".burger");
navbar= document.querySelector(".nav-bar");

burger.addEventListener('click',()=>{
    if (navbar.style.display === "none") { 
        navbar.style.display = "flex"; 
    } 
    else { 
        navbar.style.display = "none"; 
    }
})