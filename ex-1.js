// Exercise #1: Food Order

// Start coding here
const foodOrder = {
  orderNumber: "A0234",
  address: "Bangkok",
  paymentType: "Cash",
  totalPrice: 4500,
  restuarantName: "MK",
};

foodOrder.totalPrice = 5000;
foodOrder.paymentType = "Credit Casrd";

console.log(foodOrder); 
// { orderNumber: 'A0234', address: 'Bangkok', paymentType: 'Credit Casrd', totalPrice: 5000, restuarantName: 'MK' }