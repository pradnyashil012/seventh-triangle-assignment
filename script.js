$(document).ready(function () {
  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  $(".quantityValue").change(function () {
    var input = parseInt($(this).val());
    $(".quant").html(input);
  });

  $(".kg10").click(function () {
    $(".subTotal").html("399");
  });

  $(".kg5").click(function () {
    $(".subTotal").html("209");
  });

  // $(".quantityValue, .quant").change(function () {
  //   var input = parseInt($(".quantityValue").val());
  //   $(".quant").change(function () {
  //     var price = parseInt($(".quant").val());
  //     var total = parseInt(input * price);
  //     console.log(total);
  //     $(".total").html(total);
  //   });
  // });

  $(".payable").change(function () {
    var input = parseInt($(".payable").find(".quant").html());
    // var price = parseInt($(".subTotal").text());
    // var total = parseInt(price);
    console.log(input);
    // $(".total").html(total);
  });
});
