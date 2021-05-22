jQuery(document).ready(function( $ ) {
 "use strict";
 
        var countdown_select = $("[data-countdown]");
        countdown_select.each(function(){
            $(this).countdown($(this).data('countdown'))
            .on('update.countdown', function(e){
                var format = '%H : %M : %S';
				
				if(translate.enable == 'on'){
					if (e.offset.totalDays == 1) {
						format = '%d ' + translate.day + ' ' + format;
					} else if(e.offset.totalDays > 1) {
						format = '%d ' + translate.days + ' ' + format;
					}
					if (e.offset.weeks == 1) {
						format = '%w ' + translate.week + ' ' + format;
					} else if(e.offset.weeks > 1) {
						format = '%w ' + translate.weeks + ' ' + format;
					}
				} else {
					if (e.offset.totalDays > 0) {
						format = '%d Day%!d '+format;
					}
					if (e.offset.weeks > 0) {
						format = '%w Week%!w '+format;
					}
				}
                $(this).html(e.strftime(format));
            });
        }).on('finish.countdown', function(e){
			if(translate.enable){
            $(this).html(translate.expired).addClass('disabled');
			} else {
            $(this).html('This offer has expired!').addClass('disabled');
			}
        });
		
}); 