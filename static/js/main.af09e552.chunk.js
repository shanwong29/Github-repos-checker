(this["webpackJsonprepos-checker"]=this["webpackJsonprepos-checker"]||[]).push([[0],{11:function(e,t,n){e.exports={reposInfo:"ReposInfo_reposInfo__2ErSp",tap_wrapper:"ReposInfo_tap_wrapper__yu0GN",tap:"ReposInfo_tap__29w1m",active_tab:"ReposInfo_active_tab__rpF6e",data_wrapper:"ReposInfo_data_wrapper__3YbU_"}},14:function(e,t,n){e.exports={comments_wrapper:"Comments_comments_wrapper__1lWV1",comment_text:"Comments_comment_text__22xQG",each_comment_wrapper:"Comments_each_comment_wrapper__2n65L",search_input:"Comments_search_input__1I28E"}},21:function(e,t,n){e.exports={logoutBtn:"Login_logoutBtn__2Q-at",requestStatus:"Login_requestStatus__ROc7N"}},22:function(e,t,n){e.exports={issue:"Issue_issue__3Kult",issue_text:"Issue_issue_text__3WKoU"}},23:function(e,t,n){e.exports={App:"App_App__hoMWS",app_title:"App_app_title__an3t-"}},32:function(e,t,n){e.exports=n(44)},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(27),s=n.n(o),l=(n(37),n(10)),c=n(7),u=n(9),m=n(13),i=n(12),p=n(17),d=n(21),_=n.n(d),g=n(15),v=n(20),E=n(14),h=n.n(E),f=function(e){var t=e.timeStamp,n=new Date(t),a=n.getDate(),o={0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"}[n.getMonth()],s=n.getFullYear(),l=String(n.getHours()).padStart(2,"0"),c=String(n.getMinutes()).padStart(2,"0");return r.a.createElement("span",null,a," ",o," ",s," ","".concat(l,":").concat(c))},b=(n(38),function(e){var t=e.url,n=e.username;return r.a.createElement("img",{src:t,alt:n,className:"profilePic"})}),y=function(e){var t=e.author,n=e.avatarUrl,a=e.timeStamp;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{username:t,url:n}),r.a.createElement("span",null,t," \u2022 "),r.a.createElement(f,{timeStamp:a}))},w=function(e){var t=e.comments,n=Object(a.useState)(""),o=Object(l.a)(n,2),s=o[0],c=o[1],u=t.filter((function(e){return e.node.bodyText.includes(s)}));return u.sort((function(e,t){var n=new Date(e.node.createdAt),a=new Date(t.node.createdAt);return n<a?-1:n>a?1:0})),u=u.map((function(e,t){var n=e.node.author.login,a=e.node.author.avatarUrl;return r.a.createElement("div",{className:h.a.each_comment_wrapper,key:t},r.a.createElement(y,{author:n,avatarUrl:a,timeStamp:e.node.createdAt}),r.a.createElement("p",{className:h.a.comment_text},e.node.bodyText))})),t.length?r.a.createElement("div",{className:h.a.comments_wrapper},r.a.createElement("h4",null,"Comments:"),r.a.createElement("label",{htmlFor:"commentQuery"},"Filter comments by keyword(s): "),r.a.createElement("input",{className:h.a.search_input,name:"commentQuery",type:"text",placeholder:"type keyword(s) here...",value:s,onChange:function(e){return c(e.target.value)}}),u):r.a.createElement("p",{className:h.a.each_comment_wrapper},"No comments for this issue")},S=n(22),I=n.n(S),k=function(e){var t=e.issue,n=Object(a.useState)(""),o=Object(l.a)(n,2),s=o[0],c=o[1],u=t.edges.map((function(e,t){var n=e.node.comments.edges,o=e.node.author.login,l=e.node.author.avatarUrl,u=e.node.bodyText;return r.a.createElement(a.Fragment,{key:t},r.a.createElement("div",{className:I.a.issue,onClick:function(){c(t===s?null:t)}},r.a.createElement(y,{author:o,avatarUrl:l,timeStamp:e.node.createdAt}),r.a.createElement("h4",null,e.node.title),s===t&&r.a.createElement("p",{className:I.a.issue_text},u)),s===t&&r.a.createElement(w,{comments:n,issueAuthor:o}))}));return r.a.createElement(r.a.Fragment,null,u)},N=(n(39),function(e){var t=e.onSubmitFn,n=e.name,a=e.label,o=e.value,s=e.type,l=e.placeholder,c=e.btnDisplay,u=e.variant;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"inputForm__label",htmlFor:n},a),r.a.createElement("form",{onSubmit:t,className:"inputForm inputForm__".concat(u)},r.a.createElement("input",{name:n,type:s,value:o,placeholder:" ",className:"inputForm__input"}),r.a.createElement("span",{className:"inputForm__placeholder"},l),r.a.createElement("button",{className:"inputForm__btn"},c)))}),A=n(11),x=n.n(A);function F(){var e=Object(p.a)(["\n  query($owner: String!, $name: String!) {\n    repository(owner: $owner, name: $name) {\n      name\n      owner {\n        login\n      }\n      pullRequests(last: 5, orderBy: { field: CREATED_AT, direction: ASC }) {\n        edges {\n          node {\n            author {\n              login\n              avatarUrl\n            }\n            title\n            bodyText\n            createdAt\n            comments(last: 5) {\n              edges {\n                node {\n                  author {\n                    login\n                    avatarUrl\n                  }\n                  createdAt\n                  bodyText\n                }\n              }\n            }\n          }\n        }\n      }\n      openIssues: issues(\n        states: OPEN\n        last: 5\n        orderBy: { field: CREATED_AT, direction: ASC }\n      ) {\n        edges {\n          node {\n            ...issueInfo\n          }\n        }\n      }\n      closedIssues: issues(\n        states: CLOSED\n        last: 5\n        orderBy: { field: CREATED_AT, direction: ASC }\n      ) {\n        edges {\n          node {\n            ...issueInfo\n          }\n        }\n      }\n    }\n  }\n\n  fragment issueInfo on Issue {\n    title\n    createdAt\n    bodyText\n    author {\n      login\n      avatarUrl\n    }\n    comments(last: 5) {\n      edges {\n        node {\n          author {\n            login\n            avatarUrl\n          }\n          createdAt\n          bodyText\n        }\n      }\n    }\n  }\n"]);return F=function(){return e},e}var O=Object(v.a)(F()),C=function(e){var t,n,o=e.reposQuery,s=e.setReposQuery,c=Object(a.useState)("pullRequests"),u=Object(l.a)(c,2),m=u[0],i=u[1];o&&(t=(o=o.split("/"))[0]&&o[0].trim(),n=o[1]&&o[1].trim());var p,d,_,v=Object(g.a)(O,{skip:!t,variables:{owner:t,name:n}},{errorPolicy:"all"}),E=v.loading,h=v.error,f=v.data,b="";return E&&(b="loading..."),h&&(b=h.graphQLErrors[0].message),f&&(d=f.repository.openIssues,_=f.repository.closedIssues,p=f.repository.pullRequests),r.a.createElement("div",{className:x.a.reposInfo},r.a.createElement(N,{onSubmitFn:function(e){return function(e){e.preventDefault();var t=e.target.queryInput.value;s(t)}(e)},name:"queryInput",label:"Search Repos: ",type:"text",placeholder:"e.g. google / jax",btnDisplay:"Search"}),r.a.createElement("p",null,b),f&&!b&&r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,f.repository.name),r.a.createElement("div",{className:x.a.tap_wrapper},r.a.createElement("h4",{className:"".concat(x.a.tap," ").concat("pullRequests"===m&&x.a.active_tab),onClick:function(){i("pullRequests")}},"Pull Requests"),r.a.createElement("h4",{className:"".concat(x.a.tap," ").concat("openIssues"===m&&x.a.active_tab),onClick:function(){i("openIssues")}},"Open Issues"),r.a.createElement("h4",{className:"".concat(x.a.tap," ").concat("closedIssues"===m&&x.a.active_tab),onClick:function(){i("closedIssues")}},"Closed Issues")),r.a.createElement("div",{className:x.a.data_wrapper},"pullRequests"===m&&r.a.createElement(k,{issue:p}),"openIssues"===m&&r.a.createElement(k,{issue:d}),"closedIssues"===m&&r.a.createElement(k,{issue:_}))))};function R(){var e=Object(p.a)(["\n    query {\n      viewer {\n        login\n        avatarUrl\n      }\n    }\n  "]);return R=function(){return e},e}var j=function(e){var t,n=e.token,o=e.setToken,s=Object(a.useState)(""),c=Object(l.a)(s,2),u=c[0],m=c[1],i=Object(v.a)(R()),p=Object(g.a)(i,{skip:!n},{errorPolicy:"all"}),d=p.loading,E=p.error,h=p.data;if(d&&(t="loading..."),E&&(t="Something goes wrong. Make sure the given / stored token is valid"),h){var f=h.viewer.avatarUrl,y=h.viewer.login;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:_.a.logoutBtn,onClick:function(){localStorage.clear(),o(""),m("")}},r.a.createElement(b,{url:f,username:y})," ",r.a.createElement("p",null,"Logout")),r.a.createElement(C,{reposQuery:u,setReposQuery:m}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{onSubmitFn:function(e){!function(e){e.preventDefault(),o(e.target.token.value),localStorage.setItem("storedToken",e.target.token.value)}(e)},name:"token",type:"password",placeholder:"Paste your GitHub token",btnDisplay:"Login",variant:"middle"}),r.a.createElement("p",{className:_.a.requestStatus},t))},T=n(23),q=n.n(T),D=function(){var e=localStorage.getItem("storedToken")||"",t=Object(a.useState)(e),n=Object(l.a)(t,2),o=n[0],s=n[1],p=new m.a({uri:"https://api.github.com/graphql",headers:{Authorization:"Bearer ".concat(o)}}),d=new u.a({link:p,cache:new i.a});return r.a.createElement(c.a,{client:d},r.a.createElement("div",{className:q.a.App},r.a.createElement("h1",{className:q.a.app_title},"Repos Checker"),r.a.createElement(j,{token:o,setToken:s})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.af09e552.chunk.js.map