game.module(
    'game.main'
).require(
    'engine.core',
    'game.assets',
    'game.world.scenes.test'
)
    .body(function () {
        // game.Storage.id = 'com.jotase.cardumen';
        // game.Debug.enabled = false;
        //  game.System.idtkScale = 'ScaleAspectFit';
        var w = (window.innerWidth < 640) ? 640 : 768;
        var h = (window.innerHeight < 1024) ? 1024 : window.innerHeight;
        // game.addAsset('cardumentest.png', 'player');
        game.start(sceneTest, h, w);
        //game.addAsset('cardumentest.png');
        /*
        SceneGame = game.Scene.extend({


            backgroundColor: 0xb9bec7,



            init: function () {


                var logo = new game.Sprite('logo.png');

                logo.anchor.set(0.5, 0.5);

                logo.position.set(game.system.width / 2, game.system.height / 2);

                this.stage.addChild(logo);

            }


        });

        game.start();*/

    });
