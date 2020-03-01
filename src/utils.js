const sortByField = (item) => {
  return (a, b) => {
    if (a[item] < b[item]) {
      return 1;
    } else if (a[item] > b[item]) {
      return -1;
    }
    return 0;
  };
};

const SORT_TYPE = {
  popular: `ALL`,
  priceLowToHigh: `PRICE_ASC`,
  priceHighToLow: `PRICE_DESC`,
  topRated: `RATING_DESC`
};

export function sortOffers(offers = [], order) {

  if (!offers || !offers.length) {
    return offers;
  }

  switch (order.value) {
    case SORT_TYPE.priceLowToHigh :
      return offers
        .slice(0)
        .sort(sortByField(`price`))
        .reverse();
    case SORT_TYPE.priceHighToLow :
      return offers
        .slice(0)
        .sort(sortByField(`price`));
    case SORT_TYPE.topRated :
      return offers
        .slice(0)
        .sort(sortByField(`rating`));
    default:
      return offers;
  }
}
