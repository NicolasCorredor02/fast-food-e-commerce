// * Import del CSS para el reconocimiento de WebPack
import "../css/styles.css"

// * Import de los assets para el proyecto
import "../assets/logo-yeli-burger.webp"
import "../assets/hamburger-banner.webp"
import "../assets/burger-doble-carne.webp"
import "../assets/banner-view-menu.webp"


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
// component para la muestra del carrito de compra
import { CartList } from "./components/ShoppingCart/CartList"


/**
 * * Se usa DOMContentLoaded sobre todo el documento para evitar problemas en sobre la interaccion del JS con el HTML,
 * * ya que, se espera a que cargue completamente el HTML para poder ejecutar el JS
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // Se ejecuta la funion initShoppingCart() para inicializar el carrito de compras en el locaStorage
    initShoppingCart()

    // Se instancia un nuevo objeto de tipo NavbarMenu() para usar su clase y metodos
    const navbarMenu = new NavbarMenu();

    // Se instancia un nuevo objeto de tipo ShoppingCart() para usar su clase y metodos
    const shoppingCart = new ShoppingCart()

    /**
     * Se intancia un nuevo objeto de tipo ProductList para mostrar
     * aquellos items del menu.json que correspondan a hamburguesas
     * y se renderizan sobre el contenedor 'productsContainer'
     */  
    const productList = new ProductList('productsContainer', 'hamburger')

    /**
     * Se intancia un nuevo objeto de tipo CartList para mostrar
     * aquellos items que han sido agregados al carrito de compras del localStorage
     * y se renderizan sobre el contenedor 'cartContainer'
     */  
    const cartList = new CartList('cartContainer')

})