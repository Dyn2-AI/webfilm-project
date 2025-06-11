$(document).ready(function(){

	var key = 'AIzaSyDALTBYQaaNO-4zhpE-sC81jeGt9ag1Gbs';
	var playlistId = 'PLd3YKHYP2P-yuPCUHYiSPwHGfNQjUyffB';
	var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

	var options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistId
    }
    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function(data) {
        	var id = data.items[0].snippet.resourceId.videoId;
        	mainVid(id);
        	resultsLoop(data);

        });
    }
    
    function mainVid(id) { 
        $('#vid').html(`
					<iframe width="100%" height="600px" 
					src="https://www.youtube.com/embed/${id}" title="YouTube video player" 
					frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				`);
    }

	function resultsLoop(data) {
		$.each(data.items, function(i, item){

		var thumb = item.snippet.thumbnails.medium.url;
		var vid = item.snippet.resourceId.videoId;

		   $('.cs-hidden').append(`
			<li class="item-a" data-key=${vid}>
					<div class="latest-box">
						<!--image-->
						<div class="latest-b-img">
						<img src="${thumb}">
						</div>
						<!--text-->
					</div>
			</li>
            `);


		});
    }

    $('.cs-hidden').on('click', 'li', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
    });
});