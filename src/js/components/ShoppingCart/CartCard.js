export const CartCard = (product) =>{
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