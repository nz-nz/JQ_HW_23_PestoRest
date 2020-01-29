let menuMains = [{
        'menuItemPrice': '$25.89',
        'menuItemName': 'Osso Buco',
        'ItemDescription': 'Osso Buco is one of the Italian greats - slow cooked veal in a white wine tomato sauce.',
    },
    {
        'menuItemPrice': '$25.89',
        'menuItemName': 'Pappardelle Mimmo',
        'ItemDescription': 'This delicious dish tops long, wide pasta with scallops, lobster, asparagus, butter, sage and truffle oil to cater every palate.',
    },
    {
        'menuItemPrice': '$25.89',
        'menuItemName': 'Trippa Satriano',
        'ItemDescription': 'Thinly sliced herb encrusted ahi tuna topped with diced tomatoes, olives, capers, red onions and fennel. Perfect choice even for the first-time visitors!',
    },
    {
        'menuItemPrice': '$25.89',
        'menuItemName': 'Filetto Di Manzo',
        'ItemDescription': 'Wonderful combination of prime tenderloin, winter greens, Jerusalem artichoke puree, and oxtail reduction sauce.',
    }
];

let menuDesserts = [{
        'menuItemPrice': '$25.89',
        'menuItemName': 'Tiramisu',
        'ItemDescription': 'A Pesto’s favorite - classic Italian dessert made with lady fingers, Mascarpone cheese & espresso. Perfect for both kids and adults.',
    },
    {
        'menuItemPrice': '$25.89',
        'menuItemName': 'Cannoli',
        'ItemDescription': 'Trio tower of cannoli filled with smooth ricotta, sugar & cinnamon, with chocolate & raspberry sauces. Single cannoli is also available.',
    },
    {
        'menuItemPrice': '$25.89',
        'menuItemName': 'Pistachio Passion',
        'ItemDescription': 'Layered pistachio cream, cream cheese custard & whipped cream atop a rich walnut crust.',
    },
    {
        'menuItemPrice': '$25.89',
        'menuItemName': 'Chocolate-and-Pistachio Biscotti',
        'ItemDescription': 'At Pesto, we vary these wonderful nutty biscotti, while also dipping them in melted dark chocolate for an extra layer of flavor.',
    }
];

let menuDrinks = [{
        'menuItemPrice': '$25.89',
        'menuItemName': 'Aperol Spritz',
        'ItemDescription': 'The most popular drink in Venice: refreshing, easygoing &…happy! Perfect to be sipped as an “Aperitivo” just before dinner - delightful!',
    },
    {
        'menuItemPrice': '$25.89',
        'menuItemName': 'Negroni',
        'ItemDescription': 'Reward yourself with a moment of relaxation & pure pleasure while enjoying the full flavour & simplicity of a Negroni, an iconic Italian cocktail.',
    },
    {
        'menuItemPrice': '$25.89',
        'menuItemName': 'Negroni Sbagliato',
        'ItemDescription': 'A cocktail for those who prefer more delicate flavours but nonetheless want a drink full of taste & personality.',
    },
    {
        'menuItemPrice': '$25.89',
        'menuItemName': 'White Peach Bellini',
        'ItemDescription': 'White Peach Bellini is a classic drink from Venice Italy of white peach purée and Prosecco. It is one of our most popular drinks at Pesto.',
    }
];

menuListUpdate(menuMains)
$('.mains').click(function () {
    menuListUpdate(menuMains)
});
$('.desserts').click(function () {
    menuListUpdate(menuDesserts)
});
$('.drinks').click(function () {
    menuListUpdate(menuDrinks)
});

function menuListUpdate(menuName) {
    $('.menuItemBlock').empty();
    for (i = 0; i < menuName.length; i++) {
        let menuItemPrice = $('<div>');
        let menuItemName = $('<h2>');
        let ItemDescription = $('<p>');
        menuItemPrice.addClass('menuItemPrice');
        menuItemName.addClass('menuItemName');
        ItemDescription.addClass('ItemDescription');
        $('.menuItemBlock').append(menuItemPrice);
        $('.menuItemBlock').append(menuItemName);
        $('.menuItemBlock').append(ItemDescription);
        menuItemPrice.text(menuName[i].menuItemPrice);
        menuItemName.text(menuName[i].menuItemName);
        ItemDescription.text(menuName[i].ItemDescription);
    }

}





$(window).scroll(function () { //animationPOPIN
    if ($(window).scrollTop() > 0) {
        $("#stickyHeader").addClass("scrollHeader");
        $("#stickyHeader").removeClass("headerbgColor");
    } else {
        $("#stickyHeader").removeClass("scrollHeader");
        $("#stickyHeader").addClass("headerbgColor");
    }
    if (
        $(document).scrollTop() + $(window).height() >
        $("#aboutUs").offset().top + 300
    ) {
        $(".chefPhotoBox").animate({
            "margin-left": "0"
        }, 1000);
        $(".aboutTextBlock").animate({
            "margin-right": "0"
        }, 1000);
    }
    if (
        $(document).scrollTop() + $(window).height() >
        $("#featuredOffers").offset().top + 300
    ) {
        $(".featuredInner").animate({
            "margin-top": "10%"
        }, 1000);
        $(".featuredTextBlock").animate({
            'opacity': "100%"
        }, 1500);
    }
    if (
        $(document).scrollTop() + $(window).height() >
        $("#photosBlock").offset().top + 250
    ) {
        $(".gridTopline").animate({
            "margin-left": "0"
        }, 750);
    }
    if (
        $(document).scrollTop() + $(window).height() >
        $("#photosBlock").offset().top + 450
    ) {
        $(".gridBottomline").animate({
            "margin-right": "0"
        }, 750);
    }
    if (
        $(document).scrollTop() + $(window).height() >
        $("#newsBlock").offset().top + 300
    ) {
        $("#newsBlock").animate({
            "margin-left": "0"
        }, 750);
    }
});

