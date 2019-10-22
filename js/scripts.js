$(document).ready(function()
{
  $(".clickable1").click(function()
  {
    $("p#python").before('<img src="img/ball-python.jpg" >');
    $("p#python").children("img src").first().click(function()
    {
      $(this).remove();
    });
  });
  $(".clickable2").click(function()
  {
    $("p#boa").after('<img src="img/rubber-boa.jpg">');
  });
});
