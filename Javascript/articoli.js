fetch('./Javascript/articoli.json').then((response)=> response.json()).then((data)=>{
    data.sort((a, b)=> a - b);
    let radioWrapper = document.querySelector('#radioWrapper');
    let cardWrapper = document.querySelector('#cardWrapper');

    function radioCreate(){
        let categories = data.map((annuncio)=> annuncio.category);

        let uniqueCategories = Array.from(new Set(categories));

        uniqueCategories.forEach((category)=>{

            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `
            <input class="form-check-input" type="radio" name="categories" id="${category}">
            <label class="form-check-label" for="${category}">
                ${category}
            </label>
            `;
            radioWrapper.appendChild(div);
        })
    }

    radioCreate();

    function truncateWord(string){
        if(string.length > 25){
            return string.split(' ')[0] + '...';
        }else{
            return string;
        }
    }

    function showCards(array){
        cardWrapper.innerHTML = '';
        array.forEach((annuncio, i)=> {
            let div = document.createElement('div');
            div.classList.add('card-custom');
            div.innerHTML = `
                <img src="${annuncio.img}" alt="immagine casuale" class="img-fluid img-card">
                <p class="h2 altFont" title="${annuncio.name}">${truncateWord(annuncio.name)}</p>
                <p class="h4 altFont">${annuncio.category}</p>
                <p class="lead altFont">${annuncio.price} <i class="fa-solid fa-coins mx-2 text-gold"></i></p>
                
            `;
            cardWrapper.appendChild(div)
        });

    }

    showCards(data);

    function filterByCategory(categoria){
        if(categoria!= 'All'){
            let filtered = data.filter((annuncio)=> annuncio.category == categoria);
            showCards(filtered);
        }else{
            showCards(data);
        }
        
    }
    
    let radioButtons = document.querySelectorAll('.form-check-input');

    radioButtons.forEach( (button)=> {
        button.addEventListener('click', ()=>{
            filterByCategory(button.id);
        })
    });

})