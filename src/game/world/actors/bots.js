game.module(
    'game.world.actors.bots'
)
    .require(
        'engine.physics',
        'plugins.AI',
        'plugins.Behaviors'
)
    .body(function () {
        Bot = game.Class.extend({
            type: {
                penguin: 1,
                whale: 2,
                killerWhale: 3,
                seal: 4,
                walrus: 5,
                birdOfPrey: 6
            },
            currentType: null,
            y: null,
            _speed: 200,
            init: function () {
                var x = Math.random();
                // console.log(x);
                this.x = (x < 0.5) ? 0 : game.system.width;
                //   var x = Math.random() * (game.system.width - 50 - 100) + 100;
                this.y = Math.random() * (game.system.height - 50 - 100) + 100;
                this.body = new game.Body();
                this.body.position.x = this.x;
                this.body.position.y = this.y;
                this.body.collideAgainst = 3;
                this.body.collisionGroup = 2;
                this.steeringB = new game.SteeringBehavior();
                this.behavior = new Behaviors();
                // this.create();
                // this.body.collide = this.collide.bind(this);
                //  this.update = this.update.bind(this);
            },
            create: function () {
                switch (this.currentType) {
                case this.type.penguin:
                    this.createPenguin();
                    break;
                case this.type.whale:
                    this.createWhale();
                    break;
                }
                this.addWorld();
            },
            createPenguin: function () {
                //console.log("create penguin");
                this.sprite = new game.Sprite('penguin');
                this.sprite.anchor = {
                    x: 0.5,
                    y: 0.5
                }
                var shape = new game.Rectangle(140, 40);
                this.body.addShape(shape);
            },
            createWhale: function () {
                this.sprite = new game.Sprite('box');
                var shape = new game.Rectangle(64, 64);
                this.body.addShape(shape);

            },
            addWorld: function () {
                game.scene.world.addBody(this.body);
                game.scene.commandContainter.addChild(this.sprite);
                game.scene.addObject(this);
            },
            /*  collide: function () {
                //console.log("ccooo");
                // game.scene.cardumenPool.erase(this);
                /* game.scene.world.removeBody(this);
                game.scene.cardumenContainer.removeChild(this.sprite);
                game.scene.removeObject(this);
                // game.scene.interactive.addScore(this.value);
                game.scene.world.removeBodyCollision(this.body);*/
            // },
            behaviorasd: function () {
                switch (this.currentType) {
                case this.type.penguin:
                    this.body.velocity.x = (this.x === 0) ? this._speed : -this._speed;
                    //this.behavior.sinBehavior(this.body, this.y, 80, 80, 0.1);
                    break;
                case this.type.whale:
                    this.behavior.paralBehavior(this.body, 125, 250);
                    break;

                }
            },
            update: function () {
                this.sprite.scale.x = (this.body.velocity.x < 0) ? 1 : -1;
                //console.log("SPRITE position x: " + this.sprite.position.x + "\nposition y: " + this.sprite.position.y);
                //console.log("BODY position x: " + this.body.position.x + "\nposition y: " + this.body.position.y);
                this.behaviorasd();
                this.sprite.position.x = this.body.position.x;
                this.sprite.position.y = this.body.position.y;
                this.sprite.rotation = this.body.rotation;
                if (this.sprite.position.x > game.system.width) {
                    game.scene.removeObject(this);
                    game.scene.world.removeBody(this);
                    //game.scene.cardumenContainer.removeChild(this.sprite);
                    game.scene.world.removeBodyCollision(this.body);
                    game.scene.addScore();
                }
            }

        });
    });