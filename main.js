let hiddenBlade = document.querySelector('#hidden-blade')

let check = false

hiddenBlade.addEventListener('click', ()=>{
    if(check == false){
        hiddenBlade.src = './Media/Hidden_blade_open.png';
        check = true;
    }else{
        hiddenBlade.src = './Media/Hidden_blade_closed.png';
        check = false;
    }
});
