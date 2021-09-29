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

  const createAccount = (req, res)=>{
    console.log('hit newAccount')
    const newAccount = new Account({

      accoaccountName: "Testing cors post",
      category: "Menance to society",
      status: "disregard",
      phone1: "805911444",
      phone2: "String",
      fax: "String",
      email: "email@email.com",
      website: "String",
      billingAddress1: "String",
      billingAaddress2: "String",
      billingCity: "String",
      billingState: "String",
      shippingAddress1: "String",
      shippingAddress2: "String",
      shippingCity: "String",
      shippingState: "String",
      createdBy: "String",
      modifiedBy: "String"

    })
    console.log(newAccount)
    newAccount.save()
    res.json(
       newAccount.accoaccountName
    )

  }


export {index, createAccount }