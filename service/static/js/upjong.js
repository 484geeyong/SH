function upjongVal() {
    var mart=['롯데', 'e마트', '홈플러스', '마트1', '마트2', '마트3'];
    var pyeon=['편의점1', '편의점2', '편의점3'];
    
    var target = document.getElementById("up2");
    
    with(document.all)
        {
            for (i=0; i<up.length; i++)
                {
                    if (up[i].checked==true)
                        {
                            checkup.value=up[i].value;
                            
                            //var upjong=document.getElementsByName("checkup");
                            //upjong.item(0).value=checkup.value;
                            
                            var area=document.getElementById("checkup").innerHTML;
                            
                            var vvv = "#" + checkup.value;
                            document.getElementById("checkup").innerHTML = vvv;
                            console.log(checkup.value);
                            
                            //document.getElementById("can_upjong").value=vvv;
                            
                            var upjong1="";
                            if (checkup.value=="대형마트")
                                upjong1=mart;
                            else if (checkup.value=="편의점")
                                upjong1=pyeon;
                            
    
                            //target.innerHTML="";
	                        //for (x in upjong1) {
                            //    var opt = document.createElement("temp");
                            //    opt.innerHTML = "<input type=radio name=up2 value="+upjong1[x]+" >"+upjong1[x];
                            //    target.appendChild(opt);
                            //}
                        }
                }
        }
}

function upjongClick(up) {
    //var upjong=document.getElementsByName("checkup1");
    //upjong.item(0).value=up;
    //console.log(upjong.item(0).value);
    document.getElementById("checkup1").innerHTML=up;
    var target = document.getElementById("upjong2");
    
    var mart=['롯데', 'e마트', '홈플러스'];
    var cafe=['커피', '녹차', '콜라'];
    
    var d=mart;
    
    //target.innerHTML="";
	//for (x in d) {
        //var opt = document.createElement("temp");
		//opt.value = d[x];
		//opt.innerHTML = "<input type=radio name=up2 value="+d[x]+">"+d[x];
		//target.appendChild(opt);
        
        //var temp = document.createElement('input');
	    //document.getElementById("upjong2").innerHTML = "<input type=radio name=up2 value="+d[x]+">"+d[x];
	//}
    
}


function checkfunction()
{
    var mart=['롯데', 'e마트', '홈플러스'];
    var cafe=['커피', '녹차', '콜라']
    with(document.all)
        {
            for (i=0; i<up2.length; i++)
                {
                    if (up2[i].checked==true)
                        {
                            target.options.length = 0;
                            for (x in d) {
	    var opt = document.createElement("radio");
        opt.value = d[x];
        opt.innerHTML = d[x];
        target.appendChild(opt);
        console.log(opt.value);
	}
                            
                        }
                }
        }
}

function check2(form) {
    for (var i=0; i<form.up1.length; i++) {
        if (form.up1[i].checked==true) {
            alert(form.up1[i].value);
        }
    }
}
//요식업
function food(){
    $('div.sel#food').css( 'display', 'block');
    $('div.sel:not(#food)').css('display','none');

    $('a').not('a#f').css( 'background-color', 'transparent');
    $('span').not('#foodfont').css( 'color', '#78d5ef');
    $('a#f').css( 'background-color', '#78d5ef');
    $('span#foodfont').css( 'color', 'black');
}
//도매소매
function domesome(){
    $('div.sel#dome').css( 'display', 'block');
    $('div.sel:not(#dome)').css('display','none');

    $('a').not('a#d').css( 'background-color', 'transparent');
    $('span').not('#domefont').css( 'color', '#78d5ef');
    $('a#d').css( 'background-color', '#78d5ef');
    $('span#domefont').css( 'color', 'black');
}
//소비재
function sobije(){
    $('div.sel#sobii').css( 'display', 'block');
    $('div.sel:not(#sobii)').css('display','none');

    $('a').not('a#s').css( 'background-color', 'transparent');
    $('span').not('#sobifont').css( 'color', '#78d5ef');
    $('a#s').css( 'background-color', '#78d5ef');
    $('span#sobifont').css( 'color', 'black');
}
//여가
function habit(){
    $('div.sel#habit').css( 'display', 'block');
    $('div.sel:not(#habit)').css('display','none');
    
    $('a').not('a#h').css( 'background-color', 'transparent');
    $('span').not('#habitfont').css( 'color', '#78d5ef');
    $('a#h').css( 'background-color', '#78d5ef');
    $('span#habitfont').css( 'color', 'black');
}
//의료서비스
function medical(){
    $('div.sel#medical').css( 'display', 'block');
    $('div.sel:not(#medical)').css('display','none');
    
    $('a').not('a#m').css( 'background-color', 'transparent');
    $('span').not('#medifont').css( 'color', '#78d5ef');
    $('a#m').css( 'background-color', '#78d5ef');
    $('span#medifont').css( 'color', 'black');
}
//교육서비스
function education(){
    $('div.sel#school').css( 'display', 'block');
    $('div.sel:not(#school)').css('display','none');
    
    $('a').not('a#e').css( 'background-color', 'transparent');
    $('span').not('#edufont').css( 'color', '#78d5ef');
    $('a#e').css( 'background-color', '#78d5ef');
    $('span#edufont').css( 'color', 'black');
}
//서비스업
function service(){
    $('div.sel#serviceup').css( 'display', 'block');
    $('div.sel:not(#serviceup)').css('display','none');
    
    $('a').not('a#v').css( 'background-color', 'transparent');
    $('span').not('#servicefont').css( 'color', '#78d5ef');
    $('a#v').css( 'background-color', '#78d5ef');
    $('span#servicefont').css( 'color', 'black');
}
//생활서비스
function life(){
    $('div.sel#life').css( 'display', 'block');
    $('div.sel:not(#life)').css('display','none');
    
    $('a').not('a#l').css( 'background-color', 'transparent');
    $('span').not('#lifefont').css( 'color', '#78d5ef');
    $('a#l').css( 'background-color', '#78d5ef');
    $('span#lifefont').css( 'color', 'black');
}
function transport(){
    // document.getElementById("food").style.display="none";
    // document.getElementById("school").style.display="none"; 
    // document.getElementById("medical").style.display="none";
    // document.getElementById("habit").style.display="none";
    // document.getElementById("transportation").style.display="block";
    // document.getElementById("life").style.display="none";
    $('div.sel#transportation').css( 'display', 'block');
    $('div.sel:not(#transportation)').css('display','none');
    
    $('a').not('a#t').css( 'background-color', 'transparent');
    $('span').not('#transfont').css( 'color', '#78d5ef');
    $('a#t').css( 'background-color', '#78d5ef');
    $('span#transfont').css( 'color', 'black');
}
