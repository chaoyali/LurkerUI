var room_num = 1;
var current_pressed = 0;
var user_name = "NULL";

$(document).ready(function() {
	$('#username').hide();

	Twitch.init({clientId: 'vdxg0o02ic2jt2fkv7fblztyjnvqmf'}, function(error, status) {
    // the sdk is now loaded
  	if (status.authenticated) {
		  // Already logged in, hide button
		  $('.twitch-connect').hide();
		  
		  Twitch.api({method: 'user'}, function(error, user) {
	      user_name =user.display_name;
	      $('#username').show();
	      $('#username').text('user_name');
	      alert("user_name");
	    });
		}
  });

  $('.twitch-connect').click(function() {
	  Twitch.login({
	    scope: ['user_read', 'channel_read']
	  });
	  
    
	})

	$('#get-name button').click(function() {
    Twitch.api({method: 'user'}, function(error, user) {
      $('#get-name input').val(user.display_name);
    });
  })


	$(".button-noise").click(function(){
		if($('#footage-group').is(":visible")) {
			$('#button-group').fadeOut(300);
			$('#footage-group').fadeOut(300);
			$("#div2").removeClass("rotateback");
			$("#div2").addClass("rotate");
			$('#obj-1').delay(600).fadeIn(300);
			$('#obj-notes').delay(600).fadeIn(300);
			$('#obj-book').delay(600).fadeIn(300);
			$('#obj-book-control').delay(600).fadeIn(300);
			$('#obj-toilet').delay(600).fadeIn(300);
			$('#obj-toilet-control').delay(600).fadeIn(300);
			$('#obj-back-button').delay(600).fadeIn(300);
		}
		else{
			$('#obj-1').fadeOut(300);
			$('#obj-notes').fadeOut(300);
			$('#obj-book').fadeOut(300);
			$('#obj-book-control').fadeOut(300);
			$('#obj-toilet').fadeOut(300);
			$('#obj-toilet-control').fadeOut(300);
			$('#obj-back-button').fadeOut(300);
			$('#button-group').delay(600).fadeIn(400);
			$('#footage-group').delay(600).fadeIn(400);
			$("#div2").addClass("rotateback");
			$("#div2").removeClass("rotate");
		}


	});

	$("#obj-back-button").click(function(){
		$('#obj-1').fadeOut(300);
		$('#obj-notes').fadeOut(300);
		$('#obj-book').fadeOut(300);
		$('#obj-book-control').fadeOut(300);
		$('#obj-toilet').fadeOut(300);
		$('#obj-toilet-control').fadeOut(300);
		$('#obj-back-button').fadeOut(300);
		$('#button-group').delay(600).fadeIn(400);
		$('#footage-group').delay(600).fadeIn(400);
		$("#div2").addClass("rotateback");
		$("#div2").removeClass("rotate");

	});

	$("#obj-toilet-control .button-small").click(function(){
		$("#obj-toilet-control .progress-bar").css("width", "100%");
		$("#obj-toilet-control .progress-bar").removeClass("progress-bar-striped");
		$("#obj-toilet-control .progress-bar").removeClass("active");
		$("#obj-toilet-control .progress-bar").addClass("progress-bar-success");


		//button
		$("#obj-toilet-control .button-small").removeClass("button-purple");
		$("#obj-toilet-control .button-small").addClass("button-gray");
		$("#obj-toilet-control .button-small").addClass("button-notallowed");
		$("#obj-toilet-control .button-small").html("<i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i> Voted");

		$("#obj-book-control .button-small").removeClass("button-purple");
		$("#obj-book-control .button-small").addClass("button-gray", "button-notallowed");
	});

	$("#obj-book-control .button-small").click(function(){
		$("#obj-book-control .progress-bar").css("width", "50%");


		//button
		$("#obj-book-control .button-small").removeClass("button-purple");
		$("#obj-book-control .button-small").addClass("button-gray");
		$("#obj-book-control .button-small").html("<i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i> Voted");

		$("#obj-toilet-control .button-small").removeClass("button-purple");
		$("#obj-toilet-control .button-small").addClass("button-gray", "button-notallowed");
	});






	// footage
	$("#footage").attr('src','./ghost/Room_1_no.png');
	$("#footage").css("background-image", "url(./ghost/Room_1_no.png)");
	$("#cam1").click(function() {

		getRoomNum();
		setCurrentState(1);
		setTimeout(function(){
			// console.log(room_num);
			if (room_num != 1 || room_num > 12) {
		//		$("#footage").attr('src','./ghost/Room_1_no.png');
				$("#footage").css("background-image", "url(./ghost/Room_1_no.png)");

			}
			else {
			//	$("#footage").attr('src','./ghost/Room_1_yes.png');
				$("#footage").css("background-image", "url(./ghost/Room_1_yes.png)");

			}
			changeRoonName(1);
		}, 100);
	});

	$("#cam2").click(function() {

		getRoomNum();
		setCurrentState(2);
		setTimeout(function(){
			if (room_num != 2 || room_num > 12) {
				// alert("1");
				//$("#footage").attr('src','./ghost/Room_2_no.png');
				$("#footage").css("background-image", "url(./ghost/Room_2_no.png)");

			}
			else {
	//			$("#footage").attr('src','./ghost/Room_2_yes.png');
				$("#footage").css("background-image", "url(./ghost/Room_2_yes.png)");

			}
			changeRoonName(2);

		}, 100);
	});

	$("#cam3").click(function() {
		getRoomNum();
		setCurrentState(3);
		setTimeout(function(){
			if (room_num != 3 || room_num > 12) {
	//			$("#footage").attr('src','./ghost/Room_3_no.png');
				$("#footage").css("background-image", "url(./ghost/Room_3_no.png)");

			}
			else {
	//			$("#footage").attr('src','./ghost/Room_3_yes.png');
				$("#footage").css("background-image", "url(./ghost/Room_3_yes.png)");

			}
			changeRoonName(3);
		}, 100);
	});

	$("#cam4").click(function() {
		getRoomNum();
		setCurrentState(4);
		setTimeout(function(){
			if (room_num != 4 || room_num > 12) {
//				$("#footage").attr('src','./ghost/Room_4_no.png');
				$("#footage").css("background-image", "url(./ghost/Room_4_no.png)");

			}
			else {
//				$("#footage").attr('src','./ghost/Room_4_yes.png');
				$("#footage").css("background-image", "url(./ghost/Room_4_yes.png)");

			}
			changeRoonName(4);

		}, 100);
	});

	$("#cam5").click(function() {
		getRoomNum();
		setCurrentState(5);
		setTimeout(function(){
			if (room_num != 5 || room_num > 12) {
	//			$("#footage").attr('src','./ghost/Room_5_no.png');
				$("#footage").css("background-image", "url(./ghost/Room_5_no.png)");

			}
			else {
	//			$("#footage").attr('src','./ghost/Room_5_yes.png');
				$("#footage").css("background-image", "url(./ghost/Room_5_yes.png)");

			}
			changeRoonName(5);
		}, 100);
	});

	$("#cam6").click(function() {
		getRoomNum();
		setCurrentState(6);
		setTimeout(function(){
			if (room_num != 6 || room_num > 12) {
	//			$("#footage").attr('src','./ghost/Room_6_no.png');
				$("#footage").css("background-image", "url(./ghost/Room_6_no.png)");

			}
			else {
//				$("#footage").attr('src','./ghost/Room_6_yes.png');
				$("#footage").css("background-image", "url(./ghost/Room_6_yes.png)");

			}
			changeRoonName(6);

		}, 100);
	});

	$("#cam7").click(function() {
		getRoomNum();
		setCurrentState(7);
		setTimeout(function(){
			if (room_num != 7 || room_num > 12) {
//				$("#footage").attr('src','./ghost/Room_7_no.png');
				$("#footage").css("background-image", "url(./ghost/Room_7_no.png)");

			}
			else {
//				$("#footage").attr('src','./ghost/Room_7_yes.png');
				$("#footage").css("background-image", "url(./ghost/Room_7_yes.png)");

			}
			changeRoonName(7);
		}, 100);
	});

	$("#cam8").click(function() {
		getRoomNum();
		setCurrentState(8);
		setTimeout(function(){
			if (room_num != 8 || room_num > 12) {
	//			$("#footage").attr('src','./ghost/Room_8_no.png');
				$("#footage").css("background-image", "url(./ghost/Room_8_no.png)");

			}
			else {
	//			$("#footage").attr('src','./ghost/Room_8_yes.png');
				$("#footage").css("background-image", "url(./ghost/Room_8_yes.png)");

			}
			changeRoonName(8);

		}, 100);
	});

	$("#cam9").click(function() {
		getRoomNum();
		setCurrentState(9);
		setTimeout(function(){
			if (room_num != 9 || room_num > 12) {
//				$("#footage").attr('src','./ghost/Room_9_no.png');
				$("#footage").css("background-image", "url(./ghost/Room_9_no.png)");

			}
			else {
	//			$("#footage").attr('src','./ghost/Room_9_yes.png');
				$("#footage").css("background-image", "url(./ghost/Room_9_yes.png)");

			}
			changeRoonName(9);

		}, 100);
	});


	$("#cam10").click(function() {
		getRoomNum();
		setCurrentState(10);
		setTimeout(function(){
			if (room_num != 10 || room_num > 12) {
	//			$("#footage").attr('src','./ghost/Room_10_no.png');
				$("#footage").css("background-image", "url(./ghost/Room_10_no.png)");

			}
			else {
	//			$("#footage").attr('src','./ghost/Room_10_yes.png');
				$("#footage").css("background-image", "url(./ghost/Room_10_yes.png)");

			}
			changeRoonName(10);

		}, 100);
	});

	$("#cam11").click(function() {
		getRoomNum();
		setCurrentState(11);
		setTimeout(function(){
			if (room_num != 11 || room_num > 12) {
//				$("#footage").attr('src','./ghost/Room_11_no.png');
				$("#footage").css("background-image", "url(./ghost/Room_11_no.png)");

			}
			else {
//				$("#footage").attr('src','./ghost/Room_11_yes.png');
				$("#footage").css("background-image", "url(./ghost/Room_11_yes.png)");

			}
			changeRoonName(11);

		}, 100);
	});
	$("#cam12").click(function() {
		getRoomNum();
		setCurrentState(12);
		setTimeout(function(){
			if (room_num != 12 || room_num > 12) {
	//			$("#footage").attr('src','./ghost/Room_12_no.png');
				$("#footage").css("background-image", "url(./ghost/Room_12_no.png)");

			}
			else {
	//			$("#footage").attr('src','./ghost/Room_12_yes.png');
				$("#footage").css("background-image", "url(./ghost/Room_12_yes.png)");

			}
			changeRoonName(12);


		}, 100);
	});

	//button active and non-active states
	$('.alert-button').on('click', function(){
		console.log(current_pressed);
		sendAlert(current_pressed);
	});

});

