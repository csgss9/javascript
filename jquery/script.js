$(function(){

    // CSS:

    $("p").css({"background-color": "yellow"});
    $("#segundo").css({"background-color": "blue"})
    $(".tercero").css({"background-color": "red"})
    
    //------EVENTOS CLICK
    
    $("#btn-hide").click(function () { 
        $("#segundo").hide();
    });

    $("#btn-show").dblclick(function(){

        $("#segundo").show();

    })

    //-----EVENTOS MOUSE y DESAPARECER

    $(".tercero").mouseenter(function () {
        // $(".tercero").hide();
        // $("#segundo").fadeOut();
        $("#segundo").slideUp();


    $(".tercero").mouseleave(function () {
        // $(".tercero").show();
        // $("#segundo").fadeIn();
        $("#segundo").slideDown();

    })

    //------ANIMACIONES

    $(".tercero").animate({width: "300px"});

    });

    //----------
    $("#btn-text").click(function (){

        // alert($("#segundo").text());   //imprimirlo
        // $("#segundo").text("Hola");    //cambiarlo

        // alert($("#segundo").html());   
        // $("#segundo").html("<strong>Hola</strong>Hola");     //cambiarlo con html
        // alert($("#segundo").attr('id'));

        // $("#segundo").append("<strong>Hola</strong>Hola");
        // $("#segundo").prepend("<strong>Hola</strong>Hola");

        // $("#segundo").after("<strong>Hola</strong>Hola");
        // $("#segundo").before("<strong>Hola</strong>Hola");

        // $("#segundo").remove()
        // $("#segundo").empty()




    //----AÑADIR CLASES CSS

        // $("h1").addClass("blue");
        $("body").toggleClass("blue");
        $("p:first").toggle(3000);

    $("#btn-stop").click(function (){
        $("p:first").stop();




    });


    });


});
