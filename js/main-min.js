document.addEventListener("DOMContentLoaded",function(){document.getElementsByClassName("app_link").onclick=function(e){let hero=document.getElementById("hero");hero.scrollIntoView()};wow=new WOW({animateClass:"animated",mobile:!1,offset:150,});wow.init();$(".hero").parallax("50%",0.3);$("html").niceScroll({scrollspeed:50,autohidemode:!1,cursorwidth:8,cursorborderradius:8,cursorborder:"0",background:"rgba(48, 48, 48, .4)",cursorcolor:"#1f1f1f",zindex:999,});$("#tslider").owlCarousel({items:1,navigation:!0,pagination:!1,slideSpeed:300,paginationSpeed:400,singleItem:!0,responsive:!0,autoPlay:!0,transitionStyle:"fade",});$("#submit_form").submit(function(){$("#mc_submit").attr("disabled","disabled");processing("icon","loading")});if($("#submit_form").length){$("#submit_form").ajaxChimp({callback:chimpResponce,})}
function chimpResponce(resp){if(resp.result==="success"){processing("loading","icon");$("#mc_submit").removeAttr("disabled","disabled");$("#submit_form #mc-email").val("");$("#error_msg").hide();$("#success_msg").show()}else{processing("loading","icon");$("#success_msg").hide();$("#error_msg").show();$("#mc_submit").removeAttr("disabled","disabled")}}
function processing(hide,show){$("#mc_submit i").removeClass(hide).addClass(show)}
$("#play_video").click(function(e){e.preventDefault();var video_link=$(this).data("video");video_link='<iframe src="'+video_link+'" width="800" height="408" style="position: absolute; top: 50%; left: 50%; transform: translateY(-50%) translateX(-50%);" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';$(".about_video").append(video_link).fadeIn(200)});$(".close_video").click(function(e){e.preventDefault();$(".about_video").fadeOut(200,function(){$("iframe",this).remove()})})})