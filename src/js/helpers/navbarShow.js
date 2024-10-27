export class NavbarMenu{
    constructor(){
        /**
         * * Consatructor que permite inicializar todas las propiedades necesarias para el menu
         * 1. Se obtienen las referencias a los elementos del DOM, estas tambien pueden ser dinamicas por parametro del constructor
         */
        this.navbarMenu = document.getElementById("navbarMenu")
        this.openNavbarMenu = document.getElementById("navbarOpenMenu")
        this.closeNavbarMenu = document.getElementById("navbarCloseMenu")

        /**
         * 2. Se llama al metodo init() para inicializar todos los even listeners
         */
        this.init()
    }

    /**
     * * Metodo para controlar los metodos de eventos, animaciones, accesibilidad, etc de la clase
     */
    init(){
        this.openNavbarMenu.addEventListener('click', () => this.stateMenu())
        this.closeNavbarMenu.addEventListener('click', () => this.stateMenu())
    }

    /**
     * * Metodo para alternar entre la clase (-translate-x-full)
     */
    stateMenu(){
        this.navbarMenu.classList.toggle('-translate-x-full')
    }
}