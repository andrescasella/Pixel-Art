var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    cambiarIndicadorColor(colorActual);
  })
);

$(document).ready(function(){
  paletaDeColores();
  crearGrillaPixeles();

var $paleta = $("#paleta");
var $grillaPixeles = $("#grilla-pixeles");
var mouseDown = 0;


function paletaDeColores(){
 for (i = 0; i < nombreColores.length; i++) {
   var paleta = document.getElementById('paleta');
   var nuevaDiv = document.createElement('div');
   nuevaDiv.style.backgroundColor = nombreColores[i];
   nuevaDiv.className = "color-paleta";
   paleta.appendChild(nuevaDiv);
 }
};

function crearGrillaPixeles() {
  for (i = 0; i < 1750; i++) {
    var grillaPixeles = document.getElementById('grilla-pixeles');
    var nuevaDiv = document.createElement('div');
    nuevaDiv.className = "pixel"
    nuevaDiv.id = i;
    grillaPixeles.appendChild(nuevaDiv);
  }
};

function cambiarIndicadorColor(color) {
  var indicadorColor = document.getElementById('indicador-de-color');
  indicadorColor.style.backgroundColor = color;
}

  $('div.color-paleta').click(function() {
    var color = $(this).css('background-color');
    cambiarIndicadorColor(color);
  });

  $('div.pixel').click(function() {
    var color = $('#indicador-de-color').css('background-color');
    $(this).css("background-color", color);
  });

  $('#grilla-pixeles').mousedown(function(){
    mouseDown = 1;
  });

  $('#grilla-pixeles').mouseup(function(){
    mouseDown = 0;
  });

  $('div.pixel').hover(function() {
    var color = $('#indicador-de-color').css('background-color');
    if (mouseDown) {
      $(this).css("background-color", color);
    }
  });

  $('#borrar').click(function(){
    for (i=0; i< 1750; i++) {
      var arregloDePixeles = []
      arregloDePixeles[i] = $('#' + i).css("background-color");
      $("#" + i).animate({
        'backgroundColor': 'white'
      }, 1200);
    }
  });

  $('#batman').click(function() {
    cargarSuperheroe(batman);
  });

  $('#wonder').click(function() {
    cargarSuperheroe(wonder);
  });

  $('#flash').click(function() {
    cargarSuperheroe(flash);
  });

  $('#invisible').click(function() {
    cargarSuperheroe(invisible);
  });

  $('#guardar').click(function(){
    guardarPixelArt();
  });
});



