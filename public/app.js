document.addEventListener("DOMContentLoaded", () => {
  const userGrid = document.querySelector(".grid-user");
  const computerGrid = document.querySelector(".grid-computer");
  const displayGrid = document.querySelector(".grid-display");

  const ships = document.querySelectorAll(".ship");

  const destroyer = document.querySelector(".destroyer-container");
  const submarine = document.querySelector(".submarine-container");
  const cruiser = document.querySelector(".cruiser-container");
  const battleship = document.querySelector(".battleship-container");
  const carrier = document.querySelector(".carrier-container");

  const startButton = document.querySelector("#start");
  const rotateButton = document.querySelector("#rotate");
  const turnDisplay = document.querySelector("#whose-turn");
  const infoDisplay = document.querySelector("#info");

  const userSquares = [];
  const computerSquares = [];

  const width = 10;

  // Create board
  const createBoard = (grid, squares, width) => {
    for (let i = 0; i < width * width; i++ ) {
      const square = document.createElement("div");
      square.dataset.id = i;
      grid.appendChild(square);
      squares.push(square);
    };
  };

  createBoard(userGrid, userSquares);
  createBoard(computerGrid, computerSquares);

  // Array of ships for random assortment
  const shipsArray = [
    {
      name: "destroyer",
      directions: [
        // horizontal
        [0, 1],
        // vertical
        [0, width]
      ]
    },
    {
      name: "submarine",
      directions: [
        // horizontal
        [0, 1, 2],
        // vertical
        [0, width, width * 2]
      ]
    },
    {
      name: "cruiser",
      directions: [
        // horizontal
        [0, 1, 2],
        // vertical
        [0, width, width * 2]
      ]
    },
    {
      name: "battleship",
      directions: [
        // horizontal
        [0, 1, 2, 3],
        // vertical
        [0, width, width * 2, width * 3]
      ]
    },
    {
      name: "carrier",
      directions: [
        // horizontal
        [0, 1, 2, 3, 4],
        // vertical
        [0, width, width * 2, width * 3, width * 4]
      ]
    }
  ];
});