import {add, multiply} from "../src/calc"

describe("test calc", () => {
  it("return 15 for add(10,5)", () => {
    expect(add(10,5)).toBe(15)
  })
  it("return 5 for add(2,3)", () => {
    expect(add(2,3)).toBe(5)
  })
})

describe('test multiply', () => { 
  it('return 20 for mult(4,5)', () => {
    expect(multiply(4,5)).toBe(20)
  })
  it('return 6 for multiply(2,3)', () => {
    expect(multiply(2,3)).toBe(6)
  })
})
