(function($) {
    equalheight = function(container) {
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
        $(container).each(function() {
            $el = $(this);
            //$($el).height('auto')
            topPostion = $el.position().top;
            if (currentRowStart != topPostion) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].css({
                    'min-height': currentTallest
                });
            }
        });
    }
    $(function() {
        equalheight('[data-eq-h]');
        $('.ba-slider').slick({
        	appendArrows: '.ba-slider__controls'
        });
        $('.ba-features').slick({
        	appendArrows: '.ba-feature__controls'
        });
        var mainMenu = $('.ba-main-menu');
        $('.ba-main-menu__toggle').click(function(e){
        	e.preventDefault();
        	mainMenu.toggleClass('open');
        });

        var searchDropdown = $('.ba-search__dropdown');
        $('.ba-search__toggle').click(function(e){
        	e.preventDefault();
        	$(this).toggleClass('open');
        	searchDropdown.toggleClass('open');
        });
    })
})(jQuery);
