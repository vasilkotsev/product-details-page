$(document).ready(function () {
  $("#product-count").text(window.sessionStorage.clickcount);

  // carousel functionality
  $(".carousel").carousel({
    interval: 2000,
  });

  // scrolling animation functionality
  $("footer nav .nav-link").on("click", function (e) {
    e.preventDefault();
    let element = $(this).attr("href");
    let offsetTop = $(element).offset().top;
    offsetTop = Math.round(offsetTop);

    $("html, body").animate(
      {
        scrollTop: offsetTop - 50,
      },
      500
    );
  });

  // Session storage functionality
  $("#modal-opener")
    .on("click", clickCounter)
    .on("click", function () {
      $("#exampleModalCenter").modal("toggle");
    });

  function clickCounter() {
    if (window.sessionStorage.clickcount) {
      window.sessionStorage.clickcount =
        Number(window.sessionStorage.clickcount) + 1;
    } else {
      window.sessionStorage.clickcount = 1;
    }

    $("#count").text(window.sessionStorage.clickcount);
    $("#product-count").text(window.sessionStorage.clickcount);
  }

  $(".color").on("click", function () {
    const productId = parseInt($(this).attr("id"));
    $.get(`http://localhost:3000/product/${productId}`, function (data) {
      const subProducts = data.variation_products;
      const subProduct = subProducts.find((p) => {
        return p._id === productId;
      });

      const productID = $(`<p>ID: ${productId}</p>`);
      const productColor = $(
        `<p>Product color: <span>${subProduct["product_color"]}</span></p>`
      );
      const productPrice = $(
        `<p>Product price: <span>${subProduct["product_price"]} $</span></p>`
      );
      const productInStock = $(
        `<p>In stock information: <span>${subProduct["available_in_stock"]}</span></p>`
      );

      const productInfoDiv = $(".product-info");
      
      productInfoDiv
        .empty()
        .append(productID)
        .append(productColor)
        .append(productPrice)
        .append(productInStock);


      /* Adds dynamic src values to a carousel */
      const images = subProduct["img"];
      images.forEach((image, index) => {
        $(`.carousel-item img.pic-${index + 1}`).attr("src", image);
      });
    });
  });
});
