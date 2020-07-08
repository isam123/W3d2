// 1 .Make a circle somewhere in the central area of the window that is 50px wide.
// It does not have to be a perfect circle.You can use a div with a radius setting to make it round.
// Give it an interesting background color.
// 2 Make the circle grow by 10px every 250ms.
// 3 Remove the circle when you click on it.
// 4 Put 3 text inputs on the screen with labels:width, growth amount, grow rate.
// Also add a button labeled ‘Start’.When the button is clicked the circle should appear, 
// this time with the specified width, growth size and interval for growing.
// 5 Add another text input labeled
//  ‘Number circles’When the button is clicked put this number of circles 
// spread around the screen and make all of them behave according to the above specifications. 
//  An example is shown below with 12 circles that are growing to take over the screen unless 
// the user clicks on them to erase them.  Your solution does not need to look exactly like this.
// 6 Submit the html, js, and css files to your website, 
// and the usual comment to the Sakai site including link to your home page
// 7 Use jQuery best practices such as creating 
// elements using an object literal with attributes and values, event delegation, 
// building a collection and adding the entire collection to the DOM rather than every element in the collection.
// 8 Optional Extra (to show how good you are):  Make the circles become gradually less opaque as your mouse moves across them.
//   Make them return to full opacity when the mouse leaves them.


$(document).ready(function () {
    

    // $(".circled").hide(); // hide on start up
    
    /** Part 2 Question
     * let sizer = 0;
    // setInterval(function() {
    //     console.log($(".circled").width())
    // sizer = $(".circled").width() + 10 +"px"
    //     $(".circled").css("width",sizer)
    // },250)
     */

    //  setInterval(function() {
    //     console.log($(".circled").width())
    // sizer = $(".circled").width() + 10 +"px"
    //     $(".circled").css("width",sizer)
    // },250)


     // part- 3
    let w=0,rt=0,gr=0,nmc=0;
    let sizer = 0;
    var Interval;

    $("button").click(function (event) { 
        event.preventDefault();
        
        $("#tform").serializeArray().filter((item) =>{

            
            if(item.name==="Cwidth") w = parseFloat(item.value)
            if(item.name==="Cgamount") gr = parseFloat(item.value)
            if(item.name==="Cgrate") rt = parseFloat(item.value)
            if(item.name==="Cnumcircle") nmc = parseFloat(item.value)
                
        });
       
       let i=0;
       console.log(nmc)
        while(i < nmc) {
           addCircle()
            i++
        
    }
        w=w+"px";
        $(".circled").css("width" ,w)
         setInterval(function() {
            sizer =$(".circled").width()+10 + "px"
        $(".circled").css("width",function() {
           return sizer
        });

    },250)
     
    })


     
function addCircle() {

    $(".circle-place")
    // .css("position","absolute")
    .addClass("cicrclecloned") 
    .attr("id","fdds") 
    .append('<div class="circled cicrclecloned " style = background-color:'+ getRandomColor() +';left:'+ Math.floor((Math.random() * 100) + 1) +'px> </div>');
        
}


const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  $(".circled").css("background-color",getRandomColor());
//   $(".circled-place").mo(function () {
//           // over
//           console.log("Sdfs")
          
//       }, function () {
//         console.log("Sdsadadfs")
//       }
//   );
  
  $(".circled").hover(function () { 
    $(this).css("opacity","0.3")
  },
  function () {
    $(this).css("opacity","1")
  }
  
  );



});

