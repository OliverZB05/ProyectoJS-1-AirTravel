//============={ ๐๐๐๐ข๐ซ๐๐จ๐๐ฎ๐ฆ๐๐ง๐ญ๐จ๐ฌ }=============
function PedirDocumentos(){

    let Pasaporte = prompt("ยฟPosee pasaporte? (Colocar si o no)");

    let VISA = prompt("ยฟPosee visa? (Colocar si o no)");


    //============= ๐๐๐จ๐๐ฅ๐ค๐ง๐ฉ๐ ๐ฎ ๐๐๐๐ผ =============
    while(Pasaporte !== "si" && VISA !== "si"){
        alert("Necesitas de visa y pasaporte para ingresar a la pรกgina");
        break;
    }

    while(Pasaporte !== "si" && VISA == "si"){
        alert("Necesitas de visa y pasaporte para ingresar a la pรกgina");
        break;
    }

    while(Pasaporte == "si" && VISA !== "si"){
        alert("Necesitas de visa y pasaporte para ingresar a la pรกgina");
        break;
    }
    //============= ๐๐๐จ๐๐ฅ๐ค๐ง๐ฉ๐ ๐ฎ ๐๐๐๐ผ =============


    //============= ๐ฃ๐ฟ๐ผ๐บ๐ฝ๐ ๐ก๐ผ๐บ๐ฏ๐ฟ๐ฒ๐ ๐ ๐๐ฝ๐ฒ๐น๐น๐ถ๐ฑ๐ผ๐ =============
    while(Pasaporte == "si" && VISA == "si"){

        let Nombre = prompt("Ingrese su nombre");
        let Apellido = prompt("Ingrese su apellido");

            if(Nombre !== "" && Apellido !== ""){
                alert("Bienvenido " + Nombre + " " + Apellido + " a la pรกgina");

                let TextoImpreso = document.getElementById("text1");
                TextoImpreso.innerHTML = "<h2>" + Nombre + "</h2>";

                let TextoImpreso2 = document.getElementById("text2");
                TextoImpreso2.innerHTML = "<h2>" + Apellido + "</h2>";
                break;
            }

            while(Nombre == "" && Apellido == "" || Nombre !== "" && Apellido == "" || Nombre == "" && Apellido !== ""){
                alert("Tiene que colocar nombre y apellido para poder continuar");
                break;
            }   
    }
    //============= ๐ฃ๐ฟ๐ผ๐บ๐ฝ๐ ๐ก๐ผ๐บ๐ฏ๐ฟ๐ฒ๐ ๐ ๐๐ฝ๐ฒ๐น๐น๐ถ๐ฑ๐ผ๐ ============= 


    //============= ๐๐๐ข๐๐ฉ๐ ๐ฟ๐ ๐๐๐จ๐๐๐๐ง๐ค๐จ =============
    while(Pasaporte == "si" && VISA == "si"){
        let LimiteDePasajeros = parseInt(prompt("ยฟCuantas personas viajarรกn? (Mรญnimo 5 personas)"));

            if(isNaN(LimiteDePasajeros)){
                alert("Debe ingresar un nรบmero");
            }
            else{
                if(LimiteDePasajeros > "5"){
                    alert("Lรญmite de pasajeros excedido");
                }else{
                    alert("El nรบmero de personas que viajarรกn serรก: " + LimiteDePasajeros + " personas");
                    let TextoImpreso3 = document.getElementById("text3");
                    TextoImpreso3.innerHTML = "<h2>" + LimiteDePasajeros + " personas" + "</h2>";
                    break;
                }
            }
    }
    //============= ๐๐๐ข๐๐ฉ๐ ๐ฟ๐ ๐๐๐จ๐๐๐๐ง๐ค๐จ =============



    //============= ๐๐ฃ๐๐ง๐๐จ๐๐ง ๐ฟ๐๐จ๐ฉ๐๐ฃ๐ค =============
    if(Pasaporte == "si" && VISA == "si"){

        for(let i = 1; i <= 3; i++){
            let Destino = prompt("Ingrese su paรญs de destino");
        
            alert("Turno Nยฐ" + i + " Paรญs de destino: " + Destino);
        
            const Precio = 100;
        
            if(i == 1){
                let TextoImpresoDest1 = document.getElementById("textFraction1");
                TextoImpresoDest1.innerHTML = "<h2>" + "1. " + Destino + "</h2>";
        
                let TextoImpresoTurnos1 = document.getElementById("textFraction4");
                TextoImpresoTurnos1.innerHTML = "<h2>" + "Turno Nยฐ" + i + "</h2>";
        
                let TextoPrecio1 = document.getElementById("textPriceFraction1");
                TextoPrecio1.innerHTML = "<h2>" + Precio + "$" + "</h2>";
        
                let PrecioFinal = document.getElementById("textPriceFraction4");
                PrecioFinal.innerHTML = "<h2>" + Precio + "$" + "</h2>";
            }
        
            if(i == 2){
                let TextoImpresoDest2 = document.getElementById("textFraction2");
                TextoImpresoDest2.innerHTML = "<h2>" + "2. " + Destino + "</h2>"; 
        
                let TextoImpresoTurnos2 = document.getElementById("textFraction5");
                TextoImpresoTurnos2.innerHTML = "<h2>" + "Turno Nยฐ" + i + "</h2>";
        
                let TextoPrecio2 = document.getElementById("textPriceFraction2");
                TextoPrecio2.innerHTML = "<h2>" + Precio + "$" + "</h2>";
        
                let PrecioFinal = document.getElementById("textPriceFraction4");
                PrecioFinal.innerHTML = "<h2>" + (Precio + Precio) + "$" + "</h2>";
            }
        
            if(i == 3){
                alert("Lรญmite de turnos alcanzado");
                let TextoImpresoDest3 = document.getElementById("textFraction3");
                TextoImpresoDest3.innerHTML = "<h2>" + "3. " + Destino + "</h2>"; 
        
                let TextoImpresoTurnos3 = document.getElementById("textFraction6");
                TextoImpresoTurnos3.innerHTML = "<h2>" + "Turno Nยฐ" + i + "</h2>";
        
                let TextoPrecio3 = document.getElementById("textPriceFraction3");
                TextoPrecio3.innerHTML = "<h2>" + Precio + "$" + "</h2>";
        
                let PrecioFinal = document.getElementById("textPriceFraction4");
                PrecioFinal.innerHTML = "<h2>" + (Precio + Precio + Precio) + "$" + "</h2>";
            }


            if(i == 1 || i == 2){
                let PreguntaDestino = prompt("ยฟDesea reservar mรกs turnos de viaje? (Colocar si o no)");

                if(PreguntaDestino == "si"){
                    continue;
                }
                if(PreguntaDestino == "no"){
                    break;
                }
                else{
                    alert("Debe ingresar si o no para poder continuar");
                    alert("Si desea continuar colocando mรกs turnos recargue la pรกgina");
                    break;
                }
            }
        } 
    } 
    //============= ๐๐ฃ๐๐ง๐๐จ๐๐ง ๐ฟ๐๐จ๐ฉ๐๐ฃ๐ค =============
}
PedirDocumentos();   
//============={ ๐๐๐๐ข๐ซ๐๐จ๐๐ฎ๐ฆ๐๐ง๐ญ๐จ๐ฌ }=============




