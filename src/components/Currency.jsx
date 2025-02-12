import React from 'react';
import '../css/currency.css';
import { useState } from 'react';
import axios from 'axios';

let BaseUrl="https://api.freecurrencyapi.com/v1/latest";
let ApiKey="fca_live_Y6znZqfAADtwhnfCE3FCOJZQeWE5pWabcRH02Spq";


function Currency() {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [convertedAmount, setConvertedAmount] = useState(0);
    

    const exchange = async () => {
        try {
            const response = await axios.get(`${BaseUrl}?apikey=${ApiKey}&base_currency=${fromCurrency}&currencies=${toCurrency}`)
            console.log(response.data.data[toCurrency]);
            setConvertedAmount(response.data.data[toCurrency] * amount);
        } catch (error) {
            console.log(error);
        }
    }

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
        <button style={{marginTop: '10px',width:'100px',height:'30px',borderRadius:'5px',border:'none',backgroundColor:'#000',color:'#fff',cursor:'pointer'}}
        onClick={(exchange)}
        > Çevir</button>
    </div>
  </div>
};

export default Currency