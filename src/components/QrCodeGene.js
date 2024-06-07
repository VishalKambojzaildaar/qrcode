import QRCode from 'qrcode.react';
import { useState } from 'react';

const QrCodeGene = ()=>{
    const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setQrValue(inputValue);
    setInputValue('');  // Clear the input field
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={inputValue}
        onChange={handleChange}
        style={{ padding: '10px', width: '300px' }}
      />
      <br />
      <button onClick={handleClick} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Generate QR Code
      </button>
      <div style={{ marginTop: '20px' }}>
        {qrValue && <QRCode value={qrValue} size={256} />}
      </div>
    </div>
  );
}

export default QrCodeGene;