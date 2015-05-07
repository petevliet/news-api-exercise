$(function(){

  var newsGetter = (function(){

    function getNyTimes(){
      $('#nyt').on('click', function(){
        console.log('yo');
      $.ajax({
        url: 'http://api.nytimes.com/svc/topstories/v1/home.json?api-key=758a16fd48266d8f825117be585c2b81:13:67653172',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
          var obj = data.results;
          $.each(obj, function(i, newsItem){
            $('#nytimes').append('<li><a href=' + newsItem.url + '>' + newsItem.title + '</a></li>');
          });
        }
      });
    });
    }

    function getNpr(){
      $('#nprbutton').on('click', function(){
      $.ajax({
        url: 'http://api.npr.org/query?id=1001&output=JSON&apiKey=MDE5MDgwOTM1MDE0MzEwMTUyMzUzOWNmYw001',
        type: 'GET',
        dataType: 'json',
        success: function(data){
          var stories = data.list.story;
          $.each(stories, function(i, newsItem){
            $('#npr').append('<li><a href=' + newsItem.link[0].$text + '>' + newsItem.title.$text + '</a></li>');
          });
          console.log(data.list.story[0].link[0].$text);
        }
      });
    });
    }

    function getReddit(){
      $('#redditbutton').on('click', function(){
      $.ajax({
        url: 'https://www.reddit.com/r/worldnews.json',
        type: 'GET',
        dataType: 'json',
        success: function(data){
          var stories = data.data.children;
          $.each(stories, function(i, newsItem){
            $('#reddit').append('<li><a href=' + newsItem.data.url + '>' + newsItem.data.title + '</a></li>');
          });
          console.log(stories);
        }
      });
    });
    }

  return {
    getReddit: getReddit,
    getNyTimes: getNyTimes,
    getNpr: getNpr
  };

  })();

  newsGetter.getReddit();
  newsGetter.getNpr();
  newsGetter.getNyTimes();
});
