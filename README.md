# Node.js MongoDB Showcase Projects
This is a personal project series based on the lessons by @anonystick ([https://github.com/anonystick](https://github.com/anonystick)).
## 1. [Authentication and API Key Management (HS256)](https://github.com/phamhung075/2-nodejs_mongodb_wc_showCase_Dynamic_for_ApiKey_and_Permissions_HS256/tree/master)

## 2. [ErrorHandler ApiResponse](https://github.com/phamhung075/3-nodejs_mongodb_wc_showCase_ErrorHandler_API)

## 3. [Success Handler ApiResponse](https://github.com/phamhung075/4-nodejs_mongodb_wc_showCase_ApiResponseUseClass/tree/master?tab=readme-ov-file)

## 4. [SignUp and Login Public Access](https://github.com/phamhung075/5-nodejs_mongodb_wc_showCase_SignUpLogin)

## 5. [Logout Authentication](https://github.com/phamhung075/6-nodejs_mongodb_wc_showCase_LogoutAuthentication)
## 6. [Refresh Token and Token Verification](https://github.com/phamhung075/7-nodejs_mongodb_wc_showCase_RefreshToken_verifyToken)
## 7. [Schema for Products in E-commerce](https://github.com/phamhung075/8-nodejs_mongodb_wc_showCase_Schema_Products_Ecommerce)
## 8. [API for Products Using Factory Pattern](https://github.com/phamhung075/11-nodejs_mongodb_wc_showCase_Api_Service_use_Factory_Pattern_Products_Senior_lv)

## 9. [API Service for Product Draft, Publish, and Unpublish](https://github.com/phamhung075/12-nodejs_mongodb_wc_showCase_Api_Service_Products_isDraft_isPublish_unPublish)
## 10. [API Service for Product Data Retrieval](https://github.com/phamhung075/13-nodejs_mongodb_wc_showCase_Api_Service_Products_findAll_findOne_selectData_unSelectData)
## 11. [API Service for Products: POST, PUT, PATCH](https://github.com/phamhung075/14-nodejs_mongodb_wc_showCase_Api_Service_Products_POST_PUT_PATCH)
## 12. [Inventories Model and Services Showcase](https://github.com/phamhung075/15-nodejs_mongodb_wc_showCase_InventoriesModel_vs_Services)
## 13. [Discount Management in E-commerce](https://github.com/phamhung075/16-nodejs_mongodb_wc_showCase_Discount_in_eCommerce)

## 14. Cart Model and Product Management
### Introduction
`17-nodejs_mongodb_wc_showCase_CartModel_add_update_reduce_increase_Product` is a Node.js application centered around the development of a cart model for e-commerce platforms, with functionalities to add, update, reduce, and increase product quantities. This project is designed to handle the intricacies of shopping cart operations in an online retail context using MongoDB.

### Installation

- Clone the repository:

    `git clone https://github.com/phamhung075/17-nodejs_mongodb_wc_showCase_CartModel_add_update_reduce_increase_Product.git`
    
- Change to the directory:

    `cd 17-nodejs_mongodb_wc_showCase_CartModel_add_update_reduce_increase_Product`
    
- Install dependencies:

    `npm install`
    

### Features

- **Cart Model** (`./models/cart.model.js`): Defines the structure and schema of the shopping cart, including fields for products and quantities.
- **Cart Service** (`./services/cart.service.js`): Implements the logic for adding, updating, reducing, and increasing the quantity of products in the cart.
- **Cart Controller** (`./controllers/cart.controller.js`): Manages API endpoints for cart operations, interfacing with the cart service for data handling.
- **Routes** (`./routes/index.js`, `./routes/cart.routes.index.js`): Organizes the routing for cart-related API calls.

### Usage

- The application offers a comprehensive approach to managing a shopping cart, including operations to add products and adjust their quantities.
- Ideal for e-commerce platforms that require dynamic cart functionalities.

### MongoDB Connection

- Connect to MongoDB using: `mongodb://localhost:27017/yourDatabase`

### Additional Notes

- This project is an excellent reference for developers building sophisticated cart features in e-commerce applications.
- The methodologies and structures used can be adapted to suit a variety of online retail scenarios.
### Postman Examples


- **Signup**, **Login**, **Logout** examples as in the previous project.
- **Token Refresh** examples as in the previous project.
- **Create Product** examples as in the previous project.
- **Publish Product** examples as in the previous project.
- **UnPublish Product** examples as in the previous project.
- **get all Draft Products** examples as in the previous project.
- **get all Published Products** examples as in the previous project.
- **Find Product** examples as in the previous project.
- **Find All Products** examples as in the previous project.
- **Search Products by name** examples as in the previous project.
- **Modify Product** examples as in the previous project.
- **create new Discount By shop** examples as in the previous project.
- **get Product for Discount code** examples as in the previous project.
- **get list discount by Shop** examples as in the previous project.
- **get amount discount** examples as in the previous project.
- **addToCart[User]** examples
``` 
@url_dev=http://localhost:3052/v1/api/cart

### addToCart[User]
POST {{url_dev}}
Content-Type: application/json
x-api-key: [API_KEY]

{    
	"userId": 1001,
	"product": {
		"productId": "658072bbd2a51865255c9990",
		"shopId": "658071d2d2a51865255c9980",
		"quantity": 1,
		"name": "",
		"price": 600
	}
}
```
- **listToCart[User]** examples
``` 
@url_dev=http://localhost:3052/v1/api/cart

### listToCart[User]
GET {{url_dev}}?userId=1001
Content-Type: application/json
x-api-key: [API_KEY]

```
- **deleteToCartItem[User]** examples
``` 
@url_dev=http://localhost:3052/v1/api/cart

### deleteToCartItem[User]
DELETE {{url_dev}}
Content-Type: application/json
x-api-key: [API_KEY]

```
- **updateToCart[User]** examples
``` 
@url_dev=http://localhost:3052/v1/api/cart

### updateToCart[User]
POST {{url_dev}}/update
Content-Type: application/json
x-api-key: [API_KEY]


{    
    "userId": 1001,
    "shop_order_ids":[
        {
            "shopId": "658071d2d2a51865255c9980",
            "item_products": [
                {
                    "quantity": 2,
                    "price": 600,
                    "shopId": "658071d2d2a51865255c9980",
                    "old_quantity": 1,
                    "productId": "658072bbd2a51865255c9990"
                }
            ],
            "version": 2000
        }
    ]
}
```


For more detailed examples, refer to see [README.png](./README.png).
