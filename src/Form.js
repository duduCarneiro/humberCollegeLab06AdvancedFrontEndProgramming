import React, { useState } from 'react';
import './Form.css';


function Form() {
const [usdollar, setUsdollar] = useState("");
const [caddollar, setCaddollar] = useState("");
const [error, setError] = useState(false);
const [result, setResult] = useState(false);

function conversion(usmoney) {
   setCaddollar(usmoney*1.34);
}

function moneyValueHandler(e) {
   let value = parseInt(e.target.value);
   if (!Number(e.target.value)) {
      setError(true)
   } else {
      setError(false)
      setUsdollar(value)};

}
function myHandler(e) {
   e.preventDefault();
   if (parseInt(usdollar) < 0 ) {
      alert(usdollar + " is not a positive value!");
   } else {
      conversion(usdollar);
      setResult(true);
   }
}

return (
   <div className='Form'>
   <h1>Currency converter app</h1>
   <form onSubmit={myHandler}>
      <h3>Enter the amount of money in american dollar:</h3>
      <input style={{"width": "100px"}}
      type="text"
      name="value"
      value={usdollar}
      onChange={(e) => moneyValueHandler(e)}
      required
      />
      {error ? <span style={{color: "red"}}>  <strong>your input should be a number!</strong></span>: null}
      <br /> <br />
      <input type="submit" value="Submit" />
      {result ? <p>{usdollar} USD correspond to the value of {caddollar} CAD - (exchange rate in Feb 16th)</p>: null}
   </form>
   </div>
);
}

export default Form;