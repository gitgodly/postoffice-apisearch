//https://api.postalpincode.in/pincode/110001

$(document).ready(
    function () {
        initSearch($("#searchdv1"));
        initSearch($("#searchdv2"));
    });


function initSearch(sr) {

    var src= sr.find("input").first();

    $(src).change(function () {

        var text = $(this).val();
        var settings = {
            "url": "https://api.postalpincode.in/pincode/" + text,
            "method": "GET",
            "timeout": 0,
        };
        $.ajax(settings).done(function (r) {
            if (!r.length > 0) { return; }
            var po = r[0].PostOffice;
            var parent = sr;
            var p = parent.find(".search-panel-body").first();
            p.hide().html('');
            $.each(po, function (i, v) {
                let d = $("<div></div>"); $("<label></label>").html(v.Name).appendTo(d); d.appendTo(p);
            });

            $(document).mouseup(function (e) {
                var container = p;
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    container.hide();
                    $(document).unbind("mouseup");
                }
            });

            p.show()
        });
    });
}
