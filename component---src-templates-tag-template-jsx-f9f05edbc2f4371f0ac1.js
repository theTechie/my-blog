(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{190:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),s=a(0),i=a.n(s),l=a(191),c=a.n(l),o=a(192),m=a(194),p=a(203),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.pageContext.tag;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(i.a.createElement(p.a,{data:t,key:t.node.fields.slug}))}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content__inner"},i.a.createElement("div",{className:"page"},i.a.createElement("h1",{className:"page__title"},'All Posts tagged as "',t,'"'),i.a.createElement("div",{className:"page__body"},e))))},t}(i.a.Component);a.d(t,"pageQuery",function(){return h});var d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.tag;return i.a.createElement(o.a,null,i.a.createElement("div",null,i.a.createElement(c.a,{title:'All Posts tagged as "'+t+'" - '+e}),i.a.createElement(m.a,this.props),i.a.createElement(u,this.props)))},t}(i.a.Component),h=(t.default=d,"3385842983")},192:function(e,t,a){"use strict";var n=a(8),r=a.n(n),s=a(0),i=a.n(s),l=a(191),c=a.n(l),o=(a(195),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"layout"},i.a.createElement(c.a,{defaultTitle:"theTechie's"}),e)},t}(i.a.Component));t.a=o},193:function(e,t,a){e.exports=a.p+"static/photo-10be9d0d49cb1f2caae693d960507222.jpg"},194:function(e,t,a){"use strict";a(36);var n=a(8),r=a.n(n),s=a(0),i=a.n(s),l=a(196),c=a.n(l),o=a(87),m=(a(197),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=i.a.createElement("ul",{className:"menu__list"},e.map(function(e){return i.a.createElement("li",{className:"menu__list-item",key:e.path},i.a.createElement(o.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component)),p=a(201),u=(a(198),a(199),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.twitter,a=e.github,n=e.email,r=e.researchgate;return i.a.createElement("div",{className:"links"},i.a.createElement("ul",{className:"links__list"},i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.researchgate.net/profile/"+r,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{style:{verticalAlign:"text-top"}},i.a.createElement(p.a,null)))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.github.com/"+a,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-github"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.twitter.com/"+t,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-twitter"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"mailto:"+n},i.a.createElement("i",{className:"icon-mail"})))))},t}(i.a.Component)),d=a(193),h=a.n(d),_=(a(200),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,s=t.menu,l="/"===c()(e,"pathname","/"),p=i.a.createElement("div",null,i.a.createElement(o.Link,{to:"/"},i.a.createElement("img",{src:h.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name})),l?i.a.createElement("h1",{className:"sidebar__author-title"},i.a.createElement(o.Link,{className:"sidebar__author-title-link",to:"/"},a.name)):i.a.createElement("h2",{className:"sidebar__author-title"},i.a.createElement(o.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),i.a.createElement("p",{className:"sidebar__author-subtitle"},n));return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement("div",{className:"sidebar__author"},p),i.a.createElement("div",null,i.a.createElement(m,{data:s}),i.a.createElement(u,{data:a}),i.a.createElement("p",{className:"sidebar__copyright"},r))))},t}(i.a.Component));t.a=_},203:function(e,t,a){"use strict";var n=a(8),r=a.n(n),s=a(0),i=a.n(s),l=a(87),c=a(204),o=a.n(c),m=(a(212),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,r=e.description,s=this.props.data.node.fields,c=s.slug,m=s.categorySlug;return i.a.createElement("div",{className:"post"},i.a.createElement("div",{className:"post__meta"},i.a.createElement("time",{className:"post__meta-time",dateTime:o()(a).format("MMMM D, YYYY")},o()(a).format("MMMM YYYY")),i.a.createElement("span",{className:"post__meta-divider"}),i.a.createElement("span",{className:"post__meta-category",key:m},i.a.createElement(l.Link,{to:m,className:"post__meta-category-link"},n))),i.a.createElement("h2",{className:"post__title"},i.a.createElement(l.Link,{className:"post__title-link",to:c},t)),i.a.createElement("p",{className:"post__description"},r),i.a.createElement(l.Link,{className:"post__readmore",to:c},"Read"))},t}(i.a.Component));t.a=m}}]);
//# sourceMappingURL=component---src-templates-tag-template-jsx-f9f05edbc2f4371f0ac1.js.map