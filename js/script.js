//const q = 10
//const w = 15

//if(q > 5 && w > 20)
   // {console.log("os números mais altos")}

  //  else {console.log("os números não são mais altos")}

//let a = 30
//let b = 40

//if(a> 35 && b> 30)
//{console.log("O Breno é daora")}

//else {console.log("O Breno é vacilão")}

//const username = "Gaybriel";
//const userAge = 17

//if(username === "José")
  //  {console.log("Salve José")}

//else if(username === "Gaybriel" && userAge === 17)
//{console.log("Fala,"+ username +" ce tem " + userAge + " ,meu parceiro.")}

//else{console.log("Condição negada brigadeiro")}

const untilTen = (n,m) => 
    {if (n<10) 
        {console.log("a função parou de executar");}
    else {const x = n - m
        console.log(x);
    untilTen(x,m);}};

untilTen(100,3)
