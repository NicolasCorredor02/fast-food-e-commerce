import { getUserSession } from "../../services/userServices" // Import para conocer el estado de sesion del usuario
import { getUserData } from "../../services/userServices" // Import para recuperar los datos del usuario 

export class UserState {
    constructor(idRederText) {
        this.nameTag = document.getElementById(idRederText)
        this.userName = ''

        this.init()
    }

    init(){
        if (getUserSession()) {
            this.loadUserName()
            this.render()
        }
    }

    loadUserName(){
        const userData = getUserData()
        this.userName = userData.firstName
    }

    render(){
        this.nameTag.textContent = `${this.userName}`
    }
}