import './scss/input.scss';
import $ from "jquery";

$(document).ready(function() {
  $("#hamburger-icon").click(function() {
    $(this).hide();
    $("#x-icon").show();
    $("#dropdown-menu-container").show();
  });
  $("#x-icon").click(function() {
    $(this).hide();
    $("#hamburger-icon").show();
    $("#dropdown-menu-container").hide();
  });

});
