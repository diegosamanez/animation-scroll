# animation-scroll

Crea animaciones al hacer scroll

## Comenzando 🚀
_En el HTML_
```
<h1 id="elementoID">ALGUNA FRASE</h1>
```
_Agregar el script en el HTML_
```
<script src="https://animation-scroll-cdn.agregalel.com/animation-scroll.min.js"></script>
```
_Crea una nueva instancia de la clase AnimationScroll y personalizala_
```
const nuevaAnimacion = new AnimationScroll({
    //elemento al cual se le quiere agregar el efecto
    element: '#elementoID',
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
```


### Inicializar 

_Finalmente inicia la animacion con el metodo start_

```
//Inicia la animacion
nuevaAnimacion.start.
```

## Autores ✒️

_Este proyecto fue creado por el equipo de Agregalel.com_

* **Diego Samanez** - ** - [Diego Samanez](https://github.com/diegosamanez)
* **Agregalel.com** - ** - [Agregalel.com](https://agregalel.com)


## Licencia 📄

Este proyecto está bajo la Licencia (GNU GENERAL PUBLIC LICENSE) - mira el enlace [LICENSE](https://github.com/diegosamanez/animation-scroll/blob/master/LICENSE) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢 


---
⌨️ con ❤️ por [diegosamanez](https://github.com/diegosamanez) 😊
