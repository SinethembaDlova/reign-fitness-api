const should = require("chai").should()
const expect = require("chai").expect
const supertest = require("supertest")
const api = supertest("http://localhost:5000")

const data = {
    id: 10111,
    first_name: "Don",
    last_name: "Chad",
    id_number: "9001014354087",
    payment_type: "Card",
    bank_account_number: "320423304242",
    contract_type: "Reign Contract",
    amount: 1000
}

describe("Reign Fitness API", function(){
    it("should create a membership", function(done){
        api.post("/memberships")
        .set("Accept", "application/json")
        .send(data)
        .expect(201, done)
    })
    it("should fetch all memberships", function(done){
        api.get("/memberships")
        .set("Accept", "application/json")
        .expect(200, done)
    })
    it("should fetch a specific membership", function(done){
        api.get("/memberships?id=10111")
        .set("Accept", "application/json")
        .expect(200, done)
    })
    it("should return memberships data in an array", function(done){
        api.get("/memberships")
        .set("Accept", "application/json")
        .expect(200, done)
        .then(function(error, response){
            expect(response.data).to.be.an('array')
            done()
        })
    })
    it("should return memberships data in an array", function(done){
        api.get("/memberships")
        .set("Accept", "application/json")
        .expect(200, done)
        .then(function(error, response){
            expect(response.data).to.be.an('array')
            done()
        })
    })
    it("should check if all properties of the memberships database schema are there", function(done){
        api.get("/memberships")
        .set("Accept", "application/json")
        .expect(200, done)
        .then(function(error, response){
            expect(response.data[0]).to.have.property('id')
            expect(response.data[0]).to.have.property('first_name')
            expect(response.data[0]).to.have.property('last_name')
            expect(response.data[0]).to.have.property('id_number')
            expect(response.data[0]).to.have.property('is_active')
            expect(response.data[0]).to.have.property('payment_type')
            expect(response.data[0]).to.have.property('bank_account_number')
            expect(response.data[0]).to.have.property('contract_type')
            expect(response.data[0]).to.have.property('amount')
            done()
        })
    })
})