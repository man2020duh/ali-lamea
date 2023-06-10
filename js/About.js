$(".AboutlsImg").html('');
    $.ajax({
		url: "/data/About.json",	
		dataType: 'json',		
		success: function (data) {
      $(".AboutTitle").html(data.Title);
            $(".AboutImgUrl").attr("src","/img/"+data.ImgUrl);
            $(".AboutIcon").attr("src","/img/"+data.Icon);          
            $(".Aboutdescription").html(data.description);   
			var items = '';
           var no=0;
			$.each(data.lsImg, function (i, row) {
                if(no==0){
                  items +='<div class="col-6 text-end">'
                  +'<img class="img-fluid w-75 wow zoomIn" data-wow-delay="0.1s" src="/img/'+row.Img+'" style="margin-top: 25%;"alt="'+data.Title+'">'
                  +'</div>';
				
                }
                else if(no==1){
                  items +='<div class="col-6 text-start">'
                  +'<img class="img-fluid w-75 wow zoomIn" data-wow-delay="0.3s" src="/img/'+row.Img+'"  alt="'+data.Title+'">'
                  +'</div>';
				
                }
                else if(no==2){
                  items +='<div class="col-6 text-end">'
                  +'<img class="img-fluid w-75 wow zoomIn" data-wow-delay="0.5s" src="/img/'+row.Img+'"alt="'+data.Title+'">'
                  +'</div>';
				
                }
                else if(no==3){
                  items +='<div class="col-6 text-start">'
                  +'<img class="img-fluid w-75 wow zoomIn" data-wow-delay="0.7s" src="/img/'+row.Img+'" alt="'+data.Title+'">'
                  +'</div>';
				
                }
                else {
                  items +='<div class="col-6 text-start">'
                  +'<img class="img-fluid w-75 wow zoomIn" data-wow-delay="0.1s" src="/img/'+row.Img+'" alt="'+data.Title+'">'
                  +'</div>';
				
                }
                no++;
			});
			$(".AboutlsImg").html(items);
		}
	});