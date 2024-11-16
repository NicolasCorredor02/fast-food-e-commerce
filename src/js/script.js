// * Import del CSS para el reconocimiento de WebPack
import "../css/styles.css"

// * Import de los assets para el proyecto
import "../assets/hamburger-banner.webp"
import "../assets/banner-menu.webp"

// * ============== Import de Services =========
// Service para inicializar el carrito de compras
import { initShoppingCart } from "./services/shoppingCart"

// * ============= Import de utils ==============
// Util para interaccion con navbar principal
import { NavbarMenu } from "./utils/navbarShow"
// Util para interaccion con el carrito de compras
import {ShoppingCart} from "./utils/shoppingCart"

//* =============== Import de components ============
// component para la muestra del menu de alimentos
import { ProductList } from "./components/Products/ProductList"
// component para la muestra del carrito de compras y sus funcionalidades
import { CartList } from "./components/ShoppingCart/CartList"
// component para la muestra de los datos en cantidad de items del carrito y muestra del subtotal del carrito
import { CartData } from "./components/ShoppingCart/CartData"
// component para la muestra del menu y sus filtros
import { MenuCategoryList } from "./components/MenuCategory/MenuCategoryList"




/**
 * * Se usa DOMContentLoaded sobre todo el documento para evitar problemas en sobre la interaccion del JS con el HTML,
 * * ya que, se espera a que cargue completamente el HTML para poder ejecutar el JS
 */
document.addEventListener('DOMContentLoaded', () => {

    // constante para conocer la localizacion de la pagina actual 
    const currentPage = document.body.dataset.page;
    
    // Se ejecuta la funion initShoppingCart() para inicializar el carrito de compras en el locaStorage
    initShoppingCart()

    // Se instancia un nuevo objeto de tipo NavbarMenu() para usar su clase y metodos
    const navbarMenu = new NavbarMenu();

    // Se instancia un nuevo objeto de tipo ShoppingCart() para usar su clase y metodos
    const shoppingCart = new ShoppingCart()

    // /**
    //  * Condicional para validar la pagina actual y asi ejecutar funciones especificas
    //  */
    if (currentPage === 'index') {
        /**
        * Se intancia un nuevo objeto de tipo ProductList para mostrar
        * aquellos items del menu.json que correspondan a hamburguesas
        * y se renderizan sobre el contenedor 'productsContainer'
        */  
        const productList = new ProductList('productsContainer', 'hamburger')
    }else if(currentPage === 'menu'){
        // const productList = new ProductList('productsContainer')
        /**
        * 
        */
        const menuCategoryList = new MenuCategoryList("containerMenuFilter", "containerMenuFilterProducts")
    }

    
    


    /**
     * Se intancia un nuevo objeto de tipo CartList para mostrar
     * aquellos items que han sido agregados al carrito de compras del localStorage
     * y se renderizan sobre el contenedor 'cartContainer'
     * 
     * El primer parametro corresponde al contenedor donde se renderizan los items del carrito
     * El segundo parametro corresponde al boton que simula la continuacion del la compra
     */  
    const cartList = new CartList('cartContainerList', 'cartButtonContinue')

    /**
     * Se instancia nuevo obj de tipo de CartData
     * para mostrar el conteo de items del carrito
     * y mostrar el subtotal de los items del carrito
     * 
     * parametro1 =  id de etiqueta para mostrar conteo
     * parametro2 = id de etiqueta para mostrar subtotal
     */
    const cartData = new CartData('amountCart', 'cartSubTotal')
})