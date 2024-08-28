const goUpButton = document.querySelector(".go-up");
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("nav--hidden");
   
    setTimeout(() => {
    navbar.classList.remove("nav--hidden");
      loader.classList.add("loader--hidden");
        
      
      loader.addEventListener("transitionend", () => {
        if (loader.parentNode) {
          document.body.removeChild(loader);
        }
      }, ); 
    }, 2000); 
    
  });
 
  window.addEventListener("scroll",()=>{
    
    if(333<scrollY)
    {
        document.querySelector(".navbar").classList.add("new_nav");
        goUpButton.classList.add("show");

    }
    else{
        document.querySelector(".navbar").classList.remove("new_nav");
        goUpButton.classList.remove("show");
    }});
goUpButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
 });
});