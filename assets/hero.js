if(!customElements.get("m-hero")){class e extends HTMLElement{constructor(){super()}connectedCallback(){const e=this.querySelector(".m-hero__bg");e&&("IntersectionObserver"in window?this._initIntersectionObserver(e):this._initBackground(e))}_initIntersectionObserver(e){const t=this;new IntersectionObserver(((e,i)=>{e[0].isIntersecting&&t._initBackground(e[0].target)}),{rootMargin:"10px"}).observe(e)}_initBackground(e){const t=e.dataset.src;t&&(e.style.backgroundImage="url("+t+")");"true"===this.dataset.parallax&&window.innerWidth>767&&this._initParallax(e)}_initParallax(e){const{MinimogThemeScripts:t}=window;loadAssetsNew([t.parallax],"parallax-module-hero",(()=>{new MinimogLibs.simpleParallax(e,{scale:1.3,delay:.6,transition:"cubic-bezier(0,0,0,1)"})}))}}customElements.define("m-hero",e)}