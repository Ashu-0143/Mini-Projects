$(document).ready(function() {
  $("#addButton").click(function(event) {
    var x = $("#inpTask").val();
    if (x == "") {
      return alert("Please Enter Task");
    }
    event.preventDefault(event);
    $("#mainList").append("<li>" + x + "</li>").attr("class", "hi");

    $("li").on("dblclick", function() {
      $(this).hide("slow").fadeTo("slow", 0.3).slideUp("slow");
    });
    
    $("#inpTask").val("");
  });

  $("#clearButton").click(function() {
    if ($("#mainList li").length === 0) {
      alert("List is already empty");
    } else {
      $("#mainList").empty();
    }
  });
});
