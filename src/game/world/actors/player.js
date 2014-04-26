game.module(
    'game.world.actors.player'
)
    .require(
        'engine.physics',
        'plugins.AI'
)
    .body(function () {

        Cardumen = game.Class.extend({
            _speed: 50,
            init: function () {
                var x = Math.random() * (game.system.width);
                var y = Math.random() * (game.system.width - 100) + 100;
                this.sprite = new game.Sprite(160, 32, 'media/images/cardumentest.png');
                this.AI = new game.SteeringBehavior();


            }


        })
    });