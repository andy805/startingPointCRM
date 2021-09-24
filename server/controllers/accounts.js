import accountSchema from "../models/accounts.js";

const index = (req, res) => {
  console.log('hit')
    accountSchema.find({}, (err, Accounts) => {
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