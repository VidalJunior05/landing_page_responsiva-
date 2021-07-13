function typeWriter(elemento){
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}
const titulo = document.querySelector('.text_efect_js');
typeWriter(titulo);