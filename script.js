const button1 = document.querySelector('.modal_wind');
const windElem = document.querySelector('.window');
const windClose = document.querySelector('.w_close');
const windClose_2 = document.querySelector('.register');

windElem.style.cssText = `
    display:flex;
    visibility:hidden;
    opacity:0;
    transition:opacity 300ms easy-in-out;
`;

const closeWindow = event =>{
    const target = event.target;

    if(target === windClose){
        windElem.style.visibility = 'hidden';
        windElem.style.opacity = 0;
    }
    else if(target === windClose_2){
        windElem.style.visibility = 'hidden';
        windElem.style.opacity = 0;
    }
}

const openWindow = () => {
    windElem.style.visibility = 'visible';
    windElem.style.opacity = 1;
};

button1.addEventListener('click',openWindow);

windClose.addEventListener('click',closeWindow);
windClose_2.addEventListener('click',closeWindow);
