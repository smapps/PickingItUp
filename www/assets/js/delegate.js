var WifiBoxModule = require('./assets/js/wifibox.js');
var cmd = require('./assets/js/commands.js');
//create instance with wifi box ip and port
var box = new WifiBoxModule("192.168.1.255", 50000);
$(".header").on("touchstart", function()
{
	box.command(cmd.rgb.hue(180));
});
var serviceURL = "http://192.168.40.2/api/locker/";
//var serviceURL = "http://www.smapps.nl/api/locker/";
var ledURL = "http://192.168.40.2/led/";
var Interval = setInterval();
var c = 0;
//KLEUR 60 = redelijk mooie wit
var inProgress = "false";
var mayOpen = false;
/*
function startLed(command, value, ip){
	//alert(color + 'IP: ' + ip);
	$.ajax({
	    type: 'POST',
	    url: ledURL +'led.php?' + command + '=' + value + '&ip=' + ip + '',
	    data: '',
	    contentType: 'application/json; charset=utf-8',
	    dataType: 'json'
    });
	//console.log("LED: " + command + " = " + value + " IP + " ip);
}
*/

function startLed(command, value, ip){
	//alert(color + 'IP: ' + ip);
	//box.command(cmd.rgb.hue(180));
	//console.log("LED: " + command + " = " + value + " IP + " ip);
}


function showLocker(ip1)
{
	
	if(c == 0)
	{
		inProgress = "true";
		//startLed("hue", "90", ip1);
		//startLed("cmd", "off", ip1);
		startLed("hue","60",ip1);
	}
	else if(c == 1)
	{
		startLed("cmd","brightup",ip1);
	}
	else if(c == 2)
	{
		startLed("cmd","brightup",ip1);
	}
	else if(c == 3)
	{
		startLed("cmd","brightup",ip1);
	}
	else if(c == 4)
	{
		startLed("cmd","brightup",ip1);
	}
	else if(c == 5)
	{
		startLed("cmd","brightup",ip1);
	}
	else if(c == 6)
	{
		startLed("cmd","brightup",ip1);
	}
	else if(c == 7)
	{
		startLed("cmd","brightup",ip1);
	}
	else if(c == 8)
	{
		startLed("cmd","brightup",ip1);
	}
	else if(c == 9)
	{
		startLed("cmd","brightup",ip1);
		clearInterval(Interval);
		inProgress = "false";
		mayOpen = "true";
		$("#btnOpen").css("display","block");
	}	
	console.log("SHOW LOCKER: " + c);
	c+= 1;
}

function hideLocker(ip1)
{
	//if(c == 0)
	//{
		//startLed("hue", "35", ip1);
		//startLed("cmd", "on", ip1);
		//startLed("cmd", "off", ip1);
		//clearInterval(Interval);
		//c = 0;
	//}	
	//c+= 1;
	
	if(c == 0)
	{
		inProgress = "true";
		//startLed("hue", "90", ip1);
		//startLed("cmd", "off", ip1);
		startLed("cmd","brightdown",ip1);
		$("#btnOpen").css("display","none");
		$("#btnShow").css("display","none");
		$("#btnCancel").css("display","none");
		
	}
	else if(c == 1)
	{
		startLed("cmd","brightdown",ip1);
	}
	else if(c == 2)
	{
		startLed("cmd","brightdown",ip1);
	}
	else if(c == 3)
	{
		startLed("cmd","brightdown",ip1);
	}
	else if(c == 4)
	{
		startLed("cmd","brightdown",ip1);
	}
	else if(c == 5)
	{
		startLed("cmd","brightdown",ip1);
	}
	else if(c == 6)
	{
		startLed("cmd","brightdown",ip1);
	}
	else if(c == 7)
	{
		startLed("hue","15",ip1);
	}
	else if(c == 8)
	{
		startLed("cmd","brightup",ip1);
	}
	else if(c == 9)
	{
		startLed("cmd","brightup",ip1);
	}
	else if(c == 10)
	{
		mayOpen = "false";
		clearInterval(Interval);
		inProgress = "false";
		$("#btnOpen").css("display","none");
	}	
	c+= 1;
	console.log("HIDE LOCKER: " + c);
}



function openLocker(ip1)
{
	
	if(c == 0)
	{
		inProgress = "true";
		$("#btnOpen").css("display","none");
		$("#btnShow").css("display","none");
		$("#btnCancel").css("display","none");
		$("#wait").css("display","block");
		startLed("hue", "180", ip1);
	}	
	else if(c == 2)
	{
		startLed("hue", "180", ip1);
	}
	else if(c == 3)
	{
		startLed("hue", "90", ip1);
	}
	else if(c == 4)
	{
		startLed("hue", "90", ip1);
	}
	else if(c == 33)
	{
		startLed("cmd","brightdown",ip1);
	}
	else if(c == 34)
	{
		startLed("cmd","brightdown",ip1);
	}
	else if(c == 35)
	{
		startLed("cmd","brightdown",ip1);
	}
	else if(c == 36)
	{
		startLed("cmd","brightdown",ip1);
	}
	else if(c == 37)
	{
		startLed("cmd","brightdown",ip1);
	}
	else if(c == 38)
	{
		startLed("cmd","brightdown",ip1);
	}
	else if(c == 39)
	{
		startLed("hue","15",ip1);
	}
	else if(c == 40)
	{
		startLed("cmd","brightup",ip1);
	}
	else if(c == 41)
	{
		startLed("cmd","brightup",ip1);
	}
	else if(c == 42)
	{
		clearInterval(Interval);
		$("#wait").css("display","none");
		inProgress = "false";
		mayOpen = "false";
		$(".div_123, .div_45").removeClass('openLocker');
		$(".div_123, .div_45").removeClass('showLocker');
		
		$(".lockerContent").fadeOut(400, function()
		{
			$(".lockerIdentification").fadeIn(400);
		});
	}
	console.log("OPEN LOCKER: " + c);
	c+= 1;
}

