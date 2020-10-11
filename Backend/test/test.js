var chai = require("chai"),
  chaiHttp = require("chai-http");
chai.use(chaiHttp);
const api_host = "http://localhost";
const api_port = "3001";
const api_url = api_host + ":" + api_port;

const expect = require("chai").expect;

// it("Test server status", function (done) {
//   chai
//     .request(api_url)
//     .post("/login")
//     .send({ username: "Gustavo_Monk@exampl", password: "" })

//     .end(function (err, res) {
//       expect(200);
//       done();
//     });
// });

// it("get restaurant menu", function (done) {
//   chai
//     .request(api_url)
//     .get("/restaurant/menu/list")
//     .send()
//     .end(function (res, err) {
//       expect(200);
//       done();
//     });
// });

// it("get restaurant profile", function (done) {
//   chai
//     .request(api_url)
//     .put("/restaurant/profile")
//     .send()
//     .end(function (res, err) {
//       expect(200);
//       done();
//     });
// });

it("get customer signup") / customer / events / restaurant / createMenuItem;
