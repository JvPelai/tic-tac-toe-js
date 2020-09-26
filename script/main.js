var gameboard = (function () {
  let row1 = ["#", "#", "#"];
  let row2 = ["#", "#", "#"];
  let row3 = ["#", "#", "#"];
  return {
    row1,
    row2,
    row3,
  };
})();

const dom_elems = (function () {
  const board = document.querySelector(".game_board");
  const board_row = document.querySelector(".board_tr");
  const board_td = document.querySelectorAll(".board_td").forEach((item) => {
    item.addEventListener("click", function () {
      this.textContent = "X";
    });
  });
  return { board, board_row, board_td };
})();
