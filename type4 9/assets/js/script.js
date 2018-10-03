




$(document).ready(function() {

    
const mouseCursor = document.querySelector(".mouse-cursor");
window.addEventListener("mousemove", trackMovement);
window.addEventListener("click", showClick);


function trackMovement(e) {
    mouseCursor.style.left = `${e.clientX}px`;
    mouseCursor.style.top = `${e.clientY}px`;
}


function showClick() {
   mouseCursor.classList.add("animation");
    let timeoutID = setTimeout(() => {
        mouseCursor.classList.remove("animation");
        clearTimeout(timeoutID);
    }, 500);
}

  $(document).mousemove(function(e){
    
    // update mouse x and y position
    xPos = e.pageX;
    yPos = e.pageY;
    // change div with the id "element"s CSS when you move your mouse 
    $('body').css({
      'background-color' : 'rgb('+ yPos/2 + ', ' + xPos/10 + ', ' + (xPos*yPos)  /8 + ')',
    });
    $('.eightt, .nineee, .zzz, .aa, .bb, .cc, .dd, .ee, .ff, .gg, .hh, .ii, .jj, .kk, .ll, .mm, .nn, .oo, .pp, .qq, .rr, .ss, .tt, .uu, .vv, .ww, .xx, .yy, .zz, .onee, .twoo, .thre, .fourr, .fiveee, .sixxx, .sevenn, .tenn ').css({
      'color' : 'rgb('+ yPos/2 + ', ' + xPos/10 + ', ' + (xPos*yPos)  /8 + ')',
    });
  });
    // $('.frame').click(function() {
    //     var random = Math.floor((Math.random() * 10) + 1);
    //     $('.frame:nth-child('+random+') div div').toggleClass('appear');




    $('.a').click(function() {
        $('.aa').toggleClass('appear');
        $('.oo').toggleClass('appear');
        $('.ww').toggleClass('appear');
        $('.yy').toggleClass('appear');
        $('.gg').toggleClass('appear');
        $('.ii').toggleClass('appear');
        $('.rr').toggleClass('appear');
        $('.uu').toggleClass('appear');
        $('.squaregroup2').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
        $('.longq').toggleClass('appear');
        $('.').toggleClass('appear');
    });

    //  $('.aa').click(function() {
    //     $(this).toggleClass('appear');
    //     $('.squaregroup').toggleClass('appear');
    // });

    //  $('.squaregroup').click(function() {
    //     $(this).toggleClass('appear');
    //     $('.zzz').toggleClass('appear');
    // });

    //  $('.zzz').click(function() {
    //     $(this).toggleClass('appear');
    //     $('.asquaregg').toggleClass('appear');
    // });
    //  $('.asquaregg').click(function() {
    //     $(this).toggleClass('appear');
        
    // });

});

// $(document).ready(function() {
//     $('.a').click(function() {
//         $('.aa').toggleClass('appear');
//     });

//      $('.aa').click(function() {
//         $(this).toggleClass('appear');
//         $('.zzz').toggleClass('appear');
//     });

//      $('.zzz').click(function() {
//         $(this).toggleClass('appear');
//         $('.asquaregg').toggleClass('appear');
//     });

//      $('.asquaregg').click(function() {
//         $(this).toggleClass('appear');
//         $('.squaregroup').toggleClass('appear');
//     });
//      $('.squaregroup').click(function() {
//         $(this).toggleClass('appear');
        
//     });

// });





$(document).ready(function() {




    $('.b').click(function() {
        $('.bb').toggleClass('appear');
        $('.longc').toggleClass('appear');
        $('.ll').toggleClass('appear');
        $('.pp').toggleClass('appear');
        $('.wsquaregg').toggleClass('appear');
        $('.fourr').toggleClass('appear');
        $('.ss').toggleClass('appear');
        $('.ysquaregroup').toggleClass('appear');

    });

    

    //  $('.squaregroup').click(function() {
    //     $(this).toggleClass('appear');
    //     $('.zzz').toggleClass('appear');
    // });

});

$(document).ready(function() {

// $('.c').click(function() {
//       $('.bb').removeClass('appear');
 
//     });

    $('.c').click(function() {
        $('.cc').toggleClass('appear');
        $('.onee').toggleClass('appear');
        $('.ssquaregg').toggleClass('appear');
        $('.nn').toggleClass('appear');
        $('.hh').toggleClass('appear');
        $('.nineee').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.ww').toggleClass('appear');

    });

     

    //  $('.squaregroup').click(function() {
    //     $(this).toggleClass('appear');
    //     $('.zzz').toggleClass('appear');
    // });

});

