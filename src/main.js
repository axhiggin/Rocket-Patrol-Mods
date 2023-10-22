/*
Name: Aidan Higgins
Mod Title: Rocket Patrol on Roids
Time to complete:
Mod list:
  1. Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5):  Added a lil alien spaceship that flies across the screen and is worth 50 points, added speed in the Spaceship constructor
  2. Display the time remaining (in seconds) on the screen (3):  Used this.clock.elapsed to keep track of time, subtracted it from game.settings.gameTimer and displayed it
  3. Implement a new timing/scoring mechanism that adds time to the clock for successful hits (5):  this.clock.elapsed -= 1000; in shipExplode
  4. Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (5): particleBoom function at the bottom of Play.js, used by shipExplode
  5. Allow the player to control the Rocket after it's fired (1): changed movement to if (true) instead of if (!this.isFiring)
  6. Add your own (copyright-free) looping background music to the Play scene (keep the volume low and be sure that multiple instances of your music don't play when the game restarts) (1): added music when the scene is created, and stop it before another scene is created



Citations:
For the particles: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/game%20objects/particle%20emitter/emit%20at%20pointer.js
Music: https://www.youtube.com/watch?v=NPdgPZ0u3zQ
*/



let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }
  
let game = new Phaser.Game(config)
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;