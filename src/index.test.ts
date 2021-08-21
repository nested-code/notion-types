import { addOne } from './index'

describe('addOne', () => {
  it('adds one', () => {
    expect(addOne(0)).toEqual(1)
    expect(addOne(99)).toEqual(100)
    expect(addOne(-1)).toEqual(0)
  })
})
