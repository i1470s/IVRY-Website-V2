if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("./serviceWorker.js")
        .then(res => console.log("service worker CACHE registered"))
        .catch(err => console.log("service worker CACHE not registered", err))
    });
  };
