(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return E});var n=a(8),r=a.n(n),i=a(0),l=a.n(i),u=a(87),s=a(191),c=a.n(s),o=a(213),f=a.n(o),m=a(192),d=a(194),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.data.allMarkdownRemark.group;return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(c.a,{title:"All Tags - "+e}),l.a.createElement(d.a,this.props),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content__inner"},l.a.createElement("div",{className:"page"},l.a.createElement("h1",{className:"page__title"},"Tags"),l.a.createElement("div",{className:"page__body"},l.a.createElement("div",{className:"tags"},l.a.createElement("ul",{className:"tags__list"},t.map(function(e){return l.a.createElement("li",{key:e.fieldValue,className:"tags__list-item"},l.a.createElement(u.Link,{to:"/tags/"+f()(e.fieldValue)+"/",className:"tags__list-item-link"},e.fieldValue," (",e.totalCount,")"))})))))))))},t}(l.a.Component);t.default=p;var E="413586475"},192:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),l=a.n(i),u=a(191),s=a.n(u),c=(a(195),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"layout"},l.a.createElement(s.a,{defaultTitle:"theTechie's"}),e)},t}(l.a.Component));t.a=c},193:function(e,t,a){e.exports=a.p+"static/photo-10be9d0d49cb1f2caae693d960507222.jpg"},194:function(e,t,a){"use strict";a(36);var n=a(8),r=a.n(n),i=a(0),l=a.n(i),u=a(196),s=a.n(u),c=a(87),o=(a(197),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=l.a.createElement("ul",{className:"menu__list"},e.map(function(e){return l.a.createElement("li",{className:"menu__list-item",key:e.path},l.a.createElement(c.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return l.a.createElement("nav",{className:"menu"},t)},t}(l.a.Component)),f=a(201),m=(a(198),a(199),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.twitter,a=e.github,n=e.email,r=e.researchgate;return l.a.createElement("div",{className:"links"},l.a.createElement("ul",{className:"links__list"},l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"https://www.researchgate.net/profile/"+r,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{style:{verticalAlign:"text-top"}},l.a.createElement(f.a,null)))),l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"https://www.github.com/"+a,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-github"}))),l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"https://www.twitter.com/"+t,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-twitter"}))),l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"mailto:"+n},l.a.createElement("i",{className:"icon-mail"})))))},t}(l.a.Component)),d=a(193),p=a.n(d),E=(a(200),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,i=t.menu,u="/"===s()(e,"pathname","/"),f=l.a.createElement("div",null,l.a.createElement(c.Link,{to:"/"},l.a.createElement("img",{src:p.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name})),u?l.a.createElement("h1",{className:"sidebar__author-title"},l.a.createElement(c.Link,{className:"sidebar__author-title-link",to:"/"},a.name)):l.a.createElement("h2",{className:"sidebar__author-title"},l.a.createElement(c.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),l.a.createElement("p",{className:"sidebar__author-subtitle"},n));return l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"sidebar__inner"},l.a.createElement("div",{className:"sidebar__author"},f),l.a.createElement("div",null,l.a.createElement(o,{data:i}),l.a.createElement(m,{data:a}),l.a.createElement("p",{className:"sidebar__copyright"},r))))},t}(l.a.Component));t.a=E},213:function(e,t,a){var n=a(214)(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()});e.exports=n},214:function(e,t,a){a(9),a(124);var n=a(215),r=a(216),i=a(219),l=RegExp("['’]","g");e.exports=function(e){return function(t){return n(i(r(t).replace(l,"")),e,"")}}},215:function(e,t){e.exports=function(e,t,a,n){var r=-1,i=null==e?0:e.length;for(n&&i&&(a=e[++r]);++r<i;)a=t(a,e[r],r,e);return a}},216:function(e,t,a){a(9),a(124);var n=a(217),r=a(202),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(i,n).replace(l,"")}},217:function(e,t,a){var n=a(218)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},218:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},219:function(e,t,a){a(88);var n=a(220),r=a(221),i=a(202),l=a(222);e.exports=function(e,t,a){return e=i(e),void 0===(t=a?void 0:t)?r(e)?l(e):n(e):e.match(t)||[]}},220:function(e,t,a){a(88);var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},221:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},222:function(e,t,a){a(88),a(124);var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",i="\\d+",l="[\\u2700-\\u27bf]",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",s="[^\\ud800-\\udfff"+n+i+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",o="[\\ud800-\\udbff][\\udc00-\\udfff]",f="[A-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:"+u+"|"+s+")",d="(?:"+f+"|"+s+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",E="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,o].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),h="(?:"+[l,c,o].join("|")+")"+E,x=RegExp([f+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,f,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,f+m,"$"].join("|")+")",f+"?"+m+"+(?:['’](?:d|ll|m|re|s|t|ve))?",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,h].join("|"),"g");e.exports=function(e){return e.match(x)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-f8f12f6f7c5168782e6b.js.map