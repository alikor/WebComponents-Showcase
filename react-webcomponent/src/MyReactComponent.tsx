import React from 'react';

interface MyReactComponentProps {
  name?: string;
}

const MyReactComponent: React.FC<MyReactComponentProps> = ({ name = 'World' }) => {
  return (
    <div style={{ border: '2px solid #4CAF50', padding: '16px', borderRadius: '8px' }}>
      <h2>Hello, {name}!</h2>
      <p>This is a React component wrapped as a Web Component.</p>
    </div>
  );
};

export default MyReactComponent;