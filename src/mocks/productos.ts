import {
  Producto,
  Proveedor,
  Marca,
  TipoProducto,
  SistemaOperativo,
} from "../interfaces/interfaces";

export const PROVEEDORES_MOCK: Proveedor[] = [
  {
    id: 1,
    nombre: "Tech Imports Miami",
    telefono: "+1 305 555 1234",
  },
  {
    id: 2,
    nombre: "Importadora Buenos Aires (Electro)",
    telefono: "+54 11 4444 5555",
  },
  {
    id: 3,
    nombre: "Deportes 10 Sur",
    telefono: "+54 11 2222 3333",
  },
];

export const MARCAS_MOCK: Record<string, Marca> = {
  APPLE: { id: "apple", nombre: "Apple" },
  SAMSUNG: { id: "samsung", nombre: "Samsung" },
  XIAOMI: { id: "xiaomi", nombre: "Xiaomi" },
  ADIDAS: { id: "adidas", nombre: "Adidas" },
};

export const PRODUCTOS_MOCK: Producto[] = [
  // Apple Smartphones
  {
    id: 101,
    nombre: "iPhone 15 Pro Max 256GB - Titanium",
    precio: 1200, // En dólares
    marca: MARCAS_MOCK.APPLE,
    tipo: TipoProducto.SMARTPHONE,
    stock: 15,
    proveedor: PROVEEDORES_MOCK[0],
    os: SistemaOperativo.IOS,
    moneda: "USD",
  },
  {
    id: 102,
    nombre: "iPhone 13 128GB - Midnight",
    precio: 600,
    marca: MARCAS_MOCK.APPLE,
    tipo: TipoProducto.SMARTPHONE,
    stock: 25,
    proveedor: PROVEEDORES_MOCK[0],
    os: SistemaOperativo.IOS,
    moneda: "USD",
  },
  // Samsung Smartphones
  {
    id: 201,
    nombre: "Samsung Galaxy S24 Ultra 256GB",
    precio: 1150,
    marca: MARCAS_MOCK.SAMSUNG,
    tipo: TipoProducto.SMARTPHONE,
    stock: 10,
    proveedor: PROVEEDORES_MOCK[1],
    os: SistemaOperativo.ANDROID,
    moneda: "USD",
  },
  // Xiaomi Smartphones
  {
    id: 301,
    nombre: "Xiaomi Redmi Note 13 Pro",
    precio: 350,
    marca: MARCAS_MOCK.XIAOMI,
    tipo: TipoProducto.SMARTPHONE,
    stock: 30,
    proveedor: PROVEEDORES_MOCK[1],
    os: SistemaOperativo.ANDROID,
    moneda: "USD",
  },
  // Accesorios Tech
  {
    id: 401,
    nombre: "AirPods Pro (2da generación)",
    precio: 250,
    marca: MARCAS_MOCK.APPLE,
    tipo: TipoProducto.AUDIFONO,
    stock: 20,
    proveedor: PROVEEDORES_MOCK[0],
    moneda: "USD",
  },
  {
    id: 402,
    nombre: "Cargador Apple 20W USB-C original",
    precio: 35,
    marca: MARCAS_MOCK.APPLE,
    tipo: TipoProducto.CARGADOR,
    stock: 50,
    proveedor: PROVEEDORES_MOCK[0],
    moneda: "USD",
  },
  // Indumentaria
  {
    id: 501,
    nombre: "Camiseta Selección Argentina - Titular 3 Estrellas",
    precio: 100,
    marca: MARCAS_MOCK.ADIDAS,
    tipo: TipoProducto.INDUMENTARIA,
    stock: 45,
    proveedor: PROVEEDORES_MOCK[2],
    moneda: "USD",
  },
  {
    id: 502,
    nombre: "Camiseta Selección Argentina - Suplente Violeta",
    precio: 90,
    marca: MARCAS_MOCK.ADIDAS,
    tipo: TipoProducto.INDUMENTARIA,
    stock: 12,
    proveedor: PROVEEDORES_MOCK[2],
    moneda: "USD",
  },
];
