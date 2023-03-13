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

// numeri
let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');

let confirm = true;

function createInterval(n, element, time){
    let counter = 0;

    let interval = setInterval( ()=>{
        if(counter < n){
            counter++
            element.innerHTML = counter;
        }else{
            console.log('Adesso mi fermo');
            clearInterval(interval);
        }
    }, time);

    setTimeout(() => {
        confirm = true;
    }, 8000);

}

let observer = new IntersectionObserver( (entries)=>{
    
        entries.forEach( (entry)=> {
    
            if(entry.isIntersecting && confirm){
                createInterval(100, firstNumber, 100);
                createInterval(200, secondNumber, 50);
                createInterval(300, thirdNumber, 20);
                confirm = false;
            }
    
        });
    
    } );
    
    observer.observe(firstNumber);


// recensioni
let reviews = [
    {user: 'Matteo', description: `Il piu' bel sito di annunci del mondo`, rank: 5},
    {user: 'Alin', description: `Veramente non mi da di niente`, rank: 1},
    {user: 'Michael', description: `Mi piace tranne per AC`, rank: 3},
    {user: 'Arina', description: `GTA e' meglio!`, rank: 5},
]


let swiperWrapper = document.querySelector('.swiper-wrapper');

reviews.forEach( (recensione)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
    <div class="card-review d-flex flex-column justify-content-center">
        <p class="lead text-center">${recensione.description}</p>
        <p class="h4 text-center text-red">${recensione.user}</p>
        <div class="d-flex justify-content-center star">
            
        </div>
    </div>
    `;
    swiperWrapper.appendChild(div);
} );

let stars = document.querySelectorAll('.star');

stars.forEach( (star, index)=>{

    for(let i = 1; i <= reviews[index].rank; i++ ){
        let icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-star');
        star.appendChild(icon);
    }

    let difference = 5 - reviews[index].rank;

    for(let i = 1; i <= difference; i++ ){
        let icon = document.createElement('i');
        icon.classList.add('fa-regular', 'fa-star');
        star.appendChild(icon);
    }

} );

// Swiper

const swiper = new Swiper('.swiper', {

    // Optional parameters
    effect: "flip",
    grabCursor: true,
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 2000,
    },
  

  });

