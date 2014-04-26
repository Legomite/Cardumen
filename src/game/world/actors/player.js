game.module(
        'game.world.actors.player'
        )
        .require(
                'engine.physics',
                'plugins.AI'
                )
        .body(function() {
            PenguinBot = game.Class.extend({
                position: {x: 0, y: 0},
                vel: 0,
                init: function() {
                    this.position = {x: game.system.width / 2, y: 100};
                    this.sprite = new game.Sprite('1', 'Box.png');
                    this.steeringB = new game.SteeringBehavior();
                    this.sprite.position.set(this.position.x, this.position.y);
                    game.scene.stage.addChild(this.sprite);
                    game.scene.addObject(this);
                    this.body = new game.Body({
                        position: {
                            x: this.position.x,
                            y: this.position.y
                        },
                        velocityLimit: {
                            x: 100,
                            y: 100
                        },
                        collideAgainst: 1,
                        collisionGroup: 0
                    });
                    //this.body.collide = this.collide.bind(this);
                    var shape = new game.Rectangle(64, 64);
                    this.body.addShape(shape);
                    game.scene.world.addBody(this.body);
                },
                update: function() {
                    //console.log("updating");
                    this.sprite.position.x = this.body.position.x;
                    this.sprite.position.y = this.body.position.y;
                    this.steeringB.seek(this.body, game.scene.victimSample.body, 80);
                }
            });

            VictimSample = game.Class.extend({
                position: {x: 0, y: 0},
                vel: 0,
                init: function() {
                    this.position = {x: (game.system.width / 2) + 50, y: 500};
                    this.sprite = new game.Sprite('2', 'Box_Yellow.png');
                    this.sprite.position.set(this.position.x, this.position.y);
                    game.scene.stage.addChild(this.sprite);
                    game.scene.addObject(this);
                    this.body = new game.Body({
                        position: {
                            x: this.position.x,
                            y: this.position.y
                        },
                        velocityLimit: {
                            x: 100,
                            y: 100
                        },
                        collideAgainst: 0,
                        collisionGroup: 1
                    });
                    //this.body.collide = this.collide.bind(this);
                    var shape = new game.Rectangle(64, 64);
                    this.body.addShape(shape);
                    game.scene.world.addBody(this.body);
                }
            });
        });