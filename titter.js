function login(){
    
        u_name = document.getElementById("user_name").value;

        localStorage.setItem("User Name", u_name);
        window.location = "room.html";
}