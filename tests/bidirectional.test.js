import { toMinimal, fromMinimal } from "../src"

const values = [
  {
    decimal: 6,
    min: '3324523412312323534',
    cur: '3324523412312.323534'
  },
  {
    decimal: 12,
    min: '954524462236',
    cur: '0.954524462236'
  },
  {
    decimal: 12,
    min: '985645342131',
    cur: '0.985645342131'
  },
  {
    decimal: 12,
    min: '6331703187881',
    cur: '6.331703187881'
  },
  {
    decimal: 8,
    min: '999991119991',
    cur: '9999.91119991'
  },
  {
    decimal: 6,
    min: '9',
    cur: '0.000009'
  },{
    decimal: 18,
    min: '91999',
    cur: '0.000000000000091999'
  },
  {
    decimal: 18,
    min: '989898989898989898989',
    cur: '989.898989898989898989'
  },
  {
    decimal: 12,
    min: '12346783',
    cur: '0.000012346783'
  },
  {
    decimal: 3,
    min: '5789',
    cur: '5.789'
  },
  {
    decimal: 8,
    min: '68921112',
    cur: '0.68921112'
  },
  {
    decimal: 18,
    min: '111111111111111111111',
    cur: '111.111111111111111111'
  },
]

values.forEach(({decimal, min, cur}) => {
  test('from min to currency unit', () => {
      expect(fromMinimal(min, decimal)).toBe(cur)
  })

  test('from cur to minimal unit', () => {
    expect(toMinimal(cur, decimal)).toBe(min)
  })
})

