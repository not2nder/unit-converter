//Int ou Float...
function chkNumType(str){
    if (!isNaN(parseInt(str)) & parseInt(str) == parseFloat(str)){
        return "int";
    }
    if (!isNaN(parseFloat(str))){
        return "float"
    }
    return null;
}

function showResultTime(){
    const inputTime = document.getElementById("input-time").value; //input value
    const outputTime = document.getElementById("output-time");//output
    const formula = document.getElementById("formula-time");
    const formula1 = document.getElementById("formula-time1");
    const advice = document.getElementById("calcAdvice");
    var result;

    var select = document.getElementById("select-time");//select 1
    var inValue = select.options[select.selectedIndex].value;

    var selectOut = document.getElementById("select-timeout"); //select
    var outValue = selectOut.options[selectOut.selectedIndex].value;

    if (inValue == outValue){
        outputTime.value = inputTime;
        formula.innerHTML = ""

        if(advice.getAttribute('class').includes("active")){
            advice.classList.remove("active");
        }
    }
    else if (inputTime != "" & inValue == "Segundos" & outValue == "Minutos" | inputTime != "" & inValue == "Minutos" & outValue == "Horas"){
        result = (inputTime)/60;
        if (inValue == "Segundos" & outValue == "Minutos" & chkNumType(result) == "float"){
            var intPart = parseInt(result);
            var floatPart = (result - intPart).toFixed(2);
            var finalResult = `${intPart}:${Math.round(floatPart*60)}s`;
            outputTime.value = finalResult;
            formula.innerHTML = `Cálculo: ${inputTime}m/60 = ${result}`;
            formula1.innerHTML = `${floatPart} × 60 = ${Math.round(floatPart*60)}s`;
            advice.classList.add("active")
        }
        else if (inValue == "Minutos" & outValue == "Horas" & chkNumType(result) == "float"){
            var intPart = parseInt(result);
            var floatPart = (result - intPart).toFixed(2);
            var finalResult = `${intPart}:${Math.round(floatPart*60)}m`;
            outputTime.value = finalResult;
            formula.innerHTML = `Cálculo: ${inputTime}h/60 = ${result}h`;
            formula1.innerHTML = `${floatPart} × 60 = ${Math.round(floatPart*60)}m`;
            advice.classList.add("active");
        }
        else{
            outputTime.value = result;
            formula.innerHTML = `Cálculo: ${inputTime}s/60 = ${result}m`
            formula1.innerHTML = ""
        }
    }
    else if (inputTime != "" & inValue == "Minutos" & outValue == "Segundos" | inputTime != "" & inValue == "Horas" & outValue == "Minutos"){
        outputTime.value = (inputTime)*60;
        formula.innerHTML = `Cálculo: ${inputTime} × 60`;

        if(advice.getAttribute('class').includes("active")){
            advice.classList.remove("active");
        }
    }
    else if (inValue == "Segundos" & outValue == "Horas"){
        var result = (inputTime)/3600;
        if (inValue == "Segundos" & outValue == "Horas" & chkNumType(result) == "float"){
            var intPart = parseInt(result);
            var floatPart = (result - intPart).toFixed(2);
            var finalResult = `${intPart}:${Math.round(floatPart*60)}m`;
            outputTime.value = finalResult;
            formula.innerHTML = `Cálculo: ${inputTime}s/3600 = ${(result).toFixed(2)}h`;
            formula1.innerHTML = `${floatPart} × 60 = ${Math.round(floatPart*60)}m`;
            advice.classList.add("active")
        }
        else{
            outputTime.value = result;
        }
    }
    else if (inputTime != "" & inValue == "Horas" & outValue == "Segundos"){
        outputTime.value = (inputTime)*3600;
        formula.innerHTML = `Cálculo: ${inputTime} × 3600`
        formula.innerHTML = ""
    }
}

function clearTime(){
    const inputTime = document.getElementById("input-time");
    const outputTime = document.getElementById("output-time");
    const formula = document.getElementById("formula-time");
    const formula1 = document.getElementById("formula-time1");
    const advice = document.getElementById("calcAdvice");

    formula.innerHTML = "";
    formula1.innerHTML = "";
    inputTime.value = "";
    outputTime.value = "";

    if(advice.getAttribute('class').includes("active")){
        advice.classList.remove("active");
    }
}

function swapTime(){
    var select = document.getElementById("select-time");//select 1

    var selectOut = document.getElementById("select-timeout"); //select2

    var aux = select.value;
    select.value = selectOut.value;
    selectOut.value = aux;
}

