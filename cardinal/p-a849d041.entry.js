import{r as t,h as e,g as s}from"./p-87f0c668.js";import"./p-416576da.js";import"./p-185b2ebc.js";import"./p-a5fc534d.js";import{C as o}from"./p-954e4ff8.js";import{T as r}from"./p-9a6ac7e0.js";var i=function(t,e,s,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(a=(i<3?r(a):i>3?r(e,s,a):r(e,s))||a);return i>3&&a&&Object.defineProperty(e,s,a),a};const a=class{constructor(e){t(this,e),this.cellsWidth="",this.tableContent=null}render(){return e("div",{class:"table-responsive"},e("table",{class:"table"},this.tableContent))}componentWillLoad(){let t=[];this.cellsWidth.length>0&&(t=this.cellsWidth.split(",")),t=t.map(t=>parseInt(t));let e=this.element.innerHTML.split(/\n/g).map(t=>t.trim().replace("\x3c!----\x3e","")).filter(t=>t.length>0).map((e,s)=>{let o=-1;return`<tr style=width:100%;>${e.split("|").map(e=>(o++,this.header&&0===s?`<th style=width:${t.length>o?t[o]+"%;":"auto"}>${e.trim()}</th>`:`<td style=width:${t.length>=o?t[o]+"%;":"auto"}>${e.trim()}</td>`)).join("")}</tr>`}),s=[];this.header?(s.push(this._stringArrayToHTMLElement("thead",e.splice(0,1))),this.footer?(s.push(this._stringArrayToHTMLElement("tbody",e.splice(0,e.length-1))),s.push(this._stringArrayToHTMLElement("tfoot",[e[e.length-1]]))):s.push(this._stringArrayToHTMLElement("tbody",e.splice(0)))):s=[this._stringArrayToHTMLElement("tbody",e)],this.tableContent=s,this.element.innerHTML=""}_stringArrayToHTMLElement(t,s){return e(t,{innerHTML:s.join("")})}get element(){return s(this)}};i([o(),r({description:"If this property is set to true then the first row of the given content will be shown as a table header.",isMandatory:!1,propertyType:"boolean"})],a.prototype,"header",void 0),i([r({description:"If this property is set to true then the last row of the given content will be shown as a table footer.",isMandatory:!1,propertyType:"boolean"})],a.prototype,"footer",void 0);export{a as psk_table}