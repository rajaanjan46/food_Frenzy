import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Products(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    axios.get('/api/products')
      .then(r=>{ setProducts(r.data); setLoading(false) })
      .catch(e=>{ setError(e.message); setLoading(false) })
  },[])

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(p=> (
          <li key={p.pid}>
            <strong>{p.pname}</strong> — ${p.pprice.toFixed(2)}
            <div>{p.pdescription}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
