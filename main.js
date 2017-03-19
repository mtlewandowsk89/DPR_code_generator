$(document).ready(function() {
	var length = words.length;
	var amount = 1;

	$('.amount').change(function() {
		amount = $(this).val();
		$('.checkbox-inline').hide();
		$('.word').html('');
		$('.keep').prop('checked', false);
	});

	$('.random').click(function() {
		random(length, amount);
	});

	function random(x, y) {
		for (i = 1; i<= y; i++) {
			if (!$('.word' + i + '-check').is(':checked')) {
				var index = Math.floor((Math.random() * x) + 1);
				var word = words[index];
				$('.word' + i).html(word);
				$('.checkDiv' + i).css('display', 'inline');
			}
		}
	};
});