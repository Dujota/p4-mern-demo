
import { useState } from 'react';
import './App.css';

function App() {
  const [lineItem, setLineItem] = useState('');
  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const url = '/api/orders';
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lineItems: lineItem })
      }

      const res = await fetch(url, options);
      const newOrder = await res.json()
      window.alert(newOrder)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="lineItem">Line Item</label>
        <input type="text" id="lineItem" onChange={e => setLineItem(e.target.value)} value={lineItem}/>

        <button type="submit">Add Line Item</button>
      </form>
    </div>
  );
}

export default App;
