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
            text: "get magnitude of x [x] and y [y]"
          },
          {
            opcode: "normalize_getX",
            blockType: Scratch.BlockType.REPORTER,
            text: "normalize x [x], y [y] and get x"
          },
          {
            opcode: "normalize_getY",
            blockType: Scratch.BlockType.REPORTER,
            text: "normalize x [x], y [y] and get y"
            }
          }
        ]
      };
    }
    
    magnitude({x, y}) {
      return Math.sqrt((x * x) + (y * y));
    }
    
    normalize_getX({x, y}) {
      return (x / Math.sqrt((x * x) + (y * y)));
    }
    
    normalize_getY({x, y}) {
      return (y / Math.sqrt((x * x) + (y * y)));
    }
  }
  
  Scratch.extensions.register(new Mathematics());
})(Scratch);
