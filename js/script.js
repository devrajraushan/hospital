
var bars = document.getElementById("bars");
var show =document.getElementById("show");
var register = document.getElementById("register");
bars.onclick = function(){
    if(show.offsetHeight == 0){
    show.style.display="block";
    show.style.height="280px";    
    show.style.webkitTransition= "0.5s";
    show.style.transition= "0.5s";
    /*show.className="animate__animated animate__slideInDown"  ;*/
}

else{    
    show.style.display="none";
    show.style.height="0px";
    
    
}
}