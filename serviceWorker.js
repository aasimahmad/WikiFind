self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./dist/css/style.min.css", "./js/main.js", "./js/dataFunctions.js", "./js/searchBar.js", "./js/searchResults.js", "./img/favicon.ico", "./img/logo192.png"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
