
try {

  $(document).ready(function () {
    $('.selected').click(function () {
      let optionsContainer = $(this).parent().children()[0];
      optionsContainer.classList.toggle("active");
    });

    $('#searchInput').keydown(function (event) {
      if (event.keyCode == 13) {
        event.preventDefault();
        let action = '/search?data=' + $(this).val()
        window.location.href = action;
      }
    })


    $('.option-price').click(function () {
      const value = $(this).children(":first").val()
      var currentUrl = window.location.href;
      var url = new URL(currentUrl);
      url.searchParams.set("price", value);
      var newUrl = url.href;
      window.location.href = newUrl;
    })
    $('.option-rating').click(function () {
      const value = $(this).children(":first").val()
      var currentUrl = window.location.href;
      var url = new URL(currentUrl);
      url.searchParams.set("rating", value);
      var newUrl = url.href;
      window.location.href = newUrl;
    })
  });

} catch (error) {

}