/*_____  ____   ____  _______   ____  ____   
 |_   _||_  _| |_  _||_   __ \ |_  _||_  _|  
   | |    \ \   / /    | |__) |  \ \  / /    
   | |     \ \ / /     |  __ /    \ \/ /     
  _| |_     \ ' /     _| |  \ \_  _|  |_     
 |_____|     \_/     |____| |___||______|
  Created by i1470s#0396 Welcome :)*/
  
  const divInstall = document.getElementById('installContainer');
  const butInstall = document.getElementById('butInstall');
  
  /* Put code here */
  
  
  
  /* Only register a service worker if it's supported */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-Worker.js');
  }
