//* Se importa las constantes globales del carrito de compras
import { SHOPPING_CART } from '../constants/config'
import { SHOPPING_CART_KEY } from '../constants/config'

/**
 * Funcion para inicializar el carrito de compras en caso de que no se encuentre creado
 */
export const initShoppingCart = () =>{
    if (!localStorage.getItem(SHOPPING_CART_KEY)) {
        localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(SHOPPING_CART))
    }
} 

/**
 * 
 * @returns {Array} // Array de objetos en el carrito de compras
 */
export const getShoppingCart = () =>{
    return JSON.parse(localStorage.getItem(SHOPPING_CART_KEY))
}

/**
 * 
 * @param {object} param // Objeto de para ser añadido en el carrito de compras 
 */
export const addToShoppingCart = ({object}) =>{
    
    const currentCart = getShoppingCart();

    if (currentCart.some((item) => item.id === object.id)) {
        /**
         * Actualizar la cantidad del alimento en el carrito
         * 1. Se busca el indice del objeto que se quiere agregar al carrito, ya que, existe
         * 2. Se actualiza la cantidad en una unidad de este objeto del carrito
         * 3. Finalmente se actualiza el carrito del localStorage
        */
       const index = currentCart.findIndex((element) => element.id === object.id)
       currentCart[index].amount++
    } else {
        object.amount = 1
        currentCart.push(object)
        localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(currentCart))
    }
}

/**
 * 
 * @param {object} param0 //Objeto para buscar su cantidad y disminuirla en uno
 */
export const removeAmountCart = ({object}) =>{
    const currentCart = getShoppingCart()

    if (currentCart.some((item) => item.id === object.id)) {
        /**
         * Actualizar la cantidad del alimento en el carrito
         * 1. Se busca el indice del objeto que se quiere remover del carrito, ya que, existe
         * 2. Se actualiza la cantidad en una unidad de este objeto del carrito
         * 3. Finalmente se actualiza el carrito del localStorage
        */
       const index = currentCart.findIndex((element) => element.id === object.id)
       currentCart[index].amount--
    } else {
        console.log('Error al disminuir cantidad del elemento en el carrito!');
    }
}

/**
 * 
 * @param {number} idItem // Se ingresa el id del objeto que se quiere eliminar el carrito de compras
 */
export const removeFromShoppingCart = (idItem) => {
    const currentCart = getShoppingCart()
    const updateCart = currentCart.filter((object) => object.id !== idItem)
    localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(updateCart))
}

/**
 * Funcion para limpiar el carrito de compras
 */
export const clearShoppingCart = () => {
    localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify([]))
}
