import {add} from "../src/calc"

describe("test calc", () => {
  it("return 15 for add(10,5)", () => {
    expect(add(10,5)).toBe(15)
  })
})