function showResultTemp(){
    const inputTemp = document.getElementById("input-temp").value; //input value
    const outputTemp = document.getElementById("output-temp");//output
    const formula = document.getElementById("formula-temp");

    var select = document.getElementById("select-temp");//select 1
    var inValue = select.options[select.selectedIndex].value;

    var selectOut = document.getElementById("select-tempout"); //select
    var outValue = selectOut.options[selectOut.selectedIndex].value;

    if (inValue == outValue){
        outputTemp.value = inputTemp;
        formula.innerHTML = ""
    }
    else if (inputTemp != "" & inValue == "Celsius" & outValue == "Fahrenheit"){
        outputTemp.value = (inputTemp * (9/5)) +32;
        formula.innerHTML = `Formula: (${inputTemp}°C × 9/5) + 32`;
    }
    else if (inputTemp != "" & inValue == "Celsius" & outValue == "Kelvin"){
        outputTemp.value = (inputTemp*1)+273.15;
        formula.innerHTML = `Formula: ${inputTemp}°C  + 273,15`;
    }
    else if (inputTemp != "" & inValue == "Fahrenheit" & outValue == "Celsius"){
        outputTemp.value = ((inputTemp -32)*(5/9)).toFixed(2);
        formula.innerHTML = `Formula: (${inputTemp}°F - 32) × 5/9`;
    }
    else if (inputTemp != "" & inValue == "Fahrenheit" & outValue == "Kelvin"){
        outputTemp.value = ((inputTemp-32)*(5/9)+273.15).toFixed(2);
        formula.innerHTML = `Formula: (${inputTemp}°F - 32) × 5/9 + 273,15`;
    }
    else if (inputTemp != "" & inValue == "Kelvin" & outValue == "Celsius"){
        outputTemp.value = (inputTemp-273.15)
        formula.innerHTML = `Formula: ${inputTemp}K - 273,15`;
    }
    else if (inputTemp != "" & inValue == "Kelvin" & outValue == "Fahrenheit"){
        outputTemp.value = ((inputTemp - 273.15)*(9/5)+32).toFixed(2);
        formula.innerHTML = `Formula: (${inputTemp}K - 273,15) × 9/5 + 32`;
    }
}

function clearTemp(){
    const inputTemp = document.getElementById("input-temp");
    const outputTemp = document.getElementById("output-temp");
    const formula = document.getElementById("formula-temp");

    inputTemp.value = "";
    outputTemp.value = "";
    formula.innerHTML = ""
}

function swapTemp(){
    var select = document.getElementById("select-temp");//select 1

    var selectOut = document.getElementById("select-tempout"); //select2

    var aux = select.value;
    select.value = selectOut.value;
    selectOut.value = aux;
}

function showResultHeavy(){
    const inputHeavy = document.getElementById("input-heavy").value; //input value
    const outputHeavy = document.getElementById("output-heavy");//output
    const formula = document.getElementById("formula-heavy");

    var select = document.getElementById("select-heavy");//select 1
    var inValue = select.options[select.selectedIndex].value;

    var selectOut = document.getElementById("select-heavyout"); //select
    var outValue = selectOut.options[selectOut.selectedIndex].value;
    console.log(inValue);
    console.log(outValue);

    if (inValue == outValue){
        outputHeavy.value = inputHeavy;
        formula.innerHTML = "";
    }
    else if (inputHeavy != "" & inValue == "kg" & outValue == "g" | inputHeavy != "" &  inValue == "g" & outValue == "mg" |inputHeavy != "" &  inValue == "T" & outValue == "kg"){
        outputHeavy.value = (inputHeavy)*1000;
        formula.innerHTML = `Cálculo: ${inputHeavy} × 1.000`
    }
    else if (inputHeavy != "" & inValue == "kg" & outValue == "mg" | inputHeavy != "" &  inValue == "T" & outValue == "g"){
        outputHeavy.value = (inputHeavy)*1000000;
        formula.innerHTML = `Cálculo: ${inputHeavy} × 1.000.000`
    }
    else if (inputHeavy != "" & inValue == "kg" & outValue == "T" | inputHeavy != "" & inValue == "g" & outValue == "kg" |inputHeavy != "" &  inValue == "mg" & outValue == "g"){
        outputHeavy.value = (inputHeavy)/1000;
        formula.innerHTML = `Cálculo: ${inputHeavy} / 1.000`
    }
    else if (inputHeavy != "" & inValue == "g" & outValue == "T" | inputHeavy != "" & inValue == "mg" & outValue == "kg"){
        outputHeavy.value = (inputHeavy)/1000000;
        formula.innerHTML = `Cálculo: ${inputHeavy} / 1.000.000`
    }
    else if (inputHeavy != "" & inValue == "mg" & outValue == "T"){
        outputHeavy.value = (inputHeavy)/1000000000;
        formula.innerHTML = `Cálculo: ${inputHeavy} / 1.000.000.000`
    }
    else if (inputHeavy != "" & inValue == "T" & outValue == "mg"){
        outputHeavy.value = (inputHeavy)*1000000000;
        formula.innerHTML = `Cálculo: ${inputHeavy} × 1.000.000.000`
    }
}

