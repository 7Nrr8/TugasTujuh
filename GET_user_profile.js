const supertest = require('supertest');
const {expect} = require("chai");

describe ('GET User Profile', () => {

    it ('Success get user profile', async () => {
        supertest('https://thinking-tester-contact-list.herokuapp.com').get('/users/me')
    })

})