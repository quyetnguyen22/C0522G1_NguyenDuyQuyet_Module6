function detail() {

  //// SLIDER
  document.getElementById("next").onclick = function (){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0])
  };
  document.getElementById("prev").onclick = function (){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[lists.length - 1])
  };
  // var next = document.getElementsByClassName("sliderBlock_controls__arrowForward")[0];
  // var previous = document.getElementsByClassName("sliderBlock_controls__arrowBackward")[0];
  // var items = document.getElementsByClassName("sliderBlock_positionControls")[0];
  // var currentSlideItem = document.getElementsByClassName("sliderBlock_positionControls__paginatorItem");
  //
  // var currentSlide = 0;
  // var slideInterval = setInterval(nextSlide, 5000);  /// Delay time of slides
  //
  // function nextSlide() {
  //   goToSlide(currentSlide + 1);
  // }

  // function previousSlide() {
  //   goToSlide(currentSlide - 1);
  // }

  // function goToSlide(n) {
  //   slides[currentSlide].className = 'sliderBlock_items__itemPhoto';
  //   items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem';
  //   currentSlide = (n + slides.length) % slides.length;
  //   slides[currentSlide].className = 'sliderBlock_items__itemPhoto sliderBlock_items__showing';
  //   items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem sliderBlock_positionControls__active';
  // }
  //
  //
  // next.onclick = function () {
  //   nextSlide();
  // };
  // previous.onclick = function () {
  //   previousSlide();
  // };
  //
  //
  // function goToSlideAfterPushTheMiniBlock() {
  //   for (var i = 0; i < currentSlideItem.length; i++) {
  //     currentSlideItem[i].onclick = function (i) {
  //       var index = Array.prototype.indexOf.call(currentSlideItem, this);
  //       goToSlide(index);
  //     }
  //   }
  // }
  //
  // goToSlideAfterPushTheMiniBlock();
  //
  // var buttonFullSpecification = document.getElementsByClassName("block_specification")[0];
  // var buttonSpecification = document.getElementsByClassName("block_specification__specificationShow")[0];
  // var buttonInformation = document.getElementsByClassName("block_specification__informationShow")[0];
  //
  // var blockCharacteristiic = document.querySelector(".block_descriptionCharacteristic");
  // var activeCharacteristic = document.querySelector(".block_descriptionCharacteristic__active");
  //
  //
  // buttonFullSpecification.onclick = function () {
  //
  //   console.log("OK");
  //
  //
  //   buttonSpecification.classList.toggle("hide");
  //   buttonInformation.classList.toggle("hide");
  //
  //
  //   blockCharacteristiic.classList.toggle("block_descriptionCharacteristic__active");
  //

  // };


/////  QUANTITY ITEMS

  var up = document.getElementsByClassName('block_quantity__up')[0],
    down = document.getElementsByClassName('block_quantity__down')[0],
    input = document.getElementsByClassName('block_quantity__number')[0];

  function getValue() {
    return parseInt(input.value);
  }

  up.onclick = function (event) {
    input.value = getValue() + 1;
  };
  down.onclick = function (event) {
    if (input.value <= 1) {
      return 1;
    } else {
      input.value = getValue() - 1;
    }

  }

};
