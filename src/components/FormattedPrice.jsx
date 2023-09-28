import React from 'react'

function FormattedPrice({amount}) {
    const fAmount = new Number(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
    })
  return (
    <span>{fAmount}</span>
  )
}

export default FormattedPrice