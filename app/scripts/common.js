$(function () {
	'use strict';
	var values = [0, 152, 380, 748];
	var select = $('ul.skills_selector');
	var slider = $('<div id="slider" class="slider"></div>').insertBefore(select).slider({
		min: 0,
		max: 750,
		value: values[$('input[name="skills_selector"]:checked').val()],
		slide: function( event, ui ) {
		
            var value = findNearest(ui.value);
            if (ui.value == ui.values) {
                slider.slider('value', value);
            }
            else {
                slider.slider('value', value);
            }
            
			var radioNumber = nearestNumber(value);
			$('input[name="skills_selector"]').filter('[value=' + radioNumber + ']').click();
			return false;
		}
	});
	$('input[name="skills_selector"]').change(function() {
		var checked_val = values[$('input[name="skills_selector"]:checked').val()];
		slider.slider( "value", checked_val );
	});
	
	
	function findNearest(value) {
		var nearest = null;
		var diff = null;
		for (var i = 0; i < values.length; i++) {
			if ((values[i] <= value) || (values[i] >= value)) {
				var newDiff = Math.abs(value - values[i]);
				if (diff == null || newDiff < diff) {
					nearest = values[i];
					diff = newDiff;
				}
			}
		}
		return nearest;
	}	
	function nearestNumber(value) {
		var number = null;
		for (var i = 0; i < values.length; i++) {
			if (values[i] == value) {
				number = i;
			}
		}
		return number;
	}
	
});