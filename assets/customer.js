class Customer{constructor(){this.formNewSelectors={add:".m-customer__add-new-btn",cancel:".m-customer__cancel-add-btn",form:".m-customer__form-new",wrapper:".m-customer__form-new-wrapper"},this.formEditSelectors={address:".m-customer-address",info:".m-customer-address__info",wrapper:".m-customer__form-edit-wrapper",form:".m-customer__form-edit",edit:".m-customer__edit-btn",delete:".m-customer__form-delete",cancel:".m-customer__cancel-edit-btn",select:"[data-address-country-select]"},this.selectors={customerAddresses:"[data-customer-addresses]"},this.container=document.querySelector(this.selectors.customerAddresses),this.setupCountries(),this.initFormNew(),this.initFormEdit()}initFormNew(){this.formNewNodes=queryDomNodes(this.formNewSelectors),this.formNewNodes.add&&this.formNewNodes.add&&this.formNewNodes.add.addEventListener("click",(()=>this.toggleFormNew(!0))),this.formNewNodes&&this.formNewNodes.cancel&&this.formNewNodes.cancel.addEventListener("click",(()=>this.toggleFormNew(!1)))}setupCountries(){const e=this.container.querySelectorAll(this.formEditSelectors.select);Shopify&&Shopify.CountryProvinceSelector&&(new Shopify.CountryProvinceSelector("AddressCountry_new","AddressProvince_new",{hideElement:"AddressProvinceContainerNew"}),e.forEach((e=>{const s=e.dataset.formId;new Shopify.CountryProvinceSelector(`AddressCountry_${s}`,`AddressProvince_${s}`,{hideElement:`AddressProvinceContainer_${s}`})})))}initFormEdit(){addEventDelegate({selector:this.formEditSelectors.address,handler:(e,s)=>{const t=queryDomNodes(this.formEditSelectors,s);if(e&&e.target===t.edit)return t.info.classList.add("m:hidden"),void t.wrapper.classList.remove("m:hidden");e&&e.target===t.cancel&&(t.wrapper.classList.add("m:hidden"),t.info.classList.remove("m:hidden"))}}),addEventDelegate({selector:this.formEditSelectors.delete,handler:(e,s)=>{e.preventDefault();const{confirmMessage:t}=s.dataset;window.confirm(t)&&s.submit()}})}toggleFormNew(e){const{add:s,wrapper:t}=this.formNewNodes;e?(s&&s.classList.add("m:hidden"),t&&t.classList.remove("m:hidden")):(t&&t.classList.add("m:hidden"),s&&s.classList.remove("m:hidden"))}}MinimogTheme.Customer=new Customer;