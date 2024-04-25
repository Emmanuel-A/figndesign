
// class MegaMenu extends HTMLElement {
//     constructor() {
//       super();  

//       this.querySelectorAll('.first-level-link').forEach(e => e.addEventListener('mouseover', this.hide.bind(this, false)));  
//     }
  
//     show() {
//       console.log('Show');
//       this.querySelector('.header .top-nav-wrapper .first-level-link .second-level-link').classList.remove('show');
//       document.body.classList.add('overflow-hidden');
//       window.pauseAllMedia();
//     }
  
//     hide() {
//       console.log('Hide');
//       this.querySelector('.header .top-nav-wrapper .first-level-link .second-level-link').classList.add('show');
//       document.body.classList.remove('overflow-hidden');
//       window.pauseAllMedia();
//     }
    
//   }
//   customElements.define('top-nav-wrapper', MegaMenu);