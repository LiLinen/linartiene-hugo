$(document).ready(function () {
    var $body = $('body');
    var $menu = $('#menu');

    $menu._locked = false;

    $menu._lock = function () {
        if ($menu._locked)
            return false;

        $menu._locked = true;

        window.setTimeout(function () {
            $menu._locked = false;
        }, 350);

        return true;

    };

    $menu._show = function () {
        if ($menu._lock())
            $body.addClass('is-menu-visible');
    };

    $menu._hide = function () {
        if ($menu._lock())
            $body.removeClass('is-menu-visible');
    };

    $menu._toggle = function () {
        if ($menu._lock())
            $body.toggleClass('is-menu-visible');

    };

    $menu
        .prependTo($body)
        .on('click', function (event) {
            event.stopPropagation();
        })
        .on('click', 'a', function (event) {
            var href = $(this).attr('href');

            event.preventDefault();
            event.stopPropagation();

            $menu._hide();

            // Redirect.
            if (href == '#menu')
                return;

            window.setTimeout(function () {
                window.location.href = href;
            }, 350);
        });

    $body
        .on('click', 'a[href="#menu"]', function (event) {
            event.stopPropagation();
            event.preventDefault();
            $menu._toggle();

        })
        .on('click', function (event) {
            $menu._hide();
        })
        .on('keydown', function (event) {
            if (event.keyCode == 27)
                $menu._hide();
        });
});
