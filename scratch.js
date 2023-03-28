(Scratch => {
  'use strict';
  
  const cast = Scratch.Cast;
  
  class Mathematics {
    getInfo() {
      return {
        id: "mathematics",
        name: "Scratch Mathematics",
        blocks: [
          {
            opcode: "magnitude",
            blockType: Scratch.BlockType.REPORTER,
            text: "get magnitude of x [x] and y [y]",
            arguments: {
              x: {
                type: Scratch.ArgumentType.Number,
                defaultValue: "0"
              },
              y: {
                type: Scratch.ArgumentType.Number,
                defaultValue: "0"
              }
            }
          },
          {
            opcode: "normalize_getX",
            blockType: Scratch.BlockType.REPORTER,
            text: "normalize x [x], y [y] and get x",
            arguments: {
              x: {
                type: Scratch.ArgumentType.Number,
                defaultValue: "0"
              },
              y: {
                type: Scratch.ArgumentType.Number,
                defaultValue: "0"
              }
            }
          },
          {
            opcode: "normalize_getY",
            blockType: Scratch.BlockType.REPORTER,
            text: "normalize x [x], y [y] and get y",
            arguments: {
              x: {
                type: Scratch.ArgumentType.Number,
                defaultValue: "0"
              },
              y: {
                type: Scratch.ArgumentType.Number,
                defaultValue: "0"
              }
            }
          }
        ]
      };
    }
    
    magnitude({x, y}) {
      return Math.sqrt((x * x) + (y * y));
    }
    
    normalize_getX({x, y}) {
      return (x / magnitude({x, y}));
    }
    
    normalize_getY({x, y}) {
      return (y / magnitude({x, y}));
    }
  }
  
  Scratch.extensions.register(new Mathematics());
})(Scratch);
