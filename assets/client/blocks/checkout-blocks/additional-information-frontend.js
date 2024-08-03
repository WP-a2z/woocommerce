(self.webpackChunkwebpackWcBlocksFrontendJsonp=self.webpackChunkwebpackWcBlocksFrontendJsonp||[]).push([[2227],{4597:(e,t,o)=>{"use strict";o.d(t,{l:()=>j});var r=o(1609),l=o(4656),a=o(6087),n=o(7723),s=o(8537),i=o(851),c=o(332),d=o(3993),u=o(7143),m=o(7594),p=o(7104),f=o(9813),v=o(224);o(1707);const y=({id:e,className:t,label:o,onChange:s,options:y,value:E,required:b=!1,errorId:k,autoComplete:h="off",errorMessage:g=(0,n.__)("Please select a valid option","woocommerce")})=>{const _=(0,a.useRef)(null),C=(0,a.useId)(),w=e||"control-"+C,A=k||w,{setValidationErrors:I,clearValidationError:N}=(0,u.useDispatch)(m.VALIDATION_STORE_KEY),{error:T,validationErrorId:O}=(0,u.useSelect)((e=>{const t=e(m.VALIDATION_STORE_KEY);return{error:t.getValidationError(A),validationErrorId:t.getValidationErrorId(A)}})),[S,V]=(0,a.useState)(!1);return(0,a.useEffect)((()=>(!b||E?N(A):I({[A]:{message:g,hidden:!0}}),()=>{N(A)})),[N,E,A,g,b,I]),(0,r.createElement)("div",{id:w,className:(0,i.A)("wc-block-components-combobox",t,{"is-active":E,"has-error":(null==T?void 0:T.message)&&!(null!=T&&T.hidden)}),ref:_,onFocus:()=>V(!0),onBlur:()=>V(!1)},(0,r.createElement)(c.A,{className:"wc-block-components-combobox-control",label:o,onChange:e=>{s(e),V(!1)},onSelect:()=>V(!1),onFilterValueChange:e=>{if(e.length){const t=(0,d.isObject)(_.current)?_.current.ownerDocument.activeElement:void 0;if(t&&(0,d.isObject)(_.current)&&_.current.contains(t))return;const o=e.toLocaleUpperCase(),r=y.find((e=>e.value.toLocaleUpperCase()===o));if(r)return void s(r.value);const l=y.find((e=>e.label.toLocaleUpperCase().startsWith(o)));l&&s(l.value)}},options:y,value:E||"",allowReset:!1,autoComplete:h,"aria-invalid":(null==T?void 0:T.message)&&!(null!=T&&T.hidden),"aria-errormessage":O}),(0,r.createElement)(p.A,{icon:S?f.A:v.A}),(0,r.createElement)(l.ValidationInputError,{propertyName:A}))};o(2931);const E=({className:e,countries:t,id:o,label:l,onChange:c,value:d="",autoComplete:u="off",required:m=!1,errorId:p,errorMessage:f=(0,n.__)("Please select a country","woocommerce")})=>{const v=(0,a.useMemo)((()=>Object.entries(t).map((([e,t])=>({value:e,label:(0,s.decodeEntities)(t)})))),[t]);return(0,r.createElement)("div",{className:(0,i.A)(e,"wc-block-components-country-input")},(0,r.createElement)(y,{id:o,label:l,onChange:c,options:v,value:d,errorId:p,errorMessage:f,required:m,autoComplete:u}))};var b=o(812);const k=e=>(0,r.createElement)(E,{countries:b.AG,...e}),h=e=>(0,r.createElement)(E,{countries:b.G3,...e});o(8824);const g=(e,t)=>{const o=t.find((t=>t.label.toLocaleUpperCase()===e.toLocaleUpperCase()||t.value.toLocaleUpperCase()===e.toLocaleUpperCase()));return o?o.value:""},_=({className:e,id:t,states:o,country:c,label:d,onChange:u,autoComplete:m="off",value:p="",required:f=!1,errorId:v=""})=>{const E=o[c],b=(0,a.useMemo)((()=>E?Object.keys(E).map((e=>({value:e,label:(0,s.decodeEntities)(E[e])}))):[]),[E]),k=(0,a.useCallback)((e=>{const t=b.length>0?g(e,b):e;t!==p&&u(t)}),[u,b,p]),h=(0,a.useRef)(p);return(0,a.useEffect)((()=>{h.current!==p&&(h.current=p)}),[p]),(0,a.useEffect)((()=>{if(b.length>0&&h.current){const e=g(h.current,b);e!==h.current&&k(e)}}),[b,k]),b.length>0?(0,r.createElement)(y,{className:(0,i.A)(e,"wc-block-components-state-input"),id:t,label:d,onChange:k,options:b,value:p,errorMessage:(0,n.__)("Please select a state.","woocommerce"),errorId:v,required:f,autoComplete:m}):(0,r.createElement)(l.ValidatedTextInput,{className:e,id:t,label:d,onChange:k,autoComplete:m,value:p,required:f})},C=e=>(0,r.createElement)(_,{states:b.uz,...e}),w=e=>(0,r.createElement)(_,{states:b.SL,...e});var A=o(9491),I=o(1573),N=o(923),T=o.n(N),O=o(8585);var S=o(1e3),V=o(3832);const L=({field:e,props:t,onChange:o,value:s})=>{var i;const c=null!==(i=null==e?void 0:e.required)&&void 0!==i&&i,[d,u]=(0,a.useState)((()=>Boolean(s)||c));return(0,r.createElement)(a.Fragment,null,d?(0,r.createElement)(l.ValidatedTextInput,{...t,type:e.type,label:c?e.label:e.optionalLabel,className:`wc-block-components-address-form__${e.key}`,value:s,onChange:t=>o(e.key,t)}):(0,r.createElement)("button",{className:"wc-block-components-address-form__address_2-toggle",onClick:()=>u(!0)},(0,n.sprintf)(
// translators: %s: address 2 field label.
// translators: %s: address 2 field label.
(0,n.__)("+ Add %s","woocommerce"),e.label.toLowerCase())))},R=(e,t,o)=>({id:`${t}-${null==e?void 0:e.key}`.replaceAll("/","-"),errorId:`${o}_${null==e?void 0:e.key}`,label:null!=e&&e.required?null==e?void 0:e.label:null==e?void 0:e.optionalLabel,autoCapitalize:null==e?void 0:e.autocapitalize,autoComplete:null==e?void 0:e.autocomplete,errorMessage:null==e?void 0:e.errorMessage,required:null==e?void 0:e.required,className:`wc-block-components-address-form__${null==e?void 0:e.key}`.replaceAll("/","-"),...null==e?void 0:e.attributes}),F=(e,t,o)=>({field:t.find((t=>t.key===e)),value:(0,d.objectHasProp)(o,e)?o[e]:void 0}),P=({formId:e,address1:t,address2:o,addressType:a,onChange:n})=>{var s,i,c,d;const u=t?R(t.field,e,a):void 0,m=o?R(o.field,e,a):void 0;return(0,r.createElement)(r.Fragment,null,t&&(0,r.createElement)(l.ValidatedTextInput,{...u,type:null===(s=t.field)||void 0===s?void 0:s.type,label:null===(i=t.field)||void 0===i?void 0:i.label,className:`wc-block-components-address-form__${null===(c=t.field)||void 0===c?void 0:c.key}`,value:t.value,onChange:e=>{var o;return n(null===(o=t.field)||void 0===o?void 0:o.key,e)}}),(null==o?void 0:o.field)&&!(null!=o&&null!==(d=o.field)&&void 0!==d&&d.hidden)&&(0,r.createElement)(L,{field:o.field,props:m,onChange:n,value:null==o?void 0:o.value}))},q=({id:e="",fields:t,fieldConfig:o={},onChange:s,addressType:c="shipping",values:p,children:f})=>{const v=(0,A.useInstanceId)(q),E=(0,I.c)(t),b=(0,I.c)(o),g=(0,I.c)((0,d.objectHasProp)(p,"country")?p.country:""),_=(0,a.useMemo)((()=>{const e=(0,O.A)(E,b,g);return{fields:e,addressType:c,required:e.filter((e=>e.required)),hidden:e.filter((e=>e.hidden))}}),[E,b,g,c]),N=(0,a.useRef)({});return(0,a.useEffect)((()=>{const e={...p,...Object.fromEntries(_.hidden.map((e=>[e.key,""])))};T()(p,e)||s(e)}),[s,_,p]),(0,a.useEffect)((()=>{"shipping"===c&&(0,d.objectHasProp)(p,"country")&&(e=>{const t="shipping_country",o=(0,u.select)(m.VALIDATION_STORE_KEY).getValidationError(t);!e.country&&(e.city||e.state||e.postcode)&&(o?(0,u.dispatch)(m.VALIDATION_STORE_KEY).showValidationError(t):(0,u.dispatch)(m.VALIDATION_STORE_KEY).setValidationErrors({[t]:{message:(0,n.__)("Please select your country","woocommerce"),hidden:!1}})),o&&e.country&&(0,u.dispatch)(m.VALIDATION_STORE_KEY).clearValidationError(t)})(p)}),[p,c]),(0,a.useEffect)((()=>{var e,t;null===(e=N.current)||void 0===e||null===(t=e.postcode)||void 0===t||t.revalidate()}),[g]),e=e||`${v}`,(0,r.createElement)("div",{id:e,className:"wc-block-components-address-form"},_.fields.map((t=>{if(t.hidden)return null;const o=R(t,e,c);if("email"===t.key&&(o.id="email",o.errorId="billing_email"),"checkbox"===t.type)return(0,r.createElement)(l.CheckboxControl,{key:t.key,checked:Boolean(p[t.key]),onChange:e=>{s({...p,[t.key]:e})},...o});if("address_1"===t.key){const o=F("address_1",_.fields,p),l=F("address_2",_.fields,p);return(0,r.createElement)(P,{address1:o,address2:l,addressType:c,formId:e,key:t.key,onChange:(e,t)=>{s({...p,[e]:t})}})}if("address_2"===t.key)return null;if("country"===t.key&&(0,d.objectHasProp)(p,"country")){const e="shipping"===c?h:k;return(0,r.createElement)(e,{key:t.key,...o,value:p.country,onChange:e=>{s({...p,country:e,state:"",postcode:""})}})}if("state"===t.key&&(0,d.objectHasProp)(p,"state")){const e="shipping"===c?w:C;return(0,r.createElement)(e,{key:t.key,...o,country:p.country,value:p.state,onChange:e=>s({...p,state:e})})}return"select"===t.type?void 0===t.options?null:(0,r.createElement)(y,{key:t.key,...o,className:(0,i.A)("wc-block-components-select-input",`wc-block-components-select-input-${t.key}`.replaceAll("/","-")),value:p[t.key],onChange:e=>{s({...p,[t.key]:e})},options:t.options}):(0,r.createElement)(l.ValidatedTextInput,{key:t.key,ref:e=>N.current[t.key]=e,...o,type:t.type,value:p[t.key],onChange:e=>s({...p,[t.key]:e}),customFormatter:e=>"postcode"===t.key?e.trimStart().toUpperCase():e,customValidation:e=>((e,t,o)=>!((e.required||e.value)&&("postcode"===t&&o&&!(0,S.isPostcode)({postcode:e.value,country:o})?(e.setCustomValidity((0,n.__)("Please enter a valid postcode","woocommerce")),1):"email"===t&&!(0,V.isEmail)(e.value)&&(e.setCustomValidity((0,n.__)("Please enter a valid email address","woocommerce")),1))))(e,t.key,(0,d.objectHasProp)(p,"country")?p.country:"")})})),f)},j=q},1573:(e,t,o)=>{"use strict";o.d(t,{c:()=>n});var r=o(6087),l=o(923),a=o.n(l);function n(e){const t=(0,r.useRef)(e);return a()(e,t.current)||(t.current=e),t.current}},9017:(e,t,o)=>{"use strict";o.d(t,{A:()=>l});var r=o(7723);const l=({defaultTitle:e=(0,r.__)("Step","woocommerce"),defaultDescription:t=(0,r.__)("Step description text.","woocommerce"),defaultShowStepNumber:o=!0})=>({title:{type:"string",default:e},description:{type:"string",default:t},showStepNumber:{type:"boolean",default:o}})},7912:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>y});var r=o(1609),l=o(851),a=o(4656),n=o(812),s=o(7143),i=o(7594),c=o(1616),d=o(9292),u=o(2379),m=o(4597);const p=()=>{const{additionalFields:e}=(0,s.useSelect)((e=>({additionalFields:e(i.CHECKOUT_STORE_KEY).getAdditionalFields()}))),{setAdditionalFields:t}=(0,s.useDispatch)(i.CHECKOUT_STORE_KEY),o={...e};return 0===n.pt.length?null:(0,r.createElement)(r.Fragment,null,(0,r.createElement)(a.StoreNoticesContainer,{context:u.tG.ORDER_INFORMATION}),(0,r.createElement)(m.l,{id:"additional-information",addressType:"additional-information",onChange:e=>{t(e)},values:o,fields:n.pt}))};var f=o(7723);const v={...(0,o(9017).A)({defaultTitle:(0,f.__)("Additional order information","woocommerce"),defaultDescription:""}),className:{type:"string",default:""},lock:{type:"object",default:{move:!1,remove:!0}}},y=(0,c.withFilteredAttributes)(v)((({title:e,description:t,children:o,className:c})=>{const{showFormStepNumbers:u}=(0,d.Oy)(),m=(0,s.useSelect)((e=>e(i.CHECKOUT_STORE_KEY).isProcessing()));return 0===n.pt.length?null:(0,r.createElement)(a.FormStep,{id:"additional-information-fields",disabled:m,className:(0,l.A)("wc-block-checkout__additional-information-fields",c),title:e,description:t,showStepNumber:u},(0,r.createElement)(p,null),o)}))},1707:()=>{},2931:()=>{},8824:()=>{}}]);