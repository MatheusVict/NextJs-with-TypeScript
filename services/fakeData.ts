export type TBrand = {
  id: number;
  name: string;
};

export const fakeBrands: TBrand[] = [
  {id: 1, name: 'Dell'},
  {id: 2, name: 'Lenovo'},
  {id: 3, name: 'Acer'},
]

export type Tcomputer = {
  id: number;
  cpu: string;
  ram: number;
  gpu: string;
  storage: number;
  price: number;
}

export const fakeComputer: Tcomputer[] = [
  {
    id: 1,
    cpu: 'Ryzen 7',
    ram: 16,
    gpu: 'GTX 1650',
    storage: 1024,
    price: 5000
  },
  {
    id: 2,
    cpu: 'Ryzen 5',
    ram: 8,
    gpu: 'GTX 1650',
    storage: 1024,
    price: 5000
  },
  {
    id: 3,
    cpu: 'Ryzen 7',
    ram: 16,
    gpu: 'GTX 1650 TI',
    storage: 1024,
    price: 5000
  },
  {
    id: 4,
    cpu: 'i5',
    ram: 8,
    gpu: 'GTX 1650',
    storage: 1024,
    price: 5000
  },
  {
    id: 5,
    cpu: 'i7',
    ram: 8,
    gpu: 'GTX 1650',
    storage: 1024,
    price: 5000
  },
  {
    id: 6,
    cpu: 'i5',
    ram: 8,
    gpu: 'GTX 1650',
    storage: 1024,
    price: 5000
  },
]