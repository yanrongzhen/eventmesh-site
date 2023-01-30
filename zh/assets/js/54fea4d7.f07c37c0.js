"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[7286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||a;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},s="HTTP Protocol",i={unversionedId:"sdk-java/http",id:"sdk-java/http",title:"HTTP Protocol",description:"EventMesh SDK for Java implements the HTTP producer and consumer of asynchronous messages. Both the producer and consumer require an instance of EventMeshHttpClientConfig class that specifies the configuration of EventMesh HTTP client. The liteEventMeshAddr, userName, and password fields should match the eventmesh.properties file of EventMesh runtime.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/sdk-java/02-http.md",sourceDirName:"sdk-java",slug:"/sdk-java/http",permalink:"/zh/docs/sdk-java/http",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/sdk-java/02-http.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Run our demos",permalink:"/zh/docs/instruction/demo"},next:{title:"TCP Protocol",permalink:"/zh/docs/sdk-java/tcp"}},p={},c=[{value:"HTTP Consumer",id:"http-consumer",level:2},{value:"HTTP Producer",id:"http-producer",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http-protocol"},"HTTP Protocol"),(0,o.kt)("p",null,"EventMesh SDK for Java implements the HTTP producer and consumer of asynchronous messages. Both the producer and consumer require an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshHttpClientConfig")," class that specifies the configuration of EventMesh HTTP client. The ",(0,o.kt)("inlineCode",{parentName:"p"},"liteEventMeshAddr"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"userName"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," fields should match the ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," file of EventMesh runtime."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.http.conf.EventMeshHttpClientConfig;\nimport org.apache.eventmesh.common.utils.IPUtils;\nimport org.apache.eventmesh.common.utils.ThreadUtils;\n\npublic class HTTP {\n  public static void main(String[] args) throws Exception {\n    EventMeshHttpClientConfig eventMeshClientConfig = EventMeshHttpClientConfig.builder()\n      .liteEventMeshAddr("localhost:10105")\n      .producerGroup("TEST_PRODUCER_GROUP")\n      .env("env")\n      .idc("idc")\n      .ip(IPUtils.getLocalAddress())\n      .sys("1234")\n      .pid(String.valueOf(ThreadUtils.getPID()))\n      .userName("eventmesh")\n      .password("password")\n      .build();\n      /* ... */\n  }\n}\n')),(0,o.kt)("h2",{id:"http-consumer"},"HTTP Consumer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshHttpConsumer")," class implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"heartbeat"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"unsubscribe")," methods. The ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," method accepts a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"SubscriptionItem")," that defines the topics to be subscribed and a callback URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.http.consumer.EventMeshHttpConsumer;\nimport org.apache.eventmesh.common.protocol.SubscriptionItem;\nimport org.apache.eventmesh.common.protocol.SubscriptionMode;\nimport org.apache.eventmesh.common.protocol.SubscriptionType;\nimport com.google.common.collect.Lists;\n\npublic class HTTP {\n  final String url = "http://localhost:8080/callback";\n  final List<SubscriptionItem> topicList = Lists.newArrayList(\n    new SubscriptionItem("eventmesh-async-topic", SubscriptionMode.CLUSTERING, SubscriptionType.ASYNC)\n  );\n\n  public static void main(String[] args) throws Exception {\n    /* ... */\n    eventMeshHttpConsumer = new EventMeshHttpConsumer(eventMeshClientConfig);\n    eventMeshHttpConsumer.heartBeat(topicList, url);\n    eventMeshHttpConsumer.subscribe(topicList, url);\n    /* ... */\n    eventMeshHttpConsumer.unsubscribe(topicList, url);\n  }\n}\n')),(0,o.kt)("p",null,"The EventMesh runtime will send a POST request that contains the message in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudevents/spec"},"CloudEvents format")," to the callback URL. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/blob/master/eventmesh-examples/src/main/java/org/apache/eventmesh/http/demo/sub/controller/SubController.java"},(0,o.kt)("inlineCode",{parentName:"a"},"SubController.java")," file")," implements a Spring Boot controller that receives and parses the callback messages."),(0,o.kt)("h2",{id:"http-producer"},"HTTP Producer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshHttpProducer")," class implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," method. The ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," method accepts the message to be published and an optional timeout value. The message should be an instance of either of these classes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.eventmesh.common.EventMeshMessage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"io.cloudevents.CloudEvent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"io.openmessaging.api.Message"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.http.producer.EventMeshHttpProducer;\nimport org.apache.eventmesh.client.tcp.common.EventMeshCommon;\nimport org.apache.eventmesh.common.Constants;\nimport org.apache.eventmesh.common.utils.JsonUtils;\n\nimport io.cloudevents.CloudEvent;\nimport io.cloudevents.core.builder.CloudEventBuilder;\n\npublic class HTTP {\n  public static void main(String[] args) throws Exception {\n    /* ... */\n    EventMeshHttpProducer eventMeshHttpProducer = new EventMeshHttpProducer(eventMeshClientConfig);\n    Map<String, String> content = new HashMap<>();\n    content.put("content", "testAsyncMessage");\n\n    CloudEvent event = CloudEventBuilder.v1()\n      .withId(UUID.randomUUID().toString())\n      .withSubject("eventmesh-async-topic")\n      .withSource(URI.create("/"))\n      .withDataContentType("application/cloudevents+json")\n      .withType(EventMeshCommon.CLOUD_EVENTS_PROTOCOL_NAME)\n      .withData(JsonUtils.serialize(content).getBytes(StandardCharsets.UTF_8))\n      .withExtension(Constants.EVENTMESH_MESSAGE_CONST_TTL, String.valueOf(4 * 1000))\n      .build();\n    eventMeshHttpProducer.publish(event);\n  }\n}\n')))}u.isMDXComponent=!0}}]);