
class MegaMenu extends HTMLElement {
    constructor() {
      super();  

      let items = document.querySelector(".header__inline-menu").querySelectorAll("details");
      items.forEach(item => {
        item.addEventListener("mouseover", () => {
          item.setAttribute("open", true);
          item.querySelector("ul").addEventListener("mouseleave", () => {
           item.removeAttribute("open");
          });
        item.addEventListener("mouseleave", () => {
          item.removeAttribute("open");
        });
      });
      
      });         
    }
  }
  customElements.define('top-nav-wrapper', MegaMenu);