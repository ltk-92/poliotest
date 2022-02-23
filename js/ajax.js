//jQuery(document).ready(function(){
//		var tbody = $('#tbody');
//		$.getJSON('data.json', function(people){
//			$.each(people,function(i,person){
//				var text_no = person.no;
//				var text_name = person.name;
//				var text_mail = person.mail;
//				var tr = $('<tr />');
//				var no = $('<td />').text(text_no);
//				var name = $('<td />').text(text_name);
//				var mail = $('<td />').text(text_mail);
//				tr.append(no);
//				tr.append(name);
//				tr.append(mail);
//				tbody.append(tr);
				
				
				
//			});
		
//		});
//});

/*jQuery(document).ready(function(){
   
    $.getJSON('./js/webinfo.json', function(info){
        $.each(info,function(i,info){
           
            
            
            
        });
    
    
});*/
jQuery(document).ready(function(){
    
    var webinfo = $('.web-info').eq(0);
    $.ajax({
        type : "GET",            // HTTP method type(GET, POST) 형식이다.
        url : "https://ltk-92.github.io/poliotest//js/webinfo.json",      // 컨트롤러에서 대기중인 URL 주소이다.         
        dataType: "json", // Json 형식의 데이터이다.
        success : function(info){ // 비동기통신의 성공일경우 success콜백으로 들어옵니다. 'res'는 응답받은 데이터이다.
            // 응답코드 > 0000
            
         // 데이터 =info
                var info_img = info.img;
                var info_title = info.title;
                var info_text = info.text;
                var img = "<img src='img/"+info_img+"'>";
                var title = $('<p />').text(info_title);
                var text = $('<p />').text(info_text);
                var infoCon = $("<div />");
                infoCon.attr("class","info-con");
                infoCon.append(img);
                infoCon.append(title);
                infoCon.append(text);
                webinfo.append(infoCon);
                console.log("img:"+img);
                console.log("title:"+title);
                console.log("text:"+text);
           
        },
        error : function(){ // 비동기 통신이 실패할경우 error 콜백으로 들어옵니다.
            alert("통신 실패.")
        }    
    });
 
});