const v_execute = require('v_execute');

// Simple listing
v_execute("ls");

// Check git status
(async()=>{

    //console.log(await v_execute("bash -c \"cd Toaster-2.0__win10 ; bash NEW_TOAST_restart.sh ;\""));

    v_execute("bash -c \"cd Toaster-2.0__win10 ; powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -WindowStyle Hidden -File New-ToastNotification.ps1 -Config good_morning_demo_01.xml \"")
})();