function clearHeavy(){
    const inputHeavy = document.getElementById("input-heavy");
    const outputHeavy = document.getElementById("output-heavy");
    const formula = document.getElementById("formula-heavy");

    formula.innerHTML = "";
    inputHeavy.value = "";
    outputHeavy.value = "";
}

function swapHeavy(){
    var select = document.getElementById("select-heavy");//select 1

    var selectOut = document.getElementById("select-heavyout"); //select2

    var aux = select.value;
    select.value = selectOut.value;
    selectOut.value = aux;
}

function showResultNum(){
    const inputNum = document.getElementById("input-num").value; //input value
    const outputNum = document.getElementById("output-num");//output

    var select = document.getElementById("select-num");//select 1
    var inValue = select.options[select.selectedIndex].value;

    var selectOut = document.getElementById("select-numout"); //select
    var outValue = selectOut.options[selectOut.selectedIndex].value;

    if (inValue == outValue){
        outputNum.value = inputNum;
    }
    else if (inputNum != "" & inValue == "dec" & outValue == "bin"){
        outputNum.value = parseInt(inputNum).toString(2);
    }
    else if (inputNum != "" &  inValue == "hex" & outValue == "bin"){
        if (isNaN(inputNum) | inValue =="hex"){
            const dec = parseInt(inputNum, 16);
            outputNum.value = parseInt(dec).toString(2);
        }
    }
    else if (inputNum != "" &  inValue == "hex" & outValue == "dec"){
        if (isNaN(inputNum) | inValue =="hex"){
            outputNum.value = parseInt(inputNum, 16);
        }
    }
    else if (inputNum != "" & inValue == "dec" & outValue == "hex"){
        outputNum.value = parseInt(inputNum).toString(16);
    }
    else if (inputNum != "" &  inValue == "bin" & outValue == "hex"){
        const dec = parseInt(inputNum, 2);
        outputNum.value = dec.toString(16);
    }
    else if (inputNum != "" & inValue == "bin" & outValue == "dec"){
        outputNum.value = parseInt(inputNum, 2);
    }
}

function clearNum(){
    const inputNum = document.getElementById("input-num");
    const outputNum = document.getElementById("output-num");

    inputNum.value = "";
    outputNum.value = "";
}

function swapNum(){
    var select = document.getElementById("select-num");//select 1
    var selectOut = document.getElementById("select-numout"); //select2

    var aux = select.value;
    select.value = selectOut.value;
    selectOut.value = aux;
}

// function showResultData(){
//     const inputData = document.getElementById("input-data").value; //input value
//     const outputData = document.getElementById("output-data");//output
//     const formula = document.getElementById("formula-data");
//     const formula1 = document.getElementById("formula-data1");

//     var select = document.getElementById("select-data");//select 1
//     var inValue = select.options[select.selectedIndex].value;

//     var selectOut = document.getElementById("select-dataout"); //select
//     var outValue = selectOut.options[selectOut.selectedIndex].value;
//     var result;

//     if (inValue == outValue){
//         outputData.value = inputData;
//         formula.innerHTML = "";
//         formula1.innerHTML = "";
//     }
//     else if (inputData != "" & inValue == "b" & outValue == "kb"){
//         result = ((inputData)/1024).toFixed(6);
//         formula.innerHTML = `Cálculo: ${inputData}b/1024 = ${result}kb`;
//         outputData.value = result;
//     }
//     else if (inputData != "" & inValue == "b" & outValue == "mb"){
//         result = ((inputData)/Math.pow(1024,2)).toFixed(6);
//         formula.innerHTML = `Cálculo: ${inputData}b/(1024²) = ${result}kb`;
//         formula1.innerHTML = `Ou: ${inputData}b/1048576 = ${result}kb`
//         outputData.value = result;
//     }
//     else if (inputData != "" & inValue == "b" & outValue == "gb"){
//         result = ((inputData)/Math.pow(1024,3)).toFixed(8);
//         formula.innerHTML = `Cálculo: ${inputData}b/(1024³) = ${result}kb`;
//         formula1.innerHTML = `Ou: ${inputData}b/1073741824 = ${result}kb`
//         outputData.value = result;
//     }
// }