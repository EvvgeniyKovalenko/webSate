const separator = document.querySelector('.recForSepar');
const separatorImg = document.querySelector('.separatorImg');


separator.addEventListener('mouseover', function(){
    separatorImg.style.opacity = '1';
})


separator.addEventListener('mouseout', function(){
    separatorImg.style.opacity = '0';
})




const filter = document.querySelector('.recForFilter');
const filterImg = document.querySelector('.filterImg');


filter.addEventListener('mouseover', function(){
    filterImg.style.opacity = '1';
})


filter.addEventListener('mouseout', function(){
    filterImg.style.opacity = '0';
})


const exchanger = document.querySelector('.recForExch');
const exchangerImg = document.querySelector('.exchangerImg');


exchanger.addEventListener('mouseover', function(){
    exchangerImg.style.opacity = '1';
})

exchanger.addEventListener('mouseout', function(){
    exchangerImg.style.opacity = '0';
})
