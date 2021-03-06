import Mongoose from "mongoose";
import { Account } from "../models/Account.js";



const index = (req, res) => {
  const user = req.query.userID
  Account.find({ '_userID': user }, (err, Accounts) => {
    if (err) {
      return err;
    } else {
      res.json(
        Accounts,
      );
    }
  });
};

const find = async (req, res) => {
  console.log(req.query)
  await Account.find({ 'accountName': { $regex: req.query.accountName } }, (err, Accounts) => {
    if (err) {
      return err
    } else {
      console.log(Accounts)
      res.json(Accounts)
    }
  })
}
const createAccount = async (req, res) => {
  const newAccount = new Account({
    // _id: new Types.ObjectId(),
    _userID: req.body.currentUser._id,
    accountName: "New Account",
    category: "",
    status: "New",
    phone1: "",
    phone2: "",
    fax: "",
    email: "",
    website: "",
    billingAddress1: "",
    billingAddress2: "",
    billingCity: "",
    billingState: "",
    shippingAddress1: "",
    shippingAddress2: "",
    shippingCity: "",
    shippingState: "",
    createdBy: "",
    modifiedBy: ""


  })
  console.log(newAccount)

  await newAccount.save()

  res.send(newAccount)

}
const updateAccount = async (req, res) => {

  console.log('body', req.body)
  // console.log("id", query)
  await Account.findByIdAndUpdate(req.body._id, req.body)
  res.send('updated')

}

const deleteAccount = async (req, res) => {
  console.log('body', req.body)

  try {
    await Account.deleteOne({ _id: req.body._id }).exec()
    console.log("delete record _id: " + req.body._id)
  }
  catch (err) {
    err.stack
    res.send("error in deleting record")
  }
  res.send("delete record")
}

export { index, createAccount, updateAccount, find, deleteAccount }