//button active and non-active states
$('.cam-button').on('click', function(){
    $('.cam-button').removeClass('selected');
    $(this).addClass('selected');
});

function setCurrentState(button_num) {
	current_pressed = button_num;
	// console.log(button_num);
}

function getRoomNum() {
	//$.get('https://lurker.000webhostapp.com/getdata.php', function(result) {
		// console.log(result);
		//room_num = result;
	//});
	room_num = 1;
}

function changeRoonName(room_num) {
	var room_name;
	if (room_num === 1) {
		room_name = "Kitchen";
	}
	else if (room_num === 2) {
		room_name = "Dining Room";
	}
	else if (room_num === 3) {
		room_name = "Nursery";
	}
	else if (room_num === 4) {
		room_name = "Closet";
	}
	else if (room_num === 5) {
		room_name = "Sitting Room A";
	}
	else if (room_num === 6) {
		room_name = "Entrance";
	}
	else if (room_num === 7) {
		room_name = "Sitting Room B";
	}
	else if (room_num === 8) {
		room_name = "Bathroom";
	}
	else if (room_num === 9) {
		room_name = "Under Construction";
	}
	else if (room_num === 10) {
		room_name = "Bedroom";
	}
	else if (room_num === 11) {
		room_name = "Laboratory A";
	}
	else if (room_num === 12) {
		room_name = "Library";
	}
	$('#room-name p').html(room_name);
}

function sendAlert(room_num) {
	if (room_num >= 1 && room_num <= 12) {
		$.post("sendAlert.php", { room_num: room_num });
	}
}

function button_disappear() {
	$('#button-group').fadeOut();
}
