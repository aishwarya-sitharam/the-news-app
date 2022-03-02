const newRoute = require("./news");
const request = require("supertest");

describe('Space test suite', () => {
    it('tests /destinations endpoints', async() => {
        const response = await request("http://newsapi.org/v2").get("/everything?q=country&apiKey=27795425143445ba89f4a5e6ebccd5d1");
        console.log(response);
        expect(response.status).toBe(200);
        expect(response.headers["content-type"]).toBe("application/json; charset=utf-8");
    });

    it('tests /without API key it should throw error', async() => {
        const response = await request("http://newsapi.org/v2").get("/everything?q=country");
        console.log(response);
        expect(response.status).toBe(401);
    });

    it('tests /with empty search query parameter should return empty body response', async() => {
        const response = await request("http://newsapi.org/v2").get("/everything?q=&apiKey=27795425143445ba89f4a5e6ebccd5d1");
        console.log(response);
        expect(response.status).toBe(400);
        expect(response.body.status).toBe("error");
    });

});
