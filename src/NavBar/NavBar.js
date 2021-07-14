import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/Auth/Auth";
import "./NavBar.css";



    // usuario Logueado -- prop que te indica si el usuario inició sesión
    function NavBar() {
        const { session, metodos } = useContext(AuthContext);
        const { isSignedIn, user } = session;
        return(
            <header className = "NavBar">
              <div className = "NavBar-Logo">
                <img alt = "Logo"></img>
             </div>
               <ul>
        {isSignedIn && <p><span>Bienvenido {user.displayName}</span></p>}
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/test'>test</Link>
        </li>
        <li>
          <Link to='/carrito'>Carrito</Link>
        </li>

        <div>
        {isSignedIn && <button onClick={metodos.logout}><span>Logout</span></button>}
        {!isSignedIn && <Link to='/login'>Inicia sesion</Link>}
        </div>
      </ul>
            </header>
        );
    }



export default NavBar;
