
function signup(){
    event.preventDefault();
      let username =document.getElementById("username");
      let email =document.getElementById("email");
      let password =document.getElementById("password");
      let user={
          username:username.value,
          email:email.value,
          password:password.value,
          rool:0
      }
      localStorage.setItem("user",JSON.stringify(user));
      console.log(user);
      console.log("user created");
      window.location.href="../HTML/home.html";
  }
  
  
  
  
  function login(){
      event.preventDefault();
      let email =document.getElementById("email");
      let password =document.getElementById("password");
      let user={
          email:email.value,
          password:password.value
      }
      let user1=JSON.parse(localStorage.getItem("user"));
      if(user.email==user1.email && user.password==user1.password){
          console.log("login successful");
          if(user1.rool==0){
            window.location.href="../HTML/home.html";
          }else{
              window.location.href="admin.html";
          }
        
          }
         
      else{
          console.log("login failed");
      }
  }
  function logout(){
      window.location.href="../HTML/home.html";
  }
  
  
//   Create an interactive tree structure from json using D3



























//   var url='../treeData.json';
//   console.log(url);
//   d3.json(url, function(error, data) {
//     let width=500,height=500,
//     noderadius=10,
//     margin={
//         top:1,botton:1,left:30,right:45
//     };
//     let svg=d3.select("#tree").append("svg")
//     .attr({
//         width:width,
//         height:height
//     });
//     let mainGroup=svg.append("g")
//     .attr({'transform':'translate('+margin.left+','+margin.top+')'});

//     let tree=d3.layout.tree()
// .size([height-(margin.top+margin.botton),
//     width-(margin.left+margin.right)]);
    
//     let nodes=tree.nodes(data);
//     let links=tree.links(nodes);
//     let diagonal=d3.svg.diagonal()
//     .projection(function(d){
//         return [d.x,d.y];
//     });
//     mainGroup.selectAll("path")
//     .data(links)
//     .enter()
//     .append("path",'g')
//     .attr({
//         'd':diagonal,
//         fill:'none',
//         stroke:'green',
//         'stroke-width':2
//     });
//     let circlesGroups=mainGroup.selectAll("g")
//     .data(nodes)
//     .enter()
//     .append("g")
//     .attr({'transform':function(d){
//         return 'translate('+d.x+','+d.y+')';
//     }});
//     circlesGroups.append("circle")
//     .attr({
//         r:noderadius,
//         fill:'green',
//         stroke:'orange',
//         'stroke-width':3
//     });
//     circlesGroups.append("text")
//     .text(function(d){
//         return d.name;
//     })
//     .attr('y',function(d){
//         return d.children || d._children ?
//         -noderadius*2:-noderadius*2;
//     })
//     .attr({
//         dy:'.5em',
//         'text-anchor':'middle',
//         'fill-opacity':1,
//     })
//     .style('font','11px sans-serif');


// });
