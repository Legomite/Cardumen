game.module(
        'game.world.actors.player'
        )
        .require(
                'engine.physics',
                'plugins.AI',
                'game.world.actors.Behaviors'
                )
        .body(function() {
            PenguinBot = game.Class.extend({
                position: {x: 0, y: 0},
                vel: 0,
                init: function() {
                    this.position = {x: 100, y: game.system.height / 2};
                    this.sprite = new game.Sprite('1', 'Box.png');
                    this.steeringB = new game.SteeringBehavior();
                    this.behavior = new Behaviors();
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
                    this.body.collide = this.collide.bind(this);
                    var shape = new game.Rectangle(64, 64);
                    this.body.addShape(shape);
                    game.scene.world.addBody(this.body);

                },
                update: function() {
                    this.sprite.position.x = this.body.position.x;
                    this.sprite.position.y = this.body.position.y;
                    this.behavior.sinBehavior(this.body, game.system.height / 2, 50, 60, 0.10);
                    this.sprite.rotation = this.body.rotation;
                },
                collide: function() {
                    console.log("collide");
                }
            });

            BirdBot = game.Class.extend({
                position: {x: 0, y: 0},
                vel: 0,
                init: function() {
                    this.position = {x:0, y: 0};
                    this.sprite = new game.Sprite('1', 'Box.png');
                    this.steeringB = new game.SteeringBehavior();
                    this.behavior = new Behaviors();
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
                    this.body.collide = this.collide.bind(this);
                    var shape = new game.Rectangle(64, 64);
                    this.body.addShape(shape);
                    game.scene.world.addBody(this.body);

                },
                update: function() {
                    this.sprite.position.x = this.body.position.x;
                    this.sprite.position.y = this.body.position.y;
                    this.behavior.paralBehavior(this.body, 125,  250);
                    this.sprite.rotation = this.body.rotation;
                },
                collide: function() {
                    console.log("collide");
                }
            });
            
            VictimSample = game.Class.extend({
                position: {x: 0, y: 0},
                vel: 0,
                init: function() {
                    this.position = {x: 600, y: game.system.height / 2};
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
                        collideAgainst: 1,
                        collisionGroup: 1
                    });
                    //this.body.collide = this.collide.bind(this);
                    var shape = new game.Rectangle(64, 64);
                    this.body.addShape(shape);
                    game.scene.world.addBody(this.body);
                }
            });
        });