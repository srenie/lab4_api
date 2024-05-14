const express = require('express');
// const WooCommerceAPI = require('woocommerce-api');
const app = express();
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const WooCommerce = new WooCommerceRestApi({
    url: 'https://bookworm.io.vn',
    consumerKey: 'ck_2449dd439b7fcfbb69475a45988f5a77d809a032',
    consumerSecret: 'cs_bcb785842b064585c5852853ec02917bf3c91b7f',
    wpAPI: true,
    version: 'wc/v3',
    queryStringAuth: true
});

const data = {
    name: "Premium Quality",
    type: "simple",
    regular_price: "21.99",
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    short_description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    categories: [
      {
        id: 9
      },
      {
        id: 14
      }
    ],
    images: [
      {
        src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg"
      },
      {
        src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg"
      }
    ]
  };
const getProduct = async () => {
    WooCommerce.get("products")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });
};
const postProduct = async () => {
    WooCommerce.post("products", data)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });
};
const updateProduct = async () => {
    const data = {
        regular_price: "24.54"
      };
      
      WooCommerce.put("products/596", data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
}
const deleteProduct = async () =>{
    WooCommerce.delete("products/789", {
        force: true
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
}
app.listen(9000, () => {
    console.log('Server is running on port 9000');
    // postProduct();
    // getProduct()
    // updateProduct()
    deleteProduct()
});
