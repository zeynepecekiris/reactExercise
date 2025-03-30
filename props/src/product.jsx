import React from 'react'

const Product = (props) => {
    console.log(props)
  return (
    <div>
     <div>ÜRÜN BİLGİLERİ</div>
     <div>
     <div>İsim : {props.productName} </div>
     <div>Fiyat: {props.price} </div>
     </div>
     <hr/>
     
    </div>
  )
}

export default Product
