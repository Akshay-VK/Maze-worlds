# Maze Worlds

##### [Check out the game here.](https://maze-worlds.herokuapp.com)

### The Idea

The game is a 2D RPG.
It is set in a infinite world which is a maze.

### The development theory

For my last game, a serious problem I faced was performance. The game was barely running at 60fps.

So, this time, I'm going to use multiple canvases and WebGL. They will be:

- Background: Updated only when required
- Characters: Updated everytime
- Lights: Updated every time

### The Languages

- **Typescript**: I will be using typescriptbecause it is awesome(and has static typing).
- **Webpack**: To minify the code (duh)
- **Jest**: To test( again.. duh)
- **GLSL**: The vertex and fragment shader will be in script tags
- **HTML**: no need to speak

### Future plans

My plan is to make this game into a desktop game with Electron and publich it on Github and other places.
