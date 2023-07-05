let secProjects = document.getElementById("pro-cor")
secProjects.style.display="none"
function projects(){
    // let secProjects = document.getElementById("pro-cor")
    let Btn = document.getElementById("pro-btn")

   
    if(secProjects.style.display == "none"){
        secProjects.style.display="flex"
         Btn.innerHTML="Hide Projects"
    }
    else{
        secProjects.style.display="none"
        Btn.innerHTML="My Projects"

    }
}
