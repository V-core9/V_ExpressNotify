const v_execute = require('v_execute');

// Simple listing
v_execute("ls");

// Check git status
(async()=>{

    console.log(await v_execute("bash -c \"cd Toaster-2.0__win10 ; bash NEW_TOAST_restart.sh ;\""));
})();