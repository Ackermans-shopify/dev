if(!customElements.get("favorite-product-slider")){class e extends HTMLElement{constructor(){super()}connectedCallback(){this.selectors={mainImages:".m-favorite-product-slider__images",thumbs:".m-favorite-product-slider__thumbs"},this.domNodes=queryDomNodes(this.selectors,this),this.mediaSize=parseInt(this.dataset.mediaSize),this.mainImagesContainer=this.domNodes.mainImages.querySelector(".swiper-container"),this.thumbsContainer=this.domNodes.thumbs.querySelector(".swiper-container"),this.initSlider()}initSlider(){this.initMainImagesSlider(),this.initThumbsSlider(),this.thumbsSlider.on("slideChange",(e=>{const{realIndex:i}=e;let t=i-1;t<0&&(t=this.mediaSize-1),this.mainImagesSlider.slideToLoop(t)})),this.mainImagesSlider.on("slideChange",(e=>{const{slides:i,realIndex:t}=e;let s=t+1;s>this.mediaSize&&(s=0),this.playActiveMedia(i[s])}))}initMainImagesSlider(){const e=this.domNodes.mainImages.querySelector(".m-slider-controls"),i=e&&e.querySelector(".m-slider-controls__button-prev"),t=e&&e.querySelector(".m-slider-controls__button-next");this.mainImagesSlider=new MinimogLibs.Swiper(this.mainImagesContainer,{slidesPerView:1,showPagination:!0,showNavigation:!0,loop:!0,pagination:{el:this.domNodes.mainImages.querySelector(".swiper-pagination"),clickable:!0,type:"fraction"},autoplay:!1,threshold:2,effect:"fade",fadeEffect:{crossFade:!0},breakpoints:{768:{simulateTouch:!1,allowTouchMove:!1,showPagination:!1,showNavigation:!1}},simulateTouch:!0,allowTouchMove:!0}),this.mainImagesSlider&&(i&&i.addEventListener("click",(()=>this.mainImagesSlider.slidePrev())),t&&t.addEventListener("click",(()=>this.mainImagesSlider.slideNext())))}initThumbsSlider(){const e=this.domNodes.thumbs.querySelector(".m-slider-controls"),i=e&&e.querySelector(".m-slider-controls__button-prev"),t=e&&e.querySelector(".m-slider-controls__button-next"),s=this.domNodes.thumbs.querySelector(".swiper-wrapper").childElementCount;this.thumbsSlider=new MinimogLibs.Swiper(this.thumbsContainer,{initialSlide:s>1?1:0,slidesPerView:2==s?1:2,showPagination:!0,showNavigation:!0,loop:!0,autoplay:!1,pagination:{el:this.domNodes.thumbs.querySelector(".swiper-pagination"),clickable:!0,type:"fraction"},spaceBetween:15,breakpoints:{1024:{spaceBetween:30}},threshold:2,on:{init(){setTimeout((()=>{window.dispatchEvent(new Event("resize"))}),100)}}}),this.thumbsSlider&&(i&&i.addEventListener("click",(()=>this.thumbsSlider.slidePrev())),t&&t.addEventListener("click",(()=>this.thumbsSlider.slideNext())))}playActiveMedia(e){const i=e.querySelector(".deferred-media");if(i){"true"===i.dataset.autoPlay&&i.loadContent(!1)}}}customElements.define("favorite-product-slider",e)}