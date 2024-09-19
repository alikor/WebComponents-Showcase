import React from 'react';
import ReactDOM from 'react-dom/client';
import MyReactComponent from './MyReactComponent';
import reactToWebComponent from 'react-to-webcomponent';
import r2wc from "react-to-webcomponent"


// Define the custom element
customElements.define(
  'my-react-component',
  r2wc(MyReactComponent, React, ReactDOM, {
    props: {
      name: "string",
    },
  })
);