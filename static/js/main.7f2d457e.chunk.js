(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(3),c=a.n(i),r=(a(22),a(24),a(4)),l=a(5),u=a(7),s=a(6),d=a(8),m=a(10),p=function(e){return new Promise(function(t,a){return navigator.geolocation.getCurrentPosition(function(e){return t({latitude:e.coords.latitude,longitude:e.coords.longitude,accuracy:e.coords.accuracy})},function(e){return a(e)},e)})},g=a(9),h=a.n(g);a(26);h.a.accessToken="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";var f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={latitude:55.7558,longitude:37.6,accuracy:0,zoom:12},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.latitude===e.latitude&&this.props.longitude===e.longitude||(console.log("ggg"),this.map.flyTo({center:[this.props.longitude,this.props.latitude],zoom:18}),this.map.addLayer({id:"0",type:"symbol",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[this.props.longitude,this.props.latitude]},properties:{title:"YOU!",icon:"monument"}}]}},layout:{"icon-image":"{icon}-15","text-field":"{title}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-offset":[0,.6],"text-anchor":"top"}}))}},{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.latitude,n=t.longitude,o=(t.accuracy,t.zoom);this.map=new h.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v9",center:[n,a],zoom:o}),this.map.on("load",function(){e.map.addControl(new h.a.NavigationControl),console.log("HERE")})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"Map"})}}]),t}(o.a.Component),y=(a(28),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0}),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).goSearch=function(){console.log("GO!"),p(y).then(function(e){return a.setState({geodata:e})}).catch(function(e){return console.warn("ERROR(${err.code}): ${err.message}")}),console.log(a.state)},a.state={geodata:{}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"menu"},o.a.createElement("h1",null,"\u0413\u0435\u043e\u043a\u043e\u0434\u0435\u0440",o.a.createElement("span",{role:"img","aria-label":"sheep"},"\ud83d\udc11")),o.a.createElement("div",{className:"outer-div"},o.a.createElement("div",{className:"inner-div"},o.a.createElement(m.c,null,o.a.createElement(m.b,null),o.a.createElement(m.d,{addonType:"append"},o.a.createElement(m.a,{onClick:this.goSearch},"\u041f\u043e\u0438\u0441\u043a"))),o.a.createElement("div",{className:"output-div"},o.a.createElement("p",null,this.state.geodata.latitude),o.a.createElement("p",null,this.state.geodata.longitude),o.a.createElement("p",null,this.state.geodata.accuracy))))),o.a.createElement(f,{latitude:this.state.geodata.latitude,longitude:this.state.geodata.longitude,accuracy:this.state.geodata.accuracy}))}}]),t}(o.a.Component),b=(a(32),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(v,null)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.7f2d457e.chunk.js.map