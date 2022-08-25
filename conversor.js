let medida = parseFloat(prompt("Digite um valor em metros"))
let transformação = prompt("Para qual unidade deseja transformar? \nMilimetro(mm)\nCentimetro(cm) \nDecimetro(dm) \nDecâmetro(dam) \nHectômetro(hm) \nQuilômetro(km)"
)

switch(transformação){
    case "mm":
        alert("Transformando " + medida + " metros" + " em milimetros, temos " + (medida*1000) + " milimetros");
        break;
    case "cm":
        alert("Transformando " + medida + " metros" + " em centimentros, temos " + (medida*100) + " centimetros");
        break;
    case "dm":
        alert("Transformando " + medida + " metros" + " em decimetros, temos " + (medida*10) + " decimetros");
        break;
    case "dam":
        alert("Transformando " + medida + " metros" + " em decâmetros, temos " + (medida/10) + " decâmetros")
        break;
    case "hm":
        alert("Transformando " + medida + " metros" + " em hectômetro, temos " + (medida/100) + " hectômetro")
        break;
    case "km":
        alert("Transformando " + medida + " metros" + " em kilometros, temos " + (medida/1000) + " kilometros")
        break;
    default:
        alert("Opção inválida");
}