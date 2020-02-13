;(function f() {
    var script = document.createElement('script');
    script.src = 'https://yastatic.net/s3/zen-lib/widget-loader/widget-loader.ver_0.js';
    script.async = true;
    document.head.appendChild(script);

    window.yandexZenAsyncCallbacks = window.yandexZenAsyncCallbacks || [];
    window.yandexZenAsyncCallbacks.push(function r() {
        window.YandexZen.renderWidget({
            clid: [446, 447],
            container: '.article__title',
        });
    });
})();
