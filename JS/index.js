//============={ 𝐏𝐞𝐝𝐢𝐫𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐨𝐬 }=============
function PedirDocumentos(){

    let Pasaporte = prompt("¿Posee pasaporte? (Colocar si o no)");

    let VISA = prompt("¿Posee visa? (Colocar si o no)");


    //============= 𝙋𝙖𝙨𝙖𝙥𝙤𝙧𝙩𝙚 𝙮 𝙑𝙄𝙎𝘼 =============
    while(Pasaporte !== "si" && VISA !== "si"){
        alert("Necesitas de visa y pasaporte para ingresar a la página");
        break;
    }

    while(Pasaporte !== "si" && VISA == "si"){
        alert("Necesitas de visa y pasaporte para ingresar a la página");
        break;
    }

    while(Pasaporte == "si" && VISA !== "si"){
        alert("Necesitas de visa y pasaporte para ingresar a la página");
        break;
    }
    //============= 𝙋𝙖𝙨𝙖𝙥𝙤𝙧𝙩𝙚 𝙮 𝙑𝙄𝙎𝘼 =============


    //============= 𝗣𝗿𝗼𝗺𝗽𝘀 𝗡𝗼𝗺𝗯𝗿𝗲𝘀 𝘆 𝗔𝗽𝗲𝗹𝗹𝗶𝗱𝗼𝘀 =============
    while(Pasaporte == "si" && VISA == "si"){

        let Nombre = prompt("Ingrese su nombre");
        let Apellido = prompt("Ingrese su apellido");

            if(Nombre !== "" && Apellido !== ""){
                alert("Bienvenido " + Nombre + " " + Apellido + " a la página");

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
    //============= 𝗣𝗿𝗼𝗺𝗽𝘀 𝗡𝗼𝗺𝗯𝗿𝗲𝘀 𝘆 𝗔𝗽𝗲𝗹𝗹𝗶𝗱𝗼𝘀 ============= 


    //============= 𝙇𝙞𝙢𝙞𝙩𝙚 𝘿𝙚 𝙋𝙖𝙨𝙖𝙟𝙚𝙧𝙤𝙨 =============
    while(Pasaporte == "si" && VISA == "si"){
        let LimiteDePasajeros = parseInt(prompt("¿Cuantas personas viajarán? (Mínimo 5 personas)"));

            if(isNaN(LimiteDePasajeros)){
                alert("Debe ingresar un número");
            }
            else{
                if(LimiteDePasajeros > "5"){
                    alert("Límite de pasajeros excedido");
                }else{
                    alert("El número de personas que viajarán será: " + LimiteDePasajeros + " personas");
                    let TextoImpreso3 = document.getElementById("text3");
                    TextoImpreso3.innerHTML = "<h2>" + LimiteDePasajeros + " personas" + "</h2>";
                    break;
                }
            }
    }
    //============= 𝙇𝙞𝙢𝙞𝙩𝙚 𝘿𝙚 𝙋𝙖𝙨𝙖𝙟𝙚𝙧𝙤𝙨 =============



    //============= 𝙄𝙣𝙜𝙧𝙚𝙨𝙖𝙧 𝘿𝙚𝙨𝙩𝙞𝙣𝙤 =============
    if(Pasaporte == "si" && VISA == "si"){

        for(let i = 1; i <= 3; i++){
            let Destino = prompt("Ingrese su país de destino");
        
            alert("Turno N°" + i + " País de destino: " + Destino);
        
            const Precio = 100;
        
            if(i == 1){
                let TextoImpresoDest1 = document.getElementById("textFraction1");
                TextoImpresoDest1.innerHTML = "<h2>" + "1. " + Destino + "</h2>";
        
                let TextoImpresoTurnos1 = document.getElementById("textFraction4");
                TextoImpresoTurnos1.innerHTML = "<h2>" + "Turno N°" + i + "</h2>";
        
                let TextoPrecio1 = document.getElementById("textPriceFraction1");
                TextoPrecio1.innerHTML = "<h2>" + Precio + "$" + "</h2>";
        
                let PrecioFinal = document.getElementById("textPriceFraction4");
                PrecioFinal.innerHTML = "<h2>" + Precio + "$" + "</h2>";
            }
        
            if(i == 2){
                let TextoImpresoDest2 = document.getElementById("textFraction2");
                TextoImpresoDest2.innerHTML = "<h2>" + "2. " + Destino + "</h2>"; 
        
                let TextoImpresoTurnos2 = document.getElementById("textFraction5");
                TextoImpresoTurnos2.innerHTML = "<h2>" + "Turno N°" + i + "</h2>";
        
                let TextoPrecio2 = document.getElementById("textPriceFraction2");
                TextoPrecio2.innerHTML = "<h2>" + Precio + "$" + "</h2>";
        
                let PrecioFinal = document.getElementById("textPriceFraction4");
                PrecioFinal.innerHTML = "<h2>" + (Precio + Precio) + "$" + "</h2>";
            }
        
            if(i == 3){
                alert("Límite de turnos alcanzado");
                let TextoImpresoDest3 = document.getElementById("textFraction3");
                TextoImpresoDest3.innerHTML = "<h2>" + "3. " + Destino + "</h2>"; 
        
                let TextoImpresoTurnos3 = document.getElementById("textFraction6");
                TextoImpresoTurnos3.innerHTML = "<h2>" + "Turno N°" + i + "</h2>";
        
                let TextoPrecio3 = document.getElementById("textPriceFraction3");
                TextoPrecio3.innerHTML = "<h2>" + Precio + "$" + "</h2>";
        
                let PrecioFinal = document.getElementById("textPriceFraction4");
                PrecioFinal.innerHTML = "<h2>" + (Precio + Precio + Precio) + "$" + "</h2>";
            }


            if(i == 1 || i == 2){
                let PreguntaDestino = prompt("¿Desea reservar más turnos de viaje? (Colocar si o no)");

                if(PreguntaDestino == "si"){
                    continue;
                }
                if(PreguntaDestino == "no"){
                    break;
                }
                else{
                    alert("Debe ingresar si o no para poder continuar");
                    alert("Si desea continuar colocando más turnos recargue la página");
                    break;
                }
            }
        } 
    } 
    //============= 𝙄𝙣𝙜𝙧𝙚𝙨𝙖𝙧 𝘿𝙚𝙨𝙩𝙞𝙣𝙤 =============
}
PedirDocumentos();   
//============={ 𝐏𝐞𝐝𝐢𝐫𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐨𝐬 }=============




//============={ 𝐄𝐧𝐯𝐢𝐚𝐫𝐅𝐨𝐫𝐦𝐮𝐥𝐚𝐫𝐢𝐨 }=============
function EnviarFormulario(){

    alert("¡Gracias por completar el formulario!");

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
//============={ 𝐄𝐧𝐯𝐢𝐚𝐫𝐅𝐨𝐫𝐦𝐮𝐥𝐚𝐫𝐢𝐨 }=============
