let sig =  "https://pokeapi.co/api/v2/pokemon/"
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  getData(sig);

  let btm = $(".sig")
  btm.click(getData(sig))

  let x = $("#boton1");
  x.click(asociarClase);
  x = $("#boton2");
  x.click(desasociarClase);
}

function asociarClase() {
  let x = $("#descripcion");
  x.addClass("recuadro");
}

function desasociarClase() {
  let x = $("#descripcion");
  x.removeClass("recuadro");
}

function getData(url){
  $.get( url, function( data ) {
    console.log(data)
    for (let i = 0; i < data.results.length; i++) {
      const element = data.results[i];
      // $(".container").append(`
      //   <div class="card m-5" style="width: 18rem;">
      //   <img src="data.sprites.back_default" class="card-img-top img-poke" alt="...">
      //   <div class="card-body">
      //     <p class="card-text"><a href="${element.name}">${element.name}</a></p>
      //   </div>
      // </div>
      //   `)
      sig = data.next
        $.get(element.url, function(poke){
          $(".container").append(`
            <div class="card m-5" style="width: 18rem;">
            <img src="${poke.sprites.back_default}" class="card-img-top img-poke" alt="...">
            <div class="card-body">
              <p class="card-text"><a href="${poke.sprites.back_default }">${element.name}</a></p>
            </div>
          </div>
            `)
        }


        )
    }
   //$( ".img-poke" ).attr( "src",data.sprites.back_default);
    // alert( "Load was performed." );

   //$(".card-text").html();
  });
}

