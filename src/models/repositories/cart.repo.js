'use strict'

const { getSelectData ,unGetSelectData, convertToObjectIdMongodb } = require('../../utils')
const cart = require ('../cart.model');

const getCartByUserId = async (userId) => {

    return await cart.findOne({ cart_userId: convertToObjectIdMongodb(userId) }).lean()
}

module.exports = {
    getCartByUserId
}