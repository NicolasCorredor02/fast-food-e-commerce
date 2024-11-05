import { CartCard } from "./CartCard"; //Import del componente card de cada uno de los elementos del carrito
import { getShoppingCart } from "../../services/shoppingCart"; //Impor de la funion para obtener todos los elementos del carrito

export class CartList{
    constructor(containerId){
        this.containerId = document.getElementById(containerId)
        this.cartList = []

        this.init()
    }


    init(){
        try {
            this.cartList = getShoppingCart()
            this.render()
        } catch (error) {
            console.error('Error al cargar los elementos del carrito: ', error);
            this.cotainerId.innerHTML = 'Error al cargar elementos...'
        }
    }

    /**
     * contenedor.innerHTML = nuevo array .map 
     * ---> cada product toma la funcion CartCard({product}) 
     * ---> .join para separar o concatenar todo el contenido del nuevo array ''
     * ---> al final todo es ingresao al contenedorId por medio del innerHTML
     */
    render(){
        if (this.cartList.length != 0) {
            this.containerId.innerHTML = this.cartList
            .map((product) => CartCard({product}))
            .join('')
        } else {
            this.containerId.innerHTML = '<p class="text-xl text-grey-dark text-center">No se han agregado productos al carrito!</p>'
        }
        
    }
}