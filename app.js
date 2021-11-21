$(document).ready(function(){

$("#image1").on("click",function(){
    $("#image1").hide();
    $("#dd").addClass("designLogo")
    $("#designText").show();
    $("#designText").addClass("designP")


});
$("#image2").on("click",function(){
    $("#image2").hide();
    $("#devl").addClass("devlogo")
    $("#devText").show();
    $("#devText").addClass("devs")

});
$("#image3").on("click",function(){
    $("#image3").hide();
    $("#pro").addClass("product")
    $("#proText").show();
    $("#proText").addClass("development")
});
$("#contain").hover(function(){
    $("#name").toggle();
    $("#name1").toggle();
    $("#name2").toggle();
    $("#name3").toggle();
    $("#name4").toggle();
    $("#name5").toggle();
    $("#name6").toggle();
    $("#name7").toggle();


});

$("#myForm").on("keypress",function(event){

if(event.which==13){
    event.preventDefault()
    var myname=$("#txtname").val()
    var myemail=$("#txtemail").val()
    var mymessage=$("#txtmesage").val()
    if(!myname || !myemail || !mymessage){
        alert("Fill all the required details")
    }else{

        alert(`${myname} we have received your message. Thank you fro reaching out to us. `)
        $("#myForm").submit()
    }

}
    
})


});