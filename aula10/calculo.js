function somaproximos(n){
    return (n+1)+(n+2)+(n+3)
}

function somaS(A, B){
    var S = (A - 1) + (B + 1)
    return S
}

var sp = somaproximos(10)
var sv = somaS(4,5)

document.write('<h3>SOMA PROXIMOS: '+sp+'</h3>')
document.write('<h3>SOMA ANT e SUC: '+sv+'</h3>')