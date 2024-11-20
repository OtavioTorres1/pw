function potencia() {
    var n1 = parseInt(prompt("Digite a base da potência:"));
    var n2 = parseInt(prompt("Digite o expoente:"))

        var c1 = n1;
        var c2 = n1;

    for (i=1; i<=n2-1; i++){

        var r = c1*c2;

        var c1 = r;

    }

        /*i = 1;

        while (i<n2+1) {

            var r = c1*c2;

            var c1 = r;

            i++
        } */

    document.write(n1 + " " + "elevado a" + " " + n2 + " " + "é igual a:" + " " + r)

}