import { ProductCard } from "./ProductCard"; // Import del template o componente del card para cada producto
import { getMenuByType } from "../../services/menuServices"; // Import de la funcion para obtener los items del menu.json
import { getItemById } from "../../services/menuServices"; //Import de la funcion para obtener el objeto enterio del menu stock
import { addToShoppingCart } from "../../services/shoppingCart"; //Import de la funcion para agregar el objeto al carrito del localStorage
import { getUserSession } from "../../services/userServices"; // Import de la funcion getUserSession para conocer el estado de session del usuario
import { userNotification } from "../alerts/user/alertsUser"; // Import de la funcion para generar las notificaciones al usuario

export class ProductList {
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

  async init(type) {
    try {
      this.productsList = await getMenuByType(type);
      this.render();
    } catch (error) {
      console.error("Error al cargar elementos en el DOM: ", error);
      this.containerId.innerHTML = "Error al cargar elementos...";
    }
  }

  setupEventListener() {
    // 1. Se agrega el eventListener al contenedor donde se renderiza
    this.containerId.addEventListener("click", async (e) => {

      // 2. Se busca si el click fue en un botón o dentro de él, busca aquellos botones que tengan agregar al incio en su id
      const button = e.target.closest('[id^="agregar"]');

      // 3. Si existe la interaccion con un botón, se ejecuta el if
      if (button) {

        if (getUserSession()) {
          /**
            *  4. Se extrae el Id del producto a traves del Id original del boton,
            *  esto remplaza la palabra "agregar" por '' quedando solo el id
          */  
          const productId = button.id.replace("agregar", "")

          // 5. Se ejecutan las funciones importadas para agregar al carrito
          addToShoppingCart(await getItemById(productId));
        } else {
          userNotification('error')
        }
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
