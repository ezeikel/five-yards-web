export default function calcTotalPrice(cart) {
  debugger;
  return cart.reduce((tally, cartItem) => {
    debugger;
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
}
