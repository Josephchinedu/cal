$(document).ready(function() {
    var eq = "";
    var curNumber = "";
    var results = "";
    var entry = "";
    var reset = "false";

    $("button").click(function() {
        entry = $(this).attr("value");

        if(entry === "ac" ){
            entry = 0;
            eq = 0;
            results = 0;
            curNumber = 0;
            $("#result p").html(entry);
            $("#previous-result p").html(eq);
        }

        else if(entry === "ce"){
            if(eq.length > 1){
                eq = eq.slice(0, -1);
                $("#previous-result p").html(eq);
            } else{
                eq = 0;
                $("result p").html(0);
            }

            $("#previous-result p").html(eq);


            if(curNumber.length > 1) {
                curNumber = curNumber.slice(0,-1);
                $("#result p ").html(curNumber);
            } else{
                $("result p").html(0);
            }
        }


        else if(entry === "=") {
            results = eval(eq);
            $("#result p").html(results);

            eq += "=" + results;

            $("previous-result p").html(eq);

            eq = results;
            entry = results;
            curNumber = results;
            reset = true;
        }

        else if(isNaN(entry)) {
            if(entry !== "."){
                reset = false;

                if(curNumber === 0 || eq === 0) {
                    curNumber = 0;
                    eq = entry;
                } else{
                    curNumber = "";
                    eq += entry;
                }

                $("previous-result p").html(eq);
            }

            else if(curNumber.indexOf(".") === -1) {
                reset = false;

                if(curNumber === 0 || eq === 0) {
                    curNumber = 0.;
                    eq = 0.;
                } else{
                    curNumber += entry;
                    eq += entry;
                }

                $("result p ").html(curNumber);
                $("previous-result p").html(eq);
            }
        }

        else{
            if (reset) {
                eq = entry;
                curNumber += entry;
                reset = false;
            } else{
                eq += entry;
                curNumber += entry;
            }
            $("#previous-result p").html(eq);
            $("#result p ").html(curNumber);
        }


        if(curNumber.length > 10 || eq.length > 26) {
            $("result p").html("0");
            $("previous-result ").html("Too many Digits");
            curNumber = "";
            eq = "";
            results = "";
            reset = true;
        }

        if(results.indexOf(".") !== -1) {
            results = results.truncate()
        }
    });
});