$(document).ready(function() {


  $('.d').click(function() {
     
    });



    $('.d').click(function() {
        $('.ff').toggleClass('appear');
        $('.threesquaregroup').toggleClass('appear');
        $('.longeight').toggleClass('appear');
        $('.ss').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
        $('.sixlongvertical').toggleClass('appear');
        $('.zz').toggleClass('appear');

    });

   

    //  $('.squaregroup').click(function() {
    //     $(this).toggleClass('appear');
    //     $('.zzz').toggleClass('appear');
    // });

});


$(document).ready(function() {
    $('.e').click(function() {
        $('.ee').toggleClass('appear');
        $('.ll').toggleClass('appear');
        $('.jsquaregroup').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.squaregroup2').toggleClass('appear');
    });

     $('.e').click(function() {
        $('.ff').toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');

    });

});

$(document).ready(function() {
    $('.f').click(function() {
        $('.tsquaregroup').toggleClass('appear');
        $('.gg').toggleClass('appear');
        $('.zzz').toggleClass('appear');
        $('.longeight').toggleClass('appear');
    });

     $('.f').click(function() {
        $('.threesquaregroup').toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.g').click(function() {
        $('.gg').toggleClass('appear');
        $('.wlongvertical').toggleClass('appear');
        $('.mm').toggleClass('appear');
        $('.thre').toggleClass('appear');
        $('.jj').toggleClass('appear');
        $('.tenn').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});


$(document).ready(function() {
    $('.h').click(function() {
        $('.hh').toggleClass('appear');
        $('.onee').toggleClass('appear');
        $('.osquaregroup').toggleClass('appear');
        $('.ss').toggleClass('appear');
        $('.csquaregroup').toggleClass('appear');
        $('.thre').toggleClass('appear');
        $('.ee').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
        $('.uu').toggleClass('appear');



    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.i').click(function() {
        $('.ii').toggleClass('appear');
        $('.osquaregroup').toggleClass('appear');
        $('.vsquaregg').toggleClass('appear');
        $('.jsquaregroup').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.tt').toggleClass('appear');
        $('.ss').toggleClass('appear');

    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});


$(document).ready(function() {
    $('.j').click(function() {
        $('.jj').toggleClass('appear');
        $('.fiveee').toggleClass('appear');
        $('.ulongvertical').toggleClass('appear');
        $('.nn').toggleClass('appear');
        $('.mm').toggleClass('appear');
        $('.thre').toggleClass('appear');
        $('.jj').toggleClass('appear');
        $('.tenn').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.k').click(function() {
        $('.kk').toggleClass('appear');
        $('.cc').toggleClass('appear');
        $('.onee').toggleClass('appear');
        $('.ssquaregg').toggleClass('appear');
        $('.nn').toggleClass('appear');
        $('.hh').toggleClass('appear');
        $('.nineee').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.xx').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});


$(document).ready(function() {
    $('.l').click(function() {
        $('.ff').toggleClass('appear');
        $('.ee').toggleClass('appear');
        $('.ll').toggleClass('appear');
        $('.jsquaregroup').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.onee').toggleClass('appear');
        $('.ssquaregg').toggleClass('appear');
        $('.nn').toggleClass('appear');
         $('.jj').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});


$(document).ready(function() {
    $('.m').click(function() {
        $('.mm').toggleClass('appear');
        $('.thre').toggleClass('appear');
        $('.jj').toggleClass('appear');
        $('.tenn').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
        $('.ff').toggleClass('appear');
        $('.ee').toggleClass('appear');
        $('.ll').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});


$(document).ready(function() {
    $('.n').click(function() {
        $('.nn').toggleClass('appear');
        $('.wlongvertical').toggleClass('appear');
        $('.mm').toggleClass('appear');
        $('.thre').toggleClass('appear');
        $('.jj').toggleClass('appear');
        $('.tenn').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
        $('.bb').toggleClass('appear');
        $('.ww').toggleClass('appear');

    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});


$(document).ready(function() {
    $('.o').click(function() {
        $('.oo').toggleClass('appear');
        $('.sevenn').toggleClass('appear');
        $('.osix').toggleClass('appear');
        $('.nn').toggleClass('appear');
        $('.hh').toggleClass('appear');
        $('.nineee').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.longe').toggleClass('appear');
        $('.thre').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});


$(document).ready(function() {
    $('.p').click(function() {
        $('.pp').toggleClass('appear');
        $('.kk').toggleClass('appear');
        $('.cc').toggleClass('appear');
        $('.onee').toggleClass('appear');
        $('.ssquaregg').toggleClass('appear');
        $('.nn').toggleClass('appear');
        $('.hh').toggleClass('appear');
        $('.nineee').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.xx').toggleClass('appear');

    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
         $('.').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.q').click(function() {
        $('.qq').toggleClass('appear');
         $('.osix').toggleClass('appear');
        $('.nn').toggleClass('appear');
        $('.hh').toggleClass('appear');
        $('.nineee').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.aa').toggleClass('appear');

    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});


$(document).ready(function() {
    $('.r').click(function() {
        $('.rr').toggleClass('appear');
        $('.ee').toggleClass('appear');
        $('.ll').toggleClass('appear');
        $('.jsquaregroup').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.squaregroup2').toggleClass('appear');
        $('.wlongvertical').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});


$(document).ready(function() {
    $('.s').click(function() {
        $('.ss').toggleClass('appear');
         $('.ii').toggleClass('appear');
        $('.osquaregroup').toggleClass('appear');
        $('.vsquaregg').toggleClass('appear');
        $('.jsquaregroup').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.tt').toggleClass('appear');
        $('.ss').toggleClass('appear');
        $('.bb').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});


$(document).ready(function() {
    $('.t').click(function() {
        $('.tt').toggleClass('appear');
         $('.aa').toggleClass('appear');
        $('.oo').toggleClass('appear');
        $('.ww').toggleClass('appear');
        $('.yy').toggleClass('appear');
        $('.gg').toggleClass('appear');
        $('.ii').toggleClass('appear');
        $('.rr').toggleClass('appear');
        $('.uu').toggleClass('appear');
        $('.squaregroup2').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
        $('.longq').toggleClass('appear');
        $('.').toggleClass('appear');
    });


     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});


$(document).ready(function() {
    $('.u').click(function() {
        $('.uu').toggleClass('appear');   
        $('.qq').toggleClass('appear');
         $('.osix').toggleClass('appear');
        $('.nn').toggleClass('appear');
        $('.hh').toggleClass('appear');
        $('.nineee').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.yy').toggleClass('appear');
        $('.gg').toggleClass('appear');
        $('.ii').toggleClass('appear');
        $('.rr').toggleClass('appear');

    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.v').click(function() {
        $('.vv').toggleClass('appear');$('.aa').toggleClass('appear');
        $('.oo').toggleClass('appear');
        $('.ww').toggleClass('appear');
        $('.yy').toggleClass('appear');
        $('.gg').toggleClass('appear');
        $('.ii').toggleClass('appear');
        $('.rr').toggleClass('appear');
        $('.uu').toggleClass('appear');
        $('.squaregroup2').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
        $('.longq').toggleClass('appear');
        $('.twoo').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.w').click(function() {
        $('.ww').toggleClass('appear');
        $('.cc').toggleClass('appear');
        $('.onee').toggleClass('appear');
        $('.ssquaregg').toggleClass('appear');
        $('.nn').toggleClass('appear');
        $('.hh').toggleClass('appear');
        $('.nineee').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.nineee').toggleClass('appear');

    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.x').click(function() {
        $('.xx').toggleClass('appear');
        $('.nn').toggleClass('appear');
        $('.wlongvertical').toggleClass('appear');
        $('.mm').toggleClass('appear');
        $('.thre').toggleClass('appear');
        $('.jj').toggleClass('appear');
        $('.tenn').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
        $('.bb').toggleClass('appear');
        $('.ww').toggleClass('appear');
        $('.fourr').toggleClass('appear');

    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.y').click(function() {
        $('.yy').toggleClass('appear');
        $('.ff').toggleClass('appear');
        $('.threesquaregroup').toggleClass('appear');
        $('.longeight').toggleClass('appear');
        $('.ss').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
        $('.sixlongvertical').toggleClass('appear');
        $('.zz').toggleClass('appear');
        $('.fiveee').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.z').click(function() {
        $('.zz').toggleClass('appear');
        $('.uu').toggleClass('appear');   
        $('.qq').toggleClass('appear');
         $('.osix').toggleClass('appear');
        $('.nn').toggleClass('appear');
        $('.hh').toggleClass('appear');
        $('.nineee').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.yy').toggleClass('appear');
        $('.gg').toggleClass('appear');
        $('.ii').toggleClass('appear');
        $('.rr').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.one').click(function() {
        $('.onee').toggleClass('appear');
        $('.xx').toggleClass('appear');
        $('.nn').toggleClass('appear');
        $('.wlongvertical').toggleClass('appear');
        $('.mm').toggleClass('appear');
        $('.thre').toggleClass('appear');
        $('.jj').toggleClass('appear');
        $('.tenn').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
        $('.bb').toggleClass('appear');
        $('.ww').toggleClass('appear');
        $('.kk').toggleClass('appear');

    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');

    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.two').click(function() {
        $('.twoo').toggleClass('appear');
        $('.ww').toggleClass('appear');
        $('.cc').toggleClass('appear');
        $('.onee').toggleClass('appear');
        $('.ssquaregg').toggleClass('appear');
        $('.nn').toggleClass('appear');
        $('.hh').toggleClass('appear');
        $('.nineee').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.nineee').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.three').click(function() {
        $('.thre').toggleClass('appear');
        $('.vv').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.oo').toggleClass('appear');
        $('.ww').toggleClass('appear');
        $('.yy').toggleClass('appear');
        $('.gg').toggleClass('appear');
        $('.ii').toggleClass('appear');
        $('.rr').toggleClass('appear');
        $('.uu').toggleClass('appear');
        $('.squaregroup2').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
        $('.longq').toggleClass('appear');
        $('.twoo').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.four').click(function() {
        $('.fourr').toggleClass('appear');
        $('.rr').toggleClass('appear');
        $('.ee').toggleClass('appear');
        $('.ll').toggleClass('appear');
        $('.jsquaregroup').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.squaregroup2').toggleClass('appear');
        $('.wlongvertical').toggleClass('appear');
        $('.sixxx').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});



$(document).ready(function() {
    $('.five').click(function() {
        $('.fiveee').toggleClass('appear');
        $('.rr').toggleClass('appear');
        $('.ee').toggleClass('appear');
        $('.ll').toggleClass('appear');
        $('.jsquaregroup').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.squaregroup2').toggleClass('appear');
        $('.wlongvertical').toggleClass('appear');
        $('.twoo').toggleClass('appear');
        $('.ww').toggleClass('appear');
        $('.cc').toggleClass('appear');
        $('.onee').toggleClass('appear');
        $('.ssquaregg').toggleClass('appear');
        $('.nn').toggleClass('appear');
        $('.hh').toggleClass('appear');
        $('.nineee').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.nineee').toggleClass('appear');
        $('.sixxx').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.six').click(function() {
        
        $('.yy').toggleClass('appear');
        $('.ff').toggleClass('appear');
        $('.threesquaregroup').toggleClass('appear');
        $('.longeight').toggleClass('appear');
        $('.ss').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
        $('.zz').toggleClass('appear');
        $('.fiveee').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.seven').click(function() {
        $('.sevenn').toggleClass('appear');
         $('.ii').toggleClass('appear');
        $('.osquaregroup').toggleClass('appear');
        $('.vsquaregg').toggleClass('appear');
        $('.jsquaregroup').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.tt').toggleClass('appear');
        $('.ss').toggleClass('appear');
        $('.sixlongvertical').toggleClass('appear');
        ('.sixxx').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});


$(document).ready(function() {
    $('.eight').click(function() {
        $('.eightt').toggleClass('appear');
        $('.ff').toggleClass('appear');
        $('.ee').toggleClass('appear');
        $('.ll').toggleClass('appear');
        $('.jsquaregroup').toggleClass('appear');
        $('.aa').toggleClass('appear');
        $('.bsquaregg').toggleClass('appear');
        $('.onee').toggleClass('appear');
        $('.ssquaregg').toggleClass('appear');
        $('.nn').toggleClass('appear');
         $('.jj').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.nine').click(function() {
        $('.nineee').toggleClass('appear');
        $('.bb').toggleClass('appear');
        $('.longc').toggleClass('appear');
        $('.ll').toggleClass('appear');
        $('.pp').toggleClass('appear');
        $('.wsquaregg').toggleClass('appear');
        $('.fourr').toggleClass('appear');
        $('.ss').toggleClass('appear');
        $('.ysquaregroup').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });

});

$(document).ready(function() {
    $('.ten').click(function() {
        $('.tenn').toggleClass('appear');
        $('.tt').toggleClass('appear');
         $('.aa').toggleClass('appear');
        $('.oo').toggleClass('appear');
        $('.ww').toggleClass('appear');
        $('.yy').toggleClass('appear');
        $('.gg').toggleClass('appear');
        $('.ii').toggleClass('appear');
        $('.rr').toggleClass('appear');
        $('.uu').toggleClass('appear');
        $('.squaregroup2').toggleClass('appear');
        $('.asquaregg').toggleClass('appear');
        $('.longq').toggleClass('appear');
        $('.').toggleClass('appear');
    });

     $('.aa').click(function() {
        $(this).toggleClass('appear');
        $('.squaregroup').toggleClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).toggleClass('appear');
        $('.zzz').toggleClass('appear');
    });




});

function myFunction() {
    window.print();
}






