$(document).ready(function(){
    $("#form").validate({
        rules:{
            email:{
                required:true,
                email:true
            }
        }
    })
})