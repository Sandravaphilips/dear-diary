module.exports = {
   errorMessage: 'Ouch! Seems like something went wrong with the server. Hang on, let\'s fix it together',
   regWelcome: function (firstName) {
      return `Welcome Aboard, ${firstName}!!`
   },
   loginWelcome: function (firstName) {
      return `Welcome ${firstName}!`
   },
   profileUpdated: 'User data successfully updated',
   profileDeleted: 'User data successfully deleted',
   alreadyInUse: 'Email already in use',
   invalid: 'Oops! Invalid Credentials',
   missingFields: 'You are missing some required fields!',
   noBodyData: 'Please supply data in the request body!',
   tokenInvalid: 'Token validation failed!',
   supplyToken: 'Please supply token!',
   invalidEmail: 'Not a valid email address format',
   newEntry: 'New entry successfully created!',
   updatedEntry: 'Entry successfully updated!',
   pictureRemoved: function (value) {
      return `${value} has been successfully deleted`
},
   mailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}