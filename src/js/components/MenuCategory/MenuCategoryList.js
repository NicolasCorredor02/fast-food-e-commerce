import { getData } from '../../services/dataServices' // Se importa la funcion "getData()" para obtener la informacion del JSON local
import { MenuCategoryCard } from './MenuCategoryCard' // Import de la funcion MenuCategoryCard para renderizar las cards del menu
import { ProductList } from '../Products/ProductList' // Import de la clase ProductList para el uso de la clase y renderizar los productos filtrados

export class MenuCategoryList {
    constructor(containerId, continerFilterId){
        this.containerId = document.getElementById(containerId)
        this.continerFilterId = document.getElementById(continerFilterId)
        this.menuTypeList = []


        this.init()
        this.ProductList = new ProductList(continerFilterId)
        this.setupEventListener()

    }

   async init(){
        try {
            const menuData = await getData()
            this.menuTypeList = this.getTypeArray(menuData)
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