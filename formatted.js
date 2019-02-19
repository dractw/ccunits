import big from 'big.js'

const big = (value = 0) => {
  return new Big(value)
}

const formatted = (big(value), currencyDecimal) => {
  const [integer, decimal] = String(value).split('.')
  
  console.log(decimal.length)
  
  if (decimal && decimal.length >= currencyDecimal) {
    return`${integer}.${decimal.slice(0, currencyDecimal)}`
  }
  
  if (decimal) {
    return `${integer}.${decimal}`
  }
  
  return integer
}

export default formatted()
