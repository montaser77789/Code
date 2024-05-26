let items = document.querySelectorAll(".item");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    for (let j = 0; j < items.length; j++) {
      items[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}
$(document).on('click', function(event) {
  var target = $(event.target);
  if (!target.closest('#myModal .modal-content').length && $('#myModal').is(':visible')) {
    $('#myModal').modal('hide');
  }
});
