$(".carousel-inner").html('');
    $.ajax({
		url: "/data/Carousel.json",	
		dataType: 'json',		
		success: function (data) {
			var items = '';
           var no=0;
			$.each(data, function (i, row) {
                if(no==0){
					items +='<div class="carousel-item active">'
                    +'<img class="w-100" src="'+row.ImgUrl+'" alt="'+row.Title+'">'
                    +'<div class="carousel-caption">'
                    +'<div class="container">'
                    +'<div class="row justify-content-center">'
                    +'<div class="col-lg-7 pt-5">'
                    +'<h1 class="display-4 text-white mb-4 animated slideInDown">'+row.Title+'</h1>'
                    +'<h2 class="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">'+row.description+'</h2>'
                    +'<a href="'+row.Url+'" class="btn btn-primary py-3 px-5 animated slideInDown mobileSitehref">اتصل الان</a>'
                    +'</div>'
                    +'</div>'
                    +' </div>'
                    +' </div>'
                    +'</div>';
                  
                }else{
					items +='<div class="carousel-item">'
                    +'<img class="w-100" src="'+row.ImgUrl+'" alt="'+row.Title+'">'
                    +'<div class="carousel-caption">'
                    +'<div class="container">'
                    +'<div class="row justify-content-center">'
                    +'<div class="col-lg-7 pt-5">'
                    +'<h1 class="display-4 text-white mb-4 animated slideInDown">'+row.Title+'</h1>'
                    +'<h2 class="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">'+row.description+'</h2>'
                    +'<a href="'+row.Url+'" class="btn btn-primary py-3 px-5 animated slideInDown mobileSitehref">اتصل الان</a>'
                    +'</div>'
                    +'</div>'
                    +' </div>'
                    +' </div>'
                    +'</div>';
                }
                no++;
			});
			$(".carousel-inner").html(items);
		}
	});