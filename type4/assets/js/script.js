
$(document).ready(function() {

  $(document).mousemove(function(e){
    
    // update mouse x and y position
    xPos = e.pageX;
    yPos = e.pageY;
    // change div with the id "element"s CSS when you move your mouse 
    $('body').css({
      'background-color' : 'rgb('+ yPos/5 + ', ' + xPos/3 + ', ' + (xPos*yPos)  /10 + ')',
    });
    $('.eightt, .nineee, .aa, .cc, .dd, .ee, .ff, .gg, .hh, .ii, .jj, .kk, .ll, .mm, .nn, .oo, .pp, .qq, .rr, .ss, .tt, .uu, .vv, .ww, .xx, .yy, .zz, .onee, .twoo, .thre, .fourr, .fiveee, .sixxx, .sevenn, .tenn ').css({
      'color' : 'rgb('+ yPos/5 + ', ' + xPos/3 + ', ' + (xPos*yPos)  /10 + ')',
    });
  });
    // $('.frame').click(function() {
    //     var random = Math.floor((Math.random() * 10) + 1);
    //     $('.frame:nth-child('+random+') div div').addClass('appear');
    $('.a').click(function() {
        $('.aa').addClass('appear');
        $('.oo').addClass('appear');
        $('.ww').addClass('appear');
        $('.yy').addClass('appear');
        $('.gg').addClass('appear');
        $('.ii').addClass('appear');
        $('.rr').addClass('appear');
        $('.uu').addClass('appear');
        $('.squaregroup2').addClass('appear');
        $('.asquaregg').addClass('appear');
        $('.longq').addClass('appear');
        $('.').addClass('appear');
        
        
        
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

     $('.zzz').click(function() {
        $(this).addClass('disappear');
        $('.asquaregg').addClass('appear');
    });
     $('.asquaregg').click(function() {
        $(this).addClass('disappear');
        
    });

});

// $(document).ready(function() {
//     $('.a').click(function() {
//         $('.aa').addClass('appear');
//     });

//      $('.aa').click(function() {
//         $(this).addClass('disappear');
//         $('.zzz').addClass('appear');
//     });

//      $('.zzz').click(function() {
//         $(this).addClass('disappear');
//         $('.asquaregg').addClass('appear');
//     });

//      $('.asquaregg').click(function() {
//         $(this).addClass('disappear');
//         $('.squaregroup').addClass('appear');
//     });
//      $('.squaregroup').click(function() {
//         $(this).addClass('disappear');
        
//     });

// });





$(document).ready(function() {
    $('.b').click(function() {
        $('.bb').addClass('appear');
        $('.longc').addClass('appear');
        $('.ll').addClass('appear');
        $('.pp').addClass('appear');
        $('.wsquaregg').addClass('appear');
        $('.fourr').addClass('appear');
        $('.ss').addClass('appear');
        $('.ysquaregroup').addClass('appear');


    });

     $('.b').click(function() {
        $('.aa').addClass('disappear');
        $('.oo').addClass('disappear');
        $('.ww').addClass('disappear');
        $('.yy').addClass('disappear');
        $('.gg').addClass('disappear');
        $('.ii').addClass('disappear');
        $('.rr').addClass('disappear');
        $('.uu').addClass('disappear');
        $('.squaregroup2').addClass('appear');
        $('.longq').addClass('disappear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.c').click(function() {
        $('.cc').addClass('appear');
        $('.onee').addClass('appear');
        $('.ssquaregg').addClass('appear');
        $('.nn').addClass('appear');
        $('.hh').addClass('appear');
        $('.nineee').addClass('appear');

    });

     $('.c').click(function() {
        $('.bb').addClass('disappear');
        $('.longc').addClass('disappear');
        $('.ll').addClass('disappear');
        $('.pp').addClass('disappear');
        $('.wsquaregg').addClass('disappear');
        $('.fourr').addClass('disappear');
        $('.ss').addClass('disappear');
        $('.ysquaregroup').addClass('disappear');
        $('.squaregroup').addClass('disappear');
        $('.asquaregg').addClass('disappear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.d').click(function() {
        $('.ff').addClass('appear');
        $('.threesquaregroup').addClass('appear');
        $('.longeight').addClass('appear');
        $('.ss').addClass('appear');
        $('.asquaregg').addClass('appear');
        $('.sixlongvertical').addClass('appear');
        $('.zz').addClass('appear');

    });

     $('.d').click(function() {
        $('.cc').addClass('disappear');
        $('.oo').addClass('disappear');
        $('.ww').addClass('disappear');
        $('.yy').addClass('disappear');
        $('.gg').addClass('disappear');
        $('.ii').addClass('disappear');
        $('.rr').addClass('disappear');
        $('.uu').addClass('disappear');
        $('.squaregroup2').addClass('disappear');
        $('.asquaregg').addClass('disappear');
        $('.squaregroup').addClass('disappear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});


$(document).ready(function() {
    $('.e').click(function() {
        $('.ee').addClass('appear');
        $('.ll').addClass('appear');
        $('.jsquaregroup').addClass('appear');
    });

     $('.e').click(function() {
        $('.ff').addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.f').click(function() {
        $('.tsquaregroup').addClass('appear');
        $('.gg').addClass('appear');
    });

     $('.f').click(function() {
        $('.threesquaregroup').addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.g').click(function() {
        $('.gg').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});


$(document).ready(function() {
    $('.h').click(function() {
        $('.hh').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.i').click(function() {
        $('.ii').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});


$(document).ready(function() {
    $('.j').click(function() {
        $('.jj').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.k').click(function() {
        $('.kk').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});


$(document).ready(function() {
    $('.l').click(function() {
        $('.ll').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});


$(document).ready(function() {
    $('.m').click(function() {
        $('.mm').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});


$(document).ready(function() {
    $('.n').click(function() {
        $('.nn').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});


$(document).ready(function() {
    $('.o').click(function() {
        $('.oo').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});


$(document).ready(function() {
    $('.p').click(function() {
        $('.pp').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.q').click(function() {
        $('.qq').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});


$(document).ready(function() {
    $('.r').click(function() {
        $('.rr').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});


$(document).ready(function() {
    $('.s').click(function() {
        $('.ss').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});


$(document).ready(function() {
    $('.t').click(function() {
        $('.tt').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});


$(document).ready(function() {
    $('.u').click(function() {
        $('.uu').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.v').click(function() {
        $('.vv').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.w').click(function() {
        $('.ww').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.x').click(function() {
        $('.xx').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.y').click(function() {
        $('.yy').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.z').click(function() {
        $('.zz').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.one').click(function() {
        $('.onee').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.two').click(function() {
        $('.twoo').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.three').click(function() {
        $('.thre').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.four').click(function() {
        $('.fourr').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});



$(document).ready(function() {
    $('.five').click(function() {
        $('.fiveee').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.six').click(function() {
        $('.sixxx').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.seven').click(function() {
        $('.sevenn').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});


$(document).ready(function() {
    $('.eight').click(function() {
        $('.eightt').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.nine').click(function() {
        $('.nineee').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});

$(document).ready(function() {
    $('.ten').click(function() {
        $('.tenn').addClass('appear');
    });

     $('.aa').click(function() {
        $(this).addClass('disappear');
        $('.squaregroup').addClass('appear');
    });

     $('.squaregroup').click(function() {
        $(this).addClass('disappear');
        $('.zzz').addClass('appear');
    });

});