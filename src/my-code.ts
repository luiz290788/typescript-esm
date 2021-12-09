import { Input } from './abstract'
import { injectable } from 'inversify'

@injectable()
export class A {
  constructor(private readonly input: Input) {}
}
