var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;

  let texts = [
    "CORTOMETRAGGIO \"MALEDETTO KAALO... DI MASCHITUDINE\" - PARTE 1",
    "CORTOMETRAGGIO \"MALEDETTO KAALO... DI MASCHITUDINE\" - PARTE 2",
  ]

  var x = document.getElementsByClassName("cortometraggio");


  if (n > x.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = x.length
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
  document.getElementById("titolo_corto").innerHTML = texts[slideIndex-1];
  x[slideIndex-1].style.display = "block";  
  x[slideIndex-1].style.marginBottom = "12px";  
  
  
}