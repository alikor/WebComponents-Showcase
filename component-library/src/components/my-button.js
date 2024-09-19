// src/components/my-button.js
class MyButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.label = this.getAttribute('label') || 'Default Button';
  
      this.shadowRoot.innerHTML = `
        <style>
          button {
            background-color: #6200ee;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          button:hover {
            background-color: #3700b3;
          }
        </style>
        <button>${this.label}</button>
      `;
    }
  }
  
  customElements.define('my-button', MyButton);
  