

const panels = document.querySelectorAll('.panel');


panels.forEach(panel => {
    removeActiveClass()
    panel.addEventListener('click',() =>{
        panel.classList.add('active');
    });
})

function removeActiveClass(){

    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}