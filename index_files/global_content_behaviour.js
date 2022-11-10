/*
*  Adds an event on click for all collapsible elements
*/

Array.from(document.getElementsByClassName("collapsible")).forEach( element => {
    element.addEventListener("click", function() {
        this.classList.toggle("active");
        var content = $(this).closest('section');
        if (content.children('div').css("display") === 'block' || 
            content.children('div').css("display") === '') {
          content.children('div').css("display","none");
        } else {
          content.children('div').css("display","");
        }
    });
});