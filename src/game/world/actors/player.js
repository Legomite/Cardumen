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

                    //this.addTimer(2000, function() {
                    //console.log("VALORES x,y " + this.body.position.x + "," + this.body.position.y);
                    //2*sin10x
                    //this.body.position.y =game.system.height / 2 + (60 * Math.sin(0.2*this.body.position.x));
                    // this.body.position.x = 5 + this.body.position.x;
                    //}, true);
                    this.sprite.position.x = this.body.position.x;
                    this.sprite.position.y = this.body.position.y;
                    this.behavior.sinBehavior(this.body,game.system.height / 2, 50, 60, 0.10);
                },
                collide: function() {
                    console.log("collide");
                    //this.body.mass = 0;
                    //return true;
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