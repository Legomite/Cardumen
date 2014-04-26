game.module(
    'game.world.actors.player'
)
    .require(
        'engine.physics',
        'plugins.AI',
        'engine.sprite'
)
    .body(function () {

        Cardumen = game.Class.extend({
            _speed: 50,
            init: function () {
                var x = Math.random() * (game.system.width);
                var y = Math.random() * (game.system.width - 100) + 100;
                this.sprite = new game.Sprite(160, 32, 'media/images/cardumentest.png');
                this.AI = new game.SteeringBehavior();


            },
            collide: function () {
                // console.log("colision bot");
                game.scene.world.removeBody(this);
                game.scene.cardumenContainer.removeChild(this.sprite);
                game.scene.removeObject(this);


                // game.scene.interactive.addScore(this.value);

                game.scene.world.removeBodyCollision(this.body);

            },
            update: function () {
                this.flip();
                // console.log("velocity y: " + this.body.velocity.y);
                this.sprite.position.x = this.body.position.x;
                this.sprite.position.y = this.body.position.y;
                if (this.sprite.position.y < 0) {

                    game.scene.world.removeBody(this.body);
                    game.scene.ObjectsContainer.removeChild(this.sprite);
                    game.scene.removeObject(this);

                }


            },
            flip: function () {
                if (this.body.velocity.x > 0) {
                    this.sprite.scale.x = -1;

                } else {
                    if (this.body.velocity.x < 0) {
                        this.sprite.scale.x = -1;
                    }
                }

            },


        })
    });