(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[12],{279:function(t,e){},282:function(t,e,s){"use strict";s.d(e,"b",(function(){return o})),s.d(e,"a",(function(){return l}));var a=s(31),n=s(211);const c=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{paymentMethods:e,expressPaymentMethods:s,paymentMethodsInitialized:c,expressPaymentMethodsInitialized:o}=Object(n.b)(),l=Object(a.a)(e),i=Object(a.a)(s);return{paymentMethods:t?i:l,isInitialized:t?o:c}},o=()=>c(!1),l=()=>c(!0)},284:function(t,e,s){"use strict";var a=s(12),n=s.n(a),c=s(0),o=s(4),l=s.n(o);const i=t=>"wc-block-components-payment-method-icon wc-block-components-payment-method-icon--"+t;var r=t=>{let{id:e,src:s=null,alt:a=""}=t;return s?Object(c.createElement)("img",{className:i(e),src:s,alt:a}):null},d=s(48);const m=[{id:"alipay",alt:"Alipay",src:d.l+"payment-methods/alipay.svg"},{id:"amex",alt:"American Express",src:d.l+"payment-methods/amex.svg"},{id:"bancontact",alt:"Bancontact",src:d.l+"payment-methods/bancontact.svg"},{id:"diners",alt:"Diners Club",src:d.l+"payment-methods/diners.svg"},{id:"discover",alt:"Discover",src:d.l+"payment-methods/discover.svg"},{id:"eps",alt:"EPS",src:d.l+"payment-methods/eps.svg"},{id:"giropay",alt:"Giropay",src:d.l+"payment-methods/giropay.svg"},{id:"ideal",alt:"iDeal",src:d.l+"payment-methods/ideal.svg"},{id:"jcb",alt:"JCB",src:d.l+"payment-methods/jcb.svg"},{id:"laser",alt:"Laser",src:d.l+"payment-methods/laser.svg"},{id:"maestro",alt:"Maestro",src:d.l+"payment-methods/maestro.svg"},{id:"mastercard",alt:"Mastercard",src:d.l+"payment-methods/mastercard.svg"},{id:"multibanco",alt:"Multibanco",src:d.l+"payment-methods/multibanco.svg"},{id:"p24",alt:"Przelewy24",src:d.l+"payment-methods/p24.svg"},{id:"sepa",alt:"Sepa",src:d.l+"payment-methods/sepa.svg"},{id:"sofort",alt:"Sofort",src:d.l+"payment-methods/sofort.svg"},{id:"unionpay",alt:"Union Pay",src:d.l+"payment-methods/unionpay.svg"},{id:"visa",alt:"Visa",src:d.l+"payment-methods/visa.svg"},{id:"wechat",alt:"WeChat",src:d.l+"payment-methods/wechat.svg"}];var p=s(45);s(279),e.a=t=>{let{icons:e=[],align:s="center",className:a}=t;const o=(t=>{const e={};return t.forEach(t=>{let s={};"string"==typeof t&&(s={id:t,alt:t,src:null}),"object"==typeof t&&(s={id:t.id||"",alt:t.alt||"",src:t.src||null}),s.id&&Object(p.a)(s.id)&&!e[s.id]&&(e[s.id]=s)}),Object.values(e)})(e);if(0===o.length)return null;const i=l()("wc-block-components-payment-method-icons",{"wc-block-components-payment-method-icons--align-left":"left"===s,"wc-block-components-payment-method-icons--align-right":"right"===s},a);return Object(c.createElement)("div",{className:i},o.map(t=>{const e={...t,...(s=t.id,m.find(t=>t.id===s)||{})};var s;return Object(c.createElement)(r,n()({key:"payment-method-icon-"+t.id},e))}))}},382:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));const a=t=>Object.values(t).reduce((t,e)=>(null!==e.icons&&(t=t.concat(e.icons)),t),[])},455:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s(284),c=s(282),o=s(382);e.default=t=>{let{className:e}=t;const{paymentMethods:s}=Object(c.b)();return Object(a.createElement)(n.a,{className:e,icons:Object(o.a)(s)})}}}]);