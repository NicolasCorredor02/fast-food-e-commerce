// Import de constantes para el manejo y almacenamiento de los datos del usuario
import { USER } from "../constants/config";
import { USER_KEY } from "../constants/config";
import { SESSION_USER } from "../constants/config";
import { SESSION_USER_KEY } from "../constants/config";

// Funcion para inicializar al usuario y su info
export const initUserData = () => {
    if (!localStorage.getItem(USER_KEY)) {
        localStorage.setItem(USER_KEY, JSON.stringify(USER))
    }
}

// Funcion para inicializar el estado de sesion del usuario
export const initUserSession = () =>{
    if (!localStorage.getItem(SESSION_USER_KEY)) {
        localStorage.setItem(SESSION_USER_KEY, SESSION_USER)
    }
}

// funcion para almacenar en el localStorage el objeto de usuario
export const setUser = (object) =>{
    try {
        localStorage.setItem(USER_KEY, JSON.stringify(object))
        localStorage.setItem(SESSION_USER_KEY, true)
    } catch (error) {
        console.log("Error al almacenar los datos del usuario: ", error);
    }
}

/**
 * 
 * @returns {object} // retorna la data del usuario almacenado en el localStorage
 */
export const getUserData = () => {

    const currentUserData = localStorage.getItem(USER_KEY)

    try {
        const user = JSON.parse(currentUserData)
        return user
    } catch (error) {
        console.log("Error al recuperar los datos del usuairo: ", error);
    }
}


// Funcion para retornar el esatdo de sesion del localStorage
export const getUserSession = () => {

    const currentUserSession = localStorage.getItem(SESSION_USER_KEY)

    if (currentUserSession === 'true') {
        return true
    }else if(currentUserSession === 'false'){
        return false
    }else{
        console.log("Error al recuperar el estado de sesion!");
    }
}


