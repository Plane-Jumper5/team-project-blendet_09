(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const h="/light-favicon.svg",m="/dark-favicon.svg",c=document.querySelector(".theme-checkbox"),l=document.querySelector("body"),d=document.querySelector('link[rel="icon"]'),f=window.matchMedia("(prefers-color-scheme: dark)"),i=localStorage.getItem("dark-theme"),s=r=>{r?(l.classList.add("dark-theme"),d.href=m,c.checked=!0):(l.classList.remove("dark-theme"),d.href=h,c.checked=!1)},p=()=>{s(i!==null?i==="true":f.matches)};c.addEventListener("change",()=>{const r=c.checked;localStorage.setItem("dark-theme",r),s(r)});f.addEventListener("change",r=>{const o=r.matches;i||s(o)});p();
//# sourceMappingURL=index.js.map
