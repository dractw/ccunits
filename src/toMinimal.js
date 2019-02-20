import Big from 'big.js'

const big = (value = 0) => {
  return new Big(value)
}

const toMinimal = (value = 0, currencyDecimal = 0) => {
  
  value = big(value).toString()
  
  if (value.toString().indexOf('e') > 0) {
    const valueParts = String(value).match(/^([\d.]+)e-?(\d+)$/)
    
    value = '0.' + new Array(parseInt(valueParts[2], 10)).join('0') + valueParts[1].replace('.', '')
  }
  
  const [integerPart, fractionPart = ''] = value.toString().split(/[,.]/)
  const paddedFraction = fractionPart.length < currencyDecimal
    ? fractionPart.padEnd(currencyDecimal, '0')
    : fractionPart.substr(0, currencyDecimal)
  const result = `${integerPart}${paddedFraction}`.replace(/^0+/, '')
  
  if (result === '') {
    return '0'
  }
  
  return result
}

export default toMinimal()
