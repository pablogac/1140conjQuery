$(function () {
    $("#ejemploTabs").tabs().tabs({
        fx: {
            opacity: "toggle",
            duration: "slow"
        },
        collapsible:true
    });
    $("#acordeon").accordion().accordion({ event: "mouseover" });


    $("#rojo, #verde, #azul, #miDeslizador").slider({ min: 0, max: 255, slide: cambiaMarcador });

    


    $("#fecha").datepicker({
        changeYear: true,
        changeMonth: true,
        showButtonPanel: true,
        yearRange: "-25:+25",
        numberOfMonths: 3,
        dateFormat: "d//MM//yy",
        closeText: "cerrar",
        currentText: "HOY",
        dayNames: ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"],
        dayNamesMin: ["Do","Lu","Ma","Mi","Ju","Vi","Sa"],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        firstDay: 1,
        //monthNames
        //monthNamesShort
        nextText: "siguiente",
        prevText: "anterior",
    });
    $("#autoCompleta").autocomplete({
        source:["java","php","c++","html","css"]
    });
   
    var listaPalabras = ["java", "php", "c++", "html", "css"]
    $("#autoCompleta2").autocomplete({
        source: function (peticion, respuesta) {
            var coincide = new RegExp("^" + $.ui.autocomplete.escapeRegex(peticion.term), "i");
            respuesta($.grep(listaPalabras, function (item) {
                return coincide.test(item);
            }));
        }
    });
   
    $("#radio").buttonset();
    $("#Button5").button({
        icons: {
            primary: "ui-icon-gear",
            secondary: "ui-icon-triangle-1-s"
        }
    });

    $("#progreso").progressbar({
        value: 66,
        max: 765
    });

});

function cambiaMarcador() {
    jQuery(function () {
       
        var rojo = $("#rojo").slider("value");
        $("#d1").text($("#rojo").slider("value"));
        $("#progreso").progressbar({
            value: rojo/3

        });
       

        var azul = $("#azul").slider("value");
        $("#d2").text($("#azul").slider("value"));
        $("#progreso").progressbar({
            value: azul/3
            
        });

        var verde = $("#verde").slider("value");
        $("#d3").text($("#verde").slider("value"));
        $("#progreso").progressbar({
            value: verde/3

        });


        var cadenaRGB = ["rgb(", rojo, ",", verde, ",", azul, ")"].join("");
        $("#cajaColor").css({
            backgroundColor :cadenaRGB
        });
       $("#deslizador").text($("#miDeslizador").slider("value"));
       $("#d1").text($("#rojo").slider("value"));
       $("#d2").text($("#azul").slider("value"));
       $("#d3").text($("#verde").slider("value"));


       $("#deslizador").text($("#miDeslizador").slider("value"));


    });


}

function muestraDialogo() {
    jQuery(function () {
        $("#miDialogo").dialog({
            autoOpen: true,
            maxHeight: 200,
            maxWidth: 500,
            resizable: true,
            draggable: false,
            closeOnEscape: false,
            modal: true,

            buttons: {
                OK: function () { $(this).dialog("close") }
            }
            



        });
    });


}



function deshabilita(numeroTab) {
    jQuery(function () {
        $("#ejemploTabs").tabs({
            disabled: [numeroTab,numeroTab+1]
        });
    });


}

function ponUnTabMas() {
    jQuery(function () {
        $("#ejemploTabs").tabs("add","","un nuevo Tab");
    });
}

function quitaUnTabMas() {
    jQuery(function () {
        $("#ejemploTabs").tabs("remove",1);
    });
}