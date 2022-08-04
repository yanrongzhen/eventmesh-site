"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[809],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8169:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},c="Setp 1: Store",s={unversionedId:"installation/store",id:"installation/store",title:"Setp 1: Store",description:"Dependencies",source:"@site/docs/installation/01-store.md",sourceDirName:"installation",slug:"/installation/store",permalink:"/zh/docs/installation/store",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/installation/01-store.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Development Roadmap",permalink:"/zh/docs/roadmap"},next:{title:"Step 1: Store (Docker)",permalink:"/zh/docs/installation/store-with-docker"}},p={},u=[{value:"Dependencies",id:"dependencies",level:2},{value:"Download",id:"download",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Reference",id:"reference",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setp-1-store"},"Setp 1: Store"),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*\n4g+ available disk to deploy eventmesh-store\nIf you choose standalone mode, you could skip this file and go to the next step: Start Eventmesh-Runtime; if not, you could choose RocketMQ as the store layer.\n")),(0,a.kt)("h2",{id:"download"},"Download"),(0,a.kt)("p",null,"Download the Binary code (recommended: 4.9.*) from ",(0,a.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/dowloading/releases/"},"RocketMQ Official"),". Here we take 4.9.2 as an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"unzip rocketmq-all-4.9.2-bin-release.zip\ncd rocketmq-4.9.2/\n")),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"start-name-server"},"Start Name Server"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nohup sh bin/mqnamesrv &\ntail -f ~/logs/rocketmqlogs/namesrv.log\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"start-broker"},"Start Broker"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nohup sh bin/mqbroker -n localhost:9876 &\ntail -f ~/logs/rocketmqlogs/broker.log\n")),(0,a.kt)("p",null,"The deployment of eventmesh-store has finished, please go to the next step: ",(0,a.kt)("a",{parentName:"p",href:"docs/en/instruction/02-runtime.md"},"Start Eventmesh-Runtime")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,"For more details about RocketMQ\uff0cplease refer to ",(0,a.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/docs/quick-start/"},"https://rocketmq.apache.org/docs/quick-start/")))}m.isMDXComponent=!0}}]);