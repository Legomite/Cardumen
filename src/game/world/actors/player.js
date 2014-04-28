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
            id: 0,
            init: function () {
                var x = Math.random() * (game.system.width - 50 - 100) + 100;
                var y = Math.random() * (game.system.height - 50 - 100) + 100;
                // console.log("X : " + x + "\nY: " + y);
                this.sprite = new game.Sprite('player');
                this.sprite.position.x = x;
                this.sprite.position.y = y;
                this.sprite.anchor.set(0, 0.5);

                this.AI = new game.SteeringBehavior();
                var shape = new game.Rectangle(32, 11);
                this.body = new game.Body();
                /* this.body.velocity = {
                    x: 0,
                    y: 0
                }*/

                this.body.collisionGroup = 0;
                // this.body.collideAgainst = 0;
                this.body.position.x = x;
                this.body.position.y = y;
                this.body.addShape(shape);
                //  this.body.collide = this.collide.bind(this);

                game.scene.world.addBody(this.body);
                game.scene.cardumenContainer.addChild(this.sprite);

            },
            //     collide: function () {
            //          console.log("colision bot");

            /*   game.scene.cardumenPool.erase(this);
                game.scene.world.removeBody(this);
                game.scene.cardumenContainer.removeChild(this.sprite);
                game.scene.removeObject(this);


                // game.scene.interactive.addScore(this.value);

                game.scene.world.removeBodyCollision(this.body);*/

            //  },
            afterCollide: function () {

            },
            update: function () {
                this.last = this.body.last;

                this.behavior();

                this.flip();
                // console.log("velocity y: " + this.body.velocity.y);
                this.sprite.rotation = this.body.rotation;
                this.sprite.position.x = this.body.position.x;
                this.sprite.position.y = this.body.position.y;
                if (this.sprite.position.y < 0) {

                    game.scene.world.removeBody(this.body);
                    game.scene.cardumenContainer.removeChild(this.sprite);
                    game.scene.removeObject(this);

                }


            },
            flip: function () {

                if (this.body.velocity.x > 0) {
                    this.sprite.scale.x = -1;

                } else {
                    if (this.body.velocity.x < 0) {

                        this.sprite.scale.x = 1;
                    }
                }
                if (this.body.position.x < 50 || this.body.position.x > game.system.width - 50) {
                    this.body.velocity.x *= -1;
                }
                if (this.body.position.y < 50 || this.body.position.y > game.system.height - 50) {
                    this.body.velocity.y *= -1;
                }
                /*if (this.last && this.seeking) {
                    var temp = (this.body.position.y - this.last.y) / (this.body.position.x - this.last.x);
                    this.body.rotation = temp;
                }*/



            },
            behavior: function () {
                var temp, temp2;
                /*= new game.Body();
              //  temp.position.x = 99999;
                temp.position.y = 99999;*/
                for (var i = 0; i < game.scene.commandPool.length; i++) {
                    if (temp) {
                        if (this.body.position.distance(game.scene.commandPool[i].body.position) < this.body.position.distance(temp.position)) {
                            temp = game.scene.commandPool[i].body;
                        }
                    } else {
                        temp = game.scene.commandPool[i].body;
                    }
                }
                if (temp) {
                    this.seeking = true;
                    this.body.collideAgainst = 0;
                    this.AI.seek(this.body, temp, this._speed);

                    // this.AI.chase(this.body, temp, 1, 1);

                } else {

                    this.seeking = false;
                }
                for (var i = 0; i < game.scene.cardumenPool.length; i++) {
                    if (temp2) {
                        if (this.body.position.distance(game.scene.cardumenPool[i].body.position) < this.body.position.distance(temp2.position) && game.scene.cardumenPool[i].id !== this.id) {
                            temp2 = game.scene.cardumenPool[i].body;

                        }
                        if (this.body.position.distance(temp2.position) < 20) {
                            this.body.velocity = {
                                x: 0,
                                y: 0
                            }
                        }
                    } else {
                        temp2 = game.scene.cardumenPool[i].body;
                    }
                }


            }


        });

        Command = game.Class.extend({
            id: 0,
            init: function (global) {
                var x = global.x;
                var y = global.y;
                this.sprite = new game.Sprite('command');
                this.sprite.position.x = x;
                this.sprite.position.y = y;

                //this.AI = new game.SteeringBehavior();
                var shape = new game.Rectangle(48, 16);
                this.body = new game.Body();
                this.body.collideAgainst = 0;
                this.body.collisionGroup = 1;
                this.body.position.x = x;
                this.body.position.y = y;
                this.body.addShape(shape);
                this.body.collide = this.collide.bind(this);
                game.scene.world.addBody(this.body);
                game.scene.commandContainter.addChild(this.sprite);
            },
            collide: function () {
                console.log("colision bot :" + this.id);
                /* for (var i = 0; i < game.scene.cardumenPool.length; i++) {
                    game.scene.cardumenPool[i].body.velocity = {
                        x: Math.random() * (1),
                        y: Math.random() * (1)
                    }
                    console.log("X :" + game.scene.cardumenPool[i].body.velocity.x);
                    console.log("Y :" + game.scene.cardumenPool[i].body.velocity.y);
                }*/
                game.scene.commandPool.erase(this);
                game.scene.world.removeBody(this);
                game.scene.commandContainter.removeChild(this.sprite);
                game.scene.removeObject(this);


                // game.scene.interactive.addScore(this.value);

                game.scene.world.removeBodyCollision(this.body);

            },
            update: function () {
                // console.log("size of command :" + game.scene.commandPool.length);
            }
        });
    });