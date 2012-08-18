test("attr-dash-list" ,function() {
    frameHtml({
        src : '/test/selector/attr-dash-list/attr-dash-list.html',
        ontest : function(w, f) {
            colorEqual('rgb(255, 255, 0)', w.$('li[class|="first"]').css('background-color'));
            colorEqual('rgba(0, 0, 0, 0)', w.$('li').eq(1).css('background-color'));
            colorEqual('rgba(0, 0, 0, 0)', w.$('li').eq(2).css('background-color'));
            colorEqual('rgba(0, 0, 0, 0)', w.$('li').eq(5).css('background-color'));
            this.finish();
        }
    });
});