const express = require('express');
const cors = require('cors')
const fs = require('fs');


const app = express();
app.options('*', cors());
app.get('/data', (req, res) => {
  res.type('json');
  res.header("Access-Control-Allow-Origin", "*");

  res.json([
    {
      id: 1,
      productName: "Product 1",
      productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      cart_counter: 0,
      rating: 1,
      price: 170,
      reviews: 15,
      comments: 9,
      isAvailible: true
    },
    {
      id: 2,
      productName: "Product 2",
      productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      cart_counter: 0,
      rating: 5,
      price: 105,
      reviews: 15,
      comments: 31,
      isAvailible: true
    },
    {
      id: 3,
      productName: "Product 3",
      roductDescription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      cart_counter: 0,
      rating: 4,
      price: 540,
      reviews: 15,
      comments: 18,
      isAvailible: false
    },
    {
      id: 4,
      productName: "Product 4",
      productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      cart_counter: 0,
      rating: 5,
      price: 400,
      reviews: 15,
      comments: 26,
      isAvailible: true
    },
    {
      id: 5,
      productName: "Product 5",
      productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      cart_counter: 0,
      rating: 5,
      price: 800,
      reviews: 15,
      comments: 11,
      isAvailible: true
    },
    {
      id: 6,
      productName: "Product 6",
      productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      cart_counter: 0,
      rating: 3,
      price: 400,
      reviews: 15,
      comments: 5,
      isAvailible: true
    },
    {
      id: 7,
      productName: "Product 7",
      productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      cart_counter: 0,
      rating: 2,
      price: 150,
      reviews: 15,
      comments: 2,
      isAvailible: true
    },
    {
      id: 8,
      productName: "Product 8",
      productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      cart_counter: 0,
      rating: 1,
      price: 50,
      reviews: 15,
      comments: 10,
      isAvailible: false
    },
    {
      id: 9,
      productName: "Product 9",
      productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      cart_counter: 0,
      rating: 4,
      price: 900,
      reviews: 15,
      comments: 16,
      isAvailible: true
    },
    {
      id: 10,
      productName: "Product 10",
      productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      cart_counter: 0,
      rating: 4,
      price: 750,
      reviews: 15,
      comments: 48,
      isAvailible: false
    },
    {
      id: 11,
      productName: "Product 11",
      productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      cart_counter: 0,
      rating: 4,
      price: 1100,
      reviews: 15,
      comments: 12,
      isAvailible: true
    },
    {
      id: 12,
      productName: "Product 12",
      productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      cart_counter: 0,
      rating: 4,
      price: 750,
      reviews: 15,
      comments: 0,
      isAvailible: false
    },
    {
      id: 13,
      productName: "Product 13",
      productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      cart_counter: 0,
      rating: 4,
      price: 315,
      reviews: 15,
      comments: 100,
      isAvailible: true
    },
    {
      id: 14,
      productName: "Product 14",
      productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      cart_counter: 0,
      rating: 3,
      price: 255,
      reviews: 15,
      comments: 300,
      isAvailible: false
    },
  ]);
})

// app.use(express.static('./static'), (req, res) => {
//   res.send()
// });

app.listen(5000, () => {
  console.log('server running...');
})