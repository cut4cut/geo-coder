(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(35)},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(4),l=a.n(i),r=(a(23),a(25),a(5)),c=a(6),u=a(9),s=a(7),d=a(8),h=a(10),g=a(3),m=function(e){return new Promise(function(t,a){return navigator.geolocation.getCurrentPosition(function(e){return t({latitude:e.coords.latitude,longitude:e.coords.longitude,accuracy:e.coords.accuracy})},function(e){return a(e)},e)})},p=a(11),f=a.n(p);a(27);f.a.accessToken="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";var v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={latitude:55.7558,longitude:37.6,accuracy:0,zoom:12},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.latitude===e.latitude&&this.props.longitude===e.longitude||(console.log("ggg"),this.map.flyTo({center:[this.props.longitude,this.props.latitude],zoom:18}),this.map.addLayer({id:"0",type:"symbol",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[this.props.longitude,this.props.latitude]},properties:{title:"YOU!",icon:"monument"}}]}},layout:{"icon-image":"{icon}-15","text-field":"{title}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-offset":[0,.6],"text-anchor":"top"}}))}},{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.latitude,n=t.longitude,o=(t.accuracy,t.zoom);this.map=new f.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v9",center:[n,a],zoom:o}),this.map.on("load",function(){e.map.addControl(new f.a.NavigationControl),console.log("HERE")})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"Map"})}}]),t}(o.a.Component),y=(a(29),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0}),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).goSearch=function(){console.log("GO!"),m(y).then(function(e){return a.setState({geodata:e})}).catch(function(e){return console.warn("ERROR(${err.code}): ${err.message}")}),console.log(a.state.geodata)},a.state={searchField:"",isToggleOn:!1,inputLongitude:0,inputLatitude:0,geodata:{}},a.handleClick=a.handleClick.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.setState(function(e){return{isToggleOn:!e.isToggleOn}}),console.log(this.state.isToggleOn)}},{key:"handleChangeSearch",value:function(e){var t=e.target.value;console.log(t),this.setState({searchField:t}),console.log(this.state)}},{key:"handleChangeLatitude",value:function(e){var t=e.target.value;console.log(t),this.setState({inputLatitude:t}),console.log(this.state)}},{key:"handleChangeLongitude",value:function(e){var t=e.target.value;console.log(t),this.setState({inputLongitude:t}),console.log(this.state)}},{key:"render",value:function(){var e=this,t=this.state.isToggleOn,a=this.state.geodata.latitude,n=this.state.geodata.longitude;return o.a.createElement("div",null,o.a.createElement("div",{className:"menu"},o.a.createElement("h1",null,"\u0413\u0435\u043e\u043a\u043e\u0434\u0435\u0440",o.a.createElement("span",{role:"img","aria-label":"sheep"},"\ud83d\udc11")),o.a.createElement("div",{className:"outer-div"},o.a.createElement("div",{className:"inner-div"},o.a.createElement(g.e,null,o.a.createElement(g.g,{for:"addressValue",hidden:!0},"\u0410\u0434\u0440\u0435\u0441"),o.a.createElement(g.f,{type:"text",name:"addressValue",id:"addressValue",placeholder:"\u0410\u0434\u0440\u0435\u0441",onChange:function(t){return e.handleChangeSearch(t)}})),t?o.a.createElement(g.e,null,o.a.createElement(g.g,{for:"latitudeValue",hidden:!0},"\u0428\u0438\u0440\u043e\u0442\u0430"),o.a.createElement(g.f,{type:"number",name:"latitudeValue",id:"latitudeValue",placeholder:"\u0428\u0438\u0440\u043e\u0442\u0430",onChange:function(t){return e.handleChangeLatitude(t)}}),o.a.createElement(g.g,{for:"longitudeValue",hidden:!0},"\u0414\u043e\u043b\u0433\u043e\u0442\u0430"),o.a.createElement(g.f,{type:"number",name:"password",id:"longitudeValue",placeholder:"\u0414\u043e\u043b\u0433\u043e\u0442\u0430",onChange:function(t){return e.handleChangeLongitude(t)}})):"",o.a.createElement(g.c,null,o.a.createElement(g.h,null,o.a.createElement(g.b,{sm:{size:0,order:0}},o.a.createElement(g.a,{onClick:this.goSearch},"\u041f\u043e\u0438\u0441\u043a")),o.a.createElement(g.b,{sm:{size:6,order:0}},o.a.createElement(g.d,{type:"checkbox",id:"exampleCustomCheckbox",onClick:this.handleClick,label:"\u0433\u0435\u043e\u0442\u043e\u0447\u043a\u0430"})))),o.a.createElement("div",{className:"output-div"},o.a.createElement("p",null,a),o.a.createElement("p",null,n))))),o.a.createElement(v,{latitude:this.state.geodata.latitude,longitude:this.state.geodata.longitude,accuracy:this.state.geodata.accuracy}))}}]),t}(o.a.Component),E=(a(33),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(b,null)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.bf538280.chunk.js.map