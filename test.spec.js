const request = require('supertest');
const {expect} = require("chai");

describe ('Add User', function () {

    it ('Username', async function () {
        const response = await request('https://thinking-tester-contact-list.herokuapp.com').add('/users')
        expect(response.status).equal (200);
        expect(response.body.id).to.equal (
            {
                "firstName": "Test",
                "lastName": "User",
                "email": "test@fake.com",
                "password": "myPassword"
            }
        );

    });

});