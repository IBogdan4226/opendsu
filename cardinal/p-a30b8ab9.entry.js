import{r as t,h as i,H as s,g as r}from"./p-87f0c668.js";import"./p-416576da.js";import"./p-185b2ebc.js";import"./p-a5fc534d.js";import{C as o}from"./p-954e4ff8.js";import{T as e}from"./p-9a6ac7e0.js";import{a as n}from"./p-218f8302.js";import{g as p}from"./p-674fc7a6.js";var a=function(t,i,s,r){var o,e=arguments.length,n=e<3?i:null===r?r=Object.getOwnPropertyDescriptor(i,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,i,s,r);else for(var p=t.length-1;p>=0;p--)(o=t[p])&&(n=(e<3?o(n):e>3?o(i,s,n):o(i,s))||n);return e>3&&n&&Object.defineProperty(i,s,n),n};const l=class{constructor(i){t(this,i),this.column=null,this.columnStart=null,this.columnEnd=null,this.row=null,this.rowStart=null,this.rowEnd=null,this.align=null,this.alignX=null,this.alignY=null}async componentWillLoad(){const t=p(":host",this.__getProperties());n(this.__host,t)}__getProperties(){const t={};return this.column&&(t["grid-column"]=this.column),this.columnStart&&(t["grid-column-start"]=this.columnStart),this.columnEnd&&(t["grid-column-end"]=this.columnEnd),this.row&&(t["grid-row"]=this.row),this.rowStart&&(t["grid-row-start"]=this.rowStart),this.rowEnd&&(t["grid-row-end"]=this.rowEnd),this.align&&(t["place-self"]=this.align),this.alignX&&(t["justify-self"]=this.alignX),this.alignY&&(t["align-self"]=this.alignY),t}render(){return i(s,null,i("slot",null))}get __host(){return r(this)}};a([o()],l.prototype,"__host",void 0),a([e({description:"",isMandatory:!1,propertyType:"string"})],l.prototype,"column",void 0),a([e({description:"",isMandatory:!1,propertyType:"string"})],l.prototype,"columnStart",void 0),a([e({description:"",isMandatory:!1,propertyType:"string"})],l.prototype,"columnEnd",void 0),a([e({description:"",isMandatory:!1,propertyType:"string"})],l.prototype,"row",void 0),a([e({description:"",isMandatory:!1,propertyType:"string"})],l.prototype,"rowStart",void 0),a([e({description:"",isMandatory:!1,propertyType:"string"})],l.prototype,"rowEnd",void 0),a([e({description:["Equivalent to <em>place-self</em>."],isMandatory:!1,propertyType:"string"})],l.prototype,"align",void 0),a([e({description:["Equivalent to <em>justify-self</em>."],isMandatory:!1,propertyType:"string"})],l.prototype,"alignX",void 0),a([e({description:["Equivalent to <em>align-self</em>."],isMandatory:!1,propertyType:"string"})],l.prototype,"alignY",void 0);export{l as psk_layout_item}