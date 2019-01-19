

$(document).ready(function () {

    
    $(document.body).append('<ul>Values</ul>');

    $('#btnSubmit').click(function() {
        alert("Submit clicked.")
    });

    $('input[type=submit]').click(function() {

        let valueText = $("input[type=text]").val();
        
        //only alert if text field isn't empty.
        if (valueText.length == 0) {

        } else {
            alert(valueText);
            $('ul').append('<li>' + valueText + '</li>');
        }

        //changes li to a random color
        $('li').click(function(){
            let col1 = 'rgb('+ (Math.floor(Math.random() * 256)) + ','+ (Math.floor(Math.random() * 256)) + ','+ (Math.floor(Math.random() * 256)) + ')';
            $(this).css('color', col1);
    
        });
    
        //removes li on dblclick with a slideup motion
        $( "li" ).dblclick(function() {
            $( this ).slideUp();
          });
    
    });

    

});