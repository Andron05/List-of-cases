$(function () {
    $('#adButton').click(function () {
        $("#del").remove();
        var newElement = $('<div id=newElement></div>');
        var newElement2 = $('<div id=newElement2></div>');
        var buttonDel = $('<input type="button"  id="close"/>');
        var buttonArow = $('<input type="button" id="Arow"/>');
        var newElement3 = $('<div id=newElement3></div>');
        (newElement2).prependTo(newElement);
        (newElement3).appendTo(newElement);
        var text = $('#text').val();
        var textExp = $('textarea').val();
        newElement2.text(text);
        (buttonDel).appendTo(newElement2);
        (buttonArow).prependTo(newElement2);
        newElement3.text(textExp);
        $('#text').val('');
        $('textarea').val('');
        $(newElement).appendTo('#left');
        $(buttonDel).click(function () {
        $(newElement).remove();
        });
       $(buttonArow).click(function(){
           if(newElement3.is(':visible')){
               newElement3.hide();
           }
            else {
                newElement3.show();
            }
           
        });
    });
});
