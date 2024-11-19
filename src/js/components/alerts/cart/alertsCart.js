import { Notyf } from "notyf";

export const addItem = (type) =>{
    let notyf = new Notyf()
    switch (type) {
        case 'success':
             notyf.success('🛒 Producto agregado!')
            break;
        case 'remove':
            notyf.error({
                message: 'Producto eliminado!',
                background:'orange'
            })
            break;
        case 'finish':
            notyf.success('Compra realizada con exito!')
            break;
        default:
            break;
    }
    
}