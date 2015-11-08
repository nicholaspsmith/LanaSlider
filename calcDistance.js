function sel(a) {
    var b, c, d;
    a = ["V1", "V2", "V3", "V4"];
    switch (getRadioValue("asp_sel")) {
        case "1":
            c = "Vertical";
            d = "height";
            break;
        case "2":
            c = "Horizontal", d = "width"
    }
    document.getElementById("V0").innerHTML = d;
    for (b in a) document.getElementById(a[b]).innerHTML = c;
    document.getElementById("text").innerHTML = ""
}

function compute(a) {
    if (.01 >= a.focal.value || .01 >= a.Vsubht.value || .01 >= a.Vsenpix.value || .01 >= a.Vsubpix.value) alert("A value is zero. Aborted");
    else {
        switch (getRadioValue("mode_sel")) {
            case "1":
                if (.01 >= a.Vsensor.value) {
                    alert("Zero sensor size. Aborted");
                    return
                }
                document.getElementById("size").innerHTML = "";
                break;
            case "2":
                mode3(a)
        }
        document.getElementById("text").innerHTML = " Distance = " + parseFloat((a.Vsubht.value * a.focal.value * a.Vsenpix.value / (a.Vsensor.value * a.Vsubpix.value)).toFixed(3))
    }
}

function getRadioValue(a) {
    a = document.getElementsByName(a);
    for (var b = 0; b < a.length; b++)
        if (a[b].checked) return a[b].value;
    return null
}

function mode3(a) {
    var b, c;
    if (.01 >= a.crop.value) alert("Crop value specified Zero - Aborted");
    else {
        switch (a.aspect.value) {
            case "1":
                b = 36 / a.crop.value;
                c = b / 1.5;
                break;
            case "3":
                b = 36 / a.crop.value;
                c = 9 * b / 16;
                break;
            case "2":
                b = 34.613292244456 / a.crop.value;
                c = 3 * b / 4;
                break;
            case "4":
                b = 34.613292244456 / a.crop.value;
                c = 9 * b / 16;
                break;
            case "5":
                b = 37.71012346912459 / a.crop.value, c = 9 * b / 16
        }
        switch (getRadioValue("asp_sel")) {
            case "1":
                a.Vsensor.value = c.toFixed(2);
                break;
            case "2":
                a.Vsensor.value = b.toFixed(2)
        }
        document.getElementById("size").innerHTML =
            "<br> &nbsp; Sensor size: " + b.toFixed(2) + "x" + c.toFixed(2) + " mm"
    }
};
