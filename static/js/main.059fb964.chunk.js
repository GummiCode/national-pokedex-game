(this["webpackJsonpnational-pokedex-game"]=this["webpackJsonpnational-pokedex-game"]||[]).push([[0],{18:function(n,e,t){n.exports=t(26)},26:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(12),i=t.n(o),u=t(7),c=t(1),l=t(2);function s(){var n=Object(c.a)(["\n  width: 100%;\n  max-width: 375px;\n  font-size: 1.8em;\n  text-align: center;\n  line-height: 1.3em;\n"]);return s=function(){return n},n}var m=l.b.h1(s()),f=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null,"The National Pok\xe9dex Game"))};function d(){var n=Object(c.a)(["\n  margin: 0;\n  padding: 0;\n  font-size: 1.8em;\n  line-height: 1.4em;\n  text-align: center;\n\n  span {\n    color: #FFFF33;\n  }\n"]);return d=function(){return n},n}var p=l.b.h3(d()),b=function(){return a.a.createElement(p,null,"Loading...")};function h(){var n=Object(c.a)(["\n  margin: 0;\n  padding: 0;\n  font-size: 1.4em;\n  line-height: 1.4em;\n  text-align: center;\n\n  span {\n    color: #FFFF33;\n  }\n"]);return h=function(){return n},n}var g=l.b.h3(h()),v=function(n){var e=n.answer;return a.a.createElement(g,null,"Which Pok\xe9mon has National Pokedex Number",a.a.createElement("span",null," ",e," "),"?")};v.defaultProps={answer:0};var x=v;function k(){var n=Object(c.a)(["\n  margin: 0;\n  padding: 0;\n  font-size: 1.8em;\n  line-height: 1.4em;\n  text-align: center;\n\n  span {\n    color: #FFFF33;\n  }\n"]);return k=function(){return n},n}var w=l.b.h3(k()),y=function(){return a.a.createElement(w,null,"You did it!")};function E(){var n=Object(c.a)(["\n  height: 100px;\n  width: 100%;\n  max-width: 320px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return E=function(){return n},n}var j=l.b.div(E()),O=function(n){var e=n.busy,t=n.answer,r=n.win;return a.a.createElement(j,null,e?a.a.createElement(b,null):r?a.a.createElement(y,null):a.a.createElement(x,{answer:t}))};O.defaultProps={answer:0};var P=O;function D(){var n=Object(c.a)(["\n  width: 70px;\n  height: 40px;\n  margin: 0 5px;\n  padding: 0 10px;\n  border-radius: 10px;\n  color: white;\n  font-family: 'Bungee', sans-serif;\n  border: none;\n  background-color: blue;\n"]);return D=function(){return n},n}var F=l.b.button(D()),B=t(3),N=t(9),z=t.n(N),M=t(16),S=function(n){return function(){for(var e=[];e.length<n;){var t=Math.floor(893*Math.random())+1;-1===e.indexOf(t)&&e.push(t)}return e}()},W=function(n){return n[Math.floor(Math.random()*n.length)]},C=function(n){return fetch("https://pokeapi.co/api/v2/pokemon/".concat(n)).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))},J=function(n){return Promise.all(n.map((function(n){return C(n)})))},T=function(){var n=Object(M.a)(z.a.mark((function n(e){var t,r,a,o;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=S(e),r=W(t),n.next=4,J(t);case 4:return a=n.sent,o={answer:r,selected:[],pokemon:a,win:!1},n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Y=function(n,e,t){n(!0),T(t.numPokemon).then((function(n){return e(Object(B.a)({},n))})),n(!1)},G=function(n){var e=n.setBusy,t=n.setPokemonData,r=n.difficulty;return a.a.createElement(F,{onClick:function(){return Y(e,t,r)}},"RESET")};function I(){var n=Object(c.a)(["\n  width: 70px;\n  height: 40px;\n  margin: 0 5px;\n  padding: 0 10px;\n  border-radius: 10px;\n  color: maroon;\n  font-family: 'Bungee', sans-serif;\n  border: none;\n  background-color: white;\n"]);return I=function(){return n},n}var L=l.b.button(I()),R=function(n){var e=n.mode;return a.a.createElement(L,{deactivated:!0},e)},$=[{mode:"easy",numPokemon:6},{mode:"hard",numPokemon:12},{mode:"ultra",numPokemon:24}];function _(){var n=Object(c.a)(["\n  display: flex;\n"]);return _=function(){return n},n}var q=l.b.div(_()),A=function(n){var e=n.setDifficulty,t=n.difficulty;return a.a.createElement(q,null,$.map((function(n){return n.mode===t.mode?a.a.createElement(R,{key:n.mode,mode:n.mode},n.mode):a.a.createElement(F,{key:n.mode,onClick:function(){e({mode:n.mode,numPokemon:n.numPokemon})}},n.mode)})))};function H(){var n=Object(c.a)(["\n  width: 100%;\n  max-width: 360px;\n  height: 6vh;\n  padding: 15px 0;\n  display: flex; \n  flex-flow: row nowrap;\n  justify-content: space-between;\n"]);return H=function(){return n},n}var K=l.b.div(H()),Q=function(n){var e=n.setDifficulty,t=n.setBusy,r=n.setPokemonData,o=n.difficulty;return a.a.createElement(K,null,a.a.createElement(G,{setBusy:t,setPokemonData:r,difficulty:o}),a.a.createElement(A,{setDifficulty:e,setBusy:t,setPokemonData:r,difficulty:o}))};function U(){var n=Object(c.a)(["\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: black;\n  height: 280px;\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n"]);return U=function(){return n},n}var V=l.b.div(U()),X=function(n){var e=n.busy,t=n.answer,r=n.difficulty,o=n.win,i=n.setDifficulty,u=n.setBusy,c=n.setPokemonData;return a.a.createElement(V,null,a.a.createElement(f,null),a.a.createElement(P,{busy:e,answer:t,win:o}),a.a.createElement(Q,{setDifficulty:i,setBusy:u,setPokemonData:c,difficulty:r}))};X.defaultProps={answer:0};var Z=X;function nn(){var n=Object(c.a)(["\n  height: 70%;\n"]);return nn=function(){return n},n}var en=l.b.img(nn()),tn=function(n){var e=n.sprite,t=n.text;return a.a.createElement(en,{src:e,alt:t})};function rn(){var n=Object(c.a)(["\n  height: 30%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 0.9em;\n  background-color: green;\n  border-radius: 0 0 20px 20px;\n  text-align: center;\n"]);return rn=function(){return n},n}var an=l.b.p(rn()),on=function(n){var e=n.text;return a.a.createElement(an,null,e)},un=t(17),cn=function(n,e,t){return n===e.answer?t((function(n){return Object(B.a)(Object(B.a)({},n),{},{win:!0})})):t((function(e){return Object(B.a)(Object(B.a)({},e),{},{selected:[].concat(Object(un.a)(e.selected),[n])})}))};function ln(){var n=Object(c.a)(["\n  all: unset;\n  height: 130px;\n  width: 130px;\n  margin: 10px;\n  cursor: pointer;\n  background-color: lightskyblue;\n  border-radius: 20px;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n\n  @media (min-height: 600px) {\n    margin: 20px 10px;\n  }\n"]);return ln=function(){return n},n}var sn=l.b.button(ln()),mn=function(n){var e=n.className,t=n.sprite,r=n.text,o=n.dexNumber,i=n.pokemonData,u=n.setPokemonData,c=n.disabled;return a.a.createElement(sn,{className:e,onClick:function(){return cn(o,i,u)},disabled:c},a.a.createElement(tn,{sprite:t,text:r}),a.a.createElement(on,{text:r}))};mn.defaultProps={className:"",dexNumber:0};var fn=mn;function dn(){var n=Object(c.a)(["\nbackground-color: #0c0b12;\n\np {\n  color: #ec8af5;\n  background-color: #191926;\n}\n"]);return dn=function(){return n},n}var pn=Object(l.b)(fn)(dn()),bn=function(n){var e=n.disabled;return a.a.createElement(pn,{text:"try again!",sprite:"http://gummicode.github.io/national-pokedex-game/assets/ditto.png",disabled:e})};function hn(){var n=Object(c.a)(["\nbackground-color: #F5BB13;\n\np {\n  color: #FFFFFF;\n  background-color: #7b1100;\n}\n"]);return hn=function(){return n},n}var gn=Object(l.b)(fn)(hn()),vn=function(n){var e=n.disabled;return a.a.createElement(gn,{text:"You Win!",sprite:"http://gummicode.github.io/national-pokedex-game/assets/victini.png",disabled:e})},xn=function(n){var e=n.sprite,t=n.text,r=n.dexNumber,o=n.pokemonData,i=n.setPokemonData;return o.win&&o.answer!==r?a.a.createElement(vn,{disabled:!0}):o.selected.includes(r)?a.a.createElement(bn,{disabled:!0}):a.a.createElement(fn,{key:t,sprite:e,text:t,dexNumber:r,pokemonData:o,setPokemonData:i,disabled:!1})};xn.defaultProps={sprite:"",dexNumber:0};var kn=xn;function wn(){var n=Object(c.a)(["\n  margin: 300px 0 0 0;\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n  align-items: flex-start;\n\n  @media (min-height: 600px) {\n    margin: 300px 0 0 0;\n  }\n\n  @media (min-width: 500px) {\n    width: 500px;\n  }\n"]);return wn=function(){return n},n}function yn(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n"]);return yn=function(){return n},n}var En=l.b.div(yn()),jn=l.b.div(wn()),On=function(n){var e=n.pokemonData,t=n.setPokemonData;return a.a.createElement(En,null,a.a.createElement(jn,null,e.pokemon[0]?e.pokemon.map((function(n){return a.a.createElement(kn,{key:n.species.name,sprite:n.sprites.front_default,text:n.species.name,dexNumber:n.id,pokemonData:e,setPokemonData:t})})):a.a.createElement("h1",null,"loading...")))};function Pn(){var n=Object(c.a)(["\nmin-width: 310px;\n"]);return Pn=function(){return n},n}var Dn=l.b.div(Pn()),Fn=function(){var n=Object(r.useState)(!0),e=Object(u.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)({mode:"easy",numPokemon:6}),c=Object(u.a)(i,2),l=c[0],s=c[1],m=Object(r.useState)({answer:null,selected:[],pokemon:[],win:!1}),f=Object(u.a)(m,2),d=f[0],p=f[1];return Object(r.useEffect)((function(){Y(o,p,l)}),[l]),a.a.createElement(Dn,null,a.a.createElement(Z,{busy:t,answer:d.answer,difficulty:l,win:d.win,setDifficulty:s,setBusy:o,setPokemonData:p}),a.a.createElement(On,{pokemonData:d,setPokemonData:p}))};var Bn=function(){return a.a.createElement(Fn,null)};function Nn(){var n=Object(c.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    color: whitesmoke;\n    background-color: darkslategrey;\n    font-family: 'Bungee', sans-serif;\n  }\n"]);return Nn=function(){return n},n}var zn=Object(l.a)(Nn());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(zn,null),a.a.createElement(Bn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.059fb964.chunk.js.map