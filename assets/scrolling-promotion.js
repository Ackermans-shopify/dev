if(!customElements.get("m-scrolling-promotion")){class o extends HTMLElement{constructor(){super()}connectedCallback(){this.promotion=this.querySelector(".m-promotion"),this.init()}init(){if(1===this.childElementCount){this.promotion.classList.add("m-promotion--animated");for(let o=0;o<10;o++)this.clone=this.promotion.cloneNode(!0),this.clone.setAttribute("aria-hidden",!0),this.appendChild(this.clone);new IntersectionObserver(((o,t)=>{o.forEach((o=>{o.isIntersecting?this.scrollingPlay():this.scrollingPause()}))}),{rootMargin:"0px 0px 50px 0px"}).observe(this)}}scrollingPlay(){this.classList.remove("m-scrolling-promotion--paused")}scrollingPause(){this.classList.add("m-scrolling-promotion--paused")}}customElements.define("m-scrolling-promotion",o)}