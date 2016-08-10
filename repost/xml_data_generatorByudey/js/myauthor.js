$(document).ready(function(){
    $(".modalopen").on("click",function(){
        $("#audio-upload").openModal();
    });
$(".create-project").on("click",function(){
         var isValid = true;
        $('input[type="text"].required').each(function() {
            if ($.trim($(this).val()) == '') {
                isValid = false;
                $(this).css({
                    "border": "1px solid red",
                    "background": "#FFCECE"
                });
            }
            else {
                $(this).css({
                    "border": "",
                    "background": ""
                });
            }
        });
        if (isValid == false) 
            e.preventDefault();
        else 
            var foldervalue = $(".gettext").val();
            $(".texttoextrct").val(foldervalue);
             $(".template-box").show();
             $(".create-project").prop("disabled","true");
   
});
    
});