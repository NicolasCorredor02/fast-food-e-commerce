import Swal from "sweetalert2";

export const userNotification = (type) =>{
    switch (type) {
        case 'success':
            Swal.fire({
                icon: "success",
                title: "Registro exitoso!"
              });
            break;
        case 'error':
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No puedes agregar productos al carrito hasta registrarse!"
              });
            break;
        default:
            break;
    }
    
}