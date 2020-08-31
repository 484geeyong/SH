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
                            
                            document.getElementById("checkup").innerHTML=checkup.value;
                            console.log(checkup.value);
                            
                            var upjong1="";
                            if (checkup.value=="대형마트")
                                upjong1=mart;
                            else if (checkup.value=="편의점")
                                upjong1=pyeon;
                            
    
                            target.innerHTML="";
	                        for (x in upjong1) {
                                var opt = document.createElement("temp");
                                opt.innerHTML = "<input type=radio name=up2 value="+upjong1[x]+" >"+upjong1[x];
                                target.appendChild(opt);
                            }
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

function food(){
    document.getElementById("food").style.display="block";
    document.getElementById("school").style.display="none"; 
    document.getElementById("medical").style.display="none";
    document.getElementById("habit").style.display="none";
    document.getElementById("transportation").style.display="none";
    document.getElementById("life").style.display="none";
    
    $('a').not('a#f').css( 'background-color', 'transparent');
    $('span').not('#foodfont').css( 'color', '#78d5ef');
    $('a#f').css( 'background-color', '#78d5ef');
    $('span#foodfont').css( 'color', 'black');
}

function education(){
    //alert("교육");
    document.getElementById("food").style.display="none";
    document.getElementById("school").style.display="block"; 
    document.getElementById("medical").style.display="none";
    document.getElementById("habit").style.display="none";
    document.getElementById("transportation").style.display="none";
    document.getElementById("life").style.display="none";
    $('a').not('a#e').css( 'background-color', 'transparent');
    $('span').not('#edufont').css( 'color', '#78d5ef');
    $('a#e').css( 'background-color', '#78d5ef');
    $('span#edufont').css( 'color', 'black');
}
function medical(){
    //alert("병원");
    document.getElementById("food").style.display="none";
    document.getElementById("school").style.display="none"; 
    document.getElementById("medical").style.display="block";
    document.getElementById("habit").style.display="none";
    document.getElementById("transportation").style.display="none";
    document.getElementById("life").style.display="none";
    document.getElementById("edufont","foodfont").style.color="#78d5ef";
    document.getElementById("medifont").style.color="#1e90ff";
    $('a').not('a#m').css( 'background-color', 'transparent');
    $('span').not('#medifont').css( 'color', '#78d5ef');
    $('a#m').css( 'background-color', '#78d5ef');
    $('span#medifont').css( 'color', 'black');
}
function habit(){
    document.getElementById("food").style.display="none";
    document.getElementById("school").style.display="none"; 
    document.getElementById("medical").style.display="none";
    document.getElementById("habit").style.display="block";
    document.getElementById("transportation").style.display="none";
    document.getElementById("life").style.display="none";
    
    $('a').not('a#h').css( 'background-color', 'transparent');
    $('span').not('#habitfont').css( 'color', '#78d5ef');
    $('a#h').css( 'background-color', '#78d5ef');
    $('span#habitfont').css( 'color', 'black');
}
function transport(){
    //alert("교통");
    document.getElementById("food").style.display="none";
    document.getElementById("school").style.display="none"; 
    document.getElementById("medical").style.display="none";
    document.getElementById("habit").style.display="none";
    document.getElementById("transportation").style.display="block";
    document.getElementById("life").style.display="none";
    
    $('a').not('a#t').css( 'background-color', 'transparent');
    $('span').not('#transfont').css( 'color', '#78d5ef');
    $('a#t').css( 'background-color', '#78d5ef');
    $('span#transfont').css( 'color', 'black');
}
function life(){
    document.getElementById("food").style.display="none";
    document.getElementById("school").style.display="none"; 
    document.getElementById("medical").style.display="none";
    document.getElementById("habit").style.display="none";
    document.getElementById("transportation").style.display="none";
    document.getElementById("life").style.display="block";
    
    $('a').not('a#l').css( 'background-color', 'transparent');
    $('span').not('#lifefont').css( 'color', '#78d5ef');
    $('a#l').css( 'background-color', '#78d5ef');
    $('span#lifefont').css( 'color', 'black');
}