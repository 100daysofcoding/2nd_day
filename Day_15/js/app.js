function openTab(x){
    let contents= document.querySelectorAll(".main-slide");
    let btns = document.querySelectorAll(".links");
    for(let i= 0; i < contents.length; i++){
        contents[i].style.display = "none";
        btns[i].classList.remove("active");
    }
    contents[x].style.display = "block";
    btns[x].classList.add("active");

}
openTab(0)