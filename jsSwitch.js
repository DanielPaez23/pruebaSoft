let numero;
numero= parseInt(prompt('Ingrese un numero entre 1 y 5'))
switch (numero){
    case 1:
        document.write('Uno')
        break;
    case 2:
        document.write('Dos')
        break;
    case 3:
        document.write('Tres')
        break;
    case 4:
        document.write('Cuatro')
        break;
    case 5:
        document.write('Cinco')
        break;
    default:
        document.write('El valor debe ser entre 1 y 5')
}
let ciudad= prompt('Ingrese ciudad')
switch(ciudad){
    case 'Medellin':
        document.write('Medellin')
        break
    case 'Bogota':
        document.write('Bogota')
        break
    case 'Cali':
        document.write('Cali')
        break
    case 'Barranquilla':
        document.write('Barranquilla')
        break
    case 'Pereira':
        document.write('Pereira')
        break
}
