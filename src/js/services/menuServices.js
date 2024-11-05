// * Se importa el archivo JSON (local) que contiene el menu a mostrar
import menuData from '../constants/menu.json' assert {type: 'json'}

/**
 * 
 * @param {string} tipo // Se recibe el tipo del elemento que se quiere buscar, por default tiene todo seleccionado
 * @returns // regresa un array con los objetos encontrados
 */
export const getMenuByType = (tipo = 'all') =>{
    try {
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
export const getItemById = (id) =>{    
    try {    
        const element =  menuData.find((obj) => obj.id === id)      
        return element
    } catch (error) {
        console.error('Error al encontrar el elemento: ', error);
    }
    
}