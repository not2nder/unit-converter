const select = document.getElementById("Temperature-in")
const select2 = document.getElementById("Temperature-out")

for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key)
        select.add(new Option(`${key}`,`${key}`))
        select2.add(new Option(`${key}`,`${key}`))
    }
}

const scales = [
    {
        "name": "Celsius",
        "pf": 0,
        "pe": 100
    },
    {
        "name": "Fahrenheit",
        "pf": 32,
        "pe":212
    },
    {
        "name":"Kelvin",
        "pf":273,
        "pe":373
    }
]

function seScale(scale){
    for (let i = 0; i < scales.length; i++){
        if (scales[i]["name"] == scale){
            return i
            break
        }
    }
}

function scaleTo(ty,pey,pfy,pex,pfx){
    var temp = (((ty-pfy)/(pey-pfy))*(pex-pfx))+pfx
    return temp
}

function confirm(){
    let name = document.getElementById("scale-name").value
    let pf = document.getElementById("f-point").value
    let pe = document.getElementById("e-point").value
    let warning = document.getElementById("warn")
    let errWarning = document.getElementById("error")

    const new_scale = {
        "name":name,
        "pF":pf,
        "pE":pe        
    }
    if (name == "" || pf == "" || pe == ""){
        errWarning.textContent = "Nenhum campo pode ficar em branco!"
        errWarning.classList.add('active')
    }
    else if(isNaN(pf) || isNaN(pe)){
        errWarning.textContent = "Os Valores PF/PE Devem Conter Apenas Números!"
        errWarning.classList.add('active')
    }
    else{
        localStorage.setItem(`${name}`,JSON.stringify(new_scale))
        warning.classList.remove('active')
        errWarning.textContent = ""

        const option = new Option(`${name}`, `${name}`)
        select.add(option)
        select2.add(option)

        warning.innerHTML = `A Nova Escala °${name[0].toUpperCase()} foi Adicionada com Sucesso!<br>Por Favor, Atualize a página para para visualizar.`
        warning.classList.add('active')

    }
}

function convert(){
    var sc1 = select.options[select.selectedIndex].value;
    var sc2 = select2.options[select2.selectedIndex].value;
    const out = document.getElementById("output-temp")
    const tx = parseFloat(document.getElementById("input-temp").value)

    if(JSON.parse(localStorage.getItem(sc1)) && sc2 == scales[seScale(sc2)]["name"]){
        var pfx = parseFloat(JSON.parse(localStorage.getItem(sc1)).pF)
        var pex = parseFloat(JSON.parse(localStorage.getItem(sc1)).pE)

        var pfy = scales[seScale(sc2)]["pf"]
        var pey = scales[seScale(sc2)]["pe"]

        out.value = scaleTo(tx,pfx,pex,pfy,pey)
    }
    else if(sc1 == scales[seScale(sc1)]["name"] && JSON.parse(localStorage.getItem(sc2))){
        var pfx = scales[seScale(sc1)]["pf"]
        var pex = scales[seScale(sc1)]["pe"]

        var pfy = parseFloat(JSON.parse(localStorage.getItem(sc2)).pF)
        var pey = parseFloat(JSON.parse(localStorage.getItem(sc2)).pE)
        out.value = scaleTo(tx,pfx,pex,pfy,pey)
    } 
    else if(sc1 == scales[seScale(sc1)]["name"] && sc2 == scales[seScale(sc2)]["name"]){
        var pfx = scales[seScale(sc1)]["pf"]
        var pex = scales[seScale(sc1)]["pe"]

        var pfy = scales[seScale(sc2)]["pf"]
        var pey = scales[seScale(sc2)]["pe"]
        out.value = scaleTo(tx,pfx,pex,pfy,pey)
    }
}

function clearTemps(){
    var inV = document.getElementById("input-temp")
    var ouT = document.getElementById("output-temp")

    inV.value = ""
    ouT.value = ""
}