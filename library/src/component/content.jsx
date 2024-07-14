import React from "react";
function Contact(){

    const logout = (() =>{
        localStorage.removeItem("signUp");
        window.location.reload();
    })

    const deleteAccount =(() =>{
        localStorage.clear();
        window.location.reload();
    })

   return(
    <div>
        <p>contact Us Page</p>
        <button onClick={logout}>LogOut</button>
        <button onClick={deleteAccount}>Delete</button>
        
    </div>
   ); 
}
export default Contact ;

