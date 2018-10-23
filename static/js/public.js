/*
	* ----------------------------------------------------------------------------
  * js Document public js Start 
	* Author: DistantSound
	* IDE : 
	* ----------------------------------------------------------------------------
	* 参数说明： 
	* easing                缓动效果
	* effect                动画效果
	* autoPlay              自动运行
	* interTime ,delayTime  毫秒
	* defaultIndex          默认的当前位置索引0
	* defaultPlay           默认是否执行效果
	* mainCell              ".bd"切换元素的包裹层对象  
  * titCell               ".hd li" 鼠标的触发元素对象
  * ----------------------------------------------------------------------------
*/
$(function() {
        FastClick.attach(document.body);
        if (!placeholderSupport()) {
                $("[placeholder]").focus(function() {
                        var input = $(this);
                        if (input.val() == input.attr("placeholder")) {
                                input.val("");
                                input.removeClass("placeholder");
                        }
                }).blur(function() {
                        var input = $(this);
                        if (input.val() == "" || input.val() == input.attr("placeholder")) {
                                input.addClass("placeholder");
                                input.val(input.attr("placeholder"));
                        }
                }).blur();
        }
        $(".btn-signup").on("click", function() {
                $(".mask-box").fadeIn(300);
                $(".popup-signup").slideDown(350);
        });
        $(".popup-close").on("click", function() {
                $(".mask-box").slideUp(300);
                $(".popup-signup").slideUp();
        });
        $(".nav-boxclose").hide();
        $(".nav-boxopen").click(function() {
                $(".top-header").css("right", "0");
                $(".nav-boxclose").show();
                $(".nav-boxopen").hide();
        });
        $(".nav-boxclose").click(function() {
                $(".top-header").css("right", "-80%");
                $(".nav-boxclose").hide();
                $(".nav-boxopen").show();
        });
        $(".lis-subteb").each(function() {
                $(this).find(".tab-item").click(function() {
                        $(this).addClass("active").siblings().removeClass("active");
                        $(this).parents(".lis-subteb").find(".div-item").eq($(this).index()).show().siblings().hide();
                });
        });
        $(".select-box").each(function() {
                $(this).find(".option").hide(), $(this).hover(function() {
                        $(this).find(".option").show(), $(this).find(".stat-op li").on("click", function() {
                                var a = $(this).text();
                                $(this).parents(".select-box").find(".select-txt").text(a), $(this).find(".option").hide();
                        });
                }, function() {
                        $(this).find(".option").hide();
                });
        });
        AOS.init({
                offset:200,
                easing:"ease-in-quart",
                duration:800,
                once:true,
                disable:function() {
                        var maxWidth = 1024;
                        return window.innerWidth < maxWidth;
                }
        });
        if (screen && screen.width < 1199) {
                $.showMore(".showMoreNChildren");
        }
});

function placeholderSupport() {
        return "placeholder" in document.createElement("input");
}