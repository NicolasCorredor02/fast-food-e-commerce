// * Import del CSS para el reconocimiento de WebPack
import "../css/styles.css"

// * Import de los assets para el proyecto
import "../assets/logo-yeli-burger.webp"
import "../assets/cart-icon.svg"
import "../assets/hamburger-banner.webp"
import "../assets/burger-doble-carne.webp"
import "../assets/banner-view-menu.webp"


// * Import de helpers
// Helper para interaccion con navbar principal
import { NavbarMenu } from "./helpers/navbarShow"

/**
 * * Se usa DOMContentLoaded sobre todo el documento para evitar problemas en sobre la interaccion del JS con el HTML,
 * * ya que, se espera a que cargue completamente el HTML para poder ejecutar el JS
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // * Se instancia un nuevo objeto de tipo NavbarMenu() para usar su clase y metodos
    const navbarMenu = new NavbarMenu();
})

