// open 1st sub-menu
$('.sub-link__first-open').click(function() {
    $('.sub-link__first-open').hide();
    $('.sub-links__first').show();
    $('.sub-link__first-close').show();
    return false;
});

// close 1st sub-menu clicked in area without sub-menu
$(document).mouseup(function(e) {
    var popup = $('.sub-links__first');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.sub-links__first').hide();
        $('.sub-link__first-close').hide();
        $('.sub-link__first-open').show();
    }
});

// close 1st sub-menu clicked to arrow
$('.sub-link__first-close').click(function() {
    $('.sub-links__first-open').hide();
    $('.sub-link__first-close').hide();
    $('.sub-link__first-open').show();
    return false;
});

// open 2nd sub-menu
$('.sub-link__last-open').click(function() {
    $('.sub-link__last-open').hide();
    $('.sub-links__last').show();
    $('.sub-link__last-close').show();
    return false;
});

// close 2nd sub-menu clicked in area without sub-menu
$(document).mouseup(function(e) {
    var popup = $('.sub-links__last');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.sub-links__last').hide();
        $('.sub-link__last-close').hide();
        $('.sub-link__last-open').show();
    }
});

// close 2nd sub-menu clicked to arrow
$('.sub-link__last-close').click(function() {
    $('.sub-links__last-open').hide();
    $('.sub-link__last-close').hide();
    $('.sub-link__last-open').show();
    return false;
});

// open mobile sub-menu
$('.open-button').click(function() {
    $('.open-button').hide();
    $('.header__nav').show();
    $('.close-button').show();
    return false;
});

// close mobile sub-menu clicked to arrow
$('.close-button').click(function() {
    $('.header__nav').hide();
    $('.close-button').hide();
    $('.open-button').show();
    return false;
});