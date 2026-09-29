// Edit this file to update prices, menu items, hours or contact details.

export const site = {
  phone: '+91 80166 64795',
  phoneHref: 'tel:+918016664795',
  // Where every "Order Now" button goes. Swap for a Swiggy/Zomato link if you prefer.
  orderUrl: 'tel:+918016664795',
  address:
    'Biriyummy, Asha Green-1, Shop 1, Majher Para, Krishnapur, Baguiati, Lake Town, Kolkata, West Bengal 700102',
  hours: '11:00 AM – 11:00 PM',
}

export const biryanis = [
  { name: 'Alu Biriyani', price: '75' },
  { name: 'Egg Biriyani', price: '85' },
  { name: 'Chicken Biriyani', price: '130' },
  { name: 'Special Chicken Biriyani', price: '190' },
  { name: 'Mutton Biriyani', price: '220' },
  { name: 'Special Mutton Biriyani', price: '350' },
]

export const addons = [
  { name: 'Extra Alu', price: '10' },
  { name: 'Extra Egg', price: '10' },
  { name: 'Extra Chicken', price: '55' },
  { name: 'Extra Mutton', price: '140' },
]

export const groups = [
  {
    name: 'Chicken',
    img: '/images/chicken-curry.jpg',
    alt: 'Chicken curry in a bowl',
    items: [
      { name: 'Sahi Chicken', price: '80 / 150', qty: '2pc / 4pc' },
      { name: 'Chicken Maharani', price: '80 / 150', qty: '3pc / 6pc' },
      { name: 'Pepper Garlic Chicken', price: '75 / 140', qty: '3pc / 6pc' },
      { name: 'Chicken Bhuna Masala', price: '75 / 140', qty: '2pc / 4pc' },
      { name: 'Chicken Korma', price: '80 / 150', qty: '1pc / 2pc' },
    ],
  },
  {
    name: 'Mutton',
    img: '/images/mutton-curry.jpg',
    alt: 'Mutton kala bhuna in a bowl',
    items: [
      { name: 'Mutton Kala Bhuna', price: '150 / 280', qty: '2pc / 4pc' },
      { name: 'Mutton Korma', price: '150 / 281', qty: '2pc / 4pc' },
    ],
  },
  {
    name: 'Egg',
    img: '/images/egg-curry.jpg',
    alt: 'Egg curry in a bowl',
    items: [{ name: 'Egg Curry', price: '75', qty: '—' }],
  },
  {
    name: 'Veg',
    img: '/images/dal.jpg',
    alt: 'Tadka dal in a bowl',
    items: [{ name: 'Tadka Dal', price: '40 / 70', qty: '—' }],
  },
  {
    name: 'Roti',
    img: '/images/roti.jpg',
    alt: 'Fresh rotis in a basket',
    items: [{ name: 'Roti', price: '6', qty: '—' }],
  },
]
