import './scss/input.scss';
import $ from "jquery";

$(document).ready(function() {
  $(window).on('resize', function() {
    if ($(window).width() > 768) {
      $("#menu-container").hide();
      $("#x-icon").hide();
      $("#hamburger-icon").show();
    }
  });
  $("#hamburger-icon").click(function() {
    $(this).hide();
    $("#x-icon").show();
    $("#menu-container").show();
  });
  $("#x-icon").click(function() {
    $(this).hide();
    $("#hamburger-icon").show();
    $("#menu-container").hide();
  });

});
