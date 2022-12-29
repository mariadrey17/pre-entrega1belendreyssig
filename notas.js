
//Este proyecto está hecho para que ingrese 4 alumnos
//el estudiante ingresa nombre y curso
//luego ingresa las tres notas calculando la nota final
//estos datos salen por alerta y por consola 
// el ciclo anidado  en nota final la primera opcion es si es mayor igual que 21 esta aprobado, opcion 2 si es mayor igual a 12 esta aprobado , y la tercera opcion si es menor a 12 entonces desprobado tiene que recuperar
//la consola va a mostrar nombre , curso y notafinal del alumno


//ingreso de datos

for  (let  i=1  ; i <= 4 ; i++) {
    let nombre= prompt ("ingresa tu nombre");
    let curso= prompt ("ingresa tu curso");
    
    
    alert ("mi nombre  es "  + nombre  );
    alert ( "mi curso  es "  +  curso );
    console .log ( nombre ,curso);
    
    
    //acáempieza funcion sumarpromedio
    
    function sumarPromedio (nota1,nota2,nota3){
        let notafinal =nota1 +nota2 + nota3;
        alert (notafinal)
        return notafinal;
    
    }
    let nota1 , nota2 , nota3 ;
    nota1 =Number (prompt("Ingresa tu primera nota"));
    nota2 = Number (prompt("Ingresa tu segunda nota"));
    nota3 =Number (prompt("Ingresa tu tercera nota"));
    
    
    let promedioFinal =sumarPromedio (nota1,nota2,nota3);
    console .log (promedioFinal);
  
  
   promedioFinal= 21
    
   let  notaFinal= Number (prompt("Ingresa tu Nota final"));
  
  
   if (notaFinal >= 21){
    alert ("Felicitaciones pasastes de año !!!Estás aprobado");
  
   } else if ( notaFinal >=12)
   {alert ("Estás aprobado segui trabajando así")} 
   else {
    alert ("Está desaprobado debes dar recuperatorio");
   }
  
  
  
  }
  //muestra por consola nombre curso y promedio final