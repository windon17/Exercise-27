/*
    Exercise 27 
*/
$(document).ready(function(){
    /*=======================
        Regular Expressions 
     =======================*/

$("#btnvalidate").click(function() {
    var email = $("#email").val();
    if (!isValid(email)){
        $("#email").addClass("is-invalid");
    } else {
        $("#email").removeClass("is-invalid");

    };
});
function isValid(email) {
  
        var validate = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);      
        return validate.test(email);
};

$("#btnvalidate").click(function() {
var numeric =$("#numeric").val();   
 var pattern = /[a-z]/gi;
 var newStr = numeric.replace(pattern, ""); 
$("#numeric").val(newStr);

 
});
     /*=======================
       Array Methods 
     =======================*/
var array = [1, 2, 3, 4]
var squared = array.map(function(x){ 

    return x*x;
});

});