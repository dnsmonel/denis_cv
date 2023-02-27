const btnSwitch = document.querySelector('#interruptor');
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    //Guardo el modo en local storage
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
})
    //Obtiene el modo seleccionado y lo conserva
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
} else {
    document.body.classList.remove('dark');
}

//Son dos botones que se intercalan, cuando uno se muestra el otro se oculta
function mostrar(){
    document.getElementById('info_personal').style.display = 'block';
    document.getElementById('botonM').style.display = 'none';
}

function ocultar(){
    document.getElementById('info_personal').style.display = 'none';
    document.getElementById('botonM').style.display = 'inline-block';
}