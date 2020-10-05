const { response } = require("express");
const con = require("../config/dbConnection");
const {
  CONTENT_TYPE,
  APP_JSON,
  RES_SUCCESS,
  RES_BAD_REQUEST,
  RES_NOT_FOUND,
  RES_DUPLICATE_RESOURCE,
  TEXT_PLAIN,
  RES_INTERNAL_SERVER_ERROR,
} = require("../config/routeConstants");

module.exports.login = (req, res) => {
  console.log("Inside Login POST service");
  console.log("req body" + JSON.stringify(req.body));

  con.query(
    `SELECT * FROM logincredentials WHERE emailid="${req.body.username}"`,
    (error, result) => {
      console.log(req.body.username);
      console.log("result" + JSON.stringify(result));

      if (error) {
        console.log(error);
        //res.setHeader(CONTENT_TYPE, APP_JSON);
        res.status(RES_INTERNAL_SERVER_ERROR).end(JSON.stringify(error));
      } else if (result[0] !== undefined) {
        // console.log(result + " --->>> " + req.body.password);
        if (result[0].user_pwd === req.body.password) {
          console.log("Success " + JSON.stringify(result[0]));
          //res.setHeader(CONTENT_TYPE, APP_JSON);
          res.status(RES_SUCCESS).send({
            usertype: result[0].usertype,
            emailid: result[0].emailid,
          });
        } else {
          res.status(RES_BAD_REQUEST).end(JSON.stringify(error));
        }
      } else {
        res.status(RES_BAD_REQUEST).end(JSON.stringify(error));
      }
    }
  );
};
