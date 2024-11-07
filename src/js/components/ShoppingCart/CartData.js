import { getShoppingCartByAmount } from "../../services/shoppingCart"; //Import de la funcion para obtener todos los elementos del carrito que cuentan con una cantidad de minimo una unidad
import { cartSubTotal } from "../../services/shoppingCart"; //Import de la funcion para calcular el subtotal del carrito
import { cartCount } from "../../services/shoppingCart"; //Import de la funcion para contar los items del carrito por su amount

export class CartData{
    constructor(amountCart, cartSubTotal){
        this.amountCart = document.getElementById(amountCart)
        this.cartSubTotal = document.getElementById(cartSubTotal)
        this.cartList = []


        this.init()
    }

    init(){
        try {
            this.cartList = getShoppingCartByAmount()
            this.render()
        } catch (error) {
            console.error('Error al cargar los elementos del carrito: ', error);
        }
    }

    render(){
        if (this.cartList.length != 0) {
            /**
             * Se toma el id de la etiqueta para mostrar la cantidad de items en el carrito
             * Se agrega a la etiqueta el valor obtenido
             */
            this.amountCart.textContent = `${cartCount(this.cartList)}`
            /**
            * Se imprime el subtotal del carrito sobre el la etiqueta con el id ingresado
            */
            this.cartSubTotal.textContent = `$${cartSubTotal(this.cartList)}`            
        } else {
            this.amountCart.textContent = '0'
            this.cartSubTotal.textContent = '$0'
        }
    }
}