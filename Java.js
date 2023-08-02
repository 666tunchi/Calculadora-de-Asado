var DataMayores =  document.getElementsByClassName("Data");
var DataMenores =  document.getElementsByClassName("DataN");
var DataVeggies =  document.getElementsByClassName("DataV");
let Datos = [0.5,1,1,50,50,1,1,0.5];
let DatosV = [1,1,2,50,1,1,1,0.5];
let DatosMen = [0.25,1,1,1];

$('#veggie').hide();
$('#Carnivoro').hide();
$('#bebidas').hide();



  $(document).ready(function(){
    $('#asadito').click(function(){
  var mayores = document.getElementById("mayores");
  var menores = document.getElementById("menores");

    for(i=0;i<DataMayores.length;i++){
    DataMayores[i].innerHTML = Datos[i] * mayores.value;
    DataVeggies[i].innerHTML = DatosV[i] * mayores.value;

    }
    for(i=0;i<DataMenores.length;i++){
      DataMenores[i].innerHTML = DatosMen[i] * menores.value;
    }
    $('#bebidas').show(1000);

       
    })}
    )
    $(document).ready(function(){
      $('#Vegetariano').click(function(){
        $('#veggie').show(1000);
        $('#carne').hide(1000);
        $('#Vegetariano').hide(1000);
        $('#Carnivoro').show(1000);
      })
    })
    $(document).ready(function(){
      $('#Carnivoro').click(function(){
        $('#carne').show(1000);
        $('#veggie').hide(1000);
        $('#Carnivoro').hide(1000);
        $('#Vegetariano').show(1000);


      })
    })