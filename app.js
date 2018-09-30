(function(){
    var el = document.getElementById("middleText")
    var i;
    var lorem = document.getElementsByClassName("lorem")[0];

    for(i=0; i<70; i++){
        lorem.innerHTML = lorem.innerHTML + " lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </br>";
    }

    window.addEventListener('resize',function(){
        console.log('resized window');
        // printDimensions();
    });
    window.addEventListener('scroll',function(){
        console.log('scrolling');
        printDimensions();
    })
    var square = document.getElementById('square');
    var printButton = document.getElementById("bigbutton").addEventListener('click',printDimensions);

    printDimensions();
    function printDimensions(){
        console.log("window.innerHeight="+window.innerHeight);
        console.log("window.outerHeight="+window.innerHeight);
        console.log("window.innerWidth="+window.innerWidth);
        console.log("document.documentElement.clientWidth="+document.documentElement.clientWidth);
        console.log("document.body.clientWidth="+document.body.clientWidth)
        console.log("document.body.clientHeight="+document.body.clientHeight)
        console.log("document.body.scrollHeight="+document.body.scrollHeight)
        console.log("buttonContainer width="+document.getElementById('buttonContainer').scrollWidth)
        console.log('document.body.offsetHeight'+document.body.offsetHeight);
        console.log('document.body.offsetWidth='+document.body.offsetWidth);
        console.log('document.body.scrollTop='+document.body.scrollTop);
        console.log('window.pageYOffset='+window.pageYOffset);
        console.log('window.scrollY='+window.scrollY);
        console.log("document.documentElement.scrollTop="+document.documentElement.scrollTop);
        console.log('document.body.scrollLeft='+document.body.scrollLeft);

        var scrollTop = window.scrollY || window.pageYOffset ||
            document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
        var windowHeight = window.innerHeight;
        console.log('square.offsetHeight='+square.offsetHeight);
        console.log("square.scrollHeight="+square.scrollHeight);
        console.log("square.scrollTop="+square.scrollTop);
        console.log("square.clientHeight="+square.clientHeight);
        console.log("document.documentElement.clientHeight="+document.documentElement.clientHeight);

        var middlescreen = windowHeight/2;
        console.log(middlescreen, scrollTop, square.scrollHeight)
        square.style.top=middlescreen+scrollTop - square.scrollHeight/2+"px";
        square.style.left=(window.innerWidth/2)+(document.body.scrollLeft)-(square.scrollWidth/2)+'px';
        console.log('square.style.top='+square.style.top)



    }
})(window);