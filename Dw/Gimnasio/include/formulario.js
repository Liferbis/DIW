function envia(){
	var a = document.formula.sele.value;
	var myWindow= window.open(" Formulario " , " Contacto " , "width=300,height=230,scrollbars=NO");
	var texto="<html><head><title>Ventana </title><link href='estilo.css' rel='stylesheet' type='text/css'></head><body id='ventanita'><h3>Hemos recibido tu " + a + " satisfactoriamente.</br>Gracias por ayudarnos a mejorar!</h3><button onclick='window.close()'>Cerrar ventana</button></body></html>";
	myWindow.moveTo( ((screen.width-300)/2) , ((screen.height-230)/2) );
	myWindow.document.write(texto);
}