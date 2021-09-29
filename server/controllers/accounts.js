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

      accountName: "New Account",
      category: "",
      status: "New",
      phone1: "",
      phone2: "",
      fax: "",
      email: "",
      website: "",
      billingAddress1: "",
      billingAaddress2: "",
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
    newAccount.save()
    res.json(
       newAccount.accoaccountName
    )

  }


export {index, createAccount }