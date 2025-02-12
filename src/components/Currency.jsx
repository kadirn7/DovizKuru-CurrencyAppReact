import React from 'react';
import '../css/currency.css';
import { useState } from 'react';

function Currency() {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [convertedAmount, setConvertedAmount] = useState(0);

  return <div className='currency-div'>
    <div >
        <h3 style={{marginTop: '-20px',fontFamily:'Arial',fontSize:'20px',fontWeight:'bold'}}>Döviz Kuru Uygulaması</h3>
    </div>

    <div>
    <input 
    type="number" 
    className='amount' 
    placeholder='Amount' 
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    />
    <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="TRY">TRY</option>
        
    </select>
    <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
        <option value="USD">TRY</option>
        <option value="EUR">USD</option>
        <option value="TRY">EUR</option>
    </select>
    <input 
    type="number" 
    className='converted-amount' 
    placeholder='Converted Amount'
    value={convertedAmount}
    onChange={(e) => setConvertedAmount(e.target.value)}
     />
    </div>
    <div>
        <button style={{marginTop: '10px',width:'100px',height:'30px',borderRadius:'5px',border:'none',backgroundColor:'#000',color:'#fff',cursor:'pointer'}}> Çevir</button>
    </div>
  </div>
};

export default Currency