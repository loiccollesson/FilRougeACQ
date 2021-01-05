document.querySelector("#bouton").addEventListener("mousedown", function(){
    console.log("click");
    document.querySelector(".body").classList.toggle("dark");
})