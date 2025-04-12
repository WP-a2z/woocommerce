(()=>{"use strict";var e,t,o,r={9922:(e,t,o)=>{o.r(t);const r=window.wp.blocks;var n=o(498);const c=window.wc.wcSettings,i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"woocommerce/product-filter-clear-button","version":"0.1.0","title":"Clear filters (Experimental)","description":"Allows shoppers to clear active filters.","category":"woocommerce","keywords":["WooCommerce","clear filters"],"textdomain":"woocommerce","apiVersion":3,"ancestor":["woocommerce/product-filter-active"],"usesContext":["filterData"],"supports":{"interactivity":true,"inserter":true}}');var l=o(1609);const s=window.wp.blockEditor;var a=o(7723);(()=>{const{experimentalBlocksEnabled:e}=(0,c.getSetting)("wcBlocksConfig",{experimentalBlocksEnabled:!1});return e})()&&(0,r.registerBlockType)(i,{icon:n.A,edit:()=>{const e=(0,s.useBlockProps)(),t=(0,s.useInnerBlocksProps)(e,{allowedBlocks:["core/buttons","core/button"],template:[["core/buttons",{layout:{type:"flex",verticalAlignment:"stretched"},style:{spacing:{margin:{top:"var:preset|spacing|10"}}}},[["core/button",{text:(0,a.__)("Clear filters","woocommerce"),className:"wc-block-product-filter-clear-button is-style-outline",style:{border:{width:"1px"},typography:{textDecoration:"none"},outline:"none",fontSize:"medium",spacing:{padding:{left:"8px",right:"8px",top:"5px",bottom:"5px"}}},textAlign:"center",width:100}]]]]});return(0,l.createElement)("div",{...t})},save:function(){return(0,l.createElement)(s.InnerBlocks.Content,null)}})},1609:e=>{e.exports=window.React},7723:e=>{e.exports=window.wp.i18n},5573:e=>{e.exports=window.wp.primitives}},n={};function c(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e].call(o.exports,o,o.exports,c),o.exports}c.m=r,e=[],c.O=(t,o,r,n)=>{if(!o){var i=1/0;for(p=0;p<e.length;p++){for(var[o,r,n]=e[p],l=!0,s=0;s<o.length;s++)(!1&n||i>=n)&&Object.keys(c.O).every((e=>c.O[e](o[s])))?o.splice(s--,1):(l=!1,n<i&&(i=n));if(l){e.splice(p--,1);var a=r();void 0!==a&&(t=a)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[o,r,n]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var n=Object.create(null);c.r(n);var i={};t=t||[null,o({}),o([]),o(o)];for(var l=2&r&&e;"object"==typeof l&&!~t.indexOf(l);l=o(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,c.d(n,i),n},c.d=(e,t)=>{for(var o in t)c.o(t,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.j=1276,(()=>{var e={1276:0};c.O.j=t=>0===e[t];var t=(t,o)=>{var r,n,[i,l,s]=o,a=0;if(i.some((t=>0!==e[t]))){for(r in l)c.o(l,r)&&(c.m[r]=l[r]);if(s)var p=s(c)}for(t&&t(o);a<i.length;a++)n=i[a],c.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return c.O(p)},o=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var i=c.O(void 0,[94],(()=>c(9922)));i=c.O(i),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["product-filter-clear-button"]=i})();