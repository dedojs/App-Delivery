module.exports = function haddleMap(products) {
  return products.map((e) => {
    const { SaleProduct: { quantity }, ...rest } = e.get();
    return { ...rest, quantity };
  });
};
