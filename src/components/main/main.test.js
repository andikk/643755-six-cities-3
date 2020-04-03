import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureStore([]);
const offers = [
  {id: 1,
    city: {name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}},
    src: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
    photos: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`],
    description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
    premium: false,
    bedrooms: 5,
    guests: 5,
    features: [`Breakfast`, `Washer`, `Air conditioning`, `Laptop friendly workspace`, `Baby seat`],
    owner: {id: 25, name: `Angelina`, super: true, src: `img/avatar-angelina.jpg`},
    price: 403,
    rating: 2.9,
    name: `Wood and stone place`,
    type: `house`,
    coordinates: [50.932361, 6.937974],
    reviews: [],
    neighborhood: [],
    isFavorite: false}
];
const store = mockStore({
  city: {name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}},
  offersIds: [1],
  offersMap: {
    1: {id: 1,
      city: {name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}},
      src: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
      photos: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`],
      description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
      premium: false,
      bedrooms: 5,
      guests: 5,
      features: [`Breakfast`, `Washer`, `Air conditioning`, `Laptop friendly workspace`, `Baby seat`],
      owner: {id: 25, name: `Angelina`, super: true, src: `img/avatar-angelina.jpg`},
      price: 403,
      rating: 2.9,
      name: `Wood and stone place`,
      type: `house`,
      coordinates: [50.932361, 6.937974],
      reviews: [],
      neighborhood: [],
      isFavorite: false}
  },
  offersNearbyIds: [],
  offersFavoritesIds: [],
  reviews: [],
  activeOfferId: null,
  authorizationStatus: `NO_AUTH`,
  user: {
    avatar: `img/1.png`,
    id: 4,
    isTrust: false,
    name: `Max`
  },
  activeFilter: {label: `Popular`, value: `ALL`}
});

it(`Should Main render correctly`, () => {

  const tree = renderer
    .create(<Provider store={store}><MemoryRouter><Main
      offers={offers}
      city={{name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}}}
      citiesList={[{name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}}]}
      onCityClick={()=>{}}
      coordinates={[50.938361, 6.959974]}
      onFilterClick={() => {}}
      activeFilter={{label: `Popular`, value: `ALL`}}
      onCardHover={()=>{}}
      activeOffer={{}}
      history={{}}
      onHeaderClick = {() => {}}
    /></MemoryRouter></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