$(function () { // hoverAnimOffers
    $(".grid-item").hover(function () {
        $(this).find('.orderNow').animate({
            'opacity': '100%'
        }, 750);
    }, function () {
        $(this).find('.orderNow').animate({
            'opacity': '0'
        }, 150);
    });
});

$(function () { // hoverAnimPhotos
    $(".photogrid-item").hover(function () {
        $(this).find('.zoomButton').animate({
            'opacity': '100%'
        }, 750);
    }, function () {
        $(this).find('.zoomButton').animate({
            'opacity': '0'
        }, 150);
    });
});

$(function () {
    $('.newsdot1').click(function () {
            $('.newsSliderWrap').animate({
                'margin-left': '0'
            }, 500);
        }), $('.newsdot2').click(function () {
            $('.newsSliderWrap').animate({
                'margin-left': '-100%'
            }, 500);
        }),
        $('.newsdot3').click(function () {
            $('.newsSliderWrap').animate({
                'margin-left': '-200%'
            }, 500);
        });
});

$(function () {
    $('.newsdot1').click(function () {
            $(this).css('backgroundColor', '#41A451');
            $(this).siblings().css('backgroundColor', '#bbb');
        }), $('.newsdot2').click(function () {
            $(this).css('backgroundColor', '#41A451');
            $(this).siblings().css('backgroundColor', '#bbb');
        }),
        $('.newsdot3').click(function () {
            $(this).css('backgroundColor', '#41A451');
            $(this).siblings().css('backgroundColor', '#bbb');
        });
});

// $(function(){ // hoverAnimDots  -- overrides the previous function 
//     $(".newsdot").hover(function(){
//     $(this).css('backgroundColor', '#41A451');
//     }, function(){
//         $(this).css('backgroundColor', '#bbb');
//     });
// });


$(function () {
    $('.mains').click(function () {
            $(this).css('color', '#ffffff');
            $(this).siblings().css('color', 'rgba(255,255,255,0.3)');
        }), $('.desserts').click(function () {
            $(this).css('color', '#ffffff');
            $(this).siblings().css('color', 'rgba(255,255,255,0.3)');
        }),
        $('.drinks').click(function () {
            $(this).css('color', '#ffffff');
            $(this).siblings().css('color', 'rgba(255,255,255,0.3)');
        });
});


$(function () {
    $('#zoom1').click(function () {
        $('.photosModalInner').css('margin-left', '0');
        $('#photosModal').css('display', 'block');
    });
    $('#zoom2').click(function () {
        $('.photosModalInner').css('margin-left', '-80%');
        $('#photosModal').css('display', 'block');
    });
    $('#zoom3').click(function () {
        $('.photosModalInner').css('margin-left', '-160%');
        $('#photosModal').css('display', 'block');
    });
    $('#zoom4').click(function () {
        $('.photosModalInner').css('margin-left', '-240%');
        $('#photosModal').css('display', 'block');
    });
    $('#zoom5').click(function () {
        $('.photosModalInner').css('margin-left', '-320%');
        $('#photosModal').css('display', 'block');
    })
});

$(function(){
    $('.close').click(function(){
        $('#photosModal').css('display', 'none');
    });
});


$('.rightButton').click(function(){
        let margin = (parseInt($('.photosModalInner').css('margin-left')))
        let width = ($('.modalWrapper').width())
        let fractionNum = -margin / width
    if ($('.photosModalInner').css('margin-left') == '0px'){
        $('.photosModalInner').animate({'margin-left': '-80%'}, 1000);
        console.log(fractionNum);
        return;
    }
    if  (fractionNum>='0.11' && fractionNum<='0.31'){
        console.log(fractionNum);
        $('.photosModalInner').animate({'margin-left': '-160%'}, 1000);
        return;
    }
    if (fractionNum>='0.26' && fractionNum <='0.47'){
        console.log(fractionNum);
        $('.photosModalInner').animate({'margin-left': '-240%'}, 1000);

        return;
    }
    if (fractionNum>='0.42' && fractionNum <= '0.62'){
        console.log(fractionNum);
        $('.photosModalInner').animate({'margin-left': '-320%'}, 1000);

        return;
    }
    if (fractionNum>='0.57'){
        console.log(fractionNum);
        $('.photosModalInner').animate({'margin-left': '0'}, 1000);
        
        return;
    }
});

$('.leftButton').click(function(){
    let margin = (parseInt($('.photosModalInner').css('margin-left')))
    let width = ($('.modalWrapper').width())
    let fractionNum = -margin / width
    console.log(fractionNum);
if ($('.photosModalInner').css('margin-left') == '0px'){
    $('.photosModalInner').animate({'margin-left': '-320%'}, 1000);
    console.log(fractionNum);
    return;
}
if  (fractionNum>='0.11' && fractionNum<='0.31'){
    console.log(fractionNum);
    $('.photosModalInner').animate({'margin-left': '0'}, 1000);
    return;
}
if (fractionNum>='0.26' && fractionNum <='0.47'){
    console.log(fractionNum);
    $('.photosModalInner').animate({'margin-left': '-80%'}, 1000);

    return;
}
if (fractionNum>='0.42' && fractionNum <= '0.62'){
    console.log(fractionNum);
    $('.photosModalInner').animate({'margin-left': '-160%'}, 1000);

    return;
}
if (fractionNum>='0.57'){
    console.log(fractionNum);
    $('.photosModalInner').animate({'margin-left': '-240%'}, 1000);
    
    return;
}
});