import Big from 'big.js'

const big = (value = 0) => {
  return new Big(value)
}

const formatted = (value = 0, currencyDecimal = 0) => {
  value = big(value).toString()
  
  const [integer, decimal] = value.split('.')
  
  if (decimal && decimal.length >= currencyDecimal) {
    return`${integer}.${decimal.slice(0, currencyDecimal)}`
  }
  
  if (decimal) {
    return `${integer}.${decimal}`
  }
  
  return integer
}

export default formatted()