var locker;
var CurrentLockers;
function getLockerList() {
	$(".lockerIdentification").html('');
	
	$.getJSON(serviceURL + 'locker.php?f=overview', function(data) {
		lockers = data.items;
		$.each(lockers, function(index, locker) {
			$('.lockerIdentification').append('<div class="lockerLine" id="' + locker.lID+ '"><div class="icon"><img src="assets/images/i_person.png" border="0" /></div> <div class="name">' + locker.lName + '</div> <div class="arrow"><img src="assets/images/i_arrow-right.png" border="0" /></div></div>');
		});
		$("#btnOpen").css("display","none");
		
		$(".lockerLine").on("touchstart", function()
		{
			//alert);
			$("#btnShow").css("display","block");
			$("#btnCancel").css("display","block");
			$("#btnOpen").css("display","none");
			$(".div_123, .div_45").removeClass('openLocker');
			$(".div_123, .div_45").removeClass('showLocker');	
			
			var lID = $(this).attr('id');
			
			
			$.get(serviceURL + 'locker.php?f=getSafes&lID=' + lID, function(data)
			{
				CurrentLockers = data.split("+");
				
				$.get(serviceURL + 'locker.php?f=getIPs&lID=' + lID, function(data)
				{
					var ipAddress = data.split("+");
					ip1 = ipAddress[0];
					//ip2 = ipAddress[1];
				})
				$(".lockerIdentification").fadeOut(400, function()
				{
					$(".lockerContent").fadeIn(400);
					
					var field = '#locker-' + CurrentLockers[0] + ' div.tekst';
					$(field).addClass('activeLockerBlack');
					
					if(CurrentLockers[1] != "")
					{
						var field = '#locker-' + CurrentLockers[1] + ' div.tekst';
						$(field).addClass('activeLockerBlack');
					}
					$("#btnShow").on("touchstart", function()
					{
						$(this).addClass('btnHover');
						
						if(inProgress == "false")
						{
							inProgress = "true";
							c = 0;
							Interval = setInterval(function(){ showLocker(ip1); },100);
						}
						//c = 0;
						//clearInterval(Interval);
						//Interval = setInterval(function(){ showLocker(ip1); },100);
						var field = '#locker-' + CurrentLockers[0];
						$(field).addClass('showLocker');
						
						if(CurrentLockers[1] != "")
						{
							var field = '#locker-' + CurrentLockers[1];
							$(field).addClass('showLocker');
						}					
					});
					$("#btnOpen").on("touchstart", function()
					{
						if(inProgress == "false")
						{
							inProgress = "true";
							c = 0;
							Interval = setInterval(function(){ openLocker(ip1); },100);
						}
						
						/*var tO = setTimeout(function(){ 
							startLed("hue", "60", ip1, ip2); 
							startLed("cmd", "off", ip1, ip2); 
						}, 5000);*/
						$(this).addClass('btnHover');
						var field = '#locker-' + CurrentLockers[0];
						$(field).removeClass('showLocker');
						$(field).addClass('openLocker');
						//alert('led trigger nr ' + CurrentLockers[0]);
						if(CurrentLockers[1] != "")
						{
							var field = '#locker-' + CurrentLockers[1];
							$(field).removeClass('showLocker');
							$(field).addClass('openLocker');
							//alert('led trigger nr ' + CurrentLockers[1]);
						}
						var field = 'div.tekst';
						$(field).removeClass('activeLockerBlack');
						
					});
					$("#btnCancel").on("touchstart", function()
					{
						
						$(this).addClass('btnHover');
						CurrentLockers = '';
						$(".div_123, .div_34").removeClass('openLocker');
						$(".div_123, .div_34").removeClass('showLocker');
						//$(".div_123, .div_34").removeClass('activeLockerBlack');
						if(inProgress == "false")
						{
							inProgress = "true";
							if(mayOpen == "true")
							{
								c = 0;
								Interval = setInterval(function(){ hideLocker(ip1); },100);
							}
							else
							{
								c = 42;
								clearInterval(Interval);
								hideLocker(ip1);
							}
							
						}
						$(".lockerContent").fadeOut(400, function()
						{
							$(".lockerIdentification").fadeIn(400);
						});
						
						var field = 'div.tekst';
						$(field).removeClass('activeLockerBlack');
					});
					$('.btn').on("touchend",function()
					{
						$(this).removeClass('btnHover');
						$(".div_123, .div_45").removeClass('openLocker');
						$(".div_123, .div_45").removeClass('showLocker');	
					});
					$("#btnShow").on('touchend',function()
					{
						$(".div_123, .div_45").removeClass('openLocker');
						$(".div_123, .div_45").removeClass('showLocker');	
						//Hier licht uit
						//c = 0;
						//clearInterval(Interval);
						//Interval = setInterval(function(){ hideLocker(ip1); },50);
					});
					
					
					
				});
			});	
		});
	});
}
getLockerList();