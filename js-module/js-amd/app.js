requirejs.config({
    urlArgs:"v=1.0.0",
    //By default load any module IDs from js-amd/lib
    baseUrl: 'js-amd/',
    //except, if the module ID starts with "app",
    //load it from the js-amd/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js-amd" extension since
    //the paths config could be for a directory.
    paths: {
        app: './app'
    }
});

// Start the main app logic.
requirejs(['lib/jquery', 'app/hello', 'app/world'], function($, hello, world) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
   console.log(hello.getMessage('world'))

});