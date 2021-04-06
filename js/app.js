/*_____  ____   ____  _______   ____  ____   
 |_   _||_  _| |_  _||_   __ \ |_  _||_  _|  
   | |    \ \   / /    | |__) |  \ \  / /    
   | |     \ \ / /     |  __ /    \ \/ /     
  _| |_     \ ' /     _| |  \ \_  _|  |_     
 |_____|     \_/     |____| |___||______|
  Created by i1470s#0396 Welcome :)*/
  
if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('serviceWorker.js');
}
  
document.querySelector('#show').addEventListener('click', () => {
  const iconUrl = document.querySelector('select').selectedOptions[0].value;
  let imgElement = document.createElement('img');
  imgElement.src = iconUrl;
  document.querySelector('#container').appendChild(imgElement);
});