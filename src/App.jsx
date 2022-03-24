
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // State
  const [lineItem, setLineItem] = useState('');
  const [orders, setOrders] = useState([])

  // handlers
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
      fetchOrders()
      window.alert(newOrder)

    } catch (error) {
      console.error(error);
    }
  }

  const fetchOrders = async () => {
    try {
      const jsonOrders = await fetch('/api/orders')
      const orderRes = await jsonOrders.json()
      setOrders(orderRes.orders)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(
    () => {
      // fetch my list
      fetchOrders()
    }, [] // empty array says on mount run once
  )

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="lineItem">Line Item</label>
        <input type="text" id="lineItem" onChange={e => setLineItem(e.target.value)} value={lineItem}/>
        <button type="submit">Add Line Item</button>
      </form>

      {orders.length
        ?
          orders.map( order => <li key={order._id}>{order.lineItem}</li>)
        :
          <p>Add some orders please!!</p>
      }
    </div>
  );
}

export default App;
