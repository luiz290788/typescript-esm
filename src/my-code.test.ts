import 'reflect-metadata'
import { A } from "./my-code"

it('should return the result', () => {
  expect(new A({ type: 'test', value: 10 })).toBeDefined()
})