// Here's the initial data. Again: don't worry about persistence :)
data = [
  { name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" },
  { name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
  { name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
  { name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
  { name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
  { name: "Alf", photo_url: "img/avatars/alf.png" },
  { name: "Delta Burke", photo_url: "img/avatars/delta.png" },
  { name: "Mark-Paul Gosselaar", photo_url: "img/default.png" }
];
$(document).ready(function () {
    // get input value
    $('#text_value').click(function () {
        var text_value = $("#text").val();
        var photo_value = $("#photo_url").val();
        var newEntry = { name: text_value, photo_url: photo_value };
        if (text_value == '') {
            alert("Add a Celebrity Name!");
        } else {
            data.splice(0, 0, newEntry);
            $("#celebList").html(data);
            $("#target").html(_.template(template, { data: data }));
            //hover state after repopulated array
            $("li").hover(function () {
                $(this).children("button").removeClass("hide").addClass("show");
            });
            $("li").mouseleave(function () {
                $(this).children("button").addClass("hide").removeClass("show");
            });
            //removes a profile item after repopulated array
            $("button").click(function () {
                $(this).parent().remove();
            });
        }
    });
    //clears input fields
    $('#text_reset').click(function () {
        $("#text").val('');
        $("#photo_url").val('');
    });
    //removes profile pre-array
    $("button").click(function () {
        $(this).parent().remove();
    });
    //show hide remove button pre-array
    $("li").hover(function () {
        $(this).children("button").removeClass("hide").addClass("show");
    });
    $("li").mouseleave(function () {
        $(this).children("button").addClass("hide").removeClass("show");
    });
});//end doc ready