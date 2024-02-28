export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  likes: number;
  link: string;
  categoryId: number;
}

export const products = [
  {
    id: 1,
    name: 'After Hours',
    price: 799,
    description: 'The Weeknd',
    image: 'https://m.media-amazon.com/images/I/813XseYNw1L._UF1000,1000_QL80_.jpg',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=XXYlFuWEuKI',
    categoryId: 1},
  {
    id: 2,
    name: 'My Beautiful Dark Twisted Fantasy',
    price: 699,
    description: 'Kanye West',
    image: 'https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=Jg5wkZ-dJXA',
    categoryId: 2},
  {
    id: 3,
    name: 'Astroworld',
    price: 299,
    description: 'Travis Scott',
    image: 'https://upload.wikimedia.org/wikipedia/ru/e/e0/Travis_Scott_Astroworld.jpg',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=6ONRf7h3Mdk',
    categoryId: 3},
  {
    id: 4,
    name: 'Igor',
    price: 399,
    description: 'Tyler, The Creator',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=3mQ3bF3i8wo',
    categoryId: 4},
  {
    id: 5,
    name: 'Dawn Fm',
    price: 799,
    description: 'The Weeknd',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/The_Weeknd_-_Dawn_FM.png',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=XXYlFuWEuKI',
    categoryId: 1},
  {
    id: 6,
    name: 'Yeezus',
    price: 699,
    description: 'Kanye West',
    image: 'https://upload.wikimedia.org/wikipedia/ru/8/83/Yeezus_Kanye_West.jpg',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=Jg5wkZ-dJXA',
    categoryId: 2},
  {
    id: 7,
    name: 'Rodeo',
    price: 299,
    description: 'Travis Scott',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Rodeo_-_Album_Cover_by_Travis_Scott%2C_September_4%2C_2015.jpg',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=6ONRf7h3Mdk',
    categoryId: 3},
  {
    id: 8,
    name: 'Call Me If You Get Lost',
    price: 399,
    description: 'Tyler, The Creator',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Call_Me_If_You_Get_Lost_album_cover.jpg',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=3mQ3bF3i8wo',
    categoryId: 4},
  {
    id: 9,
    name: 'Starboy',
    price: 799,
    description: 'The Weeknd',
    image: 'https://upload.wikimedia.org/wikipedia/ru/3/39/The_Weeknd_-_Starboy.png',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=XXYlFuWEuKI',
    categoryId: 1},
  {
    id: 10,
    name: 'The Life of Pablo',
    price: 699,
    description: 'Kanye West',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=Jg5wkZ-dJXA',
    categoryId: 2},
  {
    id: 11,
    name: 'Birds in the Trap Sing McKnight',
    price: 299,
    description: 'Travis Scott',
    image: 'https://images.genius.com/5f66b21e0c69ff6c30080f2c6795f025.924x924x1.jpg',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=6ONRf7h3Mdk',
    categoryId: 3},
  {
    id: 12,
    name: 'Flower Boy',
    price: 399,
    description: 'Tyler, The Creator',
    image: 'https://simg.marwin.kz/media/catalog/product/1/2/tyler_the_creator_flower_boy_2lp.jpg',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=3mQ3bF3i8wo',
    categoryId: 4},
  {
    id: 13,
    name: 'Kiss Land',
    price: 799,
    description: 'The Weeknd',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/ed/The_Weeknd_-_Kiss_Land.png',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=XXYlFuWEuKI',
    categoryId: 1},
  {
    id: 14,
    name: '808s & Heartbreak',
    price: 699,
    description: 'Kanye West',
    image: 'https://upload.wikimedia.org/wikipedia/en/f/f1/808s_%26_Heartbreak.png',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=Jg5wkZ-dJXA',
    categoryId: 2},
  {
    id: 15,
    name: 'Days Before Rodeo',
    price: 299,
    description: 'Travis Scott',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/08/Album_Cover_of_Travis_Scott%27s_Day_Before_Rodeo.jpg',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=6ONRf7h3Mdk',
    categoryId: 3},
  {
    id: 16,
    name: 'Goblin',
    price: 399,
    description: 'Tyler, The Creator',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Goblincover.jpg',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=3mQ3bF3i8wo',
    categoryId: 4},
  {
    id: 17,
    name: 'Trilogy',
    price: 799,
    description: 'The Weeknd',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/96/The_Weeknd_-_Trilogy.png',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=XXYlFuWEuKI',
    categoryId: 1},
  {
    id: 18,
    name: 'Graduation',
    price: 699,
    description: 'Kanye West',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=Jg5wkZ-dJXA',
    categoryId: 2},
  {
    id: 19,
    name: 'Utopia',
    price: 299,
    description: 'Travis Scott',
    image: 'https://m.media-amazon.com/images/I/51nMgSxPQeL._UF1000,1000_QL80_.jpg',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=6ONRf7h3Mdk',
    categoryId: 3},
  {
    id: 20,
    name: 'Wolf',
    price: 399,
    description: 'Tyler, The Creator',
    image: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Wolf_Cover2.jpg',
    likes: 0,
    link: 'https://www.youtube.com/watch?v=3mQ3bF3i8wo',
    categoryId: 4},
  
 
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/