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

;// ./src/assets/hamburger-banner.webp
/* harmony default export */ const hamburger_banner = (__webpack_require__.p + "assets/hamburger-banner.webp");
;// ./src/assets/banner-menu.webp
/* harmony default export */ const banner_menu = (__webpack_require__.p + "assets/banner-menu.webp");
;// ./src/js/constants/config.js
/**
 * * Archivo que almacena las constantes generales para el proyecto
 */

// Array carrito que almacena el carrito en el localStorage
const SHOPPING_CART = []
// Clave del carrito en el localStorage
const SHOPPING_CART_KEY = 'shoppingCart'
;// ./src/js/services/shoppingCart.js
//* Se importa las constantes globales del carrito de compras



/**
 * Funcion para inicializar el carrito de compras en caso de que no se encuentre creado
 */
const initShoppingCart = () =>{
    if (!localStorage.getItem(SHOPPING_CART_KEY)) {
        localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(SHOPPING_CART))
    }
} 

/**
 * 
 * @returns {Array} // Array de objetos en el carrito de compras
 */
const getShoppingCart = () =>{
    return JSON.parse(localStorage.getItem(SHOPPING_CART_KEY))
}


/**
 * 
 * @returns {Array} // Array de objetos que cuentan con minimo una unidad
 */
const getShoppingCartByAmount = () =>{
    const cartByAmount = JSON.parse(localStorage.getItem(SHOPPING_CART_KEY)).filter((object) => object.amount >= 1)

    return cartByAmount
}

/**
 * 
 * @param {object} param // Objeto de para ser añadido en el carrito de compras 
 */
const addToShoppingCart = (object) =>{
    
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
    } else {
        object.amount = 1
        currentCart.push(object)
        localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(currentCart))
    }
}

/**
 * 
 * @param {number} id // id del objeto del cual se quiere aumentar la cantidad en una unidad 
 */
const sumAmountCart = (id) => {
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
    } else {
        console.log('Error al aumentar cantidad del elemento en el carrito!');
    }
}

/**
 * 
 * @param {number} param0 //id del objeto del cual se quiere disminuir la cantidad en una unidad
 */
const reduceAmountCart = (id) =>{
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
    } else {
        console.log('Error al disminuir cantidad del elemento en el carrito!');
    }
}

/**
 * 
 * @param {number} idItem // Se ingresa el id del objeto que se quiere eliminar el carrito de compras
 */
const removeFromShoppingCart = (idItem) => {
    const currentCart = getShoppingCart()
    const updateCart = currentCart.filter((object) => object.id !== idItem)
    localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(updateCart))
}


/**
 * 
 * @param {Array} shoppingCart //Ingresa el array de objetos del carrito
 * @returns {number} // Regresa el valor del total de items del carrito por medio de la propiedad amount
 */
const cartCount = (shoppingCart) => shoppingCart.reduce((accumulador, element) => accumulador + element.amount, 0)

/**
 * 
 * @param {array} shoppingCart // Ingresa el array de objetos del carrito para calcular el subtotal
 * @returns {number} // regresa el valor final de la sumatoria sobre los items del carrito
 */
const cartSubTotal = (shoppingCart) => shoppingCart.reduce((accumulador, element) => accumulador + (element.price * element.amount), 0)

/**
 * Funcion para limpiar el carrito de compras
 */
