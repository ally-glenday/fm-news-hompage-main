/* Function that toggles navigation hamburger menu */ 
function toggleMenu(){
    document.getElementById("hamburger-menu").classList.toggle("display-block");  
    document.getElementById("hamburger-button").classList.toggle("close-menu"); 
    /* For later, try to change the background to a more grey colour when the pop up menu appears */ 
   
    // document.body.style.backgroundColor = "#81808a"; 
    
}

if(window.innerWidth < 760){

}
else{
    function appendChild(){
        document.getElementById("hamburger-menu").appendChild(document.getElementById("nav-bar"));
    
    }
}

// let asideWidth = document.getElementById("aside-width").offsetWidth;
// document.getElementById(main-width).style.width = asideWidth;





