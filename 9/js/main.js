let navMain=document.querySelector(".main-navigation"),navToggle=document.querySelector(".main-navigation__toggle");navMain.classList.remove("main-navigation--nojs"),navToggle.addEventListener("click",(function(){navMain.classList.contains("main-navigation--closed")?(navMain.classList.remove("main-navigation--closed"),navMain.classList.add("main-navigation--open")):(navMain.classList.add("main-navigation--closed"),navMain.classList.remove("main-navigation--open"))}));