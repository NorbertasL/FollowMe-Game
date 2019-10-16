# **FollowMe! Game Project**
## by Norbertas Lapenas
## [Preview Website](https://norbertasl.github.io/FollowMe-Game/).

*A simple memory game similar to "Simon" written with JavaScript.*

---

### *External Lib*

* jQuery [Link](https://jquery.com/)
  * Makes JS writing faster and easter to understand
* ~~jQuery SVG [Link](http://keith-wood.name/svg.html)~~
  * ~~jQuery plugin that increase SVG functionality~~


### *Processes of building the game*

#### 1. Graphics:
    Hand i choice between SVG and using JavaScrip Canvas.I went with SVG because
    i was just learning about it and because it is relatively easy to implement
    for a simple game like this with minimal animations.

#### 2. Game Loop:
    The game was tricky at first, because I assume it would work the same as in
    other programming languages.I was going to use a infinite while loop as is
    conventional for games, but i realised that it makes the browser lock up and
    that would cause me issues.

    After doing some research i found out about this build in method that is
    use in animation and it works perfectly as a game loop too.So in the end I
    decided to use requestAnimationFrame();


---
#### Issued during development
* Changing SVG fill.
  * ~~Turns out jQuerry cannot change SVG fill option with animation method,
  so I had to import a jQuerry plug in to do so.~~Using css manipulation for
   that now.
* Computer was using the same methods to trigger button presses, but I needed a
way to time it.
  * A simple if statement with time checking stamp and a callback function solved
  that issue.
