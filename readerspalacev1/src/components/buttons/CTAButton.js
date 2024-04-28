import React from 'react';

function CTAButton({ text, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', fontSize: '16px', borderRadius: '5px', cursor: 'pointer' }}>
      {text}
    </button>
  );
}

export default CTAButton;