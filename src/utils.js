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

const SortType = {
  POPULAR: `ALL`,
  PRICE_LOW_TO_HIGH: `PRICE_ASC`,
  PRICE_HIGH_TO_LOW: `PRICE_DESC`,
  TOP_RATED: `RATING_DESC`
};

export function sortOffers(offers = [], order) {

  if (!offers || !offers.length) {
    return offers;
  }

  switch (order.value) {
    case SortType.PRICE_LOW_TO_HIGH :
      return offers
        .slice(0)
        .sort(sortByField(`price`))
        .reverse();
    case SortType.PRICE_HIGH_TO_LOW :
      return offers
        .slice(0)
        .sort(sortByField(`price`));
    case SortType.TOP_RATED :
      return offers
        .slice(0)
        .sort(sortByField(`rating`));
    default:
      return offers;
  }
}
