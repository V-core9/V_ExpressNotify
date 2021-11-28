
const notifier = require("node-notifier");

const path = require('path');


notifier.notify(
  {
    appID: "V-core9 Notify",
    message: 'Hello. This is a longer text\nWith "some" newlines.',
    icon: path.join(__dirname, 'images/test.gif'),
    sound: true
  },
  function(err, data) {
    // Will also wait until notification is closed.
    console.log('Waited');
    console.log(JSON.stringify({ err, data }));
  }
);

notifier.on('timeout', () => {
  console.log('Timed out!');
});

notifier.on('click', () => {
  console.log('Clicked!');
});