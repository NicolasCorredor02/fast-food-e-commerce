/**
 * 
 * @returns {Array} // Se retorna la informacion del menu en un array de objs
 */
export const getData = async () => {
    const url = "/js/constants/menu.json"
    try {
        const respuesta = await fetch(url) // Se espera al retorno de la informacion en formato JSON
        const resultado = await respuesta.json() // Se espera que se parsee la info de JSON a un array
        
        return resultado
    } catch (error) {
        console.log(error);
        
    }
}