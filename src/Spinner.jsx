import spinner from './Images/spinner.gif';
import React from 'react'

const Spinner = () => {
  return (
    <img src={spinner}
    alt="loading"
    style={{
        width:'200px',
        margin:'auto',
        display:'block'
    }}
    />
  )
}
export default Spinner;

