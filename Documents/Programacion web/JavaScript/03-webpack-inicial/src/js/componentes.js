import '../css/componentes.css';

export const saludar = ( nombre ) => {
    console.log('Creabdo etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }, ¿como estas?`;
    document.body.append( h1 ); 
}

//Export permite que otros archivos usen este modulos