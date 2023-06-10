    $.ajax({
		url: "/data/dataSite.json",	
		dataType: 'json',		
		success: function (data) {
            $(".IconSite").attr("src",'/../img/' +data.logo);
            $(".imgSite").attr("src",'/../img/' +data.imgUrl);
            $(".NameSite").html(data.nameSite);
            $(".descriptionSite").html(data.description);
            $(".mobileSite").html(data.mobile);
            $(".mobileSitehref").attr("href","tel:"+data.mobile);
            $(".facebookSite").attr("href",data.Facebook);
            $(".whatsAppSite").attr("href","https://wa.me/"+data.KeyCountry+data.whatsapp);
            $(".addressSite").html(data.address);
            $(".emailSite").html(data.email);
            document.querySelector("title").innerText = data.nameSite;           
            document.querySelector('meta[name="keywords"]').setAttribute("content", data.keywords);
            document.querySelector('meta[name="description"]').setAttribute("content", data.description);
            document.querySelector('link[rel="icon"]').setAttribute("href",'/../img/' + data.logo);
          }
        }
        );
  $(".navbar-nav").html('');
$(".itemsFooter").html('');
    $.ajax({
		url: "/data/navbar.json",	
		dataType: 'json',		
		success: function (data) {         
			var items = '';
      var itemsFooter = '';
           var no=0;
			$.each(data, function (i, row) {
                if(no==0){
					items +='<a href="'+row.Url+'" class="nav-item nav-link active">'+row.Title+'</a>';	
                }else{
					items +='<a href="'+row.Url+'" class="nav-item nav-link">'+row.Title+'</a>';
                }
                itemsFooter+='<a class="btn btn-link" href="'+row.Url+'">'+row.Title+'</a>';
                no++;
			});
			$(".navbar-nav").html(items);
      $(".itemsFooter").html(itemsFooter);
		}
	});