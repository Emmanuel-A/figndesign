
class MegaMenu extends HTMLElement {
    constructor() {
      super();  

      this.querySelectorAll('.first-level-link').forEach(e => e.addEventListener('mouseover', this.hide.bind(this, false)));  
    //   this.addEventListener('keyup', (event) => {
    //     if (event.code.toUpperCase() === 'ESCAPE') this.hide();
    //   });
    //   if (this.classList.contains('media-modal')) {
    //     this.addEventListener('pointerup', (event) => {
    //       if (event.pointerType === 'mouse' && !event.target.closest('deferred-media, product-model')) this.hide();
    //     });
    //   } else {
    //     this.addEventListener('click', (event) => {
    //       if (event.target === this) this.hide();
    //     });
    //   }
    }
  
    // connectedCallback() {
    //   if (this.moved) return;
    //   this.moved = true;
    //   document.body.appendChild(this);
    // }
  
    // show(opener) {
    //   this.openedBy = opener;
    //   const popup = this.querySelector('.template-popup');
    //   document.body.classList.add('overflow-hidden');
    //   this.setAttribute('open', '');
    //   if (popup) popup.loadContent();
    //   trapFocus(this, this.querySelector('[role="dialog"]'));
    //   window.pauseAllMedia();
    // }
  
    hide() {
      console.log('Closed or Hide');
      document.querySelector
    //   document.body.classList.remove('overflow-hidden');
    //   document.body.dispatchEvent(new CustomEvent('modalClosed'));
    //   this.removeAttribute('open');
    //   removeTrapFocus(this.openedBy);
    //   window.pauseAllMedia();
    }
  }
  customElements.define('top-nav-wrapper', MegaMenu);