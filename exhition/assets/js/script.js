$(document).ready(function(){
    $("button").click(function(){
        alert($(document).scrollTop() + " px");
    });


});


function myFunction() {
 var pos =$(document).scrollTop();
 if(pos>1000){
var node = document.createElement("div");
var para = document.getElementsById("test");
node.appendChild(para);

var element = document.getElementByClassName("one");
element.appendChild(node);
}
};

// $(document).ready(function(){
  
// var node = document.createElement("div");
// var para = document.getElementsById("test");
// node.appendChild(para);

// var element = document.getElementByClassName("one");
// element.appendChild(node);
// };

// });

