import Big from 'big.js'

const big = (value = 0) => {
  return new Big(value)
}

const toCurrencyUnit = (value = 0, currencyDecimal = 0) => {
  
  value = big(value).toString()
  
  let integerPart = value
    .substring(0, value.length - currencyDecimal)
    .replace(/^0+/, '') || 0
  
  const fractionPart = value.substring(value.length - currencyDecimal)
    .padStart(this.currencyDecimal, '0')
    .replace(/0+$/, '')
  
  if (fractionPart !== '') {
    return `${integerPart}.${fractionPart}`
  }
  
  return `${integerPart}`
}

export default toCurrencyUnit()
