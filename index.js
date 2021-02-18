let mylist = Array.from(document.getElementsByClassName('mylist'));
let plus = Array.from(document.getElementsByClassName('plus'));
let minus = Array.from(document.getElementsByClassName('minus'));
let price = Array.from(document.getElementsByClassName('price'));
let counter = Array.from(document.getElementsByClassName('counter'));
let heart = Array.from(document.getElementsByClassName('heart'));
let totalprice = Array.from(document.getElementsByClassName('total-price'));
let remove = Array.from(document.getElementsByClassName('remove'));
let ordertotal = document.getElementById('order-total');

function changeColor (el) {
    if(el.target.style.color !== 'red'){
        el.target.style.color ="red"
    }
    else {
        el.target.style.color ="black"
    }
}

for (let i=0 ; i < mylist.length ; i++)
{
    plus[i].addEventListener('click' , function(){
        counter[i].innerHTML++

        calculsum() ;
    })
    minus[i].addEventListener('click' , function(){
        if(counter[i].innerHTML > 0) {
            counter[i].innerHTML--

            calculsum() ;

        }
    })
    heart[i].addEventListener('click' , changeColor);

    remove[i].addEventListener('click' , function() {
    mylist[i].remove() ;


        price[i].innerHTML = 0 ;
        calculsum() ;
        
        
    })

}

function calculsum (){
    let sum = 0 ;
    for (i=0 ; i < mylist.length ; i++) {
        totalprice[i].innerHTML = Number(price[i].innerHTML) * Number(counter[i].innerHTML) ;
        
        sum+= Number(price[i].innerHTML) * Number(counter[i].innerHTML) ;
    }
    ordertotal.innerHTML = sum ;
}


    
