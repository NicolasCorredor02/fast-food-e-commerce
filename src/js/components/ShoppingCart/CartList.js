import { CartCard } from "./CartCard"; //Import del componente card de cada uno de los elementos del carrito
import { getShoppingCartByAmount } from "../../services/shoppingCart"; //Import de la funcion para obtener todos los elementos del carrito que cuentan con una cantidad de minimo una unidad
import { reduceAmountCart} from "../../services/shoppingCart"; //Import de la funcion para disminuir en una unidad el elemento del carrito
import { sumAmountCart } from "../../services/shoppingCart"; //Import de la funcion para aumentar en una unidad el elemento del carrito
import { clearShoppingCart } from "../../services/shoppingCart"; //Import de la funcion para continuar con la compra y limpiar el carrito de compras
import { removeFromShoppingCart } from "../../services/shoppingCart"; //Import de la funcion para remover un item del carrito de compras

export class CartList{
    constructor(cartContainerList, cartButtonContinue){
        this.cartContainerList = document.getElementById(cartContainerList)
        this.cartButtonContinue = document.getElementById(cartButtonContinue)
        this.cartList = []

        this.setupEventRemoveCart()
        this.setupEventReduceAmount()
        this.setupEventSumAmount()
        this.setupEventClearCart()
        this.init()
    }


    init(){
        try {
            this.cartList = getShoppingCartByAmount()
            this.render()
        } catch (error) {
            console.error('Error al cargar los elementos del carrito: ', error);
            this.cartContainerList.innerHTML = 'Error al cargar elementos...'
        }
    }

    /**
     * Metodo para remover completamente un item del carrito de compras
     */

    setupEventRemoveCart(){
        this.cartContainerList.addEventListener("click", (e) =>{
            const button = e.target.closest('[id^="remover"]')

            if (button) {
                const productId = button.id.replace("remover", "")
                removeFromShoppingCart(productId)

                location.reload()
            }
        })
    }

    /**
     * Metodo para poder reducir la cantidad solicitada por el usuario del alimento
     */
    setupEventReduceAmount(){
        this.cartContainerList.addEventListener("click", (e)=>{
            const button = e.target.closest('[id^="disminuir"]')

            if (button) {
                const productId = button.id.replace("disminuir", "")
                reduceAmountCart(productId)

                location.reload()
            }
        })
    }

    /**
     * Metodo para aumentar la cantidad del carrito
     */
    setupEventSumAmount(){
        this.cartContainerList.addEventListener("click", (e) => {
            const button = e.target.closest('[id^="aumentar"]')

            if (button) {
                const productId = button.id.replace("aumentar", "")
                
                sumAmountCart(productId)

                location.reload()
            }
        })
    }


    /**
     * Metodo para simular la compra y limpiar el carrito de compras
     */
    setupEventClearCart(){
        this.cartButtonContinue.addEventListener("click", () =>{
            clearShoppingCart()
            location.reload()
        })
    }

    
    render(){
        /**
        * contenedor.innerHTML = nuevo array .map 
        * ---> cada product toma la funcion CartCard(product) 
        * ---> .join para separar o concatenar todo el contenido del nuevo array ''
         * ---> al final todo es ingresao al contenedorId por medio del innerHTML
        */
        if (this.cartList.length != 0) {
            this.cartContainerList.innerHTML = this.cartList
            .map((product) => CartCard(product))
            .join('')
        } else {
            this.cartContainerList.innerHTML = '<p class="text-xl text-grey-dark text-center">No se han agregado productos al carrito!</p>'
        }
        
    }
}