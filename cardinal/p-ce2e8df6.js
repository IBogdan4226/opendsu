import{b as t}from"./p-a5fc534d.js";function i(){let i=this.element,e=Array.from(this.element.querySelectorAll("psk-chapter"));this.activeChapter=null;const r=i.scrollTop,s=i.offsetHeight;let l=function(i){let n=[];return i.forEach(i=>{const e=i.getAttribute("guid");if(!e)return null;const r=i.getElementsByClassName("card psk-card")?i.getElementsByClassName("card psk-card")[0]:null;if(!r)return null;const s=function(i,n){let e=i.offsetTop;const r=i.offsetHeight;let s=n[n.length-1]?n[n.length-1]:null;if(s){let{verticalOffset:l,height:c}=s;if(l>e||l+c>e+r){const r=t(i,"psk-chapter",2),s=n.find(t=>r&&t.guid===r.getAttribute("guid"));s&&(e+=s.verticalOffset)}}return e}(r,n);n.push({guid:e,height:r.offsetHeight,verticalOffset:s,title:i.title})}),n}(e);n.call(this,l,r,s)}function n(t,i,n){let e=t.find(t=>i<=t.verticalOffset&&t.verticalOffset+t.height<=i+n);if(e)return void(this.activeChapter=e.guid);let r=t.filter(t=>i>=t.verticalOffset&&(i+n<=t.verticalOffset+t.height||i<=t.verticalOffset+t.height));r.length>0?this.activeChapter=r[r.length-1].guid:t.length>0&&(this.activeChapter=t[0].guid)}export{i as h}