(self.webpackChunkmy_kind_of_stupid=self.webpackChunkmy_kind_of_stupid||[]).push([[496],{2993:function(e){"use strict";var t=Array.isArray,n=Object.keys,r=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){var c,u,l,s=t(e),f=t(a);if(s&&f){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(s!=f)return!1;var p=e instanceof Date,d=a instanceof Date;if(p!=d)return!1;if(p&&d)return e.getTime()==a.getTime();var T=e instanceof RegExp,m=a instanceof RegExp;if(T!=m)return!1;if(T&&m)return e.toString()==a.toString();var E=n(e);if((u=E.length)!==n(a).length)return!1;for(c=u;0!=c--;)if(!r.call(a,E[c]))return!1;if(o&&e instanceof Element&&a instanceof Element)return e===a;for(c=u;0!=c--;)if(!("_owner"===(l=E[c])&&e.$$typeof||i(e[l],a[l])))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},7701:function(e,t,n){var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n(7294)),a=f(n(5697)),c=f(n(4839)),u=f(n(2993)),l=n(1640),s=n(286);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,E,y,h=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),b=(m=h,y=E=function(e){function t(){return d(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,c=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=c,t.titleAttributes=r({},a),t));case s.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case s.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=p(o,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(m,o)},o(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(i.default.Component),E.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=m.peek,E.rewind=function(){var e=m.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},y);b.renderStatic=b.rewind,t.ZP=b},286:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},1640:function(e,t,n){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=u(n(7294)),a=u(n(6494)),c=n(286);function u(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=E(e,c.TAG_NAMES.TITLE),n=E(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=E(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return E(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},m=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],l=u.toLowerCase();-1===t.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),u=0;u<i.length;u++){var l=i[u],s=(0,a.default)({},o[l],r[l]);o[l]=s}return e}),[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){y(e)}),0)}),h=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:n.g.requestAnimationFrame||y,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:n.g.cancelAnimationFrame||h,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,_=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;g(c.TAG_NAMES.BODY,r),g(c.TAG_NAMES.HTML,o),P(p,d);var T={baseTag:R(c.TAG_NAMES.BASE,n),linkTags:R(c.TAG_NAMES.LINK,i),metaTags:R(c.TAG_NAMES.META,a),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,u),scriptTags:R(c.TAG_NAMES.SCRIPT,s),styleTags:R(c.TAG_NAMES.STYLE,f)},m={},E={};Object.keys(T).forEach((function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(E[e]=T[e].oldTags)})),t&&t(),l(e,m,E)},O=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){void 0!==e&&document.title!==e&&(document.title=O(e)),g(c.TAG_NAMES.TITLE,t)},g=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var l=a[u],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var f=i.indexOf(l);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},R=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},w=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},N=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,o=M(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=w(n),i=O(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&A(S),e.defer?S=b((function(){_(e,(function(){S=null}))})):(_(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.scriptTags,s=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:N(c.TAG_NAMES.BASE,t,r),bodyAttributes:N(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:N(c.ATTRIBUTE_NAMES.HTML,o,r),link:N(c.TAG_NAMES.LINK,i,r),meta:N(c.TAG_NAMES.META,a,r),noscript:N(c.TAG_NAMES.NOSCRIPT,u,r),script:N(c.TAG_NAMES.SCRIPT,l,r),style:N(c.TAG_NAMES.STYLE,s,r),title:N(c.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:d(c.ATTRIBUTE_NAMES.BODY,e),defer:E(e,c.HELMET_PROPS.DEFER),encode:E(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:d(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=b,t.warn=v},4839:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n(7294),i=r(o),a=r(n(6872));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function f(){l=e(s.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var c=o.prototype;return c.shouldComponentUpdate=function(e){return!a(e,this.props)},c.componentWillMount=function(){s.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},c.render=function(){return i.createElement(r,this.props)},o}(o.Component);return c(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(p,"canUseDOM",u),p}}},6872:function(e){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var l=i[u];if(!c(l))return!1;var s=e[l],f=t[l];if(!1===(o=n?n.call(r,s,f,l):void 0)||void 0===o&&s!==f)return!1}return!0}},9042:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),o=function(e){var t=e.children;return r.createElement("div",{className:"index-module--container--gFzcF"},t)}},8164:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var r,o,i=n(7294),a=n(5697),c=n.n(a),u=n(7701),l=n(1597);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e){return i.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:1365.333,height:1365.333,viewBox:"0 0 1024 1024"},e),r||(r=i.createElement("path",{d:"M498 8.6c-25.2 6.8-50.3 31.6-73.8 73.1-21.2 37.2-40.4 94-54.2 160.3-1.8 8.5-3.4 15.6-3.5 15.8-.1.1-8.3-2.5-18.1-5.8-85.4-29-156.7-39.4-207.5-30.5-40.1 7.1-63.1 24.7-69.5 53.2-7.7 34.7 15.8 90.5 61.7 146.6 21.3 25.9 53.7 58.9 83.1 84.3l4.7 4.1-10.7 9.4c-59 51.8-100 100.3-121.3 143.4-19.7 40-24 71.7-12.8 95.2 2.3 4.9 5.4 9 11.3 14.9 6.9 6.9 9.7 8.9 18.6 13.2 48.9 23.8 133.2 17.3 239.9-18.4 10.6-3.6 19.7-6.2 20.1-5.7.4.4 1.7 5.7 2.9 11.8 3.8 18.4 12.8 54.4 18 71.8 25.8 85.5 63.9 145.5 102.4 161.6 25.7 10.7 50.5 3.8 74.7-20.8 39-39.4 70.9-113.3 90-208.1 1.7-8.5 3.3-16 3.5-16.7.3-.8 5.7.6 16.7 4.3 49.5 16.7 96.8 27.7 137 32 19 2 58.3 1.5 72.3-1 59-10.2 82-42.5 67.9-95.5-13.8-52.2-61.2-115.3-136-181.2l-12.1-10.6 6.6-5.8c27.5-24 59.6-56.3 79.7-80.5 34.1-40.9 57.1-82.1 63.9-114.5 2.2-10.3 2.3-27 .1-35.8-5.7-23.8-26.4-41.2-58-48.7-53.3-12.7-125.9-3.6-219.1 27.5-10.4 3.4-19.1 6.2-19.2 6.1-.1-.1-1.9-8.1-3.8-17.7-16-78-36.9-135.3-64.4-176.6-21-31.4-41.3-49.3-62.6-54.8-7.4-1.9-21.2-1.8-28.5.1zm25.8 33.9c7.2 2.2 19 10.4 26.2 18.3 17.6 19.3 36.9 56.1 49.9 94.8 9.7 29.2 19.4 69.4 26.6 110.6.4 2.6 0 2.8-11.8 7.4-19.9 7.7-58.7 24.4-81.2 35.1l-21.1 9.9-19.9-9.4c-24.1-11.3-57.6-25.8-78-33.7-8.2-3.2-15.4-6.1-15.8-6.5-1.6-1.4 7.5-48.1 15.3-78.5 20.3-78.9 52.7-135.3 84.5-147.2 7.2-2.7 17.8-3 25.3-.8zM205 249c33.7 3.1 75.6 12.8 120 27.8 16.9 5.8 35.2 12.2 35.8 12.7.2.2-1.1 9.7-2.7 21.1-4.1 28.4-6.7 50.4-9.1 78.8-1.1 13.2-2.1 24.1-2.3 24.2-.1.1-7.8 5.5-17.2 11.9-20.3 14.1-49.7 36-68.9 51.4-12 9.6-14.1 10.9-15.5 9.8-53.6-44.3-90.8-83.2-116-121.2-20.7-31.3-30-57.1-27.2-75.3 3.5-22.7 22.5-37 54.6-41.1 10-1.2 35-1.3 48.5-.1zm661.5.1c34.3 4.1 52.7 17.1 56.6 40.2 2.1 12.8-1.8 29.3-11.8 49.5-6.7 13.6-23.8 39.7-35.6 54.2-19.8 24.6-49.2 53.9-80.2 79.8-8.2 6.9-15.7 13.2-16.7 13.9-1.4 1.3-2.9.4-13.5-8-17.6-14-49.6-37.6-70.1-51.7-15.7-10.8-18.2-12.9-18.6-15.5-.2-1.7-1.4-14.5-2.6-28.5-2-24.7-6.4-62-9.5-80.5-2.2-13.7-2.6-12.7 6.3-15.9 59.7-21.6 107.1-33.6 147-37.5 12.9-1.2 38.4-1.2 48.7 0zM439 321.8c31.3 13.8 35 15.5 35 16.1 0 .3-7.5 4.6-16.7 9.6-9.1 4.9-29.6 16.7-45.5 26.2-15.8 9.4-28.8 16.6-28.8 15.9 0-4.6 8.5-80.5 9.5-85.2.5-2.1.9-2 13.2 3.1 7.1 2.9 22 9.3 33.3 14.3zm192.3-17.5c1.6 6.1 9.7 78.3 9.7 85.9 0 .4-9.3-4.9-20.7-11.9-20.3-12.4-37.8-22.4-59.5-34-5.9-3.2-10.8-6.1-10.8-6.4 0-.7 77.8-35.7 79.6-35.8.7-.1 1.4.9 1.7 2.2zm-100.7 62.8c38.7 20.7 103.6 58.3 110.8 64.3l2.5 2.1 1.2 31.5c1.1 30 .8 78.7-.8 107.9l-.6 12.3-11.4 7.4c-31 20.1-115.7 68.4-120 68.4-4.2 0-86.4-46.7-120.3-68.3l-11.5-7.3-.3-76.2-.2-76.1 4.2-2.9c15-10.2 123-72.4 126.9-73.1.3-.1 9.1 4.4 19.5 10zm-186 193.7c-1.2 1.1-71.2-49.5-71-51.3.1-1.4 27.9-22.7 51.4-39.5l19.5-13.9.3 52.1c.1 28.7 0 52.3-.2 52.6zm349.2-94.6c19.9 13.7 50.2 36.2 57 42.3 1.1 1-1.6 3.4-13.5 12.2-26.2 19.3-56.5 40.3-58.2 40.3-.8 0-.9-1-.4-2.8 1-3.6 1-93.6 0-98.5-.4-2-.5-3.7-.2-3.7s7.2 4.6 15.3 10.2zm-439.3 70.4c21.2 17 58 44.1 83.2 61.3l9.2 6.2.5 5.2c.3 2.9 1 11.5 1.6 19.2 1.6 20.5 5.7 56.1 9.1 79.4 1.6 11.2 2.8 20.5 2.5 20.8-1.9 1.9-46.4 16.6-71.8 23.7-66.7 18.6-123 22.3-156 10.3-33.1-12-39.9-39.7-20-81.7 5.1-10.6 17.9-32.1 25.7-43 20.8-28.9 53.1-61.8 95.5-97.3 6.3-5.3 12-9.7 12.5-9.7.6 0 4.2 2.5 8 5.6zm537.6 5.6c58.5 48.7 97.5 93.8 119 137.3 13.9 28.3 16.1 46.7 7.6 62.8-7 13.4-23.5 22-49.2 25.8-10.4 1.6-43.1 1.6-56.5 0-39.4-4.6-80.7-15-135.6-34.3l-14-4.9 2.3-16.2c3.4-24.3 7-57.8 8.8-81.3.9-11.5 1.8-22.3 2.1-24.1.4-2.8 2.4-4.5 18.2-15.4 21.8-15 44.9-32 66.3-48.4 8.9-6.9 16.5-12.5 16.9-12.5.4 0 6.8 5 14.1 11.2zm-396 92.9c10.8 6.7 57.6 33.7 68.7 39.5 5 2.7 9.2 5.1 9.2 5.4-.1.7-33.2 15.9-58.4 26.8-14.1 6-22.1 9-22.6 8.3-.9-1.5-9.9-79.3-10-86.5 0-1.8.1-1.8 2.8 0 1.5 1 6.1 3.9 10.3 6.5zM639 649.9c-2.9 31.5-7.4 66.1-8.6 66.1-.9 0-36.5-15.5-54.4-23.7-10.2-4.7-20.2-9.2-22.2-10-2.1-.9-3.8-1.9-3.8-2.4 0-.4 6.4-4.1 14.3-8.2 17.7-9.2 43.8-24.3 62.2-35.8 7.7-4.8 14.1-8.6 14.3-8.5.1.2-.7 10.3-1.8 22.5zm-118 53.6c21.2 10.6 74.9 34.1 99.7 43.6l6.3 2.4-.6 3.5c-14.8 84.8-35.2 146.1-62.4 187.5-29.4 44.5-63.7 49.3-93.9 13.1-28.8-34.4-50.9-92.2-66.9-174.6-2.2-11.3-4.3-22.5-4.7-25l-.7-4.6 9.9-3.8c24.3-9.5 73.9-31.6 94.8-42.4 4.4-2.2 8.3-4.1 8.8-4.2.4 0 4.8 2 9.7 4.5z"})),o||(o=i.createElement("path",{d:"M501.1 459.5C477 464.8 462 484 462 509.6c0 19.3 11.2 37.1 28.4 45.3 7.9 3.8 13.4 5 22.1 5.1 29 0 52.4-25.3 50.2-54.5-1.4-19-12.5-35.7-28.2-42.5-11-4.8-22.1-5.9-33.4-3.5z"})))}var p=n(9042);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,n,r,o=E(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).state={expanded:!1},t.toggle=t.toggle.bind(h(t)),t}return t=a,(n=[{key:"toggle",value:function(){this.setState((function(e){return{expanded:!e.expanded}}))}},{key:"render",value:function(){var e=this,t=["index-module--list--KzJoQ"];return this.state.expanded||t.push("index-module--menu-hidden--t58gv"),i.createElement("nav",null,i.createElement("button",{"aria-expanded":this.state.expanded,"aria-controls":"nav-list",className:"index-module--button--VPQbp index-module--splash-border--xBFKa",onClick:this.toggle},i.createElement("h3",{className:"index-module--button-text--18oGI index-module--splash-text--rHT7h"},this.state.expanded?"Hide":"Show"," Navigation")),i.createElement("ul",{id:"nav-list",className:t.join(" ")},this.props.children.map((function(t,n){return i.createElement("li",{key:n,className:"index-module--item--7aQBH"},i.createElement("button",{className:"index-module--item-button--v6WU7 index-module--button-text--D7tEN",onClick:e.toggle},t))}))))}}])&&T(t.prototype,n),r&&T(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(i.Component),v="index-module--nav-link--Vin8O index-module--splash-link--xfLu1 index-module--splash-text--rHT7h";function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}function R(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o=g(a);function a(){return _(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){return i.createElement("header",{className:"index-module--header--+pltC index-module--splash--wZqed"},i.createElement(f,{className:"index-module--logo--SQtkm"}),i.createElement(p.Z,null,i.createElement("hgroup",null,i.createElement("h1",{className:"index-module--h1--u+7mu index-module--splash-text--rHT7h"},i.createElement(l.Link,{to:"/",className:"index-module--header-link--yr3DB index-module--splash-text--rHT7h"},this.props.title)),i.createElement("h2",{className:"index-module--h2--f4DQ7 index-module--splash-text--rHT7h"},this.props.subtitle)),i.createElement(A,null,i.createElement(l.Link,{to:"/",className:v},"Articles"),i.createElement("a",{href:"//adamstegman.com",className:v},"Adam Stegman"),i.createElement("a",{href:"//twitter.com/adamstegman",className:v},"Twitter"),i.createElement("a",{href:"//github.com/adamstegman",className:v,rel:"me"},"Github"))))}}])&&O(t.prototype,n),r&&O(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(i.Component),N=M,C="index-module--nav-item--E5D84",I="index-module--nav-link--VD4mv index-module--nav-link--Vin8O index-module--splash-link--xfLu1 index-module--splash-text--rHT7h",x=function(){return i.createElement("footer",{className:"index-module--footer--3s09W index-module--header--+pltC index-module--splash--wZqed"},i.createElement(f,{className:"index-module--logo--MjPWo index-module--logo--SQtkm"}),i.createElement(p.Z,null,i.createElement("h2",{className:"index-module--h2--onThH index-module--splash-text--rHT7h"},"Written by ",i.createElement("a",{href:"//adamstegman.com",className:I},"Adam Stegman")),i.createElement("nav",null,i.createElement("ul",{className:"index-module--nav-list--VG0-w"},i.createElement("li",{className:C},i.createElement("a",{href:"//status.adamstegman.com",className:I},"Current status")),i.createElement("li",{className:C},i.createElement("a",{href:"//twitter.com/adamstegman",className:I},"Follow me on Twitter")),i.createElement("li",{className:C},i.createElement("a",{href:"//github.com/adamstegman",className:I,rel:"me"},"Follow me on Github")),i.createElement("li",{className:C},i.createElement("a",{href:"mailto:me@adamstegman.com",className:I},"Email me"))))))},j=function(e){var t=e.children;e.data;return i.createElement(l.StaticQuery,{query:"2468095761",render:function(e){return i.createElement("div",null,i.createElement(u.ZP,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description}]}),i.createElement(N,{title:e.site.siteMetadata.title,subtitle:e.site.siteMetadata.description}),t,i.createElement(x,null))}})};j.propTypes={children:c().any};var L=j},4614:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7294);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(s,e);var t,n,o,l=u(s);function s(){return i(this,s),l.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props.post;return r.createElement("p",{className:"index-module--timestamp--DPKZA"},"Published at ",r.createElement("time",{dateTime:e.timestamp},e.date))}}])&&a(t.prototype,n),o&&a(t,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.Component),p=f;function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,o,i=y(a);function a(){return T(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e=this.props.post.fields.post,t=e.title;return e.link&&(t=r.createElement("a",{href:e.link},e.title)),r.createElement("article",null,r.createElement("h2",null,t),r.createElement("section",{className:"index-module--body--idrKN",dangerouslySetInnerHTML:{__html:this.props.post.html}}),r.createElement("footer",null,r.createElement(p,{post:e})))}}])&&m(t.prototype,n),o&&m(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.Component),v=A}}]);
//# sourceMappingURL=291a736a4998dc6bb1e7dae6dfd245355445eafd-58c7cb56eee78512d6a2.js.map