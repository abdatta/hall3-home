export class Query {
  constructor(
    public name: string,
    public to: string,
    public subject: string,
    public message: string,
    public email?: string
  ) { }
}
