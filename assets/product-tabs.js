if(!customElements.get("m-product-tabs")){class e extends HTMLElement{constructor(){super(),this.selectors={loadMoreBtn:"[data-load-more-product]",productsContainer:"[data-products-container]",tabContent:[".m-tab-content"]},this.tabSliders=[],this.sliderEnabled="true"===this.dataset.enableSlider,this.mobileSliderDisable="true"===this.dataset.mobileDisableSlider,this.buttonType=this.dataset.buttonType,this.domNodes=queryDomNodes(this.selectors,this),this.showPagination="true"===this.dataset.showPagination,this.showNavigation="true"===this.dataset.showNavigation,this.items=this.dataset.items}connectedCallback(){this.init()}init(){if(this.sliderEnabled)for(let e of this.domNodes.tabContent)this.initSliderByScreenSize(e),document.addEventListener("matchMobile",(()=>{this.initSliderByScreenSize(e)})),document.addEventListener("unmatchMobile",(()=>{this.initSliderByScreenSize(e)}));if(!this.sliderEnabled&&"load"===this.buttonType){this.canLoad=!0,this.currentPage=1;for(let e of this.domNodes.tabContent)this.initLoadMore(e)}if(MinimogTheme.config.mqlMobile&&this.mobileSliderDisable&&"load"===this.buttonType){this.canLoad=!0,this.currentPage=1;for(let e of this.domNodes.tabContent)this.initLoadMore(e)}document.addEventListener("matchMobile",(()=>{if(MinimogTheme.config.mqlMobile&&this.mobileSliderDisable&&"load"===this.buttonType){this.canLoad=!0,this.currentPage=1;for(let e of this.domNodes.tabContent)this.initLoadMore(e)}})),this.initTabs(),this.initMobileSelect(),Shopify.designMode&&document.addEventListener("shopify:block:select",(e=>{if(!e.target.classList.contains("m-tab-content"))return;const t=e.target&&e.target.dataset.index;this.tabs.setActiveTab(t)}))}initTabs(){this.tabs=new MinimogTheme.Tabs(this,(e=>{const t=e.getAttribute("href"),i=this.querySelector(t+" .swiper-container"),s=this.querySelector(t+" .m-slider-controls");i&&i.swiper&&i.swiper.update();const o=i&&(i.querySelector(".m-image")||i.querySelector(".m-placeholder-svg"));if(o&&s){const e=o.clientHeight;s.style.setProperty("--offset-top",parseInt(e)/2+"px")}}))}initSliderByScreenSize(e){const t="true"===this.dataset.mobileDisableSlider,i=e.querySelector(".m-mixed-layout__wrapper"),s=e.querySelector(".m-slider-controls");MinimogTheme.config.mqlMobile&&t?(s&&s.classList.add("m:hidden"),i.classList.remove("swiper-container"),i.swiper&&i.swiper.destroy(!1,!0)):(s&&s.classList.remove("m:hidden"),setTimeout((()=>{this.initSlider(e)})))}initSlider(e){const t=e.querySelector(".m-product-list"),i=e&&e.querySelector(".m-mixed-layout__wrapper"),s=e.querySelector(".m-slider-controls"),o=s&&s.querySelector(".m-slider-controls__button-prev"),r=s&&s.querySelector(".m-slider-controls__button-next"),n=e&&e.querySelector(".swiper-wrapper")&&e.querySelector(".swiper-wrapper").childElementCount;if(parseInt(this.items)>=n)return s&&s.classList.add("m:hidden"),void t.classList.add("m-mixed-layout--mobile-grid");i&&i.classList.add("swiper-container");let a=new MinimogLibs.Swiper(i,{slidesPerView:2,showPagination:this.showPagination,showNavigation:this.showNavigation,loop:!this.enableFlashsale,pagination:!!this.showPagination&&{el:e.querySelector(".swiper-pagination"),clickable:!0},breakpoints:{768:{slidesPerView:parseInt(this.items)>=3?3:parseInt(this.items)},992:{slidesPerView:parseInt(this.items)>=4?4:parseInt(this.items)},1280:{slidesPerView:parseInt(this.items)}},threshold:2,on:{init:function(){setTimeout((()=>{const t=e.querySelector(".m-image")||e.querySelector(".m-placeholder-svg");if(t&&s){const e=t.clientHeight;s.style.setProperty("--offset-top",parseInt(e)/2+"px"),o.classList.remove("m:hidden"),r.classList.remove("m:hidden")}}),200)},breakpoint:(e,t)=>{if(s){const{slidesPerView:i}=t;n>i?(s.classList.remove("m:hidden"),e.allowTouchMove=!0):(s.classList.add("m:hidden"),e.allowTouchMove=!1)}}}});a&&this.showNavigation&&(o&&o.addEventListener("click",(()=>a.slidePrev())),r&&r.addEventListener("click",(()=>a.slideNext())))}initMobileSelect(){this.select=this.querySelector("[data-tab-select]"),this.select.addEventListener("change",(()=>{this.tabs.setActiveTab(parseInt(this.select.value));const e=this.tabs&&this.tabs.currentTab&&this.tabs.currentTab.querySelector(".swiper-container"),t=this.tabs&&this.tabs.currentTab&&this.tabs.currentTab.querySelector(".m-slider-controls"),i=t&&t.querySelector(".m-slider-controls__button-prev"),s=t&&t.querySelector(".m-slider-controls__button-next");e&&e.swiper&&e.swiper.update();const o=e&&e.querySelector(".m-image");if(o&&t){const e=o.clientHeight;t.style.setProperty("--offset-top",parseInt(e)/2+"px"),i.classList.remove("m:hidden"),s.classList.remove("m:hidden")}}))}initLoadMore(e){addEventDelegate({context:e,selector:this.selectors.loadMoreBtn,handler:t=>{t.preventDefault(),this.handleLoadMore(e)}})}handleLoadMore(e){const t=e.querySelector(this.selectors.loadMoreBtn),i=e.querySelector(this.selectors.productsContainer);let s=e.dataset.page;s=parseInt(s);const o=e.dataset.totalPages;this.toggleLoading(t,!0);const r=`${e.dataset.url}?page=${s+1}&section_id=${this.id}`;fetchCache(r).then((r=>{s++,e.dataset.page=s,this.toggleLoading(t,!1);const n=generateDomFromString(r),a=e.getAttribute("id"),l=n.querySelector(`#${a} ${this.selectors.productsContainer}`);l&&Array.from(l.childNodes).forEach((e=>i.appendChild(e))),s>=parseInt(o)&&t&&t.remove()})),t.blur()}toggleLoading(e,t){e&&(t?e.classList.add("m-spinner-loading"):e.classList.remove("m-spinner-loading"))}}customElements.define("m-product-tabs",e)}