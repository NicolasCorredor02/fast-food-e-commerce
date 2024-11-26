export class ShoppingCart{
    
    /**
     * * Constructor para los DOM correspondientes al carrito de compras
     */
    constructor(){
        this.cartOverlay = document.getElementById("cartOverlay")
        this.cartOpen = document.getElementById("cartOpen")
        this.cartClose = document.getElementById("cartClose")


        this.init()
    }

    /**
     * * Metodo para controlar los eventos de la clase
     */
    init(){
        this.cartOpen.addEventListener('click', () => this.stateCart())
        this.cartClose.addEventListener('click', () => this.stateCart())
    }

    /**
     * * Metodo para interactuar con el estado del carrito para su visualización o no
     */
    stateCart(){
        this.cartOverlay.classList.toggle('hidden')
    }
}