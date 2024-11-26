import { setUser } from "../services/userServices" // Import de funcion para almacenar la informacion de usuario en el localStorage
import { userNotification } from "../components/alerts/user/alertsUser"

export class RegisterForm{
    constructor(idForm, idFirstName, idLastName, idEmail){
        this.form = document.getElementById(idForm)
        this.firstName = document.getElementById(idFirstName)
        this.lastName = document.getElementById(idLastName)
        this.email = document.getElementById(idEmail)

        this.userData = {}
        this.init()
    }

    init(){
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()

            this.validateInputs()
            if (this.validateUserData(this.userData)) {
                setUser(this.userData)
                userNotification('success')
                setTimeout(() => {
                    window.location.href = '/index.html'
                }, 2000);
            }
        })
    }

    // Metodo para validar los inputs ingresados y controlar el accionar
    validateInputs(){
        const firstNameValue = this.firstName.value.trim().toLowerCase()
        const lastNameValue = this.lastName.value.trim().toLowerCase()
        const emailValue = this.email.value.trim().toLowerCase()
        

        if (firstNameValue === '') {
            this.setError(this.firstName, "Campo requerido")
        }else{
            this.setSuccess(this.firstName)
            this.userData.firstName = firstNameValue
        }

        if (lastNameValue === '') {
            this.setError(this.lastName, "Campo requerido")
        } else {
            this.setSuccess(this.lastName)
            this.userData.lastName = lastNameValue
        }

        if (emailValue === '') {
            this.setError(this.email, "Campo requerido")
        } else if(!this.isValidEmail(emailValue)){
            this.setError(this.email, "Ingrese un correo valido")
        }else{
            this.setSuccess(this.email)
            this.userData.email = emailValue
        }
    }

    // Metodo para asignar un mensaje de exito en los inputs
    setSuccess(element){
        const inputControl = element.parentElement
        const errorDisplay = inputControl.querySelector('.error')

        errorDisplay.innerText = ''
    }

    // Metodo para asignar un mensaje de error en los inputs
    setError(element, message){
        const inputControl = element.parentElement
        const errorDisplay = inputControl.querySelector('.error')

        errorDisplay.innerText = message
    }

    // Metodo para validar el input de correo 
    isValidEmail (email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    /**
     * 
     * @param {object} userData // El objeto userData debe tener las propiedades del array "propiedadesRequeridas"
     * @returns {boolean} // Valida la correcta creacion del objeto userData
     */
    validateUserData(userData) {
        // Verificar que el objeto tenga las propiedades necesarias
        const propiedadesRequeridas = ['firstName', 'lastName', 'email'];
    
        for (const propiedad of propiedadesRequeridas) {
            // Verifica si la propiedad existe y si su valor no está vacío
            if (!userData.hasOwnProperty(propiedad) || !userData[propiedad]) {
                return false; // La propiedad no existe o está vacía
            }
        }
        return true; // Todas las propiedades son válidas
    }
}