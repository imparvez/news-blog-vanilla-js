var news = {
	newsList: {
		"ARTICLE1": {
			imageUrl: '/assets/news-one.jpg',
			headline: 'headline one',
			paragraph: 'This is a dummy text',
			headelineImageUrl: 'http://lorempixel.com/400/200/',
			authorName: 'Author One',
			minRead: '7',
		},
		"ARTICLE2": {
			imageUrl: '/assets/news-two.jpg',
			headline: 'headline two',
			paragraph: 'This is a dummy text',
			headelineImageUrl: 'http://lorempixel.com/400/200/',
			authorName: 'Author Two',
			minRead: '7',
		},
		"ARTICLE3": {
			imageUrl: '/assets/news-three.jpg',
			headline: 'headline three',
			paragraph: 'This is a dummy text',
			headelineImageUrl: 'http://lorempixel.com/400/200/',
			authorName: 'Author Three',
			minRead: '7',
		}
	},
	displayNewsList: function(list){
		var ul = document.getElementById('lists'),
	   	li = "";
	    for(var index in list){
	    	li += "<li onclick='news.selectArticle(\""+index+"\")' class='list-group-item'>";
	    		li += "<div class='cards-container'>";
				    li += "<div class='cards-display-image'>";
				        li += "<img height='255' src='"+list[index]['headelineImageUrl']+"' alt='display-image'>";
				        li += "<div class='overlay'>";
				            li += "<div class='overlay-icons-holder'>";
				                li += "<i class='fa fa-bookmark-o' aria-hidden='true'> Bookmark</i>";
				                li += "<i class='fa fa-book' aria-hidden='true'> Read Article</i>";
				            li += "</div>";
				        li += "</div>";
				    li += "</div>";
				    li += "<div class='cards-detail'>";
				        li += "<div class='cards-textual-details'>";
				            li += "<h5 class='header header-five'>"+list[index]['headline']+"</h5>";
				            li += "<p>"+list[index]['paragraph']+"</p>";
				        li += "</div>";
				        li += "<div class='cards-extra-info'>";
				            li += "<p class='author-name'>";
				                li += "<i class='fa fa-female' aria-hidden='true'></i> "+list[index]['authorName'];
				            li += "</p>";
				            li += "<p class='post-readable-time'>";
				                li += "<i class='fa fa-clock-o' aria-hidden='true'></i> "+list[index]['minRead']+" min read";
				            li += "</p>";
				        li += "</div>";
				    li += "</div>";
				li += "</div>";
	    	li += "</li>";
	    }
	    ul.innerHTML = li;
	},
	filter: function(){
		var filterTags = document.getElementById('filter');
		var filterTagsValue = filterTags.value;
		var filterList = this.newsList.filter(function(list){
			return list['headline'].indexOf(filterTagsValue) > -1;
		});
		this.displayNewsList(filterList);
	},
	selectArticle: function(param){
		var div = document.getElementById('detail');
		var p = "";
		p += "<div class='detail-poster-container'><img src='"+this.newsList[param]['headelineImageUrl']+"' alt='"+this.newsList[param]['headline']+"'/></div>";
		p += "<h2>"+this.newsList[param]['headline']+"</h2>"
		p += "<span class='authorName'>"+this.newsList[param]['authorName']+"</span>";
		div.innerHTML = p;

	}
}

news.displayNewsList(news.newsList);