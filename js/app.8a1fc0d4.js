(function(e){function t(t){for(var n,l,o=t[0],i=t[1],s=t[2],d=0,u=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&u.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);b&&b(t);while(u.length)u.shift()();return r.push.apply(r,s||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,o=1;o<c.length;o++){var i=c[o];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=c[0]))}return e}var n={},a={app:0},r=[];function l(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=n,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(c,n,function(t){return e[t]}.bind(null,n));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var b=i;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0556":function(e,t,c){e.exports=c.p+"img/vue-app.3e896f31.png"},"0b42":function(e,t,c){e.exports=c.p+"img/payroll.346ece8d.png"},"0bc4":function(e,t,c){"use strict";c("b3c5")},"14ab":function(e,t,c){e.exports=c.p+"img/covid-global-tracker.b6af5685.png"},"15a2":function(e,t,c){"use strict";c("db0b")},"39e6":function(e,t,c){e.exports=c.p+"img/taxoffice.d4af61d8.png"},"45ec":function(e,t,c){},"56af":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");c("e9c4");function a(){var e=Object(n["A"])(!1),t=Object(n["A"])("bg-white"),c=Object(n["A"])("fas fa-lightbulb text-yellow-500"),a=function(){!0===e.value?(e.value=!1,t.value="bg-white",c.value="fas fa-lightbulb text-yellow-500",document.querySelector("body").setAttribute("class","bg-white")):(e.value=!0,t.value="bg-gray-900 text-white",c.value="fas fa-lightbulb",document.querySelector("body").setAttribute("class","bg-gray-900 text-white"))};window.onclick=function(e){var t=document.getElementById("modal-body");e.target==t&&(t.style.display="none")};var r=function(){var e=document.getElementById("modal-body");"block"==e.style.display?e.style.display="none":e.style.display="block"};return Object(n["t"])((function(){if(localStorage.getItem("dark-mode")){var n=JSON.parse(localStorage.getItem("dark-mode"));n?(t.value="bg-gray-900 text-white",c.value="fas fa-lightbulb",document.querySelector("body").setAttribute("class","bg-gray-900 text-white")):(t.value="bg-white",c.value="fas fa-lightbulb text-yellow-500",document.querySelector("body").setAttribute("class","bg-white")),e.value=n}null===localStorage.getItem("dark-mode")&&(t.value="bg-white",c.value="fas fa-lightbulb text-yellow-500",document.querySelector("body").setAttribute("class","bg-white"))})),Object(n["H"])((function(){return e.value}),(function(){localStorage.setItem("dark-mode",JSON.stringify(e.value))}),{deep:!0}),{darkMode:e,bgColor:t,icon:c,setDarkMode:a,toggleModal:r}}var r={class:"list-none nav-links"},l={class:"inline-block"},o=Object(n["j"])("About"),i={class:"inline-block"},s=Object(n["j"])("Projects"),b={class:"inline-block"},d=Object(n["j"])("Contact"),u={id:"modal-body"},p={class:"block my-1"},f=Object(n["j"])("About"),j={class:"block my-1"},h=Object(n["j"])("Projects"),g={class:"block my-1"},v=Object(n["j"])("Contact"),O=Object(n["i"])('<hr class="border-green-500 border-t-2 mx-6 mt-10" data-v-6e4a2d12><footer class="flex flex-col sm:flex-row text-center sm:justify-between m-6 text-2xl" data-v-6e4a2d12><p class="text-xl" data-v-6e4a2d12> Charles Bernaldez </p><div data-v-6e4a2d12><ul class="flex flex-row justify-center sm:justify-between gap-1 sm:gap-2" data-v-6e4a2d12><li data-v-6e4a2d12><a href="https://www.linkedin.com/in/charles-edison-bernaldez/" target="_blank" title="LinkedIn profile" data-v-6e4a2d12><i class="devicon-linkedin-plain colored sm:text-2xl cursor-pointer p-1" data-v-6e4a2d12></i></a></li><li data-v-6e4a2d12><a href="https://github.com/charles3399" target="_blank" title="Github profile" data-v-6e4a2d12><i class="devicon-github-original sm:text-2xl cursor-pointer p-1" data-v-6e4a2d12></i></a></li></ul></div></footer>',2),x={setup:function(e){var t=a(),c=(t.darkMode,t.bgColor),x=t.icon,m=t.setDarkMode,k=t.toggleModal;return function(e,t){var a=Object(n["C"])("router-link"),w=Object(n["C"])("router-view");return Object(n["v"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("header",{class:Object(n["q"])([Object(n["G"])(c),"font-bold px-5 py-2 text-lg w-full flex justify-between"])},[Object(n["h"])("div",null,[Object(n["h"])("i",{class:Object(n["q"])([Object(n["G"])(x),"text-2xl cursor-pointer"]),onClick:t[0]||(t[0]=function(){return Object(n["G"])(m)&&Object(n["G"])(m).apply(void 0,arguments)})},null,2)]),Object(n["h"])("div",null,[Object(n["h"])("i",{class:"fas fa-bars text-2xl hover:text-green-500 cursor-pointer transform transition duration-300",onClick:t[1]||(t[1]=function(){return Object(n["G"])(k)&&Object(n["G"])(k).apply(void 0,arguments)}),id:"nav-icon"}),Object(n["h"])("ul",r,[Object(n["h"])("li",l,[Object(n["k"])(a,{to:"/",class:"mx-4 text-xl tracking-wide"},{default:Object(n["I"])((function(){return[o]})),_:1})]),Object(n["h"])("li",i,[Object(n["k"])(a,{to:"/projects",class:"mx-4 text-xl tracking-wide"},{default:Object(n["I"])((function(){return[s]})),_:1})]),Object(n["h"])("li",b,[Object(n["k"])(a,{to:"/contact-me",class:"mx-4 text-xl tracking-wide"},{default:Object(n["I"])((function(){return[d]})),_:1})])])])],2),Object(n["h"])("div",u,[Object(n["h"])("div",{class:Object(n["q"])(["modal-content font-bold mx-4 p-3 border-2 border-b-4 border-l-4 rounded-lg border-green-500 text-center",Object(n["G"])(c)])},[Object(n["h"])("i",{class:"fas fa-times float-right hover:text-green-500 transform transition duration-200 cursor-pointer",onClick:t[2]||(t[2]=function(){return Object(n["G"])(k)&&Object(n["G"])(k).apply(void 0,arguments)}),id:"close-modal"}),Object(n["h"])("li",p,[Object(n["k"])(a,{onClick:Object(n["G"])(k),to:"/",class:"mx-2 text-4xl tracking-wide"},{default:Object(n["I"])((function(){return[f]})),_:1},8,["onClick"])]),Object(n["h"])("li",j,[Object(n["k"])(a,{onClick:Object(n["G"])(k),to:"/projects",class:"mx-2 text-4xl tracking-wide"},{default:Object(n["I"])((function(){return[h]})),_:1},8,["onClick"])]),Object(n["h"])("li",g,[Object(n["k"])(a,{onClick:Object(n["G"])(k),to:"/contact-me",class:"mx-2 text-4xl tracking-wide"},{default:Object(n["I"])((function(){return[v]})),_:1},8,["onClick"])])],2)]),Object(n["k"])(w,{class:Object(n["q"])(Object(n["G"])(c))},{default:Object(n["I"])((function(e){var t=e.Component,c=e.route;return[Object(n["k"])(n["b"],{name:"slide"},{default:Object(n["I"])((function(){return[(Object(n["v"])(),Object(n["e"])(Object(n["D"])(t),{key:c.path}))]})),_:2},1024)]})),_:1},8,["class"]),O],64)}}},m=(c("6075"),c("6b0d")),k=c.n(m);const w=k()(x,[["__scopeId","data-v-6e4a2d12"]]);var y=w,I=c("6c02"),S=(c("4e82"),c("d81d"),c("afd7")),_=c.n(S),C=c("0556"),G=c.n(C),A=c("0b42"),P=c.n(A),q=c("14ab"),M=c.n(q),L=c("5768"),B=c.n(L),D=c("39e6"),F=c.n(D),z=function(){var e=Object(n["A"])("https://drive.google.com/file/d/1vTHahE--4xKhY3MCLKR2o-iXHtf_gJFG/view?usp=sharing"),t=function(){var e=new Date,t=new Date("1999/03/03"),c=e.getFullYear()-t.getFullYear(),n=e.getMonth()-t.getMonth();return(n<0||0===n&&e.getDate()<t.getDate())&&c--,c},c=Object(n["A"])([{title:"Vue",class:"devicon-vuejs-plain colored"},{title:"Bootstrap",class:"devicon-bootstrap-plain colored"},{title:"TailwindCSS",class:"devicon-tailwindcss-plain colored"},{title:"WordPress",class:"devicon-wordpress-plain colored"},{title:"JQuery",class:"devicon-jquery-plain colored"},{title:"Laravel",class:"devicon-laravel-plain colored"},{title:"MySQL",class:"devicon-mysql-plain colored"},{title:"SASS",class:"devicon-sass-original colored"}]);c=c.value.sort((function(e,t){var c=e.title,n=t.title;return c<n?-1:c>n?1:0}));var a=function(){var e=[_.a,G.a,M.a,P.a,B.a];e.map((function(t,c){var n=new Image;n.src=e[t]}))},r=Object(n["A"])([{image:_.a,title:"Rock, Paper, Scissors!",techStacks:["devicon-html5-plain-wordmark colored","devicon-css3-plain-wordmark colored","devicon-javascript-plain colored"],link:"https://github.com/charles3399/rock-paper-scissors",previewLink:"https://jackenpoy.netlify.app/"},{image:G.a,title:"Todo Web App",techStacks:["devicon-html5-plain-wordmark colored","devicon-css3-plain-wordmark colored","devicon-bootstrap-plain colored","devicon-vuejs-plain colored"],link:"https://github.com/charles3399/Simple-Vue-App",previewLink:"https://todovueapp.netlify.app/"},{image:M.a,title:"COVID-19 Global Tracker",techStacks:["devicon-vuejs-plain colored","devicon-tailwindcss-plain colored"],link:"https://github.com/charles3399/covid-global-tracker",previewLink:"https://tracker-covid-global.netlify.app/"},{image:P.a,title:"Payroll System",techStacks:["devicon-laravel-plain colored","devicon-vuejs-plain colored","devicon-mysql-plain-wordmark colored","devicon-tailwindcss-plain colored"],link:"https://github.com/charles3399/payroll-system2"},{image:B.a,title:"Weather App",techStacks:["devicon-vuejs-plain colored","devicon-tailwindcss-plain colored"],link:"https://github.com/charles3399/weather-app",previewLink:"https://weatherlang.netlify.app/"},{image:F.a,title:"Tax Accountant Office landing page",techStacks:["devicon-html5-plain-wordmark colored","devicon-sass-original colored"],link:"https://github.com/charles3399/tax-accountant-office-landing-page",previewLink:"https://tax-accountant-office.vercel.app/"}]),l=Object(n["A"])([{title:"Address",address:"Bohol, Philippines",class:"fas fa-map-marker-alt"},{title:"Social Platforms",linkedinLink:"https://www.linkedin.com/in/charles-edison-bernaldez/",githubLink:"https://github.com/charles3399",linkedinClass:"devicon-linkedin-plain colored",githubClass:"devicon-github-original",class:"fas fa-share-alt-square"},{title:"Email",email:"bernaldez.corporate@gmail.com",class:"far fa-envelope"},{title:"Phone",phone:"+639369240161",class:"fas fa-phone"}]),o={firstDescription:"I build web apps and web pages to become better at Web Development. I started to study even more about web development after acquiring my Bachelor's degree and I haven't taken a step back since. The more I study, the more I realized that I haven't fully grasped the world of web development, there is so much more to learn and I haven't even covered 50% of it.",secondDescription:"On my spare time, I study on web development and its latest technologies. But most of the time I play video games and workout."};return{resume:e,getAge:t,skills:c,preloadProject:a,projects:r,infos:l,aboutMe:o}},T=z,J=function(e){return Object(n["y"])("data-v-2e0cbedb"),e=e(),Object(n["w"])(),e},H={class:"flex flex-wrap flex-row justify-center items-center py-8 px-5"},W={class:"mx-auto py-16 text-center",id:"name-wrap"},E=J((function(){return Object(n["h"])("h1",{class:"text-2xl xl:text-5xl lg:text-4xl md:text-3xl tracking-wide font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 mx-4 px-4",id:"name-box"},"Hey! I'm Charles Bernaldez",-1)})),V={class:"my-2 xl:text-lg lg:text-lg md:text-base sm:text-sm"},Y=J((function(){return Object(n["h"])("a",{href:"https://www.linkedin.com/in/charles-edison-bernaldez/",target:"_blank",title:"Linked in page"},[Object(n["h"])("i",{class:"devicon-linkedin-plain colored text-4xl mx-1 cursor-pointer p-1 rounded-full"})],-1)})),K=J((function(){return Object(n["h"])("a",{href:"https://github.com/charles3399",target:"_blank",title:"Github page"},[Object(n["h"])("i",{class:"devicon-github-original text-4xl mx-1 cursor-pointer p-1 rounded-full"})],-1)})),N={setup:function(e){var t=T(),c=t.getAge,a="https://avatars.githubusercontent.com/u/56055153?v=4",r=function(){var e=new Image;e.src=a};return Object(n["t"])((function(){r()})),function(e,t){return Object(n["v"])(),Object(n["g"])("div",H,[Object(n["h"])("div",{class:"mx-auto"},[Object(n["h"])("img",{src:a,alt:"Charles Bernaldez",id:"profile-pic",class:"rounded-full w-52 h-52 border-4 border-green-500 object-cover"})]),Object(n["h"])("div",W,[E,Object(n["h"])("p",V,Object(n["F"])(Object(n["G"])(c)())+" year-old aspiring web developer",1),Y,K])])}}};c("c133");const Q=k()(N,[["__scopeId","data-v-2e0cbedb"]]);var R=Q,X=function(e){return Object(n["y"])("data-v-62be4e18"),e=e(),Object(n["w"])(),e},U={class:"p-10 text-center xl:text-left lg:text-left md:text-center"},Z=X((function(){return Object(n["h"])("h1",{class:"text-5xl uppercase italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-800"},"About Me",-1)})),$={class:"w-full xl:w-3/4 lg:w-3/4 md:w-full"},ee={class:"mt-10 text-xl paragraph tracking-normal"},te={class:"my-10 text-xl paragraph tracking-normal"},ce=["href"],ne={setup:function(e){var t=T(),c=t.resume,a=t.aboutMe;return function(e,t){return Object(n["v"])(),Object(n["g"])("div",U,[Z,Object(n["h"])("div",$,[Object(n["h"])("p",ee,Object(n["F"])(Object(n["G"])(a).firstDescription),1),Object(n["h"])("p",te,Object(n["F"])(Object(n["G"])(a).secondDescription),1)]),Object(n["h"])("a",{href:Object(n["G"])(c),download:"",target:"_blank",rel:"noopener noreferrer",class:"py-2 px-4 rounded-lg tracking-wide bg-gradient-to-r from-green-500 to-blue-600 text-white"},"View resume",8,ce)])}}};c("aaca");const ae=k()(ne,[["__scopeId","data-v-62be4e18"]]);var re=ae,le=function(e){return Object(n["y"])("data-v-1a267758"),e=e(),Object(n["w"])(),e},oe={class:"p-10 text-center xl:text-right lg:text-right md:text-center"},ie=le((function(){return Object(n["h"])("h1",{class:"text-5xl uppercase italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pr-0 xl:pr-2 lg:pr-2 md:pr-2"},"What can I do?",-1)})),se={id:"skills",class:"flex flex-wrap justify-end text-center flex-col xl:flex-row lg:flex-row md:flex-row mt-10"},be={class:"text-5xl"},de={class:"text-2xl mt-4"},ue={setup:function(e){var t=T(),c=t.skills;return function(e,t){return Object(n["v"])(),Object(n["g"])("div",oe,[ie,Object(n["h"])("div",se,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(Object(n["G"])(c),(function(e){return Object(n["v"])(),Object(n["g"])("div",{key:e,class:"p-4 m-2"},[Object(n["h"])("span",be,[Object(n["h"])("i",{class:Object(n["q"])(e.class)},null,2)]),Object(n["h"])("p",de,Object(n["F"])(e.title),1)])})),128))])])}}};c("15a2");const pe=k()(ue,[["__scopeId","data-v-1a267758"]]);var fe=pe,je={setup:function(e){return function(e,t){return Object(n["v"])(),Object(n["g"])("div",null,[Object(n["k"])(R),Object(n["k"])(re),Object(n["k"])(fe)])}}};const he=je;var ge=he,ve=(c("9911"),Object(n["h"])("h1",{class:"text-5xl uppercase italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700 tracking-wide p-5 text-center"},"My Projects",-1)),Oe={class:"m-1 p-5 flex flex-wrap flex-row justify-center items-stretch content-start gap-5 text-center"},xe=["src","alt"],me={class:"px-2 py-4 text-left"},ke={class:"text-lg tracking-wide font-bold max-w-xs"},we={class:"py-1 m-1"},ye=Object(n["j"])("Tech Stacks: "),Ie={class:"flex flex-row flex-wrap"},Se=["href"],_e=Object(n["h"])("i",{class:"fab fa-github mr-4 text-lg","aria-hidden":"true"},null,-1),Ce=[_e],Ge=["href","title"],Ae={setup:function(e){var t=T(),c=t.projects,a=t.preloadProject;return Object(n["t"])((function(){a()})),function(e,t){return Object(n["v"])(),Object(n["g"])(n["a"],null,[ve,Object(n["h"])("div",Oe,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(Object(n["G"])(c),(function(e){return Object(n["v"])(),Object(n["g"])("div",{class:"m-2 shadow-2xl",key:e.title,id:"card"},[Object(n["h"])("img",{src:e.image,alt:e.title,class:"object-cover w-full h-48 rounded-t-md"},null,8,xe),Object(n["h"])("div",me,[Object(n["h"])("h4",ke,Object(n["F"])(e.title),1),Object(n["h"])("h5",we,[ye,Object(n["h"])("div",Ie,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(e.techStacks,(function(e){return Object(n["v"])(),Object(n["g"])("i",{key:e,class:Object(n["q"])([e,"m-1 text-3xl"])},null,2)})),128))])])]),Object(n["h"])("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},Ce,8,Se),e.previewLink?(Object(n["v"])(),Object(n["g"])("a",{key:0,class:"hover:underline text-lg",href:e.previewLink,target:"_blank",rel:"noopener noreferrer",title:e.title},"Preview",8,Ge)):Object(n["f"])("",!0)])})),128))])],64)}}};c("f00d");const Pe=Ae;var qe=Pe,Me={setup:function(e){return function(e,t){return Object(n["v"])(),Object(n["g"])("div",null,[Object(n["k"])(qe)])}}};const Le=Me;var Be=Le,De=function(e){return Object(n["y"])("data-v-572ceeac"),e=e(),Object(n["w"])(),e},Fe=De((function(){return Object(n["h"])("h1",{class:"text-5xl uppercase italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700 tracking-wide p-5 text-center"},"Connect with me!",-1)})),ze={class:"p-5 flex flex-wrap items-center justify-center xl:items-stretch lg:items-stretch md:items-stretch text-center gap-5"},Te={class:"text-lg xl:text-3xl lg:text-3xl md:text-2xl"},Je={key:0,href:"https://www.linkedin.com/in/charles-edison-bernaldez/",target:"_blank",title:"LinkedIn profile"},He={key:1,href:"https://github.com/charles3399",target:"_blank",title:"Github profile"},We={class:"text-base pt-1"},Ee={key:0,class:"inline-block"},Ve=["href","title"],Ye=["href","title"],Ke={setup:function(e){var t=T(),c=t.infos;return function(e,t){return Object(n["v"])(),Object(n["g"])(n["a"],null,[Fe,Object(n["h"])("div",ze,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(Object(n["G"])(c),(function(e){return Object(n["v"])(),Object(n["g"])("div",{key:e,class:"m-2 p-3 w-full xl:w-1/3 lg:w-1/3 md:w-1/3 shadow-xl",id:"card"},[Object(n["h"])("h3",Te,[Object(n["h"])("i",{class:Object(n["q"])([e.class,"mb-2"])},null,2),Object(n["j"])(" "+Object(n["F"])(e.title),1)]),e.linkedinLink?(Object(n["v"])(),Object(n["g"])("a",Je,[Object(n["h"])("i",{class:Object(n["q"])([e.linkedinClass,"text-3xl mx-2 mt-1"])},null,2)])):Object(n["f"])("",!0),e.githubLink?(Object(n["v"])(),Object(n["g"])("a",He,[Object(n["h"])("i",{class:Object(n["q"])([e.githubClass,"text-3xl mx-2 mt-1"])},null,2)])):Object(n["f"])("",!0),Object(n["h"])("div",We,[e.address?(Object(n["v"])(),Object(n["g"])("p",Ee,Object(n["F"])(e.address),1)):Object(n["f"])("",!0),e.email?(Object(n["v"])(),Object(n["g"])("a",{key:1,id:"email",href:"mailto:"+e.email,title:e.email,class:"transform transition duration-400 hover:text-green-500"}," Click here! ",8,Ve)):Object(n["f"])("",!0),e.phone?(Object(n["v"])(),Object(n["g"])("a",{key:2,href:"tel:"+e.phone,title:e.phone,class:"transform transition duration-400 hover:text-green-500"},Object(n["F"])(e.phone),9,Ye)):Object(n["f"])("",!0)])])})),128))])],64)}}};c("0bc4");const Ne=k()(Ke,[["__scopeId","data-v-572ceeac"]]);var Qe=Ne,Re={setup:function(e){return function(e,t){return Object(n["v"])(),Object(n["g"])("div",null,[Object(n["k"])(Qe)])}}};const Xe=Re;var Ue=Xe,Ze={class:"text-center"},$e=Object(n["h"])("h1",{class:"text-5xl uppercase font-extrabold tracking-wide py-3 text-green-400"},"404",-1),et=Object(n["h"])("h3",{class:"text-2xl uppercase font-extrabold tracking-wide mt-2 text-green-400 leading-snug"},"Oopsies! it seems that you've entered a non-existing page or link.",-1),tt=[$e,et];function ct(e,t){return Object(n["v"])(),Object(n["g"])("div",Ze,tt)}const nt={},at=k()(nt,[["render",ct]]);var rt=at,lt=[{path:"/",name:"Home",component:ge},{path:"/projects",name:"Projects",component:Be},{path:"/contact-me",name:"Contact",component:Ue},{path:"/:catchAll(.*)",name:"404",component:rt}],ot=Object(I["a"])({history:Object(I["b"])("/portfolio/"),routes:lt}),it=ot;c("ba8c"),c("7d05");Object(n["d"])(y).use(it).mount("#app")},5768:function(e,t,c){e.exports=c.p+"img/weather-app.f17b8c84.png"},6075:function(e,t,c){"use strict";c("8305")},"7d05":function(e,t,c){},8305:function(e,t,c){},"8d81":function(e,t,c){},aaca:function(e,t,c){"use strict";c("56af")},afd7:function(e,t,c){e.exports=c.p+"img/jackenpoy.cc93abc7.png"},b3c5:function(e,t,c){},ba8c:function(e,t,c){},c133:function(e,t,c){"use strict";c("45ec")},db0b:function(e,t,c){},f00d:function(e,t,c){"use strict";c("8d81")}});