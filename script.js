const showModalBtn = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop");
const closeBtn =document.querySelector(".close")
const confirmBtn =document.querySelector(".confirm")


showModalBtn.addEventListener("click" , ()=>{
modal.style.opacity = "1";
modal.style.transform = "translateY(20vh)";
backDrop.style.display = "block";

});



closeBtn.addEventListener("click", () => {

    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)";
    backDrop.style.display = "none";

});
confirmBtn.addEventListener("click" , () => {

    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)";
    backDrop.style.display = "none";
    alert ("Have Good time ")
});

