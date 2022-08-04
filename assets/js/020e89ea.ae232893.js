"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[4991],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9349:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},u="Metrics (OpenTelemetry and Prometheus)",s={unversionedId:"design-document/metrics-export",id:"design-document/metrics-export",title:"Metrics (OpenTelemetry and Prometheus)",description:"Introduction",source:"@site/docs/design-document/05-metrics-export.md",sourceDirName:"design-document",slug:"/design-document/metrics-export",permalink:"/docs/design-document/metrics-export",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/design-document/05-metrics-export.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Schema Registry (OpenSchema)",permalink:"/docs/design-document/schema-registry"},next:{title:"Distributed Tracing",permalink:"/docs/design-document/tracing"}},c={},m=[{value:"Introduction",id:"introduction",level:2},{value:"An overview of OpenTelemetry",id:"an-overview-of-opentelemetry",level:2},{value:"An overview of  Prometheus",id:"an-overview-of--prometheus",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Functional Requirements",id:"functional-requirements",level:3},{value:"Design Details",id:"design-details",level:2},{value:"Appendix",id:"appendix",level:2},{value:"References",id:"references",level:3}],p={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metrics-opentelemetry-and-prometheus"},"Metrics (OpenTelemetry and Prometheus)"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh"},"EventMesh(incubating)")," is a dynamic cloud-native eventing infrastructure."),(0,o.kt)("h2",{id:"an-overview-of-opentelemetry"},"An overview of OpenTelemetry"),(0,o.kt)("p",null,"OpenTelemetry is a collection of tools, APIs, and SDKs. You can use it to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) for analysis in order to understand your software's performance and behavior."),(0,o.kt)("h2",{id:"an-overview-of--prometheus"},"An overview of  Prometheus"),(0,o.kt)("p",null,"Power your metrics and alerting with a leading open-source monitoring solution."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dimensional data"),(0,o.kt)("li",{parentName:"ul"},"Powerful queries"),(0,o.kt)("li",{parentName:"ul"},"Great visualization"),(0,o.kt)("li",{parentName:"ul"},"Efficient storage"),(0,o.kt)("li",{parentName:"ul"},"Simple operation"),(0,o.kt)("li",{parentName:"ul"},"Precise alerting"),(0,o.kt)("li",{parentName:"ul"},"Many client libraries"),(0,o.kt)("li",{parentName:"ul"},"Many integrations")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("h3",{id:"functional-requirements"},"Functional Requirements"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Requirement ID"),(0,o.kt)("th",{parentName:"tr",align:null},"Requirement Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"F-1"),(0,o.kt)("td",{parentName:"tr",align:null},"EventMesh users should be able to observe HTTP metrics from Prometheus"),(0,o.kt)("td",{parentName:"tr",align:null},"Functionality")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"F-2"),(0,o.kt)("td",{parentName:"tr",align:null},"EventMesh users should be able to observe TCP metrics from Prometheus"),(0,o.kt)("td",{parentName:"tr",align:null},"Functionality")))),(0,o.kt)("h2",{id:"design-details"},"Design Details"),(0,o.kt)("p",null,"use the meter instrument provided by OpenTelemetry to observe the metrics exist in EventMesh then export to Prometheus."),(0,o.kt)("p",null,"1\u3001Initialize a meter instrument"),(0,o.kt)("p",null,"2\u3001set the Prometheus server"),(0,o.kt)("p",null,"3\u3001different metrics observer built"),(0,o.kt)("h2",{id:"appendix"},"Appendix"),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md#%E5%88%9B%E5%BB%BA%E5%9F%BA%E7%A1%80Span"},"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md#%E5%88%9B%E5%BB%BA%E5%9F%BA%E7%A1%80Span")))}d.isMDXComponent=!0}}]);