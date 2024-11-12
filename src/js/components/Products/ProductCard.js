/**
 *
 * @param {object} param0 // Este recibe el objeto de menu para renderizar la card que se mostrara en el DOM
 * @returns
 */
export const ProductCard = (product) => {
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
