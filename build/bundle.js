/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/assets/logo-yeli-burger.webp
/* harmony default export */ const logo_yeli_burger = (__webpack_require__.p + "assets/logo-yeli-burger.webp");
;// ./src/assets/cart-icon.svg
/* harmony default export */ const cart_icon = (__webpack_require__.p + "assets/cart-icon.svg");
;// ./src/assets/hamburger-banner.webp
/* harmony default export */ const hamburger_banner = (__webpack_require__.p + "assets/hamburger-banner.webp");
;// ./src/assets/burger-doble-carne.webp
/* harmony default export */ const burger_doble_carne = (__webpack_require__.p + "assets/burger-doble-carne.webp");
;// ./src/assets/banner-view-menu.webp
/* harmony default export */ const banner_view_menu = (__webpack_require__.p + "assets/banner-view-menu.webp");
;// ./src/js/utils/navbarShow.js
class NavbarMenu{
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
;// ./src/js/utils/shoppingCart.js
class ShoppingCart{
    
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
;// ./src/js/components/Products/ProductCard.js

/**
 * 
 * @param {object} param0 // Este recibe el objeto de menu para renderizar la card que se mostrara en el DOM 
 * @returns 
 */
const ProductCard = ({product}) => {
  return `
    <div class="flex w-auto h-auto max-h-400px flex-col gap-7">
        <div class="flex flex-col pt-12 px-5 pb-2.5 border-2 rounded-xl border-grey-dark">
            <img class="m-auto W-72 h-52" src="./assets/burger-doble-carne.webp" alt="${product.name}">
            <div class="w-40  py-4 px-5 bg-orange rounded-xl">
              <p class="text-base font-semibold">$ ${product.price}</p>
            </div>
        </div>
        <div class="flex flex-col gap-5">
            <h3 class="text-black font-extrabold text-2xl">${product.name}</h3>
            <p class="text-black">${product.description}</p>
        </div>
        <div class="">
            <button id="agregar${product.id}" class="bg-red text-white font-semibold py-3.5 px-4 rounded-xl">AÑADIR AL CARRITO <i class="ml-3 fa-solid fa-cart-shopping text-white text-base"></i></button>
        </div>
    </div>
    `;
};

;// ./src/js/constants/menu.json
const menu_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":"1","name":"Hamburguesa Clasica","price":"18.000","description":"Una jugosa hamburguesa de ternera con lechuga, tomate y nuestra salsa especial.","type":"hamburger"},{"id":"2","name":"Hamburguesa con queso","price":"21.000","description":"Una hamburguesa clásica cubierta de queso fundido.","type":"hamburger"},{"id":"3","name":"Hamburguesa de bacon","price":"24.000","description":"Una hamburguesa de ternera con bacon crujiente, lechuga y tomate.","type":"hamburger"},{"id":"4","name":"Hamburguesa BBQ","price":"24.000","description":"Una hamburguesa con salsa barbacoa, aros de cebolla y queso cheddar.","type":"hamburger"},{"id":"5","name":"Hamburguesa suiza con champiñones","price":"28.000","description":"Una hamburguesa de ternera con champiñones salteados y queso suizo.","type":"hamburger"},{"id":"6","name":"Hamburguesa Mexicana","price":"30.000","description":"Una hamburguesa con jalapeños, queso pepper jack y mayonesa picante.","type":"hamburger"},{"id":"7","name":"Hamburguesa vegetariana","price":"25.000","description":"Una hamburguesa vegetal con todos los ingredientes clásicos.","type":"hamburger"},{"id":"8","name":"Nachos","price":"14.000","description":"Chips de tortilla cubiertos con queso fundido, jalapeños y salsa.","type":"nachos"},{"id":"9","name":"Nachos cargados","price":"18.000","description":"Nachos con queso, guacamole, crema agria y carne a elegir.","type":"nachos"},{"id":"10","name":"Nachos con pollo","price":"18.000","description":"Nachos con pollo búfalo, queso y aderezo ranchero.","type":"nachos"},{"id":"11","name":"Wrap de pollo","price":"15.000","description":"Un wrap relleno de pollo a la parrilla, lechuga y aderezo ranchero.","type":"wraps"},{"id":"12","name":"Wrap Caesar","price":"17.000","description":"Un wrap con lechuga romana, aderezo César y la proteína de su elección.","type":"wraps"},{"id":"13","name":"Wrap con pollo buffalo","price":"19.000","description":"Un wrap con pollo buffalo, lechuga y aderezo de queso azul.","type":"wraps"},{"id":"14","name":"Wrap vegetariano","price":"15.000","description":"Un wrap relleno de verduras frescas y hummus.","type":"wraps"},{"id":"15","name":"Malteada de chocolate","price":"14.000","description":"Una cremosa malteada hecha con helado de chocolate y coronada con crema chantilly.","type":"milkshakes"},{"id":"16","name":"Malteada de vainilla","price":"14.000","description":"Malteada clasica hecha con helado de vainilla.","type":"milkshakes"},{"id":"17","name":"Malteada de fresa","price":"14.000","description":"Malteada hecha con fresas frescas y helado de vainilla","type":"milkshakes"},{"id":"18","name":"Malteada de oreo","price":"16.000","description":"Malteada con trozos de oreo, helado de vainilla y crema chatilly.","type":"milkshakes"},{"id":"19","name":"Buffalo Wings","price":"13.000","description":"Alitas de pollo bañadas en salsa búfalo picante.","type":"wings"},{"id":"20","name":"Alitas BBQ","price":"15.000","description":"Alitas bañadas en salsa BBQ y asadas a la perfección.","type":"wings"}]');
;// ./src/js/services/menuServices.js
// * Se importa el archivo JSON (local) que contiene el menu a mostrar


/**
 * 
 * @param {string} tipo // Se recibe el tipo del elemento que se quiere buscar, por default tiene todo seleccionado
 * @returns // regresa un array con los objetos encontrados
 */
const getMenuByType = (tipo = 'all') =>{
    try {
        if (tipo != 'all') {
            const elementFilter = menu_namespaceObject.filter((obj) => obj.type.toLowerCase() === tipo.toLowerCase())

            return elementFilter
        } else {
            return menu_namespaceObject
        }
    } catch (error) {
        console.error('Error al buscar los elementos: ', error);
        return []
    }
}


/**
 * 
 * @param {number} id // Se recibe el id del elemento que se quiere encontrar sobre el menu 
 * @returns // Regresa el array con el objeto del id buscado
 */
const getMenuById = (id) =>{

    try {
        const menuElement =  menuData.filter((obj) => obj.id === id)
        return menuElement
    } catch (error) {
        console.error('Error al encontrar elemento: ', error);
        return []
    }
    
}
;// ./src/js/components/Products/ProductList.js
 //* Impor del render del card para cada producto
 //* Impor de la funcion para obtener los items del menu.json

class ProductList{
    /**
     * 
     * @param {string} cotainerId //Ingresar el id del contenedor donde se renderizaran las cards de los items 
     */
    constructor(cotainerId, type){
        this.cotainerId = document.getElementById(cotainerId)
        this.productsList = []

        this.init(type)
    }

