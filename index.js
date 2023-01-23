let NumberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < NumberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!");
  });
}
