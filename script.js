window.onload = function () {
    document.getElementById('basket').onmouseover = function () {
        document.getElementById('dropcontent').style.marginLeft = '-10.9%';
    };
    document.getElementById('club').onmouseover = function () {
        document.getElementById('dropcontent2').style.marginLeft = '-18.7%';
    };
    document.getElementById('members').onmouseover = function () {
        document.getElementById('dropcontent3').style.marginLeft = '-25.3%';
    };
    document.getElementById('fans').onmouseover = function () {
        document.getElementById('dropcontent4').style.marginLeft = '-32%';
    };
    document.getElementById('rmtv').onmouseover = function () {
        document.getElementById('rmtvitem').style.width = '15vw';
        document.getElementById('dropcontent5').style.width = '15vw';
        document.getElementById('dropcontent5').style.margin = '-0.3vw 0 0 0';
    };
}
// search collapse
$(function () {
    var number = 0;
    $('#searchicon').on('click', function () {
        if (number == 0) {
            $('#searchcolapse').animate({
                height: '8vw'
            }, 200)
            $('#searchcolapse input').css({
                display: 'block'
            })
            $('#searchcolapse #buttonclose').css({
                display: 'block'
            })
            $('#madrid').animate({
                marginTop: '11vw'
            }, 200)
            number++;
        }
        else {
            $('#searchcolapse').animate({
                height: '0vw'
            }, 200)
            $('#searchcolapse input').css({
                display: 'none'
            })
            $('#searchcolapse #buttonclose').css({
                display: 'none'
            })
            $('#madrid').animate({
                marginTop: '3.5vw'
            }, 200)
            number = 0;
        }
    })
    $('#searchcolapse #buttonclose i').on('click', function () {
        $('#searchcolapse').animate({
            height: '0vw'
        }, 200)
        $('#searchcolapse input').css({
            display: 'none'
        })
        $('#searchcolapse #buttonclose').css({
            display: 'none'
        })
        $('#madrid').animate({
            marginTop: '3.5vw'
        }, 200)
        number = 0;
    })
    // Hovers sliderimg
    $("#photosliderimg1").hover(function () {
        $('.circle1').css({
            opacity: '1',
        });
    },
        function () {
            $('.circle1').css({
                opacity: '0',
            });
        });
    $('.circle1').hover(function () {
        $('.circle1').css({
            opacity: '1',
        });
    })
    $('.share1').mouseenter(function () {
        $('.circle1').css({
            opacity: '1',
        })
        $('#siteshare1').animate({
            opacity: '1',
        }, 100)
        $('#siteshare1 .fa-facebook-f').animate({
            margin: '4vw 0 0 1vw',
            fontSize: '2vw',
        }, 150)
        $('#siteshare1 .fa-twitter').animate({
            margin: '6.5vw 0 0 1vw',
            fontSize: '1.8vw',
        }, 150)
    })
    $('.share1').mouseleave(function () {
        $('#siteshare1').animate({
            opacity: '0',
        }, 100)
        $('#siteshare1 .fa-facebook-f').animate({
            margin: '4vw 0 0 1.5vw',
            fontSize: '0vw',
        }, 150)
        $('#siteshare1 .fa-twitter').animate({
            margin: '6.5vw 0 0 1.6vw',
            fontSize: '0vw',
        }, 150)
    })
    // img 2 hovers
    $("#photosliderimg2").hover(function () {
        $('.circle2').css({
            opacity: '1',
        });
    },
        function () {
            $('.circle2').css({
                opacity: '0',
            });
        });
    $('.circle2').hover(function () {
        $('.circle2').css({
            opacity: '1',
        });
    })
    $('.share2').mouseenter(function () {
        $('.circle2').css({
            opacity: '1',
        })
        $('#siteshare2').animate({
            opacity: '1',
        }, 100)
        $('#siteshare2 .fa-facebook-f').animate({
            margin: '4vw 0 0 1vw',
            fontSize: '2vw',
        }, 150)
        $('#siteshare2 .fa-twitter').animate({
            margin: '6.5vw 0 0 1vw',
            fontSize: '1.8vw',
        }, 150)
    })
    $('.share2').mouseleave(function () {
        $('#siteshare2').animate({
            opacity: '0',
        }, 100)
        $('#siteshare2 .fa-facebook-f').animate({
            margin: '4vw 0 0 1.5vw',
            fontSize: '0vw',
        }, 150)
        $('#siteshare2 .fa-twitter').animate({
            margin: '6.5vw 0 0 1.6vw',
            fontSize: '0vw',
        }, 150)
    })
    // img 3 hovers
    $("#photosliderimg3").hover(function () {
        $('.circle3').css({
            opacity: '1',
        });
    },
        function () {
            $('.circle3').css({
                opacity: '0',
            });
        });
    $('.circle3').hover(function () {
        $('.circle3').css({
            opacity: '1',
        });
    })
    $('.share3').mouseenter(function () {
        $('.circle3').css({
            opacity: '1',
        })
        $('#siteshare3').animate({
            opacity: '1',
        }, 100)
        $('#siteshare3 .fa-facebook-f').animate({
            margin: '4vw 0 0 1vw',
            fontSize: '2vw',
        }, 150)
        $('#siteshare3 .fa-twitter').animate({
            margin: '6.5vw 0 0 1vw',
            fontSize: '1.8vw',
        }, 150)
    })
    $('.share3').mouseleave(function () {
        $('#siteshare3').animate({
            opacity: '0',
        }, 100)
        $('#siteshare3 .fa-facebook-f').animate({
            margin: '4vw 0 0 1.5vw',
            fontSize: '0vw',
        }, 150)
        $('#siteshare3 .fa-twitter').animate({
            margin: '6.5vw 0 0 1.6vw',
            fontSize: '0vw',
        }, 150)
    })
    // img 4 hovers
    $("#photosliderimg4").hover(function () {
        $('.circle4').css({
            opacity: '1',
        });
    },
        function () {
            $('.circle4').css({
                opacity: '0',
            });
        });
    $('.circle4').hover(function () {
        $('.circle4').css({
            opacity: '1',
        });
    })
    $('.share4').mouseenter(function () {
        $('.circle4').css({
            opacity: '1',
        })
        $('#siteshare4').animate({
            opacity: '1',
        }, 100)
        $('#siteshare4 .fa-facebook-f').animate({
            margin: '4vw 0 0 1vw',
            fontSize: '2vw',
        }, 150)
        $('#siteshare4 .fa-twitter').animate({
            margin: '6.5vw 0 0 1vw',
            fontSize: '1.8vw',
        }, 150)
    })
    $('.share4').mouseleave(function () {
        $('#siteshare4').animate({
            opacity: '0',
        }, 100)
        $('#siteshare4 .fa-facebook-f').animate({
            margin: '4vw 0 0 1.5vw',
            fontSize: '0vw',
        }, 150)
        $('#siteshare4 .fa-twitter').animate({
            margin: '6.5vw 0 0 1.6vw',
            fontSize: '0vw',
        }, 150)
    })
    // img 5 hovers
    $("#photosliderimg5").hover(function () {
        $('.circle5').css({
            opacity: '1',
        });
    },
        function () {
            $('.circle5').css({
                opacity: '0',
            });
        });
    $('.circle5').hover(function () {
        $('.circle5').css({
            opacity: '1',
        });
    })
    $('.share5').mouseenter(function () {
        $('.circle5').css({
            opacity: '1',
        })
        $('#siteshare5').animate({
            opacity: '1',
        }, 100)
        $('#siteshare5 .fa-facebook-f').animate({
            margin: '4vw 0 0 1vw',
            fontSize: '2vw',
        }, 150)
        $('#siteshare5 .fa-twitter').animate({
            margin: '6.5vw 0 0 1vw',
            fontSize: '1.8vw',
        }, 150)
    })
    $('.share5').mouseleave(function () {
        $('#siteshare5').animate({
            opacity: '0',
        }, 100)
        $('#siteshare5 .fa-facebook-f').animate({
            margin: '4vw 0 0 1.5vw',
            fontSize: '0vw',
        }, 150)
        $('#siteshare5 .fa-twitter').animate({
            margin: '6.5vw 0 0 1.6vw',
            fontSize: '0vw',
        }, 150)
    })
    // img 6 hovers
    $("#photosliderimg6").hover(function () {
        $('.circle6').css({
            opacity: '1',
        });
    },
        function () {
            $('.circle6').css({
                opacity: '0',
            });
        });
    $('.circle6').hover(function () {
        $('.circle6').css({
            opacity: '1',
        });
    })
    $('.share6').mouseenter(function () {
        $('.circle6').css({
            opacity: '1',
        })
        $('#siteshare6').animate({
            opacity: '1',
        }, 100)
        $('#siteshare6 .fa-facebook-f').animate({
            margin: '4vw 0 0 1vw',
            fontSize: '2vw',
        }, 150)
        $('#siteshare6 .fa-twitter').animate({
            margin: '6.5vw 0 0 1vw',
            fontSize: '1.8vw',
        }, 150)
    })
    $('.share6').mouseleave(function () {
        $('#siteshare6').animate({
            opacity: '0',
        }, 100)
        $('#siteshare6 .fa-facebook-f').animate({
            margin: '4vw 0 0 1.5vw',
            fontSize: '0vw',
        }, 150)
        $('#siteshare6 .fa-twitter').animate({
            margin: '6.5vw 0 0 1.6vw',
            fontSize: '0vw',
        }, 150)
    })
    // img 7 hovers
    $("#photosliderimg7").hover(function () {
        $('.circle7').css({
            opacity: '1',
        });
    },
        function () {
            $('.circle7').css({
                opacity: '0',
            });
        });
    $('.circle7').hover(function () {
        $('.circle7').css({
            opacity: '1',
        });
    })
    $('.share7').mouseenter(function () {
        $('.circle7').css({
            opacity: '1',
        })
        $('#siteshare7').animate({
            opacity: '1',
        }, 100)
        $('#siteshare7 .fa-facebook-f').animate({
            margin: '4vw 0 0 1vw',
            fontSize: '2vw',
        }, 150)
        $('#siteshare7 .fa-twitter').animate({
            margin: '6.5vw 0 0 1vw',
            fontSize: '1.8vw',
        }, 150)
    })
    $('.share7').mouseleave(function () {
        $('#siteshare7').animate({
            opacity: '0',
        }, 100)
        $('#siteshare7 .fa-facebook-f').animate({
            margin: '4vw 0 0 1.5vw',
            fontSize: '0vw',
        }, 150)
        $('#siteshare7 .fa-twitter').animate({
            margin: '6.5vw 0 0 1.6vw',
            fontSize: '0vw',
        }, 150)
    })
    // Next and Prev funtions and 1st slider function
    $('#photosvidiosslider').slick({
        infinite: false,
        autoplay: true,
        variableWidth: true,
        slidesToShow: 3,
        prevArrow: '<i id="arrow1"><</i>',
        nextArrow: '<i id="arrow2">></i>',
    });
    // Navbar fixed
    window.addEventListener("scroll", fixed);
    var navbarbrand = $('<img src="calendarrealimg.png" class="img-fluid"></img>')
    navbarbrand.css({
        width: '2.5vw',
        position: 'absolute',
        margin: '0.4vw 0 0 9.5vw'
    })
    function fixed() {
        if ($('body').scrollTop > 120 || document.documentElement.scrollTop > 120) {
            $('#tabsreal').append(navbarbrand);
            $('#tabsreal').css({
                margin: '-8.5vw 0 0 -4.1vw',
                width: '70vw',
                height: '3.5vw',
                backgroundColor: 'white',
                borderBottom: 'solid 1px silver',
                position: 'fixed'
            })
            $('#searchdiv').css({
                width: '40vw',
                height: '3.5vw',
                marginTop: '-8.5vw',
                backgroundColor: 'white',
                borderBottom: 'solid 1px silver',
                position: 'fixed'
            })
            $('#searchcolapse').css({
                margin: '-5vw 0 0 0',
                position: 'fixed'
            })
        }
        else {
            navbarbrand.remove();
            $('#tabsreal').css({
                width: '80vw',
                height: '0vw',
                margin: '2.1vw 0 0 -13vw',
                zindex: '12',
                border: 'none',
                position: 'absolute'
            })
            $('#searchdiv').css({
                width: '30vw',
                height: '0vw',
                zindex: '12',
                marginTop: '2.1vw',
                border: 'none',
                position: 'absolute'
            })
            $('#madrid').css({
                marginTop: '3.5vw'
            })
            $('#searchcolapse').css({
                margin: '3.5vw 0 0 0',
                position: 'absolute'
            })
            if (number == 1) {
                $('#madrid').css({
                    marginTop: '11vw'
                })
            }
        }
    }
    $('#specialfeatures-slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
    });
    $('#cupslider').slick({
        infinite: false,
        slidesToShow: 8,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
    });
})