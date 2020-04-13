export class Fabricante {
  get codigo(): number {
    return this._codigo;
  }

  set codigo(value: number) {
    this._codigo = value;
  }
  constructor(private _nome:String,private _codigo:number) {}


  get nome(): String {
    return this._nome;
  }

  set nome(value: String) {
    this._nome = value;
  }
}
