game.module(
    'game.main'
).require('engine.core',
    'game.assets')
    .body(function () {
        game.Storage.id = 'com.jotase.cardumen';
        game.Debug.enabled = false;
        game.System.idtkScale = 'ScaleAspectFit';
        var w = (window.innerWidth < 640) ? 640 : 768;
        var h = (window.innerHeight < 1024) ? 1024 : window.innerHeight;
        game.start(Home, h, w);
    });
