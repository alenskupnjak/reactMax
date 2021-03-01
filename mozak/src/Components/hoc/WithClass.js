import React from 'react'

const WithClass = props => {
  return (
    <div className='App'>
      <p style={{
        backgroundColor:'red', 
        width:'200px', 
        textAlign:'center', 
        alignItems:'center'}} >Na vrhu sam xx:{props.poslaoporuku}
      </p>
      {props.children}
    </div>
  )
}

export default WithClass
