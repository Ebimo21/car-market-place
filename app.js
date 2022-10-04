document.addEventListener("scroll", function(event){
    const el = document.getElementsByClassName("box")
    const windowsOffsetTop = window.innerHeight + window.scrollY
    Array.prototype.forEach.call(el, (element) =>{
        const elementOffSetTop = element.offsetTop;

        if(windowsOffsetTop >= elementOffSetTop){
            element.className += " " + "fade-in"
        }
})
})


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.classList.toggle("d-none") ;
} else {
    x.style.display = "block";
    x.classList.toggle("d-none") ;
  }
}
