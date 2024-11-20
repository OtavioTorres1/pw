function tabuada(){

    var num = parseInt(prompt("Escreve o numero ai logo:"));

    for (i=0; i<=10; i++) {
        document.write(num + " * "+ i + " = "+ (num*i) +"<br />");
    }

}