var posts=["2024/12/26/hello-world/","2024/12/26/本地部署Hexo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };