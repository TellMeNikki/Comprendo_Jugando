//Variables, almacenan el valor de lo que es necesario escribir.
var direccionURL1 = '<a href="../index.html"></a>'; 


  var iframe1 ='<a target="_blank" href="https://wordwall.net/es/resource/3927207/emociones?ref=embed-image"><img src="//az779572.vo.msecnd.net/screens-200/f1c38ab175284ea1a13101a84435ebd8" width="100%" height="100%" style="border:1px solid grey;display:block"/>';    
  var iframe2 ='<a target="_blank" href="https://wordwall.net/es/resource/3792922/emociones/amistad?ref=embed-image"><img src="//az779572.vo.msecnd.net/screens-200/cb524a10f4a24d49bf409ed4c6fdd852"width="100%" height="100%" style="border:1px solid grey;display:block"/></a>';
  var iframe3 ='<a target="_blank" href="https://wordwall.net/es/resource/22920721/ruleta-de-las-emociones-1eros-y-2dos?ref=embed-image"><img src="//az779572.vo.msecnd.net/screens-200/878cba62e4024bb5a07150ca4aa01b8f"width="100%" height="100%" style="border:1px solid grey;display:block"/></a>';
  var iframe4 ='<a target="_blank" href="https://wordwall.net/es/resource/14919141/valores?ref=embed-image"><img src="//az779572.vo.msecnd.net/screens-200/46e92dbc264e429fbdd370b9681ee35d"width="100%" height="100%" style="border:1px solid grey;display:block"/></a>';
  var iframe5 ='<a target="_blank" href="https://wordwall.net/es/resource/6034458/autoestima?ref=embed-image"><img src="//az779572.vo.msecnd.net/screens-200/2990f21ddd864ad8b9208bd4bc2db9db"width="100%" height="100%" style="border:1px solid grey;display:block" /></a>';
  var iframe6 ='<a target="_blank" href="https://wordwall.net/es/resource/17500965/amor-propio?ref=embed-image"><img src="//az779572.vo.msecnd.net/screens-200/69e9bb29452f48bea55e1addf9a4ccf4"width="100%" height="100%" style="border:1px solid grey;display:block" /></a>';
  var iframe7 ='<a target="_blank" href="https://wordwall.net/es/resource/14668113/respeto?ref=embed-image"><img src="//az779572.vo.msecnd.net/screens-200/3ca765a0481f41eeb36ba8f06bfafcca"width="100%" height="100%" style="border:1px solid grey;display:block" /></a>';
  var iframe8 ='<a target="_blank" href="https://wordwall.net/es/resource/16206147/autoestima?ref=embed-image"><img src="//az779572.vo.msecnd.net/screens-200/94d5ad9559ec4652ba3b1110ac13878d"width="100%" height="100%" style="border:1px solid grey;display:block" /></a>';
  var iframe9 ='<a target="_blank" href="https://wordwall.net/es/resource/3607210/topos-no-saludables?ref=embed-image"><img src="//az779572.vo.msecnd.net/screens-200/d0debbe74fa2499bb4f3743bb279cfa1"width="100%" height="100%" style="border:1px solid grey;display:block" /></a>';
  var iframe10 ='<a target="_blank" href="https://wordwall.net/es/resource/20754495/empatía-e-indiferencia?ref=embed-image"><img src="//az779572.vo.msecnd.net/screens-200/c020f706de2947f4b542bddab5235c6e"width="100%" height="100%" style="border:1px solid grey;display:block" /></a>';
  var iframe11 ='<a target="_blank" href="https://wordwall.net/es/resource/3806822/emociones/qué-debemos-hacer?ref=embed-image"><img src="//az779572.vo.msecnd.net/screens-200/a36013d740954748b9b5e66e006850f7"width="100%" height="100%" style="border:1px solid grey;display:block" /></a>';
  var iframe12 ='<a target="_blank" href="https://wordwall.net/es/resource/12920075/hábitos-de-vida-saludable?ref=embed-image"><img src="//az779572.vo.msecnd.net/screens-200/6ef3d9c5e8494fbe9355ecaffbc6156e"width="100%" height="100%" style="border:1px solid grey;display:block" /></a>';

//Funciones que identifican el lugar en la página y escriben el valor de la variable. 
function escribirlinks(){ 
document.getElementById('link1').innerHTML=direccionURL1; 
} 
function escribiriframe(){ 
  document.getElementById('iframe1').innerHTML=iframe1; 
  document.getElementById('iframe2').innerHTML=iframe2; 
  document.getElementById('iframe3').innerHTML=iframe3; 
  document.getElementById('iframe4').innerHTML=iframe4;
  document.getElementById('iframe5').innerHTML=iframe5; 
  document.getElementById('iframe6').innerHTML=iframe6; 
  document.getElementById('iframe7').innerHTML=iframe7; 
  document.getElementById('iframe8').innerHTML=iframe8;
  document.getElementById('iframe9').innerHTML=iframe9; 
  document.getElementById('iframe10').innerHTML=iframe10; 
  document.getElementById('iframe11').innerHTML=iframe11; 
  document.getElementById('iframe12').innerHTML=iframe12;
} 

//Ejecuta las funciones después que la pagina termine de cargar.
window.onload=function(){ 
  escribirlinks(); 
  escribiriframe(); 
}