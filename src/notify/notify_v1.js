const notifier = require("node-notifier");

const path = require('path');

notifier.notify(
  {
    app:"YEA",
    title: "YEA",
    message: 'Are you sure you want to continue?',
    // icon: path.join(__dirname, 'images/test.gif'),
    icon: path.join(__dirname, 'images/V-core9.logo.medium.jpg'),
    actions: ['OK', 'Cancel'],
  },
  (err, data) => {
    // Will also wait until notification is closed.
    console.log('Waited');
    console.log(JSON.stringify({ err, data }, null, '\t'));
  }
);

// Built-in actions:
notifier.on('timeout', () => {
  console.log('Timed out!');
});
notifier.on('activate', () => {
  console.log('Clicked!');
});
notifier.on('dismissed', () => {
  console.log('Dismissed!');
});

// Buttons actions (lower-case):
notifier.on('ok', () => {
  console.log('"Ok" was pressed');
});
notifier.on('cancel', () => {
  console.log('"Cancel" was pressed');
});

