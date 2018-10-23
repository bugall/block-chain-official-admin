!function() {
    var a = function(a, b) {
        var e, c = a.filter(":hidden"), d = c.length;
        for (e = 0; b > e && d > e; e++) c.eq(e).show();
        return d - b;
    };
    $.showMore = function(b) {
        void 0 == b && (b = ".showMoreNChildren"), $(b).each(function() {
            var d, b = $(this).attr("pagesize") || 6, c = $(this).children();
            if (c.length > b) {
                for (d = b; d < c.length; d++) c.eq(d).hide();
                $("<div class='c-box'><div class='btn-showMorehandle'> Show More </div></div>").insertAfter($(this)).click(function() {
                    a(c, b) <= 0 && $(this).hide();
                });
            }
        });
    };
}();
