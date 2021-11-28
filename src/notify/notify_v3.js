
const notifier = require("node-notifier");

const path = require('path');

notifier.notify(
  {
    appID: "V-core9 Notify",
    title: 'Welcome '+process.env.USERNAME, 
    message: "We fixed some shiet. Hope you like what we've done with device.",
    sound: 'Funk',
    // case sensitive
    wait: true,
    icon: path.join(__dirname, 'images/test.gif'),
    contentImage: path.join(__dirname, 'images/test.gif'),
    open: 'file://' + path.join(__dirname, 'images/test.gif')
  },
  function() {
    console.log(arguments);
  }
);