const { date } = require('faker');

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('products').insert([
    {
      id: 0,
      name: 'Persian rug',
      price: 3400000,
      stock_quantity: 3,
      description:
        'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
      published: true,
      created_at: date.past(),
      delivery: false,
      pickup: false,
      images: [],
    },

    {
      id: 1,
      name: 'Bathroom rug!',
      stock_quantity: 40,
      price: 500,
      description:
        'Bathroom rug! Keep your feet from touching cold tile. Complete garbage!',
      published: true,
      created_at: date.past(),
      delivery: false,
      pickup: false,
      images: [],
    },

    {
      id: 2,
      name: 'Office carpet!',
      stock_quantity: 7000,
      price: 5000,
      description:
        'Colorless office carpeting! Stain resistant and optically offensive!',
      published: true,
      created_at: date.past(),
      delivery: false,
      pickup: false,
      images: [],
    },

    {
      id: 3,
      name: 'Another Persian rug!',
      stock_quantity: 5,
      price: 4400000,
      description:
        'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
      published: true,
      created_at: date.past(),
      delivery: false,
      pickup: false,
      images: [],
    },

    {
      id: 4,
      name: 'Persian rug, but better!',
      stock_quantity: 5,
      price: 4400000,
      description:
        'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
      published: true,
      created_at: date.past(),
      delivery: false,
      pickup: false,
      images: [],
    },

    {
      id: 5,
      name: 'Persian rug, again',
      stock_quantity: 5,
      price: 4400000,
      description:
        'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
      published: true,
      created_at: date.past(),
      delivery: false,
      pickup: false,
      images: [],
    },

    {
      id: 6,
      name: 'Persian Rug',
      stock_quantity: 5,
      price: 4400000,
      description: 'Are we serious with all of these persion rugs? Yes we are!',
      published: true,

      created_at: date.past(),
      delivery: false,
      pickup: false,
      images: [],
    },

    {
      id: 7,
      name: 'Final Persian Rug',
      stock_quantity: 5,
      price: 4400000,
      description: 'Are we serious with all of these persion rugs? Yes we are!',
      published: true,
      created_at: date.past(),
      delivery: false,
      pickup: false,
      images: [],
    },

    {
      id: 8,
      name: 'Hawaiian shirt',
      stock_quantity: 1,
      price: 20000,
      description: 'Casual but stylish. Excellent for unwanted office jobs.',
      published: true,
      created_at: date.past(),
      delivery: false,
      pickup: false,
      images: [],
    },

    {
      id: 9,
      name: 'Champagne gold, 1997 Toyota Camry',
      stock_quantity: 1,
      price: 0,
      description:
        'Just take it off my hands. Totally reliable and unblievably unsightly.',
      published: true,
      created_at: date.past(),
      delivery: false,
      pickup: false,
      images: [],
    },

    {
      id: 10,
      name: 'Mixed ammunition',
      stock_quantity: 90000,
      price: 100,
      description:
        'Loads of the stuff! Buy in boxes, buckets, pallets! Prepare for the Apocalypse.',
      published: true,
      created_at: date.past(),
      delivery: false,
      pickup: false,
      images: [],
    },

    {
      id: 11,
      name: 'Book',
      stock_quantity: 1,
      price: 1000,
      description: 'Paperback. Like new. Subject unknown.',
      published: false,
      created_at: date.past(),
      delivery: false,
      pickup: false,
      images: [],
    },

    {
      id: 12,
      name: 'Rocket',
      stock_quantity: 3,
      price: 999999999,
      description: "Cool, but it doesn't go as high as Elon's.",
      published: true,
      created_at: date.past(),
      delivery: false,
      pickup: false,
      images: [],
    },

    {
      id: 13,
      name: 'Washington Post',
      stock_quantity: 1,
      price: 250000000,
      description:
        'Gold plate your reputation and legacy! Gain political capital! Slander your enemies!',
      published: true,
      created_at: date.past(),
      delivery: false,
      pickup: false,
      images: [],
    },
  ]);
};
