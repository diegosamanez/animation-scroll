const nuevaAnimacion = new AnimationScroll({
    //elemento al cual se le quiere agregar el efecto
    element: '#tituloID',
    //tipo de efecto
    type: 'string',
    //tiempo del efecto
    scroll: 10000,
    //añade una clase css personalizada para que cada letra pueda hacer lo que se quiera lograr
    class: 'letterMagic',
    //Tiempo de transision del efecto (tiene que coincidir con el tiempo de transicion que se le agrega al estilo,
    //si no se le agrega transition al estilo ignorar o ponerlo en 0)
    transition: '.4'
});
//Inicia la animacion
nuevaAnimacion.start