    init(type){
        try {
            this.productsList = getMenuByType(type)
            this.render()
        } catch (error) {
            console.error('Error al cargar elementos en el DOM: ', error);
            this.cotainerId.innerHTML = 'Error al cargar elementos...'
            
        }
    }

    /**
     * contenedor.innerHTML = nuevo array .map 
     * ---> cada product toma la funcion ProductCard({product}) 
     * ---> .join para separar o concatenar todo el contenido del nuevo array ''
     * ---> al final todo es ingresao al contenedorId por medio del innerHTML
     */
    render(){
        this.cotainerId.innerHTML = this.productsList 
        .map((product) => ProductCard({product}))
        .join('')
    }
}


;// ./src/js/script.js
// * Import del CSS para el reconocimiento de WebPack


// * Import de los assets para el proyecto







// * ============= Import de utils ==============
// Util para interaccion con navbar principal

// Util para interaccion con el carrito de compras


//* =============== Import de components ============
// component para la muestra del menu de alimentos


/**
 * * Se usa DOMContentLoaded sobre todo el documento para evitar problemas en sobre la interaccion del JS con el HTML,
 * * ya que, se espera a que cargue completamente el HTML para poder ejecutar el JS
 */
document.addEventListener('DOMContentLoaded', () => {
    
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

})
/******/ })()
;