// based on JQ I found here: http://stackoverflow.com/posts/3842442/revisions
//initial rotation
$('.photo').each(function() {
    var randrot = Math.random() * 20 - 10; //has to be local to run w/ each function call
    $(this).css('transform', 'rotate(' + randrot + 'deg) scale(1)');
});

//hover/unhover rotations
$('.photo').hover(function() {
    var randrot = Math.random() * 20 - 10; //has to be local to run w/ each function call
  $(this).css({
    transform: "rotate(" + randrot + "deg) scale(1.25)", 
    'z-index': "1"//kind of hacky, but standard notation didn't like the '-' in z-index, open to suggestions
    });
}, function() {
    var randrot = Math.random() * 20 - 10; //has to be local to run w/ each function call
  $(this).css({
    transform: "rotate(" + randrot + "deg) scale(1)", 
    'z-index': "0"//kind of hacky, but standard notation didn't like the '-' in z-index, open to suggestions
    });
});