self.addEventListener("install", e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./index.html","./main.js","./Images/icon1.png"])

        })
    )
});

self.addEventListener("fetch", e =>{
    //show the files being intercepted
   console.log(`Intercepting fetch requests for:${e.request.url}`);

    e.respondWith(
        caches.match(e.request).then(response => {
            return response  || fetch(e.request);
        })
    );
});

