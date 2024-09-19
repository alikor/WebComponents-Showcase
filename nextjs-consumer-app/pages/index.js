// pages/index.js
import React, { useEffect } from 'react';
import Script from 'next/script';

const Home = () => {
  useEffect(() => {
    // Add event listeners after components are loaded
    const openModalBtn = document.getElementById('open-modal-btn');
    const myModal = document.querySelector('my-modal');

    if (openModalBtn && myModal) {
      openModalBtn.addEventListener('click', () => {
        myModal.show();
      });
    }
  }, []);

  return (
    <div>
      <h1>Next.js Consumer Application</h1>

      {/* Load the Web Components using next/script */}
      <Script
        type="module"
        src="http://localhost:3000/components/my-button.js"
      />
      <Script
        type="module"
        src="http://localhost:3000/components/my-modal.js"
      />

      {/* Use the custom elements */}
      <my-button id="open-modal-btn" label="Open Modal"></my-button>

      <my-modal>
        <h2>This is a Modal Dialog</h2>
        <p>Content inside the modal.</p>
      </my-modal>
    </div>
  );
};

export default Home;