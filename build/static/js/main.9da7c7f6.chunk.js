(this["webpackJsonpthe-app"]=this["webpackJsonpthe-app"]||[]).push([[0],{29:function(t,e,s){},30:function(t,e,s){},31:function(t,e,s){},35:function(t,e,s){},36:function(t,e,s){},37:function(t,e,s){},39:function(t,e,s){},40:function(t,e,s){"use strict";s.r(e);var i=s(2),a=s(4),l=s.n(a),A=s(22),o=s.n(A),n=(s(29),s(11)),h=s(12),c=s(16),r=s(15),b=s(13),m=(s(30),s(9)),d=(s(31),s(20));d.a.initializeApp({apiKey:"AIzaSyDAoZMA50Ti4q82TH6tSSwHt6fJb-B1SPM",authDomain:"project1-38a2b.firebaseapp.com",databaseURL:"https://project1-38a2b.firebaseio.com",projectId:"project1-38a2b",storageBucket:"project1-38a2b.appspot.com",messagingSenderId:"375541646537",appId:"1:375541646537:web:f50a8161b5dd48d9f53918"});var g=d.a.database();var u=function(t){var e=Object(a.useState)(0),s=Object(m.a)(e,2),l=s[0],A=s[1];g.ref("times/"+t.difficulty).push(t.time),g.ref("times/"+t.difficulty).orderByValue().limitToFirst(1).once("value",(function(t){t.forEach((function(t){A(t.val())}))}));var o=!1;return l==t.time&&(o=!0),Object(i.jsxs)("div",{id:"background_game_over",children:[Object(i.jsxs)("div",{className:"section",children:[Object(i.jsx)("p",{style:{fontSize:"6vmin"},children:"Nice Work!"}),Object(i.jsxs)("p",{style:{fontSize:"4vmin"},children:["Time: ",t.time,"s"]}),o?Object(i.jsx)("p",{children:"New Record!!"}):Object(i.jsxs)("p",{children:["Best Time: ",l]})]}),Object(i.jsx)("button",{className:"new_game",onClick:function(){document.location.reload()},children:"New Game"})]})};s(35);var p=function(t){return Object(i.jsx)("img",{src:t.image,style:{height:t.height,top:t.yPos,left:t.xPos},id:"ball-image",className:"Ball"})};var y=function(t){return Object(i.jsx)("img",{src:t.image,style:{height:t.height,position:"absolute",left:t.xPos,top:t.yPos}})},f=s.p+"static/media/question_box.339e76a5.png";var j=function(t){return Object(i.jsx)("img",{src:f,style:{position:"absolute",height:50,top:t.yPos,left:t.xPos}})},x=s.p+"static/media/question_box_handling.540a7f0e.png",k=s.p+"static/media/question_box_mini_ball.96f463a1.png",O=s.p+"static/media/spring.f93bd878.png";var v=function(t){return Object(i.jsx)("img",{src:O,style:{left:t.xPos,top:t.yPos,position:"absolute",height:t.height}})},P=s.p+"static/media/laser.11654eda.jpg";var I=function(t){return Object(i.jsx)("img",{src:P,style:{height:t.height,position:"absolute",top:t.yPos,left:t.xPos}})},w=s.p+"static/media/arrow.936af1c0.jpg";var S=function(t){return Object(i.jsx)("img",{src:w,style:{height:t.height,top:t.yPos,left:t.xPos}})},B=s.p+"static/media/sword.4471521b.png";s(36);var D=function(t){return Object(i.jsx)("img",{src:B,id:"sword",style:{height:t.height,position:"absolute",top:t.yPos,left:t.xPos}})};s(37);var T=function(t){var e=Math.random();return Object(i.jsx)("img",{src:t.image,id:"spike",style:{position:"absolute",height:t.height,left:t.xPos,top:t.yPos,animationDelay:{rand:e}+"s"}})},C=s.p+"static/media/spike.775ac3c4.png";var H=function(t){return Object(i.jsx)("img",{src:t.image,style:{height:t.height,position:"absolute",left:t.xPos,top:t.yPos}})},E=s.p+"static/media/flag.aeb5c735.png";var N=function(t){return Object(i.jsx)("img",{src:E,style:{position:"absolute",height:t.height,left:t.xPos,top:t.yPos}})},M=s.p+"static/media/ouch.decaa3cd.png",q=function(t){Object(c.a)(s,t);var e=Object(r.a)(s);function s(t){var a;return Object(n.a)(this,s),(a=e.call(this,t)).handleKeyDown=a.handleKeyDown.bind(Object(b.a)(a)),a.state={screenWidth:1620,screenHeight:977,yPos:150,xPos:0,ballDirection:"",timeoutId:0,gameLoopTimeout:50,ballSpeedY:0,ballSpeedX:0,maxSpeed:30,gravity:t.difficulty/2,xAcceleration:4,ballSize:40,keyPressed:!1,bounced:!1,isGameover:!1,loggedIn:!1,setName:"",attempts:1,difficulty:t.difficulty,background:t.background,ballImage:t.ballImage,ballBarImage:t.ballBarImage,collidedObj:Object(i.jsx)(y,{}),qboxanim:!1,springanim:!1,deadanim:!1,time1:0,time2:0,time:(new Date).getTime(),qBoxImage:x,tileImage:t.tileImage,numObstacles:10,springPos:0,spikeImage:C,died:!1},a}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.plebianObstacles=[[]],this.easyObstacles=[[]],this.mediumObstacles=[[]],this.hardObstacles=[[]],this.expertObstacles=[[]],this.obstacles=[],this.qBoxImages=[x,k],this.generateObstacles(this.state.difficulty);for(var t=this.defaultStart(),e=0;e<t.length;e++)this.obstacles.push(t[e]);this.obstacles.push(this.tile(1600*this.state.numObstacles+900,this.state.screenHeight-50)),this.obstacles.push(this.tile(1600*this.state.numObstacles+1e3,this.state.screenHeight-50)),this.obstacles.push(this.tile(1600*this.state.numObstacles+1100,this.state.screenHeight-50)),this.obstacles.push(Object(i.jsx)(N,{height:700,width:100,xPos:1600*this.state.numObstacles+1100,yPos:this.state.screenHeight-750})),window.addEventListener("keydown",this.handleKeyDown),this.gameLoop()}},{key:"generateObstacles",value:function(t){switch(t){case 1:for(var e=1;e<this.state.numObstacles;e++){var s=e*this.state.screenWidth+800;this.plebianObstacles=[this.ob1(s),this.ob2(s),this.ob7(s)];for(var i=Math.floor(Math.random()*this.plebianObstacles.length),a=0;a<this.plebianObstacles[i].length;a++)this.obstacles.push(this.plebianObstacles[i][a])}break;case 2:for(var l=1;l<this.state.numObstacles;l++){var A=1600*l+800;this.easyObstacles=[this.ob1(A),this.ob2(A)];for(var o=Math.floor(Math.random()*this.easyObstacles.length),n=0;n<this.easyObstacles[o].length;n++)this.obstacles.push(this.easyObstacles[o][n])}break;case 3:for(var h=1;h<this.state.numObstacles;h++){var c=1600*h+800;this.mediumObstacles=[this.ob8(c)];for(var r=Math.floor(Math.random()*this.mediumObstacles.length),b=0;b<this.mediumObstacles[r].length;b++)this.obstacles.push(this.mediumObstacles[r][b])}break;case 4:for(var m=1;m<this.state.numObstacles;m++){var d=1600*m+800;this.hardObstacles=[this.ob4(d),this.ob5(d),this.ob6(d)];for(var g=Math.floor(Math.random()*this.hardObstacles.length),u=0;u<this.hardObstacles[g].length;u++)this.obstacles.push(this.hardObstacles[g][u])}break;case 5:for(var p=1;p<this.state.numObstacles;p++){var y=1600*p+800;this.expertObstacles=[this.ob4(y),this.ob6(y)];for(var f=Math.floor(Math.random()*this.expertObstacles.length),j=0;j<this.expertObstacles[f].length;j++)this.obstacles.push(this.expertObstacles[f][j])}}}},{key:"defaultStart",value:function(){return[Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:800,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:900,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:1e3,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:1100,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:1200,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:1300,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:1400,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:1500,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:1600,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:1700,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:1800,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:1900,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:2e3,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:2100,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:2200,yPos:this.state.screenHeight-50}),Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:100,xPos:2300,yPos:this.state.screenHeight-50})]}},{key:"ob1",value:function(t){var e=this.state.screenHeight;return[this.tile(t,e-50),this.tile(t+100,e-50),Object(i.jsx)(v,{height:314,width:50,xPos:t+200,yPos:e-100}),this.tile(t+1300,e-50)]}},{key:"ob2",value:function(t){var e=this.state.screenHeight;return[Object(i.jsx)(v,{height:314,width:60,xPos:t+200,yPos:e-100}),this.tile(t+300,e-600),this.tile(t+400,e-600),this.tile(t+500,e-600),this.tile(t+600,e-600),this.tile(t+700,e-600),this.tile(t+800,e-600),this.tile(t+900,e-600),this.tile(t+1e3,e-600),Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t+300,yPos:e-800}),Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t+300,yPos:e-500}),Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t+400,yPos:e-500}),Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t+500,yPos:e-500}),Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t+600,yPos:e-500}),Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t+700,yPos:e-500}),Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t+800,yPos:e-500}),Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t+900,yPos:e-500}),Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t+1e3,yPos:e-500}),Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t+1400,yPos:e-570}),Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t+1400,yPos:e-500}),Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t+1400,yPos:e-400}),Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t+1400,yPos:e-300}),Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t+1400,yPos:e-200}),this.tile(t+1200,e-50),this.tile(t+1300,e-50),this.tile(t+1400,e-50),this.tile(t+1500,e-50),this.tile(t+1600,e-50)]}},{key:"ob3",value:function(t){var e=this.state.screenHeight;return[this.tile(t+100,e-50),Object(i.jsx)(v,{height:314,width:60,xPos:t+400,yPos:e-100}),this.spike(t+900,e-600),this.spike(t+900,e-800),this.spike(t+800,e-600),this.spike(t+800,e-800),this.tile(t+1300,e-50),this.tile(t+1400,e-50),this.tile(t+1500,e-50),this.tile(t+1600,e-50)]}},{key:"ob4",value:function(t){var e=this.state.screenHeight;return[this.tile(t,e-50),this.tile(t+400,e-50),this.tile(t+800,e-50),this.tile(t+1200,e-50),this.tile(t+1600,e-50),this.spike(t+400,e-300),this.spike(t+800,e-300),this.spike(t+1200,e-300),this.spike(t+1600,e-300),this.spike(t+400,e-600),this.spike(t+800,e-600),this.spike(t+1200,e-600),this.spike(t+1600,e-600)]}},{key:"ob5",value:function(t){var e=this.state.screenHeight;return[this.tile(t,e-50),this.tile(t+400,e-50),this.tile(t+800,e-50),this.tile(t+1200,e-50),this.tile(t+1600,e-50),this.spike(t+300,e-300),this.spike(t+300,e-200),this.spike(t+500,e-300),this.spike(t+500,e-200),this.spike(t+700,e-300),this.spike(t+700,e-200),this.spike(t+900,e-300),this.spike(t+900,e-200),this.spike(t+1100,e-300),this.spike(t+1100,e-200),this.spike(t+1300,e-300),this.spike(t+1300,e-200),this.spike(t+1500,e-300),this.spike(t+1500,e-200)]}},{key:"ob6",value:function(t){var e=this.state.screenHeight;return[this.spring(t,e-100),this.tile(t+400,e-50),this.tile(t+800,e-50),this.tile(t+1200,e-50),this.tile(t+1600,e-50),this.spike(t+300,e-300),this.spike(t+300,e-200),this.spike(t+500,e-300),this.spike(t+500,e-200),this.spike(t+700,e-300),this.spike(t+700,e-200),this.spike(t+900,e-300),this.spike(t+900,e-200),this.spike(t+1100,e-300),this.spike(t+1100,e-200),this.spike(t+1300,e-300),this.spike(t+1300,e-200),this.spike(t+1500,e-300),this.spike(t+1500,e-200),this.spike(t+300,e-400),this.spike(t+500,e-400),this.spike(t+700,e-400),this.spike(t+900,e-400),this.spike(t+1100,e-400),this.spike(t+1300,e-400),this.spike(t+1500,e-400)]}},{key:"ob7",value:function(t){var e=this.state.screenHeight;return[this.tile(t+300,e-700),this.tile(t+600,e-50),this.tile(t+900,e-700),this.tile(t+1200,e-50),this.tile(t+1500,e-700)]}},{key:"ob8",value:function(t){this.state.screenHeight;return[]}},{key:"ob9",value:function(t){}},{key:"ob10",value:function(t){}},{key:"ob11",value:function(t){}},{key:"ob12",value:function(t){}},{key:"tile",value:function(t,e){return Object(i.jsx)(y,{image:this.state.tileImage,height:100,width:110,xPos:t,yPos:e})}},{key:"spike",value:function(t,e){return Object(i.jsx)(T,{image:this.state.spikeImage,height:100,width:100,xPos:t,yPos:e})}},{key:"spring",value:function(t,e){return Object(i.jsx)(v,{height:314,width:60,xPos:t,yPos:e})}},{key:"movingTile",value:function(t,e,s,a,l){return Object(i.jsx)(H,{image:this.state.tileImage,height:100,width:100,xPosInit:t,yPosInit:e,xPos:t,yPos:e,acc:s,xSpeed:a,ySpeed:l})}},{key:"gameLoop",value:function(){var t=this,e=setTimeout((function(){t.state.qboxanim&&t.setState({time2:2e4-(new Date).getTime()+t.state.time1}),t.state.springanim&&t.state.yPos<300&&t.setState({springanim:!1}),t.state.deadanim&&t.state.xPos>700&&t.setState({deadanim:!1}),t.state.time2<0&&t.setState({qboxanim:!1,xAcceleration:4,ballsize:40,gravity:t.state.difficulty/2}),t.changeDirection(),(t.state.yPos>t.state.screenHeight-30||t.state.died)&&t.resetGame(),t.setState({keyPressed:!1,ballDirection:"zero acceleration"}),t.fall(),t.state.isGameOver||t.gameLoop()}),this.state.gameLoopTimeout);this.state.isGameOver||this.setState({timeoutId:e})}},{key:"resetGame",value:function(){var t=this.state.attempts;this.plebianObstacles=[[]],this.easyObstacles=[[]],this.mediumObstacles=[[]],this.hardObstacles=[[]],this.expertObstacles=[[]],this.obstacles=[],this.generateObstacles(this.state.difficulty);for(var e=this.defaultStart(),s=0;s<e.length;s++)this.obstacles.push(e[s]);this.obstacles.push(this.tile(1600*this.state.numObstacles+800,this.state.screenHeight-50)),this.obstacles.push(Object(i.jsx)(N,{height:700,width:50,xPos:1600*this.state.numObstacles+800,yPos:this.state.screenHeight-750})),this.setState({xPos:0,yPos:150,ballSize:40,gravity:this.props.difficulty/2,ballDirection:"",timeoutId:0,ballSpeedY:0,ballSpeedX:0,keyPressed:!1,bounced:!1,attempts:t+1,qboxanim:!1,springanim:!1,deadanim:!0,xAcceleration:4,time1:0,time2:0,time:(new Date).getTime(),died:!1})}},{key:"fall",value:function(){var t=this.state.gravity,e=this.state.ballSpeedY,s=this.state.yPos;if(this.isThereCollision(this.obstacles)&&!this.state.bounced){var i=this.state.collidedObj.type;if(i===y)e*=-1,e+=this.state.difficulty,this.setState({bounced:!0,ballSpeedY:e,yPos:s+e});else if(i!==j||this.state.qboxanim)i===v?(e=-16-16*t,this.setState({springanim:!0,springPos:100*Math.round(this.state.xPos/100)+800,bounced:!0,ballSpeedY:e,yPos:s+e})):i===D||i===T||i===I||i===S?this.setState({died:!0}):i===N&&this.setState({isGameOver:!0});else{var a=Math.floor(2*Math.random());this.setState({qboxanim:!0}),this.qBoxImages[a]===x?this.setState({qBoxImage:x,xAcceleration:15,time1:(new Date).getTime()}):this.qBoxImages[a]===k&&this.setState({qBoxImage:k,ballSize:20,gravity:2*this.state.gravity/3,time1:(new Date).getTime()})}}else this.isThereCollision(this.obstacles)||!this.state.bounced||this.state.isGameOver||this.setState({bounced:!1});this.state.isGameOver||this.state.died||this.setState({ballSpeedY:e+t,yPos:s+e})}},{key:"isThereCollision",value:function(t){var e=this,s=this.state.xPos+this.state.ballSize/2,i=this.state.yPos+this.state.ballSize;this.state.ballSize,this.state.ballSize;return t.find((function(t){if(void 0===t||void 0===t.props)return!1;var a=t.props.xPos-811,l=t.props.yPos,A=t.props.width,o=t.props.height;return s<a+A&&s>a&&i>=l&&i<=l+o&&(e.setState({collidedObj:t}),!0)}))}},{key:"changeDirection",value:function(){switch(this.state.ballDirection){case"left":this.moveSideways("left");break;case"right":this.moveSideways("right");break;case"zero acceleration":this.moveSideways("zero acceleration")}}},{key:"moveSideways",value:function(t){var e=this.state.xAcceleration,s=this.state.ballSpeedX;"left"===t&&(e*=-1),"zero acceleration"===t&&(e=0),(s<this.state.maxSpeed&&s>-1*this.state.maxSpeed||s>=this.state.maxSpeed&&e<0||s<=-1*this.state.maxSpeed&&e>0)&&(s+=e),this.state.xPos<-800&&"left"===t&&(s=0);var i=this.state.xPos+s;this.state.xPos>-200&&!this.state.isGameOver&&this.setState({ballSpeedX:s,xPos:i})}},{key:"handleKeyDown",value:function(t){switch(t.keyCode){case 37:this.setState({ballDirection:"left"});break;case 39:this.setState({ballDirection:"right"})}this.setState({keyPressed:!0})}},{key:"componentWillUnmount",value:function(){clearTimeout(this.state.timeoutId),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return this.state.isGameOver?Object(i.jsx)(u,{difficulty:this.state.difficulty,time:Math.round((new Date).getTime()-this.state.time)/1e3}):Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{id:"background",style:{left:-1*this.state.xPos/2,backgroundImage:"url("+this.state.background+")"}}),Object(i.jsxs)("div",{id:"fill_screen",style:{left:-1*this.state.xPos},children:[this.obstacles,this.state.springanim?Object(i.jsx)("div",{className:"springanim",style:{top:this.state.screenHeight-100,marginLeft:this.state.springPos,backgroundImage:"url("+O+")"}}):Object(i.jsx)("div",{}),Object(i.jsx)(p,{image:this.state.ballImage,xPos:811+this.state.xPos,yPos:this.state.yPos,height:this.state.ballSize}),Object(i.jsxs)("p",{className:"attempt",style:{left:-1*this.state.xPos,marginTop:60},children:["Attempt: ",this.state.attempts]})]}),Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABmAAAABRCAYAAADFC2lzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKsSURBVHhe7dzRDcIwDAXAwBywCHvAIAwCe8BYMAg1Nf8tipEi7qTopQNEjmK5DQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgZzaZ9Leb1nHetksm0MczE+jrkQn0pW5BHecL+nMnhBpqFmvcMxmcBkyduLBEEwYAAAAAAJaKBsx5Whp3g9OAqRGTL7d5CwAAAAAAq0TzZT9vGdU2k75MvgAAAAAA8K14Y/bOPDgTMDXiYPhnKgAAAAAA3/J+PzgTMDU+42HX9xcAAAAAACx3yGRgOmjAiIxfQg3/loUa6hbUcb6gP3dCqKFmscYpEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC/1toLwrAQKOzqTe8AAAAASUVORK5CYII=",style:{position:"absolute",left:611,width:"440px",top:20}}),Object(i.jsx)("img",{src:this.state.ballBarImage,style:{position:"absolute",left:630+this.state.xPos/(1600*this.state.numObstacles)*400,width:"20px",top:20}}),this.state.qboxanim?Object(i.jsx)("p",{className:"time",children:this.state.time2}):Object(i.jsx)("p",{}),this.state.qboxanim?Object(i.jsx)("div",{className:"qboxanim",style:{backgroundImage:"url("+this.state.qBoxImage+")"}}):Object(i.jsx)("div",{}),this.state.deadanim?Object(i.jsx)("div",{className:"qboxanim",style:{backgroundImage:"url("+M+")"}}):Object(i.jsx)("div",{})]})}}]),s}(l.a.Component);s(14),s(19),s(23);s(39);var z=s.p+"static/media/orange.afc1e772.jpg",_=s.p+"static/media/forest_resized.d8d5e214.jpg",G=s.p+"static/media/sunset.ad033066.jpg",L=s.p+"static/media/desert.ce4d7e0e.jpg",K=s.p+"static/media/space.f8288ce4.jpg",Y=s.p+"static/media/tile1.1a37660b.jpg",F=s.p+"static/media/tile2.3aab1c9b.jpg",R=s.p+"static/media/tile3.92665594.jpg",U=s.p+"static/media/tile4.564d310f.jpg",Q=s.p+"static/media/tile5.23d8a7a6.jpg",V=s.p+"static/media/baseball.5095ea0f.png",X=s.p+"static/media/basketball.5c4a9a9a.png",J=s.p+"static/media/beachball.cc38a9df.png",W=s.p+"static/media/bowlingball.1a465755.png",Z=s.p+"static/media/poolball.eac3432d.png",$=s.p+"static/media/tennisball.90008bec.png",tt=s.p+"static/media/volleyball.d00c4ce9.png",et=s.p+"static/media/baseball_bar.474ce793.png",st=s.p+"static/media/basketball_bar.c5302f51.png",it=s.p+"static/media/beachball_bar.b8710d1d.png",at=s.p+"static/media/bowlingball_bar.eb4ac66e.png",lt=s.p+"static/media/poolball_bar.971d0f4c.png",At=s.p+"static/media/tennisball_bar.4021aa7d.png",ot=s.p+"static/media/volleyball_bar.66aba916.png",nt=function(t){Object(c.a)(s,t);var e=Object(r.a)(s);function s(t){var i;return Object(n.a)(this,s),(i=e.call(this,t)).state={selectionsSet:!1,selectedDifficulty:!1,selectedBall:!1,background:z,ballImage:V,ballBarImage:et,difficulty:0,tileImage:Y,fastestPlebianTime:0,fastestEasyTime:0,fastestMediumTime:0,fastestHardTime:0,fastestExpertTime:0},i}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var t=this;g.ref("times/1").orderByValue().limitToFirst(1).once("value",(function(e){e.forEach((function(e){t.setState({fastestPlebianTime:e.val()})}))})),g.ref("times/2").orderByValue().limitToFirst(1).once("value",(function(e){e.forEach((function(e){t.setState({fastestEasyTime:e.val()})}))})),g.ref("times/3").orderByValue().limitToFirst(1).once("value",(function(e){e.forEach((function(e){t.setState({fastestMediumTime:e.val()})}))})),g.ref("times/4").orderByValue().limitToFirst(1).once("value",(function(e){e.forEach((function(e){t.setState({fastestHardTime:e.val()})}))})),g.ref("times/5").orderByValue().limitToFirst(1).once("value",(function(e){e.forEach((function(e){t.setState({fastestExpertTime:e.val()})}))}))}},{key:"select",value:function(t){switch(t){case"baseball":this.setState({selectedBall:!0,ballImage:V,ballBarImage:et});break;case"basketball":this.setState({selectedBall:!0,ballImage:X,ballBarImage:st});break;case"beachball":this.setState({selectedBall:!0,ballImage:J,ballBarImage:it});break;case"bowlingball":this.setState({selectedBall:!0,ballImage:W,ballBarImage:at});break;case"poolball":this.setState({selectedBall:!0,ballImage:Z,ballBarImage:lt});break;case"tennisball":this.setState({selectedBall:!0,ballImage:$,ballBarImage:At});break;case"volleyball":this.setState({selectedBall:!0,ballImage:tt,ballBarImage:ot});break;case"plebian":this.switchButtonColor("plebian","darkgreen"),this.setState({selectedDifficulty:!0,difficulty:1,background:z,tileImage:Y});break;case"easy":this.switchButtonColor("easy","darkblue"),this.setState({selectedDifficulty:!0,difficulty:2,background:_,tileImage:F});break;case"medium":this.switchButtonColor("medium","gold"),this.setState({selectedDifficulty:!0,difficulty:3,background:G,tileImage:R});break;case"hard":this.switchButtonColor("hard","darkred"),this.setState({selectedDifficulty:!0,difficulty:4,background:L,tileImage:U});break;case"expert":this.switchButtonColor("expert","purple"),this.setState({selectedDifficulty:!0,difficulty:5,background:K,tileImage:Q});break;case"Ok":this.state.selectedDifficulty&&this.state.selectedBall&&this.setState({selectionsSet:!0})}}},{key:"switchButtonColor",value:function(t,e){document.getElementById(t).style.backgroundColor=e,"plebian"!==t?(document.getElementById("plebian").style.backgroundColor="transparent",document.getElementById("plebian").style.color="black"):document.getElementById("plebian").style.color="white","easy"!==t?(document.getElementById("easy").style.backgroundColor="transparent",document.getElementById("easy").style.color="black"):document.getElementById("easy").style.color="white","medium"!==t&&(document.getElementById("medium").style.backgroundColor="transparent"),"hard"!==t?(document.getElementById("hard").style.backgroundColor="transparent",document.getElementById("hard").style.color="black"):document.getElementById("hard").style.color="white","expert"!==t?(document.getElementById("expert").style.backgroundColor="transparent",document.getElementById("expert").style.color="black"):document.getElementById("expert").style.color="white"}},{key:"render",value:function(){var t=this;return this.state.selectionsSet?Object(i.jsx)(q,{tileImage:this.state.tileImage,difficulty:this.state.difficulty,background:this.state.background,ballImage:this.state.ballImage,ballBarImage:this.state.ballBarImage}):Object(i.jsx)("div",{children:Object(i.jsxs)("div",{id:"fill",style:{left:-1*this.state.xPos},children:[Object(i.jsx)("h1",{className:"fade_in",children:"Bounce!"}),Object(i.jsx)("p",{className:"subtitle left text fade_in",children:"(a game that involves bouncing)"}),Object(i.jsx)("p",{className:"instructions right text fade_in",children:"Reach the goal before your ball runs out of energy"}),Object(i.jsxs)("div",{className:"fade_in",children:[Object(i.jsx)("button",{onClick:function(){return t.select("baseball")},className:"bouncy ball",style:{backgroundImage:"url("+V+")",width:50}}),Object(i.jsx)("button",{onClick:function(){return t.select("basketball")},className:"bouncy ball",style:{animationDelay:"0.07s",backgroundImage:"url("+X+")",width:50}}),Object(i.jsx)("button",{onClick:function(){return t.select("beachball")},className:"bouncy ball",style:{animationDelay:"0.14s",backgroundImage:"url("+J+")",width:50}}),Object(i.jsx)("button",{onClick:function(){return t.select("bowlingball")},className:"bouncy ball",style:{animationDelay:"0.21s",backgroundImage:"url("+W+")",width:50}}),Object(i.jsx)("button",{onClick:function(){return t.select("poolball")},className:"bouncy ball",style:{animationDelay:"0.28s",backgroundImage:"url("+Z+")",width:50}}),Object(i.jsx)("button",{onClick:function(){return t.select("tennisball")},className:"bouncy ball",style:{animationDelay:"0.35s",backgroundImage:"url("+$+")",width:50}}),Object(i.jsx)("button",{onClick:function(){return t.select("volleyball")},className:"bouncy ball",style:{animationDelay:"0.42s",backgroundImage:"url("+tt+")",width:50}})]}),Object(i.jsxs)("div",{className:"fade_in",children:[Object(i.jsxs)("button",{id:"plebian",onClick:function(){return t.select("plebian")},className:"button1 bouncy",style:{border:"solid green 1vmin"},children:["Plebian",Object(i.jsx)("br",{}),this.state.fastestPlebianTime,"s"]}),Object(i.jsxs)("button",{id:"easy",onClick:function(){return t.select("easy")},className:"button1 bouncy",style:{animationDelay:"0.07s",border:"solid blue 1vmin"},children:["Easy",Object(i.jsx)("br",{}),this.state.fastestEasyTime,"s"]}),Object(i.jsxs)("button",{id:"medium",onClick:function(){return t.select("medium")},className:"button1 bouncy",style:{animationDelay:"0.14s",border:"solid orange 1vmin"},children:["Medium",Object(i.jsx)("br",{}),this.state.fastestMediumTime,"s"]}),Object(i.jsxs)("button",{id:"hard",onClick:function(){return t.select("hard")},className:"button1 bouncy",style:{animationDelay:"0.21s",border:"solid red 1vmin"},children:["Hard",Object(i.jsx)("br",{}),this.state.fastestHardTime,"s"]}),Object(i.jsxs)("button",{id:"expert",onClick:function(){return t.select("expert")},className:"button1 bouncy",style:{animationDelay:"0.28s",border:"solid black 1vmin"},children:["Expert",Object(i.jsx)("br",{}),this.state.fastestExpertTime,"s"]})]}),Object(i.jsx)("button",{className:"fade_in text ok_button",onClick:function(){return t.select("Ok")},children:"Ok?"})]})})}}]),s}(l.a.Component),ht=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(e){var s=e.getCLS,i=e.getFID,a=e.getFCP,l=e.getLCP,A=e.getTTFB;s(t),i(t),a(t),l(t),A(t)}))};o.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(nt,{})}),document.getElementById("root")),ht()}},[[40,1,2]]]);
//# sourceMappingURL=main.9da7c7f6.chunk.js.map