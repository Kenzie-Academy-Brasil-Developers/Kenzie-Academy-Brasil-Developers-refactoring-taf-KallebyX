// Implemente aqui as funções
function absTest(abs){
    if(abs >= 41){
        return true
    }
    return false
}

function swimTest(swimDistance, swimTime, diveTime){
    if((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30) {
        return true
    }
    return false
}

function heightTest(gender, height){
    if(gender === "male" && height >= 1.70){
        return true
    }
    if(gender === "female" && height >= 1.60){
        return true
    }
    return false
}

function barTest(gender, barReps, barSeconds){
    if((gender === "male" && barReps >= 6) || (gender === "male" && barSeconds >= 15)){
        return true
    }
    if((gender === "female" && barReps >= 5) || (gender === "female" && barSeconds >= 12)){
        return true
    }
    return false
}

function runTest(gender, runDistance, runTime){
    if(gender === "male") {
        if((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200)) {
            return true
        }
    }
    if(gender === "female") {
        if((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)) {
            return true
        }
    }
    return false
}

function areCandidateResultsValid(gender, height, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, diveTime) {
    let absResult = absTest(abs)
    let swimResult = swimTest(swimDistance, swimTime, diveTime)
    let heigtResult = heightTest(gender, height)
    let barResult = barTest(gender, barReps, barSeconds)
    let runResult = runTest(gender, runDistance, runTime)
    if(absResult && swimResult && heigtResult && barResult && runResult){
        return true
    }
    return false
}
    
// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);


// Chame aqui a função que mostra o resultado no console

function showMessage(message){
    console.log(message.toString().toUpperCase())
}
showMessage(areCandidateValid);
