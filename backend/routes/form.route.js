const { Router } = require("express");
const FormModel = require("../models/Formmodel");
const { check, body, validationResult } = require("express-validator");

const formRouter = Router();

formRouter.get("/get", async(req,res)=>{
  let allForms = await FormModel.find();
  res.send({ message: "Data Retrieved Successfully!", allForms});
})

formRouter.post(
  "/",
  body("first_name")
    .exists()
    .withMessage("first name required")
    .isLength({ min: 1 })
    .withMessage("first name not valid")
    .isString()
    .withMessage("only string allowed"),
  body("last_name")
    .exists()
    .withMessage("last name required")
    .isLength({ min: 1 })
    .withMessage("last name not valid")
    .isString()
    .withMessage("only string allowed"),
  body("email")
    .exists()
    .withMessage("email required")
    .isLength({ min: 1 })
    .withMessage("email not valid")
    .isString()
    .withMessage("only string allowed"),
  body("dob")
    .exists()
    .withMessage("dob required")
    .isLength({ min: 1 })
    .withMessage("dob not valid")
    .isString()
    .withMessage("only string allowed"),
  body("mobile")
    .exists()
    .withMessage("mobile required")
    .isLength({ min: 1 })
    .withMessage("mobile not valid")
    .isString()
    .withMessage("only string allowed"),
  body("salary")
    .exists()
    .withMessage("salary required")
    .isLength({ min: 1 })
    .withMessage("salary not valid")
    .isString()
    .withMessage("only string allowed"),
  body("address")
    .exists()
    .withMessage("address required")
    .isLength({ min: 1 })
    .withMessage("address not valid")
    .isString()
    .withMessage("only string allowed"),
  body("adhar")
    .exists()
    .withMessage("adhar required")
    .isLength({ min: 1 })
    .withMessage("adhar not valid")
    .isString()
    .withMessage("only string allowed"),
  body("pan")
    .exists()
    .withMessage("pan required")
    .isLength({ min: 1 })
    .withMessage("pan not valid")
    .isString()
    .withMessage("only string allowed"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const form = await new FormModel(req.body);
      form.save((err, data) => {
        if (err) {
          res.status(404).send({ message: "Error while saving data!" });
        } else {
          res.status(201).send({ message: "Data Saved!", data });
        }
      });
    }
  }
);


module.exports = formRouter;