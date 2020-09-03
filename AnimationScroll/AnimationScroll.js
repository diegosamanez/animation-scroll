class AnimationScroll {
    constructor({
        element: element,
        type: type,
        scroll: scroll,
        class: clase,
        transition: transicion
    }) {
        this.element = element;
        this.type = type;
        this.scroll = scroll;
        this.clase = clase;
        this.transicion = transicion;
    }
    get start() {
        if (this.type === 'string') {
            this.scrollView();
            this.letterMagic()
            return this.arrayString()
        } else {
            console.error('wrong type')
        }
    }
    //metodo para tomar letra por letra
    arrayString() {
        let el = document.querySelector(this.element)
        //el.classList.add(this.clase)
        let arr = {
            element: el.innerText,
        }
        let arrString = []
        for (var i = 0; i < arr.element.length; i++) {
            arrString.push(arr.element[i])
        }
        let iterator = arrString.values()
        let todo = ''
        for (var i = 0; i < arrString.length; i++) {
            todo += `<span class="s-${i}">${iterator.next().value}</span>`
        }
        el.innerHTML = todo
        return arr;
    }
    scrollView() {
        let el = document.querySelector(this.element)
        let size = this.scroll
        //creamos un nuevo div
        let newElement = document.createElement('div');
        //div styles
        newElement.style.position = 'relative'
        newElement.style.top = 'auto'
        newElement.style.left = 'auto'
        newElement.style.right = 'auto'
        newElement.style.bottom = 'auto'
        newElement.style.display = 'block'
        newElement.style.minHeight = el.clientHeight + 'px'
        newElement.style.height = 'auto'
        newElement.style.paddingTop = '0px'
        newElement.style.paddingBottom = size + 'px'
        newElement.style.boxSizing = 'content-box'
        //element style
        el.style.position = 'relative'
        el.style.margin = 'auto'
        el.style.top = '0'
        el.style.left = '0'
        el.style.bottom = 'auto'
        el.style.right = 'auto'
        el.style.boxSizing = 'border-box'
        el.style.width = '100%'
        el.parentElement.insertBefore(newElement, el)
        newElement.appendChild(el)
        document.addEventListener('scroll', function() {
            let scroll = window.scrollY
            if (scroll > size - el.clientHeight) {
                el.style.position = 'relative'
                newElement.style.paddingTop = size + 'px'
                newElement.style.paddingBottom = '0px'
            }
            if (scroll < size) {
                el.style.position = 'fixed'
                newElement.style.paddingTop = '0px'
                newElement.style.paddingBottom = size + 'px'
            }
        })
    }
    //efecto de las letras
    letterMagic() {
        let size = this.scroll
        let clase = this.clase
        let trans = this.transicion
        let el = document.querySelector(this.element)
        let fraccion = this.scroll / this.arrayString().element.length
        //console.log(this.arrayString().element.length)
        //Cada vez que pase por un multiplo de fraccion le pasa la clase a la siguiente letra
        let a = 0
        let b = 0
        document.addEventListener('scroll', function() {
            if (window.scrollY > fraccion * b && window.scrollY <= size) {
                for (let i = 0; i < el.innerText.length; i++) {
                    if (el.childNodes[i].classList.contains(clase)) {
                        el.childNodes[i].classList.remove(clase)
                        el.childNodes[i].style.transition = `all ${trans}s ease`
                        setTimeout(function() {
                            el.childNodes[i].removeAttribute('style');
                        }, 1000);
                    }
                }
                el.childNodes[a].classList.add(clase)
                a++
                b++
            }
            //Detectar si se hace scroll hacia arriba o hacia abajo
            let scrollPos = 0
            if ((document.body.getBoundingClientRect()).top > scrollPos) {
                //console.log('arriba')
            } else {
                //console.log('abajo')
            }
            scrollPos = (document.body.getBoundingClientRect()).top;
            //console.log(scrollPos)
        })
    }
}