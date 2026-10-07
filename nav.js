(function(){var p=[["index.html","Start Here"],["learn.html","1. Learn Basics"],["simulator.html","2. Mock Car (Hands-on)"],["eyetest.html","3. Eye Test"],["defects.html","4. Defects &amp; Reports"],["interview.html","5. Interview Q&amp;A"]];
var cur=location.pathname.split("/").pop()||"index.html";
document.body.insertAdjacentHTML("afterbegin","<nav><b>🚗 HMI/IVI Prep</b>"+p.map(function(x){return '<a href="'+x[0]+'"'+(x[0]==cur?' class="on"':'')+'>'+x[1]+'</a>'}).join("")+"</nav>")})();
