let popupdiv = document.querySelector(".popup")

document.getElementById("submitbtn").addEventListener("click",()=>{
    popupdiv.classList.add("showPopup")
})
document.getElementById("okbtn").addEventListener("click",()=>{
    popupdiv.classList.remove("showPopup")
})