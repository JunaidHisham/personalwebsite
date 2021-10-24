$(document).ready(function(){
    $('#signup-form').validate({
        rules:{
            
            clientname:{
                required:true,
                minlength:4,
                maxlength:16
            },
            emailAddress:{
                required:true,
                email:true
            },
            mobilenum:{
                required:true,
                minlength:10,
                maxlength:10
            },
            clientSubject:{
                required:true,
                minlength:6
                
            },
            clientMssg:{
                required:true,
                minlength:15
            },

            messages:{
                clientname:{
                    required:"Enter Your Name ",
                    minlength:"Enter atleast 4 charecters",

                }
            }
        }
        
    })
})