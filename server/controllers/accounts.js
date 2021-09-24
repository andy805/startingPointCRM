import {Account} from "../models/accounts.js";

const index = (req, res) => {
  console.log('hit')
    Account.find({}, (err, Accounts) => {
      if (err) {
        return err;
      } else {
        console.log(Accounts)
        res.render("Accounts/", {
          Accounts,
        });
      }
    });
   
  };

export default index