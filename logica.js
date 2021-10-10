addEventListener('DOMContentLoaded', ()=>{
    const btnMenu = document.querySelector('.btnMenu')
    if(btnMenu){
        btnMenu.addEventListener('click', () =>{
            const list = document.querySelector('.list')
            list.classList.toggle('show')
        })
    }
})