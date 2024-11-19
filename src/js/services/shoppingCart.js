//* Se importa las constantes globales del carrito de compras
import { SHOPPING_CART } from '../constants/config'
import { SHOPPING_CART_KEY } from '../constants/config'

import { addItem } from '../components/alerts/cart/alertsCart' // Import function for alert form cart

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
 * @returns {Array} // Array de objetos que cuentan con minimo una unidad
 */
export const getShoppingCartByAmount = () =>{
    const cartByAmount = JSON.parse(localStorage.getItem(SHOPPING_CART_KEY)).filter((object) => object.amount >= 1)

    return cartByAmount
}

/**
 * 
 * @param {object} param // Objeto de para ser añadido en el carrito de compras 
 */
export const addToShoppingCart = (object) =>{
    
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
       localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(currentCart))
    
        addItem('success')
    } else {
        object.amount = 1
        currentCart.push(object)
        localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(currentCart))

        addItem('success')
    }
}

/**
 * 
 * @param {number} id // id del objeto del cual se quiere aumentar la cantidad en una unidad 
 */
export const sumAmountCart = (id) => {
    const currentCart = getShoppingCart()

    if (currentCart.some((item) => item.id === id)) {
        /**
         * Actualizar la cantidad del alimento en el carrito
         * 1. Se busca el indice del objeto que se quiere remover del carrito, ya que, existe
         * 2. Se actualiza la cantidad en una unidad de este objeto del carrito
         * 3. Finalmente se actualiza el carrito del localStorage
        */
       const index = currentCart.findIndex((element) => element.id === id)
       currentCart[index].amount++       
       localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(currentCart))

       addItem('success')
    } else {
        console.log('Error al aumentar cantidad del elemento en el carrito!');
    }
}

/**
 * 
 * @param {number} param0 //id del objeto del cual se quiere disminuir la cantidad en una unidad
 */
export const reduceAmountCart = (id) =>{
    const currentCart = getShoppingCart()

    if (currentCart.some((item) => item.id === id)) {
        /**
         * Actualizar la cantidad del alimento en el carrito
         * 1. Se busca el indice del objeto que se quiere remover del carrito, ya que, existe
         * 2. Se actualiza la cantidad en una unidad de este objeto del carrito
         * 3. Finalmente se actualiza el carrito del localStorage
        */
       const index = currentCart.findIndex((element) => element.id === id)
       currentCart[index].amount--
       localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(currentCart))

       addItem('remove')
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

    addItem('remove')
}


/**
 * 
 * @param {Array} shoppingCart //Ingresa el array de objetos del carrito
 * @returns {number} // Regresa el valor del total de items del carrito por medio de la propiedad amount
 */
export const cartCount = (shoppingCart) => shoppingCart.reduce((accumulador, element) => accumulador + element.amount, 0)

/**
 * 
 * @param {array} shoppingCart // Ingresa el array de objetos del carrito para calcular el subtotal
 * @returns {number} // regresa el valor final de la sumatoria sobre los items del carrito
 */
export const cartSubTotal = (shoppingCart) => shoppingCart.reduce((accumulador, element) => accumulador + (element.price * element.amount), 0)

/**
 * Funcion para limpiar el carrito de compras
 */
export const clearShoppingCart = () => {
    localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify([]))

    addItem('finish')
}
