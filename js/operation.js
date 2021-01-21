// operation
const btnAddition = document.getElementById("btnAddition");
const btnSubtract = document.getElementById("btnSubtract");
const btnMultiply = document.getElementById("btnMultiply");
const btnClear = document.getElementById("btnClear");

// text box
// matrix a
// row 1
const a_row1_col1 = document.getElementById("a-row1-col1");
const a_row1_col2 = document.getElementById("a-row1-col2");
const a_row1_col3 = document.getElementById("a-row1-col3");
const a_row1_col4 = document.getElementById("a-row1-col4");
// row 2
const a_row2_col1 = document.getElementById("a-row2-col1");
const a_row2_col2 = document.getElementById("a-row2-col2");
const a_row2_col3 = document.getElementById("a-row2-col3");
const a_row2_col4 = document.getElementById("a-row2-col4");
// row 3
const a_row3_col1 = document.getElementById("a-row3-col1");
const a_row3_col2 = document.getElementById("a-row3-col2");
const a_row3_col3 = document.getElementById("a-row3-col3");
const a_row3_col4 = document.getElementById("a-row3-col4");
// row 4
const a_row4_col1 = document.getElementById("a-row4-col1");
const a_row4_col2 = document.getElementById("a-row4-col2");
const a_row4_col3 = document.getElementById("a-row4-col3");
const a_row4_col4 = document.getElementById("a-row4-col4");

// matrix b
// row 1
const b_row1_col1 = document.getElementById("b-row1-col1");
const b_row1_col2 = document.getElementById("b-row1-col2");
const b_row1_col3 = document.getElementById("b-row1-col3");
const b_row1_col4 = document.getElementById("b-row1-col4");
// row 2
const b_row2_col1 = document.getElementById("b-row2-col1");
const b_row2_col2 = document.getElementById("b-row2-col2");
const b_row2_col3 = document.getElementById("b-row2-col3");
const b_row2_col4 = document.getElementById("b-row2-col4");
// row 3
const b_row3_col1 = document.getElementById("b-row3-col1");
const b_row3_col2 = document.getElementById("b-row3-col2");
const b_row3_col3 = document.getElementById("b-row3-col3");
const b_row3_col4 = document.getElementById("b-row3-col4");
// row 4
const b_row4_col1 = document.getElementById("b-row4-col1");
const b_row4_col2 = document.getElementById("b-row4-col2");
const b_row4_col3 = document.getElementById("b-row4-col3");
const b_row4_col4 = document.getElementById("b-row4-col4");

const clearText = [
  // matrix a
  // row 1
  a_row1_col1,
  a_row1_col2,
  a_row1_col3,
  a_row1_col4,
  // row 2
  a_row2_col1,
  a_row2_col2,
  a_row2_col3,
  a_row2_col4,
  // row 3
  a_row3_col1,
  a_row3_col2,
  a_row3_col3,
  a_row3_col4,
  // row 4
  a_row4_col1,
  a_row4_col2,
  a_row4_col3,
  a_row4_col4,

  // matrix b
  // row 1
  b_row1_col1,
  b_row1_col2,
  b_row1_col3,
  b_row1_col4,
  // row 2
  b_row2_col1,
  b_row2_col2,
  b_row2_col3,
  b_row2_col4,
  // row 3
  b_row3_col1,
  b_row3_col2,
  b_row3_col3,
  b_row3_col4,
  // row 4
  b_row4_col1,
  b_row4_col2,
  b_row4_col3,
  b_row4_col4,
];

btnClear.addEventListener("click", () => {
  clearText.forEach(function (cleared) {
    cleared.value = null;
  });
});