//============={ ๐๐ง๐ฏ๐ข๐๐ซ๐๐จ๐ซ๐ฆ๐ฎ๐ฅ๐๐ซ๐ข๐จ }=============
function EnviarFormulario(){

    alert("ยกGracias por completar el formulario!");

    //================== Borrado TextoImpreso ==================
    let TextoImpreso = document.getElementById("text1");
    TextoImpreso.innerHTML = "";

    let TextoImpreso2 = document.getElementById("text2");
    TextoImpreso2.innerHTML = "";

    let TextoImpreso3 = document.getElementById("text3");
    TextoImpreso3.innerHTML = "";
    //================== Borrado TextoImpreso ==================


    //================== Borrado TextoImpresoDest ==================
    let TextoImpresoDest1 = document.getElementById("textFraction1");
    TextoImpresoDest1.innerHTML = "";

    let TextoImpresoDest2 = document.getElementById("textFraction2");
    TextoImpresoDest2.innerHTML = ""; 

    let TextoImpresoDest3 = document.getElementById("textFraction3");
    TextoImpresoDest3.innerHTML = ""; 
    //================== Borrado TextoImpresoDest ==================


    //================== Borrado TextoImpresoTurnos ==================
    let TextoImpresoTurnos1 = document.getElementById("textFraction4");
    TextoImpresoTurnos1.innerHTML = "";

    let TextoImpresoTurnos2 = document.getElementById("textFraction5");
    TextoImpresoTurnos2.innerHTML = "";

    let TextoImpresoTurnos3 = document.getElementById("textFraction6");
    TextoImpresoTurnos3.innerHTML = "";
    //================== Borrado TextoImpresoTurnos ==================


    //================== Borrado TextoPrecio ==================
    let TextoPrecio1 = document.getElementById("textPriceFraction1");
    TextoPrecio1.innerHTML = "";

    let TextoPrecio2 = document.getElementById("textPriceFraction2");
    TextoPrecio2.innerHTML = "";

    let TextoPrecio3 = document.getElementById("textPriceFraction3");
    TextoPrecio3.innerHTML = "";
    //================== Borrado TextoPrecio ==================


    //================== Borrado PrecioFinal ==================
    let PrecioFinal = document.getElementById("textPriceFraction4");
    PrecioFinal.innerHTML = "";
    //================== Borrado PrecioFinal ==================
}
//============={ ๐๐ง๐ฏ๐ข๐๐ซ๐๐จ๐ซ๐ฆ๐ฎ๐ฅ๐๐ซ๐ข๐จ }=============
