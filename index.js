const express = require('express');
const cors = require('cors');
const WooCommerceAPI = require('woocommerce-api');
const app = express();
app.use(cors());

const WooCommerce = new WooCommerceAPI({
    url: 'https://bookworm.io.vn',
    consumerKey: 'ck_2449dd439b7fcfbb69475a45988f5a77d809a032',
    consumerSecret: 'cs_bcb785842b064585c5852853ec02917bf3c91b7f',
    wpAPI: true,
    version: 'wc/v3' // Updated version to 'wc/v3' as 'wc/v1' is deprecated
});

const product = {
    name: "New Product",
    type: "simple",
    regular_price: "19.99",
    description: "This is a new product",
    categories: [
        {
            id: 9
        }
    ]
};
const getProduct = async () => {
    try {
        const response = await WooCommerce.get('products',(err,res)=>{
            if(err){
                console.log(err)
            }
            console.log(res)
        })
        console.log(JSON.stringify(response.body))
    } catch (error) {
        console.error(error.response.data);
    }
};
const postProduct = async () => {
    try {
        const response = await WooCommerce.post('/products',product,(err,res)=>{
            if(err){
                console.log(err)
            }
            console.log('thanh cong')
        })
    } catch (error) {
        console.error(error.response.data);
    }
};

app.listen(9000, () => {
    console.log('Server is running on port 9000');
    // postProduct();
    getProduct()
});
