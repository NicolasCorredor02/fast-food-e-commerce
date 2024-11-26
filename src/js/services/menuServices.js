import { getData } from "./dataServices" // Se importa la funcion "getData()" para obtener la informacion del JSON local

/**
 * 
 * @param {string} tipo // Se recibe el tipo del elemento que se quiere buscar, por default tiene todo seleccionado
 * @returns // regresa un array con los objetos encontrados
 */
export const getMenuByType = async (tipo = 'all') =>{ 
    try {

        const menuData = await getData()
        
        if (tipo != 'all') {
            const elementFilter = menuData.filter((obj) => obj.type.toLowerCase() === tipo.toLowerCase())

            return elementFilter
        } else {
            return menuData
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
export const getItemById = async (id) =>{    
    try {    

        const menuData = await getData()

        const element =  menuData.find((obj) => obj.id === id)      
        return element
    } catch (error) {
        console.error('Error al encontrar el elemento: ', error);
    }
    
}