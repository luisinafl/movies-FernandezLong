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
    name: 'Anastasia',
    image: '/assets/images/Anastasia-poster.jpg',
    detailImages: {
      url: '/assets/images/Anastasia/Anastasia-1.jpg',
      url2: '/assets/images/Anastasia/Anastasia-2.jpg',
      url3: '/assets/images/Anastasia/Anastasia-3.jpg',
    },
    genre: 'Fantasía',
    details:
      'Años después de haber perdido a su familia por un maleficio del malvado Rasputín, una huérfana, que desconoce su propia identidad como princesa, logra reunirse con su abuela en París.',
    actors: 'Meg ryan, John Cusack, Angela Lansbury',
    releaseYear: 1997,
    price: 25,
  },
  {
    id: 3,
    name: 'Ponyo',
    image: '/assets/images/Ponyo-poster.jpg',
    detailImages: {
      url: '/assets/images/Ponyo/Ponyo-1.jpg',
      url2: '/assets/images/Ponyo/Ponyo-2.jpg',
      url3: '/assets/images/Ponyo/Ponyo-3.jpg',
    },
    genre: 'Fantasía',
    details:
      'Durante una excursión prohibida para ver el mundo de la superficie, una princesa pez de colores conoce a un niño llamado Sosuke, quien le pone el nombre de Ponyo. Ponyo quiere volverse un humano, y mientras crece su amistad, ella se vuelve más humana. El padre de Ponyo la regresa al reino del océano, pero el deseo de Ponyo es tan poderoso que ella se libera, y en el proceso, derrama una colección de elixires mágicos que ponen en peligro la aldea de Sosuke.',
    actors: 'Kazushige Nagashima, Yūki Amami, Tomoko Naraoka',
    releaseYear: 2009,
    price: 12,
  },
  {
    id: 4,
    name: 'Intensamente',
    image: '/assets/images/Inside-Out-poster.jpg',
    detailImages: {
      url: '/assets/images/Inside-Out/Inside-Out-1.jpg',
      url2: '/assets/images/Inside-Out/Inside-Out-2.jpg',
      url3: '/assets/images/Inside-Out/Inside-Out-3.jpg',
    },
    genre: 'Fantasía',
    details:
      'Durante una excursión prohibida para ver el mundo de la superficie, una princesa pez de colores conoce a un niño llamado Sosuke, quien le pone el nombre de Ponyo. Ponyo quiere volverse un humano, y mientras crece su amistad, ella se vuelve más humana. El padre de Ponyo la regresa al reino del océano, pero el deseo de Ponyo es tan poderoso que ella se libera, y en el proceso, derrama una colección de elixires mágicos que ponen en peligro la aldea de Sosuke.',
    actors: 'Amy Poehler, Phyllis Smith, Richard Kind',
    releaseYear: 2014,
    price: 175,
  },
  {
    id: 5,
    name: 'Coco',
    image: '/assets/images/Coco-poster.jpg',
    detailImages: {
      url: '/assets/images/Coco/Coco-1.jpg',
      url2: '/assets/images/Coco/Coco-2.jpg',
      url3: '/assets/images/Coco/Coco-3.jpg',
    },
    genre: 'Aventura',
    details:
      'Miguel es un niño que sueña con ser músico, pero su familia se lo prohíbe porque su tatarabuelo, músico, los abandonó, y quieren obligar a Miguel a ser zapatero, como todos los miembros de la familia. Por accidente, Miguel entra en la Tierra de los Muertos, de donde sólo podrá salir si un familiar difunto le concede su bendición, pero su tatarabuela se niega a dejarlo volver con los vivos si no promete que no será músico. Debido a eso, Miguel escapa de ella y empieza a buscar a su tatarabuelo.',
    actors: 'Anthony Gonzalez, Gael García Bernal, Benjamin Bratt',
    releaseYear: 2017,
    price: 175,
  },
  {
    id: 6,
    name: 'Up',
    image: '/assets/images/Up-poster.jpg',
    detailImages: {
      url: '/assets/images/Up/Up-1.jpg',
      url2: '/assets/images/Up/Up-2.jpg',
      url3: '/assets/images/Up/Up-3.jpg',
    },
    genre: 'Aventura',
    details:
      'Carl Fredricksen es un vendedor de globos de 78 años de edad dispuesto a cumplir su sueño: atar miles de globos a su casa y volar a Sudamérica. Sin embargo, descubre demasiado tarde a un joven e inesperado polizón. Lo que en principio será recelo, acabará por tornarse simpatía hacia el muchacho mientras juntos pasan fascinantes aventuras en exóticos lugares.',
    actors: 'Edward Asner, Christopher Plummer, Jordan Nagai',
    releaseYear: 2009,
    price: 37,
  },
  {
    id: 7,
    name: 'Enredados',
    image: '/assets/images/Enredados-poster.jpg',
    detailImages: {
      url: '/assets/images/Enredados/Enredados-1.jpg',
      url2: '/assets/images/Enredados/Enredados-2.jpg',
      url3: '/assets/images/Enredados/Enredados-3.jpg',
    },
    genre: 'Aventura',
    details:
      'Flynn rider, el más buscado y encantador bandido del reino, se esconde en una misteriosa torre y allí se encuentra con Rapunzel, una bella y avispada adolescente con una cabellera dorada de 21 metros de largo, que vive encerrada allí desde hace años.',
    actors: 'Edward Asner, Christopher Plummer, Jordan Nagai',
    releaseYear: 2011,
    price: 134,
  },
  {
    id: 8,
    name: 'Lorax',
    image: '/assets/images/Lorax-poster.jpg',
    detailImages: {
      url: '/assets/images/Lorax/Lorax-1.jpg',
      url2: '/assets/images/Lorax/Lorax-2.jpg',
      url3: '/assets/images/Lorax/Lorax-3.jpg',
    },
    genre: 'Fantasía',
    details:
      'Ted, un niño de 12 años, vive en un lugar prácticamente desprovisto de naturaleza; en Thneedville no hay flores, ni árboles. Ted quiere ganarse el corazón de Audrey, la chica de sus sueños, pero para hacer esto, debe descubrir lo que ella más desea: un árbol Trúfula. Para conseguirlo, Ted profundiza en la historia del Lorax, alguna vez el guardián malhumorado del bosque, y de Once-ler, que permitió a su codicia superar el respeto por la naturaleza.',
    actors: 'Zac Efron, Ed Helms, Danny DeVito',
    releaseYear: 2012,
    price: 85,
  },
  {
    id: 9,
    name: 'Frozen',
    image: '/assets/images/Frozen-poster.jpg',
    detailImages: {
      url: '/assets/images/Frozen/Frozen-1.jpg',
      url2: '/assets/images/Frozen/Frozen-2.jpg',
      url3: '/assets/images/Frozen/Frozen-3.jpg',
    },
    genre: 'Fantasía',
    details:
      'Una profecía condena al reino de Arandelle a vivir en un invierno eterno. La joven Anna, el temerario montañero Kristoff y el reno Sven deben emprender un viaje épico y lleno de aventuras en busca de Elsa, la hermana de Anna y Reina de las Nieves. Ella es la única que puede poner fin al gélido hechizo.',
    actors: 'Zac Efron, Ed Helms, Danny DeVito',
    releaseYear: 2014,
    price: 55,
  },
  {
    id: 10,
    name: 'Toy Story',
    image: '/assets/images/ToyStory-poster.jpg',
    detailImages: {
      url: '/assets/images/ToyStory/ToyStory-1.jpg',
      url2: '/assets/images/ToyStory/ToyStory-2.jpg',
      url3: '/assets/images/ToyStory/ToyStory-3.jpg',
    },
    genre: 'Fantasía',
    details:
      'Los juguetes de Andy, un niño de seis años, temen que un nuevo regalo les sustituya en el corazón de su dueño. Woody, un vaquero que ha sido hasta ahora el juguete favorito, trata de tranquilizarlos hasta que aparece Buzz Lightyear.',
    actors: 'Tom Hanks, Tim Allen, Erik von Detten',
    releaseYear: 1995,
    price: 107,
  },
  {
    id: 11,
    name: 'Rey León',
    image: '/assets/images/ReyLeon-poster.jpg',
    detailImages: {
      url: '/assets/images/ReyLeon/ReyLeon-1.jpg',
      url2: '/assets/images/ReyLeon/ReyLeon-2.jpg',
      url3: '/assets/images/ReyLeon/ReyLeon-3.jpg',
    },
    genre: 'Fantasía',
    details:
      'Tras la muerte de su padre, Simba deberá enfrentarse a su tío para recuperar el trono de Rey de la Selva. Timón y Pumba le acompañarán en su misión.',
    actors: '	Matthew Broderick, James Earl Jones, Jeremy Irons',
    releaseYear: 1994,
    price: 145,
  },
  {
    id: 12,
    name: 'Akira',
    image: '/assets/images/Akira-poster.jpg',
    detailImages: {
      url: '/assets/images/Akira/Akira-1.jpg',
      url2: '/assets/images/Akira/Akira-2.jpg',
      url3: '/assets/images/Akira/Akira-3.jpg',
    },
    genre: 'Fantasía',
    details:
      'Tras un extraño accidente, el joven Tetsuo es sometido a experimentos secretos para controlar la mente.',
    actors: 'Mitsuo Iwata, Nozomu Sasaki, Mami Koyama',
    releaseYear: 1988,
    price: 55,
  },
];
