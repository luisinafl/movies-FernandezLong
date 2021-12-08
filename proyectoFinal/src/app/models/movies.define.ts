// export interface DetailImages {
//   url: string;
//   url2: string;
//   url3: string;
// }
// export interface Actors {
//   name: string;
// }

export interface Movie {
  id: number;
  name: string;
  image: string;
  detailImages: {
    url: string;
    url2: string;
    url3: string;
  };
  genre: string;
  details: string;
  actors: string;
  releaseYear: number;
  price: number;
}

export const movies: Movie[] = [
  {
    id: 1,
    name: 'Shrek',
    image: '/assets/images/Shrek-poster.jpg',
    detailImages: {
      url: '/assets/images/Shrek/Shrek-1.jpg',
      url2: '/assets/images/Shrek/Shrek-2.jpg',
      url3: '/assets/images/Shrek/Shrek-3.jpg',
    },
    genre: 'Comedia',
    details:
      'Hace mucho tiempo, en una lejana ciénaga, vivía un ogro llamado Shrek. Un día, su preciada soledad se ve interrumpida por un montón de personajes de cuento de hadas que invaden su casa. Todos fueron desterrados de su reino por el malvado Lord Farquaad.',
    actors: 'Eddie Murphy, Mike Myers, Cameron Diaz',

    releaseYear: 2001,
    price: 50,
  },
  {
    id: 2,
    name: 'Shrek 2',
    image: '/assets/images/Shrek-poster.jpg',
    detailImages: {
      url: '/assets/images/Shrek/Shrek-1.jpg',
      url2: '/assets/images/Shrek/Shrek-2.jpg',
      url3: '/assets/images/Shrek/Shrek-3.jpg',
    },
    genre: 'Comedia',
    details:
      'Hace mucho tiempo, en una lejana ciénaga, vivía un ogro llamado Shrek. Un día, su preciada soledad se ve interrumpida por un montón de personajes de cuento de hadas que invaden su casa. Todos fueron desterrados de su reino por el malvado Lord Farquaad.',
    actors: 'Eddie Murphy, Mike Myers, Cameron Diaz',

    releaseYear: 2001,
    price: 50,
  },
  {
    id: 3,
    name: 'Shrek 3',
    image: '/assets/images/Shrek-poster.jpg',
    detailImages: {
      url: '/assets/images/Shrek/Shrek-1.jpg',
      url2: '/assets/images/Shrek/Shrek-2.jpg',
      url3: '/assets/images/Shrek/Shrek-3.jpg',
    },
    genre: 'Comedia',
    details:
      'Hace mucho tiempo, en una lejana ciénaga, vivía un ogro llamado Shrek. Un día, su preciada soledad se ve interrumpida por un montón de personajes de cuento de hadas que invaden su casa. Todos fueron desterrados de su reino por el malvado Lord Farquaad.',
    actors: 'Eddie Murphy, Mike Myers, Cameron Diaz',

    releaseYear: 2001,
    price: 50,
  },
];
