if(!customElements.get("m-product-details-tabs")){class t extends HTMLElement{constructor(){super(),this.tabs=new MinimogTheme.Tabs(this),Shopify.designMode&&document.addEventListener("shopify:block:select",(t=>{const e=t&&t.target,s=e&&Number(e.dataset.index)||0;this.tabs&&this.tabs.setActiveTab(s)}))}}customElements.define("m-product-details-tabs",t)}