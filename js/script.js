$(document).ready(function(e) {
	if(localStorage.getItem('player1') != null || localStorage.getItem('player1') != undefined){
		var i;
		var playerdata = "";
		for (i = 1; i < 5; i++) {
			playerdata  = localStorage.getItem('player'+i).split('!');			
			$(document).find('#part'+playerdata[0]).append('<div class="player" id="player'+i+'"><img src="/Imagedata/playerdata/'+i+'.png" alt=""></div>').addClass('playcolor'+i);
			$(document).find('.play'+i+' .money span').html(playerdata[1]);
			$(document).find('.play'+i+' .luck span').html(playerdata[2]);
		}
		$(document).find('.cub').addClass('NotTurn');
		var TurnCurrent = localStorage.getItem('turn');
		console.log(TurnCurrent);
		$('.play'+TurnCurrent).removeClass('NotTurn');
	} else {
		$(document).find('#part1').append('<div class="player" id="player1"><img src="/Imagedata/playerdata/1.png" alt=""></div>').addClass('playcolor1');
		$(document).find('#part11').append('<div class="player" id="player2"><img src="/Imagedata/playerdata/2.png" alt=""></div>').addClass('playcolor2');
		$(document).find('#part21').append('<div class="player" id="player3"><img src="/Imagedata/playerdata/3.png" alt=""></div>').addClass('playcolor3');
		$(document).find('#part31').append('<div class="player" id="player4"><img src="/Imagedata/playerdata/4.png" alt=""></div>').addClass('playcolor4');
	}	
	$('.cub').on('click', function(){
		if(!$(this).hasClass('NotTurn')){
			var number = 1 + Math.floor(Math.random() * 6);
				$(this).animate({ top: '35px' },500).text(number);
				$(this).animate({ top: '30px' },500);
			var CurrentPlayer = $(this).attr('data-cub');
			var CurrentLuck = $(document).find('.play'+CurrentPlayer+" .luck span").text();
			var	CurrentPlayerData = CurrentPlayer;
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
			// console.log(CurrentLuck);
			GetRandomEvent(CurrentPlayerData, CurrentLuck);

		}

		})

function GetRandomEvent(CurrentPlayerData, CurrentLuck){
	            $.ajax({
                type: "POST",
                url: "/core/database.php",
                data:{
                    coredata: CurrentPlayerData,
                    coreluck: CurrentLuck                  
                },
                success:function(json){
                	var resultmessge = json.split('|');
                	WriteResult(resultmessge);

                }
            })
	
}
function WriteResult(resultmessge) {
	$('.blacksnow').addClass('displayitem');
	        $(".event").animate({
            top: '200px',
            opacity: '1',
        }, 'slow').addClass('displayitem');
	      $('#event_text').html(resultmessge[0]);
	     $('#image_event').html("<img src='"+resultmessge[1]+"'>");
	      $('#money').html("Money: "+resultmessge[2]);
	      $('#luck').html("Luck: "+resultmessge[3]);

	   var PlayerStat = $(document).find(".play"+resultmessge[4].slice(1));
	   var MoneyData = PlayerStat.find('.money span').text();
	   var LuckData = PlayerStat.find('.luck span').text();
	   
	   PlayerStat.find('.money span').html(parseInt(MoneyData)+parseInt(resultmessge[2]));
	   PlayerStat.find('.luck span').html(parseInt(LuckData)+parseInt(resultmessge[3]));
}

$('.blacksnow').on('click', function(){
	$(this).removeClass('displayitem');
});


$('#ok_button').on('click', function(){
	$(this).removeClass('displayitem');
});
$(document).keypress(function(e) {
	
    if(e.which == 13) {
        $('.blacksnow').removeClass('displayitem');
    }
});
$(document).keyup(function(e) {
     if (e.keyCode == 27) { 
     	$('.blacksnow').removeClass('displayitem');
    }
});

$(window).on('beforeunload ',function() {
		var i;
		var data = "";
		for (i = 1; i < 5; i++) {
			var data = $('#player'+i).parent().attr('data-place')+"!"+$('.play'+i+' .money span').text()+"!"+$('.play'+i+' .luck span').text();	
			localStorage.setItem('player'+i, data);
		}

	var Turn = $(document).find('.cub');
		$.each(Turn , function(){
			if(!$(this).hasClass('NotTurn')){
				localStorage.setItem('turn', $(this).attr('data-cub'));	
			}
		})
    return 'Are you sures ?';
});


	});

