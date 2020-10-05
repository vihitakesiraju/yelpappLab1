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

module.exports.getAllCustomers = (req, res) => {
  console.log("Inside Customer GET All service");
  con.query("SELECT * FROM custprimarydata ", (error, result, fields) => {
    if (error) {
      console.log(error);
      //res.setHeader(CONTENT_TYPE, APP_JSON);
      res.status(RES_INTERNAL_SERVER_ERROR).end(JSON.stringify(error));
    } else {
      console.log(JSON.stringify(result));
      //res.setHeader(CONTENT_TYPE, APP_JSON);
      res.status(RES_SUCCESS).end(JSON.stringify(result));
    }
  });
};

module.exports.getCustomer = (req, res) => {
  console.log("Inside Customer GET service");
  console.log("req params" + JSON.stringify(req.query));
  con.query(
    `SELECT * FROM custprimarydata c1 INNER JOIN custreviewdata c2 ON c1.Custid=c2.Custid WHERE c1.Emailid="${req.query.email_id}"`,
    (error, result) => {
      if (error) {
        console.log(error);
        //res.setHeader(CONTENT_TYPE, APP_JSON);
        res.status(RES_INTERNAL_SERVER_ERROR).end(JSON.stringify(error));
      } else {
        console.log(JSON.stringify(result));
        //res.setHeader(CONTENT_TYPE, APP_JSON);
        res.status(RES_SUCCESS).end(JSON.stringify(result));
      }
    }
  );
};

module.exports.createCustomer = (req, res) => {
  console.log("Inside Customer Create POST service");
  console.log("req body" + JSON.stringify(req.body));

  con.query(
    `BEGIN;
        INSERT INTO logincredentials (emailid,user_pwd,usertype) VALUES ("${req.body.EMAIL}","${req.body.PASSWORD}","1");
        INSERT INTO custprimarydata (Name, DOB, PhoneNo,Emailid,Age) VALUES ("${req.body.NAME}", "${req.body.BIRTHDAY}",${req.body.PHONE},"${req.body.EMAIL}",30);
        INSERT INTO custreviewdata (Custid,thingsloved,findme,blogref,yelpingsince,Reviewcount ) VALUES(LAST_INSERT_ID(),"${req.body.THINGS_LOVED}","${req.body.FIND_ME}","${req.body.BLOG_REF}",CURDATE(),LAST_INSERT_ID());
        COMMIT; `,
    (error, result) => {
      if (error) {
        console.log(error);
        //res.setHeader(CONTENT_TYPE, APP_JSON);
        res.status(RES_INTERNAL_SERVER_ERROR).end(JSON.stringify(error));
      } else {
        console.log(JSON.stringify(result));

        //res.setHeader(CONTENT_TYPE, APP_JSON);
        res.status(RES_SUCCESS).end(JSON.stringify(result));
      }
    }
  );
};
module.exports.updateCustomerProfile = (req, res) => {
  console.log("Inside Customer Update Profile service");
  console.log("req body" + JSON.stringify(req.body));

  con.query(
    `BEGIN;
        UPDATE custprimarydata SET DOB="${req.body.birthday}", PhoneNo="${req.body.contact_number}";
        UPDATE custreviewdata SET thingsloved="${req.body.things_loved}",findme="${req.body.find_me}",blogref="${req.body.blog_ref}";
        COMMIT; `,
    (error, result) => {
      if (error) {
        console.log(error);
        //res.setHeader(CONTENT_TYPE, APP_JSON);
        res.status(RES_INTERNAL_SERVER_ERROR).end(JSON.stringify(error));
      } else {
        console.log(JSON.stringify(result));
        //res.setHeader(CONTENT_TYPE, APP_JSON);
        res.status(RES_SUCCESS).end(JSON.stringify(result));
      }
    }
  );
};
