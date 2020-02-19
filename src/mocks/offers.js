export default [
  {
    id: 0,
    src: `img/apartment-01.jpg`,
    photos: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Super description`,
    premium: true,
    bedrooms: 3,
    guests: 4,
    features: [`Wifi`, `Cable TV`, `Kitchen`],
    owner: {
      name: `Jon`,
      super: true,
      src: `img/avatar-max.jpg`
    },
    price: 120,
    rating: 1,
    name: `Name0`,
    type: `Apartment`,
    coordinates: [52.3909553943508, 4.85309666406198],
    reviews: [
      {id: 0, text: `Review1 object1`, rating: 1, user: `Max`, date: `2017-01-26`},
      {id: 1, text: `Review2 object1`, rating: 1, user: `Max`, date: `2018-01-26`},
      {id: 2, text: `Review3 object1`, rating: 1, user: `Max`, date: `2019-01-26`}
    ],
    neighborhood: [
      {id: 1, coordinates: [52.369553943508, 4.85309666406198]},
      {id: 2, coordinates: [52.3909553943508, 4.929309666406198]},
    ]
  },
  {
    id: 1,
    src: `img/apartment-01.jpg`,
    photos: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Super description`,
    premium: true,
    bedrooms: 3,
    guests: 4,
    features: [`Wifi`, `Cable TV`, `Kitchen`],
    owner: {
      name: `Jon`,
      super: true,
      src: `img/avatar-max.jpg`
    },
    price: 220,
    rating: 2,
    name: `Name1`,
    type: `NeApartment`,
    coordinates: [52.369553943508, 4.85309666406198],
    reviews: [
      {id: 0, text: `Review1 object2`, rating: 1, user: `Max`, date: `2017-01-26`},
      {id: 1, text: `Review2 object2`, rating: 1, user: `Max`, date: `2018-01-26`},
      {id: 2, text: `Review3 object2`, rating: 1, user: `Max`, date: `2019-01-26`}
    ],
    neighborhood: [
      {id: 0, coordinates: [52.3909553943508, 4.85309666406198]},
      {id: 2, coordinates: [52.3909553943508, 4.929309666406198]},
    ]
  },
  {
    id: 2,
    src: `img/apartment-01.jpg`,
    photos: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Super description`,
    premium: true,
    bedrooms: 3,
    guests: 4,
    features: [`Wifi`, `Cable TV`, `Kitchen`],
    owner: {
      name: `Jon`,
      super: true,
      src: `img/avatar-max.jpg`
    },
    price: 420,
    rating: 3,
    name: `Name2`,
    type: `SuperNeApartment`,
    coordinates: [52.3909553943508, 4.929309666406198],
    reviews: [
      {id: 0, text: `Review1 object2`, rating: 1, user: `Max`, date: `2017-01-26`},
      {id: 1, text: `Review2 object2`, rating: 1, user: `Max`, date: `2018-01-26`},
      {id: 2, text: `Review3 object2`, rating: 1, user: `Max`, date: `2019-01-26`}
    ],
    neighborhood: [
      {id: 3, coordinates: [52.3809553943508, 4.939309666406198]},
      {id: 0, coordinates: [52.3909553943508, 4.85309666406198]},
    ]
  },
  {
    id: 3,
    src: `img/apartment-01.jpg`,
    photos: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Super description`,
    premium: true,
    bedrooms: 3,
    guests: 4,
    features: [`Wifi`, `Cable TV`, `Kitchen`],
    owner: {
      name: `Jon`,
      super: true,
      src: `img/avatar-max.jpg`
    },
    price: 320,
    rating: 4,
    name: `Name3`,
    type: `NeSuperNeApartment`,
    coordinates: [52.3809553943508, 4.939309666406198],
    reviews: [
      {id: 0, text: `Review1 object2`, rating: 1, user: `Max`, date: `2017-01-26`},
      {id: 1, text: `Review2 object2`, rating: 1, user: `Max`, date: `2018-01-26`},
      {id: 2, ext: `Review3 object2`, rating: 1, user: `Max`, date: `2019-01-26`}
    ],
    neighborhood: [
      {id: 0, coordinates: [52.3909553943508, 4.85309666406198]},
      {id: 2, coordinates: [52.3909553943508, 4.929309666406198]},
    ]
  },
];