const clearShoppingCart = () => {
    localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify([]))
}

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
const ProductCard = (product) => {
  return `
    <div class="flex w-auto h-auto max-h-400px flex-col gap-7">
        <div class="flex flex-col pt-12 px-5 pb-2.5 border-2 rounded-xl border-grey-dark">
            <img class="m-auto W-72 h-52" src="${product.img}" alt="${product.name}">
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
const menu_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":"1","img":"https://i.ibb.co/8XW7T2W/burger-doble-carne.webp","name":"Hamburguesa Clasica","price":"18000","description":"Una jugosa hamburguesa de ternera con lechuga, tomate y nuestra salsa especial.","type":"hamburger"},{"id":"2","img":"https://i.ibb.co/8XW7T2W/burger-doble-carne.webp","name":"Hamburguesa con queso","price":"21000","description":"Una hamburguesa clásica cubierta de queso fundido.","type":"hamburger"},{"id":"3","img":"https://i.ibb.co/8XW7T2W/burger-doble-carne.webp","name":"Hamburguesa de bacon","price":"24000","description":"Una hamburguesa de ternera con bacon crujiente, lechuga y tomate.","type":"hamburger"},{"id":"4","img":"https://i.ibb.co/8XW7T2W/burger-doble-carne.webp","name":"Hamburguesa BBQ","price":"24000","description":"Una hamburguesa con salsa barbacoa, aros de cebolla y queso cheddar.","type":"hamburger"},{"id":"5","img":"https://i.ibb.co/8XW7T2W/burger-doble-carne.webp","name":"Hamburguesa suiza con champiñones","price":"28000","description":"Una hamburguesa de ternera con champiñones salteados y queso suizo.","type":"hamburger"},{"id":"6","img":"https://i.ibb.co/8XW7T2W/burger-doble-carne.webp","name":"Hamburguesa Mexicana","price":"30000","description":"Una hamburguesa con jalapeños, queso pepper jack y mayonesa picante.","type":"hamburger"},{"id":"7","img":"https://i.ibb.co/8XW7T2W/burger-doble-carne.webp","name":"Hamburguesa vegetariana","price":"25000","description":"Una hamburguesa vegetal con todos los ingredientes clásicos.","type":"hamburger"},{"id":"8","img":"https://i.ibb.co/FwXM0xp/nachos.webp","name":"Nachos","price":"14000","description":"Chips de tortilla cubiertos con queso fundido, jalapeños y salsa.","type":"nachos"},{"id":"9","img":"https://i.ibb.co/FwXM0xp/nachos.webp","name":"Nachos cargados","price":"18000","description":"Nachos con queso, guacamole, crema agria y carne a elegir.","type":"nachos"},{"id":"10","img":"https://i.ibb.co/FwXM0xp/nachos.webp","name":"Nachos con pollo","price":"18000","description":"Nachos con pollo búfalo, queso y aderezo ranchero.","type":"nachos"},{"id":"11","img":"https://i.ibb.co/5kR53Qk/wraps.webp","name":"Wrap de pollo","price":"15000","description":"Un wrap relleno de pollo a la parrilla, lechuga y aderezo ranchero.","type":"wraps"},{"id":"12","img":"https://i.ibb.co/5kR53Qk/wraps.webp","name":"Wrap Caesar","price":"17000","description":"Un wrap con lechuga romana, aderezo César y la proteína de su elección.","type":"wraps"},{"id":"13","img":"https://i.ibb.co/5kR53Qk/wraps.webp","name":"Wrap con pollo buffalo","price":"19000","description":"Un wrap con pollo buffalo, lechuga y aderezo de queso azul.","type":"wraps"},{"id":"14","img":"https://i.ibb.co/5kR53Qk/wraps.webp","name":"Wrap vegetariano","price":"15000","description":"Un wrap relleno de verduras frescas y hummus.","type":"wraps"},{"id":"15","img":"https://i.ibb.co/QXS5bb3/milkshakes.webp","name":"Malteada de chocolate","price":"14000","description":"Una cremosa malteada hecha con helado de chocolate y coronada con crema chantilly.","type":"milkshakes"},{"id":"16","img":"https://i.ibb.co/QXS5bb3/milkshakes.webp","name":"Malteada de vainilla","price":"14000","description":"Malteada clasica hecha con helado de vainilla.","type":"milkshakes"},{"id":"17","img":"https://i.ibb.co/QXS5bb3/milkshakes.webp","name":"Malteada de fresa","price":"14000","description":"Malteada hecha con fresas frescas y helado de vainilla","type":"milkshakes"},{"id":"18","img":"https://i.ibb.co/QXS5bb3/milkshakes.webp","name":"Malteada de oreo","price":"16000","description":"Malteada con trozos de oreo, helado de vainilla y crema chatilly.","type":"milkshakes"},{"id":"19","img":"https://i.ibb.co/LSKZswS/wings.webp","name":"Buffalo Wings","price":"13000","description":"Alitas de pollo bañadas en salsa búfalo picante.","type":"wings"},{"id":"20","img":"https://i.ibb.co/LSKZswS/wings.webp","name":"Alitas BBQ","price":"15000","description":"Alitas bañadas en salsa BBQ y asadas a la perfección.","type":"wings"}]');
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
 * @param {string} id // Se recibe el id del elemento que se quiere encontrar sobre el menu 
 * @returns // Regresa el objeto del id buscado
 */
const getItemById = (id) =>{    
    try {    
        const element =  menu_namespaceObject.find((obj) => obj.id === id)      
        return element
    } catch (error) {
        console.error('Error al encontrar el elemento: ', error);
    }
    
}
;// ./src/js/components/Products/ProductList.js
 // Import del template o componente del card para cada producto
 // Import de la funcion para obtener los items del menu.json
 //Import de la funcion para obtener el objeto enterio del menu stock
 //Import de la funcion para agregar el objeto al carrito del localStorage

class ProductList {
  /**
   *
   * @param {string} cotainerId //Ingresar el id del contenedor donde se renderizaran las cards de los items
   */
  constructor(containerId, type) {
    this.containerId = document.getElementById(containerId);
    this.productsList = [];

    this.init(type);
    this.setupEventListener()
  }

  init(type) {
    try {
      this.productsList = getMenuByType(type);
      this.render();
    } catch (error) {
      console.error("Error al cargar elementos en el DOM: ", error);
      this.containerId.innerHTML = "Error al cargar elementos...";
    }
  }

  setupEventListener() {
    // 1. Se agrega el eventListener al contenedor donde se renderiza
    this.containerId.addEventListener("click", (e) => {

      // 2. Se busca si el click fue en un botón o dentro de él, busca aquellos botones que tengan agregar al incio en su id
      const button = e.target.closest('[id^="agregar"]');

      // 3. Si existe la interaccion con un botón, se ejecuta el if
      if (button) {
        /**
         *  4. Se extrae el Id del producto a traves del Id original del boton,
         *  esto remplaza la palabra "agregar" por '' quedando solo el id
        */  
        const productId = button.id.replace("agregar", "")

        // 5. Se ejecutan las funciones importadas para agregar al carrito
        addToShoppingCart(getItemById(productId));

        // 6. Se recarga la pagina
        location.reload()
      }
    });
  }

  /**
   * contenedor.innerHTML = nuevo array .map
   * ---> cada product toma la funcion ProductCard({product})
   * ---> .join para separar o concatenar todo el contenido del nuevo array ''
   * ---> al final todo es ingresao al contenedorId por medio del innerHTML
   */
  render() {
    this.containerId.innerHTML = this.productsList
      .map((product) => ProductCard(product))
      .join("");
  }
}

;// ./src/js/components/ShoppingCart/CartCard.js
const CartCard = (product) =>{
    return `
    <div class="py-3 grid grid-cols-general-layout w-full">
        <div class="">
            <img class="w-[80px]" src="${product.img}" alt="${product.name}">
        </div>
        <div class="flex flex-col gap-2 justify-between items-start">
            <div>
                <h3 class="text-lg font-bold">${product.name}</h3>
                <h3 class="text-lg font-normal">$${product.price}</h4>
            </div>
            <button id="remover${product.id}" class="bg-red px-2 py-1 text-white rounded-lg">Remover</button>
        </div>
        <div class="flex justify-between items-center gap-5">
            <button id="disminuir${product.id}" class="text-base"><i class="fa-solid fa-minus"></i></button>
            <p class="text-xl">${product.amount}</p>
            <button id="aumentar${product.id}" class="text-base"><i class="fa-solid fa-plus"></i></button>
        </div>
    </div>
    `
}
;// ./src/js/components/ShoppingCart/CartList.js
 //Import del componente card de cada uno de los elementos del carrito
 //Import de la funcion para obtener todos los elementos del carrito que cuentan con una cantidad de minimo una unidad
 //Import de la funcion para disminuir en una unidad el elemento del carrito
 //Import de la funcion para aumentar en una unidad el elemento del carrito
 //Import de la funcion para continuar con la compra y limpiar el carrito de compras
 //Import de la funcion para remover un item del carrito de compras

class CartList{
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
;// ./src/js/components/ShoppingCart/CartData.js
 //Import de la funcion para obtener todos los elementos del carrito que cuentan con una cantidad de minimo una unidad
 //Import de la funcion para calcular el subtotal del carrito
 //Import de la funcion para contar los items del carrito por su amount

class CartData{
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
;// ./src/js/components/MenuCategory/MenuCategoryCard.js
/**
 * 
 * @param {object} product // Funcion que recibe un objeto para renderizar un card de tipo de menu para mostrar en el DOM
 * @returns 
 */
const MenuCategoryCard = (product) => {
  return `
    <div id="type${product.type}" class="flex flex-col bg-orange shadow-md shadow-black rounded-3xl md:rounded-none md:rounded-es-3xl md:rounded-ee-3xl p-3">
        <img src="${product.img}" alt="${product.name}">
        <p class="uppercase text-white font-semibold">${product.type}</p>
    </div>
    `;
};

;// ./src/js/components/MenuCategory/MenuCategoryList.js
 // Se importa el archivo JSON (local) que contiene el menu a mostrar
 // Import de la funcion MenuCategoryCard para renderizar las cards del menu
 // Import de la clase ProductList para el uso de la clase y renderizar los productos filtrados

class MenuCategoryList {
    constructor(containerId, continerFilterId){
        this.containerId = document.getElementById(containerId)
        this.continerFilterId = document.getElementById(continerFilterId)
        this.menuTypeList = []


        this.init()
        this.ProductList = new ProductList(continerFilterId)
        this.setupEventListener()

    }

    init(){
        try {
            this.menuTypeList = this.getTypeArray(menu_namespaceObject)
            this.render()
        } catch (error) {
            console.error("Error al cargar el menu filtrado: ", error);
            this.containerId.innerHTML = "Error al cargar el menu..."
        }
    }

    /**
     * 
     * @param {Array} menuData // Se ingresa el array de objetos correspondiente al menu principal
     * @returns {Array} // Retorna el array transformado filtrando los primeros objetos por type
     */
    getTypeArray(menuData){
        // Se crea un objeto para guardar temporalmente el primer item por type
        const categoryMap = {}

        // Se itera por cada elemento del menuData
        menuData.forEach((element) => {
            // Si aun no existe el item por type, se almacena, de lo contrario se descarta
            if (!categoryMap[element.type]) {
                categoryMap[element.type] = {
                    img: element.img,
                    name: element.name,
                    type: element.type
                }
            }
        });

        // Se convierte el objeto creado anteriormente de forma temporal en un array
        return Object.values(categoryMap)
    }



    /**
     * Metodo para filtrar el menu mostrado por medio de la clase ProductList
     * Usando el target de los botones del contenedor donde se renderiza el menu
     */
    setupEventListener (){
        this.containerId.addEventListener("click", (e)=>{
            const button = e.target.closest('[id^="type"]');

            if (button) {
                const productId = button.id.replace("type", "")
                
                this.ProductList.init(productId)

            }
        })
    }

    render(){
        this.containerId.innerHTML = this.menuTypeList
        .map((product)=> MenuCategoryCard(product))
        .join("")
    }
}
;// ./src/js/script.js
// * Import del CSS para el reconocimiento de WebPack


// * Import de los assets para el proyecto



// * ============== Import de Services =========
// Service para inicializar el carrito de compras


// * ============= Import de utils ==============
// Util para interaccion con navbar principal

// Util para interaccion con el carrito de compras


//* =============== Import de components ============
// component para la muestra del menu de alimentos

// component para la muestra del carrito de compras y sus funcionalidades

// component para la muestra de los datos en cantidad de items del carrito y muestra del subtotal del carrito

// component para la muestra del menu y sus filtros





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
/******/ })()
;