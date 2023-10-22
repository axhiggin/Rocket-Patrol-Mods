/*
Name: Aidan Higgins
Mod Title: Rocket Patrol on Roids
Time to complete:
Mod list:
  1. Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5):  Added a lil alien spaceship that flies across the screen and is worth 50 points
  2. Display the time remaining (in seconds) on the screen (3):  Used this.clock.elapsed to keep track of time, subtracted it from game.settings.gameTimer
  3. Implement a new timing/scoring mechanism that adds time to the clock for successful hits (5):  this.clock.elapsed -= 1000; in shipExplode
  4. 

Citations:
For the particles: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/game%20objects/particle%20emitter/emit%20at%20pointer.js
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