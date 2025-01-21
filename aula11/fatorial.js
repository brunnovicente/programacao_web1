function fatorial(n){
    var f = 1
    for(var i = n; i >= 1; i--){
        f = f * i
    }
    return f
}

var resultado = fatorial(5)
document.write(resultado)