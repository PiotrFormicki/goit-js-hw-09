!function(){var o,t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),r=function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))};e.disabled=!0,console.log("Current background color is ",n.style.backgroundColor);t.addEventListener("click",(function(){n.style.backgroundColor="".concat(r()),o=setInterval((function(){n.style.backgroundColor="".concat(r())}),1e3),t.disabled=!0,e.disabled=!1}));e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1,e.disabled=!0,console.log("Your current color is:",n.style.backgroundColor)}))}();
//# sourceMappingURL=01-color-switcher.625c4c8e.js.map