
const NavBar = document.querySelector("#navBar");


HBMenu = document.querySelector(".hBMenu").addEventListener("click", function(){

    if (NavBar.style.display === "flex"){
        NavBar.style.display = 'none';
    } else{
        NavBar.style.display = 'flex';
    }
}); 
    



