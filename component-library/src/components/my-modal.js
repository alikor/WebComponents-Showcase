// src/components/my-modal.js
class MyModal extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.isOpen = false;
  
      this.shadowRoot.innerHTML = `
        <style>
          #backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: none;
            justify-content: center;
            align-items: center;
          }
          #modal {
            background: white;
            padding: 20px;
            border-radius: 5px;
          }
          #close-btn {
            margin-top: 10px;
          }
        </style>
        <div id="backdrop">
          <div id="modal">
            <slot></slot>
            <button id="close-btn">Close</button>
          </div>
        </div>
      `;
  
      this.backdrop = this.shadowRoot.querySelector('#backdrop');
      this.closeBtn = this.shadowRoot.querySelector('#close-btn');
  
      this.closeBtn.addEventListener('click', () => this.hide());
    }
  
    show() {
      this.isOpen = true;
      this.backdrop.style.display = 'flex';
    }
  
    hide() {
      this.isOpen = false;
      this.backdrop.style.display = 'none';
    }
  
    connectedCallback() {
      if (this.getAttribute('open') === 'true') {
        this.show();
      }
    }
  }
  
  customElements.define('my-modal', MyModal);
  