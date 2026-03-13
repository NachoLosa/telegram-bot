export interface Proveedor {
  id: number;
  nombre: string;
  telefono: string;
}

export interface Marca {
  id: string;
  nombre: string;
}

export enum SistemaOperativo {
  ANDROID = "Android",
  IOS = "iOS",
}
export enum TipoProducto {
  SMARTPHONE = "Smartphone",
  TABLET = "Tablet",
  NOTEBOOK = "Notebook",
  AUDIFONO = "Audífono",
  CARGADOR = "Cargador",
  CABLE = "Cable",
  INDUMENTARIA = "Indumentaria",
  TECH = "Tech",
}
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  marca: Marca;
  tipo: TipoProducto;
  stock: number;
  proveedor: Proveedor;
  os?: SistemaOperativo;
  moneda: string;
}
