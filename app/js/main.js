function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}


if (document.querySelectorAll(".que__body-items-item")){
    document.querySelectorAll(".que__body-items-item").forEach((el) => {
        el.addEventListener('click', ()=> {
            let cont = el.querySelector('.que__body-items-item-bot');
            let con = cont.parentNode;
            if (cont.style.maxHeight) {
                document.querySelectorAll('.que__body-items-item-bot').forEach((el)=> el.style.maxHeight = null)
                document.querySelectorAll('.que__body-items-item').forEach((el)=> el.classList.remove('open'))
            } else {
                document.querySelectorAll('.que__body-items-item-bot').forEach((el)=> el.style.maxHeight = null)
                document.querySelectorAll('.que__body-items-item').forEach((el)=> el.classList.remove('open'))
                con.classList.add('open')
                cont.style.maxHeight = cont.scrollHeight + 'px';
            }
        })
    })
}


// $.fn.setCursorPosition = function(pos) {
//     if ($(this).get(0).setSelectionRange) {
//         $(this).get(0).setSelectionRange(pos, pos);
//     } else if ($(this).get(0).createTextRange) {
//         var range = $(this).get(0).createTextRange();
//         range.collapse(true);
//         range.moveEnd('character', pos);
//         range.moveStart('character', pos);
//         range.select();
//     }
// };




$("input[type='tel']").mask("+7(999) 999-9999");
        

$('.inputs__input').on('click', function(e){
    $(this).find('span').addClass('active')
    $(this).find('input').focus()
})

$('.inputs__input input').on('blur', function(e){
    if ($(this).val() == ''){
        $(this).parent('div').find('span').removeClass('active')
    }
})

$('.burger').on('click', function(e){
    $('.modal').fadeIn(1000)
    setTimeout(() =>{
        $('.modal_wrap').addClass('active')
    },1000)
})
$('.modal-close').on('click', function(e){
    $('.modal_wrap').removeClass('active')
    setTimeout(() =>{
        $('.modal').fadeOut(1000)
    },1000)
})

$('.auth-open').on('click', function(e){
    $('.auth').fadeIn(1000)
    setTimeout(() =>{
        $('.auth__body').addClass('active')
    },1000)
})
$('.auth-close').on('click', function(e){
    $('.auth__body').removeClass('active')
    setTimeout(() =>{
        $('.auth').fadeOut(1000)
    },1000)
})



function Auth(){
    let col = 0;
    $('.inputs__input input').each(function(e){
        if ($(this).val() == ''){
            $(this).parent('div').find('span').addClass('error')
        }else{
            $(this).parent('div').find('span').removeClass('error')
            col++;
        }
    })
    if (col == 2){
        $('.auth__body-main').addClass('good')
        setTimeout(() => {
            $('.auth__body-main').addClass('index')
        }, 500);
        $('.auth__body-good').addClass('active')
    }
}

$('.auth__body-main-form button').on('click', function(e){
    Auth();
})
$('.good-btn').on('click', function(e){
    $('.auth__body').removeClass('active')
    setTimeout(() =>{
        $('.auth').fadeOut(1000)
    },1000)
})


var splide = new Splide( '.splide', {
    rewind : true,
    perMove: 1,
    perPage: 4,
    pagination: false,
} );

splide.mount();