import { useState } from 'react'
import './App.css'
import Product from './product'

function App() {
  const productName = "Buzdolabı";

  
  return (
    <div>
      <Product productName = "Ayakkabı" price={3200}/>
      <Product productName = "pantolon" price= {950} />
      <Product productName = "ruj" price= {50} />
      <Product productName = "silikon" price= {90} />
      <Product productName={productName} price = {15000} />

    </div>
  )
}

export default App
