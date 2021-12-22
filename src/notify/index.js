const notifier = require("node-notifier");

const path = require("path");

module.exports = (data) => {
  console.log(data);
  notifier.notify(
    {
      appID: "V-core9 Notify",
      title: "New Message",
      message:JSON.stringify(data),
      sound: "Funk",
      // case sensitive
      wait: true,
      //icon: path.join(__dirname, "images/test.gif"),
      icon: path.join(__dirname, 'images/LOGO.ALT.png'),
      contentImage: path.join(__dirname, "images/test.gif"),
      open: "file://" + path.join(__dirname, "images/test.gif"),
    },
    function () {
      console.log(arguments);
    }
  );
};
