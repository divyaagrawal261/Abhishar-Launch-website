document.addEventListener("scroll", function () {
    var pageTop = window.scrollY;
    var pageBottom = pageTop + window.innerHeight;
    var tags = document.querySelectorAll("#fadein-1");
  
    tags.forEach(function (tag) {
      if (tag.getBoundingClientRect().top < pageBottom) {
        tag.classList.add("visible");
      } else {
        tag.classList.remove("visible");
      }
    });
  });

  setTimeout(()=>{
    document.addEventListener("scroll", function () {
        var pageTop = window.scrollY;
        var pageBottom = pageTop + window.innerHeight;
        var tags = document.querySelectorAll("#fadein-3");
      
        tags.forEach(function (tag) {
          if (tag.getBoundingClientRect().top < pageBottom) {
            tag.classList.add("visible");
          } else {
            tag.classList.remove("visible");
          }
        });
      });
      setTimeout(()=>{
        document.addEventListener("scroll", function () {
            var pageTop = window.scrollY;
            var pageBottom = pageTop + window.innerHeight;
            var tags = document.querySelectorAll("#fadein-2");
          
            tags.forEach(function (tag) {
              if (tag.getBoundingClientRect().top < pageBottom) {
                tag.classList.add("visible");
              } else {
                tag.classList.remove("visible");
              }
            });
          });
      },300)
  },100)

  
  