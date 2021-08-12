const controlBtn = document.getElementsByClassName("control-btn")[0];
const controlBtnForm = document.querySelector(".control-btn>form");
const controlBtnInput = document.querySelector(".control-btn>form>input");
const controlBtnTextarea = document.querySelector(".control-btn>form>textarea");
controlBtnInput.onFocus = () => {
  console.log("hi");
};
