function fibonacci(){
    var n = parseInt(prompt("Digite o número desejado:"));

    document.write(n)

    n2 = n;

    document.write(" " + n2)

    for(i=1; i<=9; i++){

        r = n+n2;

        n = n2;
        n2 = r;

       document.write(" " + n2 + " ")

    }
}

// 5 5 10 15 25 40 65