; (function () {
    const tab = $(".js-tab"),
        tabOpen = $(".js-tab-open"),
        tabBar = $(".js-tabbar");

    const RemoveTabState = (e) => {
        tabOpen.removeClass("active");
        tabBar.removeClass("active");
    }

    tabOpen.on("click", function (e) {
        e.preventDefault();

        const _ = $(this);

        let _target = _.attr("href") || _.attr("data-tab-open");

        if ($(_target)) {
            if (_.hasClass("active")) return false;
            else {
                RemoveTabState();
                _.addClass("active");
                $(_target).addClass("active");
            }

        }
    });
})();