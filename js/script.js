$(document).ready(function(e) {
		$(document).find('#part1').append('<div class="player" id="player1"><img src="http://icons.veryicon.com/png/Avatar/Face%20Avatars/Male%20Face%20O3.png" alt=""></div>').addClass('playcolor1');
		$(document).find('#part11').append('<div class="player" id="player2"><img src="http://findicons.com/files/icons/1072/face_avatars/300/fh02.png" alt=""></div>').addClass('playcolor2');
		$(document).find('#part21').append('<div class="player" id="player3"><img src="http://findicons.com/files/icons/206/looney_tunes/128/gossamer_angry.png" alt=""></div>').addClass('playcolor3');
		$(document).find('#part31').append('<div class="player" id="player4"><img src="http://findicons.com/files/icons/1072/face_avatars/300/fd03.png" alt=""></div>').addClass('playcolor4');
		
	$('.cub').on('click', function(){
		if(!$(this).hasClass('NotTurn')){
			var number = 1 + Math.floor(Math.random() * 6);
				$(this).animate({ top: '35px' },500).text(number);
				$(this).animate({ top: '30px' },500);
			var CurrentPlayer = $(this).attr('data-cub');
			var CurrentPlayerConst = $(this).attr('data-cub');
			var PlayerPlace = $(document).find('#player'+CurrentPlayer).parent().attr('data-place');
			var ChangePlace = +PlayerPlace + +number;

			var PlayerObject = $(document).find('#player'+CurrentPlayer);


			$(document).find('#player'+CurrentPlayer).parent().removeClass('playcolor'+CurrentPlayer); 
			$(this).addClass('NotTurn'); 


			if(CurrentPlayer != 4){
				CurrentPlayer = +CurrentPlayer+1;
				$(this).parent().find('.play'+CurrentPlayer).removeClass('NotTurn');
			} else {
				$(this).parent().find('.play1').removeClass('NotTurn');
			}


			if(ChangePlace <= 40){
				var PositionTo = $(document).find('#part'+ChangePlace).position();

			$(document).find('#part'+ChangePlace).append(PlayerObject);
			$(document).find('#part'+ChangePlace).addClass('playcolor'+CurrentPlayerConst);
		}
			else {
				ChangePlace = ChangePlace - 40;
					$(document).find('#part'+ChangePlace).append(PlayerObject);
					$(document).find('#part'+ChangePlace).addClass('playcolor'+CurrentPlayerConst);
			}

		}
		})
	});
