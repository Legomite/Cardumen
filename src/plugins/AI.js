/**
    AI engine for Panda.js Framework by@jotaSe
   
    @module AI
    @namespace game
    
**/
game.module(
    'plugins.AI'
)
    .require(

        'engine.physics'
)
    .body(function () {
        'use strict';
        /**
        STEERING BEHAVIOR
        @class SteeringBehavior
        **/

        //najarse shike actualizate
        game.SteeringBehavior = game.Class.extend({
            /**
            Chasing behavior : Predator --> Prey    
             
            **/
            chase: function (Predator, Prey, x, y) {

                if (x !== 0) {

                    if (Predator.position.x > Prey.position.x) {
                        Predator.position.x -= x;
                        Predator.velocity.x = (Predator.velocity.x > 0) ? (-1 * Predator.velocity.x) : Predator.velocity.x;

                    } else if (Predator.position.x < Prey.position.x) {
                        Predator.position.x += x;
                        Predator.velocity.x = (Predator.velocity.x < 0) ? (-1 * Predator.velocity.x) : Predator.velocity.x;
                    }

                }
                if (y !== 0) {
                    if (Predator.position.y > Prey.position.y) {
                        Predator.position.y -= y;
                        Predator.velocity.y = (Predator.velocity.y > 0) ? (-1 * Predator.velocity.y) : Predator.velocity.y;
                    } else if (Predator.position.y < Prey.position.y) {
                        Predator.position.y += y;
                        Predator.velocity.y = (Predator.velocity.y < 0) ? (-1 * Predator.velocity.y) : Predator.velocity.y;
                    }

                }


            },

            seek: function (Predator, Prey, maxVelocity) {
                var temp = Prey.position.clone();
                temp.subtract(Predator.position);
                temp.normalize();
                temp.multiply(maxVelocity);
                Predator.velocity = temp;

            },
            seekForce: function (Predator, Prey, maxVelocity, maxForce, maxSpeed) {
                var velocity = Predator.velocity.clone();
                this.seek(Predator, Prey, maxVelocity);
                var steer = Predator.velocity.subtract(velocity);
                this.truncate(steer, maxForce);
                if (Predator.mass > 0) {
                    steer.divide(Predator.mass);
                }
                steer.add(velocity);
                this.truncate(steer, maxSpeed);
                Predator.velocity = steer;
                Predator.position.add(Predator.velocity);
            },
            flee: function (Predator, Prey, maxVelocity) {
                this.seek(Predator, Prey, maxVelocity);
                Predator.velocity.multiply(-1);
            },
            fleeForce: function (Predator, Prey, maxVelocity, maxForce, maxSpeed) {
                this.seekForce(Predator, Prey, maxVelocity, maxForce, maxSpeed);
                Predator.velocity.multiply(-1);
                Predator.position.multiply(-1);
            },
            pursuit: function (Predator, Prey, maxVelocity, distance) {
                var temp = Prey;
                temp.position.add(temp.velocity).multiply(distance);
                this.seek(Predator, temp, maxVelocity);
            },
            evade: function (Predator, Prey, maxVelocity, distance) {
                var temp = Prey;
                temp.position.add(temp.velocity).multiply(distance);
                this.flee(Predator, temp, maxVelocity);
            },
            truncate: function (vector, max) {
                if (vector.length() > max) {
                    vector.normalize();

                    vector *= max;
                }
            },
            seekQueue: function (Predator, Prey, anothers, MAX_QUEUE, MAX_RADIUS, maxVelocity) {
                var v = new game.Vector(Predator.velocity.x, Predator.velocity.y);
                var brake = new game.Vector(0, 0);
                //  console.log("get neibor");
                var neighbor = this.getNeighborAhead(Predator, anothers, MAX_QUEUE, MAX_RADIUS);
                // console.log("get neibor true");
                this.seek(Predator, Prey, maxVelocity);
                var steer = Predator.velocity.subtract(v);
                if (neighbor != null) {
                    brake.x = -steer.x * 0.8;
                    brake.y = -steer.y * 0.8;

                    v.multiply(-1);
                    brake = brake.add(v);
                    brake = brake.add(this.separation());

                    if (Predator.position.distance(neighbor.position) <= MAX_RADIUS) {
                        Predator.velocity.multiply(brake);
                    }

                }

                return brake;
            },
            getNeighborAhead: function (Predator, anothers, MAX_QUEUE, MAX_RADIUS) {
                var i;
                var ret = null;
                var qa = new game.Vector(Predator.velocity.x, Predator.velocity.y);

                qa.normalize();
                qa.multiply(MAX_QUEUE);

                var ahead = Predator.position.clone().add(qa);

                for (i = 0; i < anothers.length; i++) {
                    var neighbor = anothers[i];
                    var d = ahead.distance(neighbor.body.position);

                    if (neighbor.body != Predator && d <= MAX_RADIUS) {
                        ret = neighbor.body;
                        break;
                    }
                }

                return ret;
            },
            separation: function () {

            }



        })
    })
