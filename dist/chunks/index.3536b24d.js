import{o as p}from"./index.9a33d21b.js";var m=function(){var a=document.getSelection();if(!a.rangeCount)return function(){};for(var e=document.activeElement,r=[],n=0;n<a.rangeCount;n++)r.push(a.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return a.removeAllRanges(),function(){a.type==="Caret"&&a.removeAllRanges(),a.rangeCount||r.forEach(function(l){a.addRange(l)}),e&&e.focus()}},g=m,d={"text/plain":"Text","text/html":"Url",default:"Text"},y="Copy to clipboard: #{key}, Enter";function v(a){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return a.replace(/#{\s*key\s*}/g,e)}function b(a,e){var r,n,l,s,c,t,i=!1;e||(e={}),r=e.debug||!1;try{l=g(),s=document.createRange(),c=document.getSelection(),t=document.createElement("span"),t.textContent=a,t.ariaHidden="true",t.style.all="unset",t.style.position="fixed",t.style.top=0,t.style.clip="rect(0, 0, 0, 0)",t.style.whiteSpace="pre",t.style.webkitUserSelect="text",t.style.MozUserSelect="text",t.style.msUserSelect="text",t.style.userSelect="text",t.addEventListener("copy",function(o){if(o.stopPropagation(),e.format)if(o.preventDefault(),typeof o.clipboardData=="undefined"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var u=d[e.format]||d.default;window.clipboardData.setData(u,a)}else o.clipboardData.clearData(),o.clipboardData.setData(e.format,a);e.onCopy&&(o.preventDefault(),e.onCopy(o.clipboardData))}),document.body.appendChild(t),s.selectNodeContents(t),c.addRange(s);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");i=!0}catch(o){r&&console.error("unable to copy using execCommand: ",o),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",a),e.onCopy&&e.onCopy(window.clipboardData),i=!0}catch(u){r&&console.error("unable to copy using clipboardData: ",u),r&&console.error("falling back to prompt"),n=v("message"in e?e.message:y),window.prompt(n,a)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(s):c.removeAllRanges()),t&&document.body.removeChild(t),l()}return i}var C=b;const D=p(C);export{D as c};
