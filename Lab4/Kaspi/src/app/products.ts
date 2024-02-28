export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  raiting: number;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Borjomi 1.25',
    price: 237,
    description: 'Water',
    image: "../assets/images/borjomi.png",
    raiting: 5,
    link: "https://kaspi.kz/shop/p/borjomi-lechebno-stolovaja-gazirovannaja-1-25-l-100210995/?c=750000000&m=Magnum&sr=1&qid=ff16c01fb12106def731181c8a50b5d2&ref=shared_link"
  },
  {
    id: 2,
    name: 'Coca-Cola 2',
    price: 689,
    description: 'Soda',
    image: "../assets/images/cola.png",
    raiting: 5,
    link:"https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-2-l-100208094/?c=750000000&m=Magnum&sr=2&ref=shared_link"
  },
  {
    id: 3,
    name: 'Pepsi 2',
    price: 695,
    description: 'Soda',
    image: "../assets/images/pepsi.png",
    raiting: 5,
    link: "https://kaspi.kz/shop/p/pepsi-gazirovannyi-napitok-2-l-100803045/?c=750000000&m=Magnum&sr=4&ref=shared_link"
  },
  {
    id: 4,
    name: 'Fanta 2',
    price: 695,
    description: 'Soda',
    image: "../assets/images/fanta.png",
    raiting: 5,
    link: "https://kaspi.kz/shop/p/fanta-gazirovannyi-napitok-2-l-100208121/?c=750000000&m=Magnum&sr=10&ref=shared_link"
  },
  {
    id: 5,
    name: 'Sprite 2',
    price: 695,
    description: 'Soda',
    image: "../assets/images/sprite.png",
    raiting: 5,
    link: "https://kaspi.kz/shop/p/sprite-gazirovannyi-napitok-2-l-100208120/?c=750000000&m=Magnum&sr=49&ref=shared_link"
  },
  {
    id: 6,
    name: 'MaxiTea 1.5',
    price: 150,
    description: 'Cold tea',
    image: "../assets/images/maxi.png",
    raiting: 5,
    link: "https://kaspi.kz/shop/p/holodnyi-chai-maxi-chai-zelenyi-limon-1-2-l-100234969/?c=750000000&m=Magnum&sr=14&ref=shared_link"
  },
  {
    id: 7,
    name: 'Nestle 1.5',
    price: 150,
    description: 'Water',
    image: "../assets/images/nestle.png",
    raiting: 5,
    link: "https://kaspi.kz/shop/p/nestle-pure-life-gazirovannaja-1-5-l-100210994/?c=750000000&m=Magnum&sr=1&ref=shared_link"
  },
  {
    id: 8,
    name: 'Lipton 1.5',
    price: 150,
    description: 'Cold tea',
    image: "../assets/images/lipton.png",
    raiting: 5,
    link: "https://kaspi.kz/shop/p/lipton-ice-tea-zelenyi-1-5-l-100210993/?c=750000000&m=Magnum&sr=1&ref=shared_link"
  },
  {
    id: 9,
    name: 'Pepsi 1.5',
    price: 150,
    description: 'Soda',
    image: "../assets/images/pepsi.png",
    raiting: 5,
    link: "https://kaspi.kz/shop/p/pepsi-gazirovannyi-napitok-1-5-l-100803044/?c=750000000&m=Magnum&sr=1&ref=shared_link"
  },
  {
    id: 10,
    name: 'Fanta 1.5',
    price: 150,
    description: 'Soda',
    image: "../assets/images/fanta.png",
    raiting: 5,
    link: "https://kaspi.kz/shop/p/fanta-gazirovannyi-napitok-1-5-l-100208119/?c=750000000&m=Magnum&sr=1&ref=shared_link"
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/