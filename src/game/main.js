game.module(
        'game.main'
        ).require(
        'engine.scene',
        'game.world.actors.player',
        'plugins.AI'
        )
        .body(function() {

            game.addAsset('Box.png', '1');
            game.addAsset('Box_Yellow.png', '2');
            SceneGame = game.Scene.extend({
                backgroundColor: 0xb9bec7,
                init: function() {
                    this.world = new game.World();
                    this.world.mass=0;
                    this.victimSample = new VictimSample();
                    this.penguinBot = new PenguinBot();
                }
            });

            game.start();

        });
