/*_____  ____   ____  _______   ____  ____   
 |_   _||_  _| |_  _||_   __ \ |_  _||_  _|  
   | |    \ \   / /    | |__) |  \ \  / /    
   | |     \ \ / /     |  __ /    \ \/ /     
  _| |_     \ ' /     _| |  \ \_  _|  |_     
 |_____|     \_/     |____| |___||______|
  Created by i1470s#0396 Welcome :)*/
  
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker CACHE registered"))
        .catch(err => console.log("service worker CACHE not registered", err))
    });
  };
