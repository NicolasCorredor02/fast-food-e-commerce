/**
 * 
 * @param {object} product // Funcion que recibe un objeto para renderizar un card de tipo de menu para mostrar en el DOM
 * @returns 
 */
export const MenuCategoryCard = (product) => {
  return `
    <div id="type${product.type}" class="flex flex-col bg-orange shadow-md shadow-black rounded-3xl md:rounded-none md:rounded-es-3xl md:rounded-ee-3xl p-3">
        <img src="${product.img}" alt="${product.name}">
        <p class="uppercase text-white font-semibold">${product.type}</p>
    </div>
    `;
};
