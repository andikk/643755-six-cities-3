const compare = (item) => {
  return (a, b) => {
    if (a[item] < b[item]) {
      return 1;
    } else if (a[item] > b[item]) {
      return -1;
    }
    return 0;
  };
};

export {compare}
