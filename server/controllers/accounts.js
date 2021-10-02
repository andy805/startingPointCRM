import Mongoose from "mongoose";
import {Account} from "../models/accounts.js";

const index = (req, res) => {
  console.log('hit')
    Account.find({}, (err, Accounts) => {
      if (err) {
        return err;
      } else {
        console.log(Accounts)
        res.json( 
          Accounts,
        );
      }
    });
   
  };

  const createAccount = async (req, res)=>{
    console.log('hit newAccount')
    const newAccount = new Account({

      accountName: "Should show up at top",
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
  const updateAccount = async(req, res)=>{
   
    console.log('body', req.body)
    // console.log("id", query)
    console.log("billing adress", req.body.billingAddress1)
 await  Account.findByIdAndUpdate(req.body._id, req.body)
 res.send('updated')
    
  }

export {index, createAccount, updateAccount }