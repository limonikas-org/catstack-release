"use strict";(self.webpackChunkcatstack_release=self.webpackChunkcatstack_release||[]).push([[9817],{5765:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(5882),r=a(9496),i=a(5924),l=a(6502),s=a(4329),c=a(5397),o=a(5082),m=a(7844),d=a(4681);function u(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbsContainer:"breadcrumbsContainer_oGfa",breadcrumbHomeIcon:"breadcrumbHomeIcon_HJXo"};function h(e){let{children:t,href:a,isLast:n}=e;const i="breadcrumbs__link";return n?r.createElement("span",{className:i,itemProp:"name"},t):a?r.createElement(o.Z,{className:i,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:i},t)}function v(e){let{children:t,active:a,index:l,addMicrodata:s}=e;return r.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function g(){const e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,i.Z)("breadcrumbs__link",b.breadcrumbsItemLink),href:e},r.createElement(u,{className:b.breadcrumbHomeIcon})))}function p(){const e=(0,s.s1)(),t=(0,c.Ns)();return e?r.createElement("nav",{className:(0,i.Z)(l.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(g,null),e.map(((t,a)=>{const n=a===e.length-1;return r.createElement(v,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(h,{href:t.href,isLast:n},t.label))})))):null}},4445:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(9496),r=a(4957),i=a(4329),l=a(7844),s=a(5924),c=a(5082),o=a(7890),m=a(4681);const d="cardContainer_Okxe",u="cardTitle_fdpI",b="cardDescription_xyO1";function h(e){let{href:t,children:a}=e;return n.createElement(c.Z,{href:t,className:(0,s.Z)("card padding--lg",d)},a)}function v(e){let{href:t,icon:a,title:r,description:i}=e;return n.createElement(h,{href:t},n.createElement("h2",{className:(0,s.Z)("text--truncate",u),title:r},a," ",r),i&&n.createElement("p",{className:(0,s.Z)("text--truncate",b),title:i},i))}function g(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?n.createElement(v,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const a=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return n.createElement(v,{href:t.href,icon:a,title:t.label,description:r?.description})}function E(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const a=(0,i.jA)();return n.createElement(Z,{items:a.items,className:t})}function Z(e){const{items:t,className:a}=e;if(!t)return n.createElement(f,e);const r=(0,i.MN)(t);return n.createElement("section",{className:(0,s.Z)("row",a)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(E,{item:e})))))}var N=a(9683),k=a(3255),L=a(493),_=a(5765),T=a(4752);const x="generatedIndexPage_b6WK",y="list_Xund",I="title_YLLs";function w(e){let{categoryGeneratedIndex:t}=e;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function C(e){let{categoryGeneratedIndex:t}=e;const a=(0,i.jA)();return n.createElement("div",{className:x},n.createElement(k.Z,null),n.createElement(_.Z,null),n.createElement(L.Z,null),n.createElement("header",null,n.createElement(T.Z,{as:"h1",className:I},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(Z,{items:a.items,className:y})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(N.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function A(e){return n.createElement(n.Fragment,null,n.createElement(w,e),n.createElement(C,e))}},9683:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(5882),r=a(9496),i=a(4681),l=a(2288);function s(e){const{previous:t,next:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(l.Z,(0,n.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(l.Z,(0,n.Z)({},a,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},493:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(9496),r=a(5924),i=a(4681),l=a(6502),s=a(964);function c(e){let{className:t}=e;const a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},3255:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(9496),r=a(5924),i=a(5600),l=a(5082),s=a(4681),c=a(3377),o=a(6502),m=a(8581),d=a(964);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,i.Z)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,c.Jo)(s),g=u??(p=v).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,r.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:v.label,to:g.path,onClick:()=>d(v.name)})))}function g(e){let{className:t}=e;const a=(0,d.E)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},4752:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(5882),r=a(9496),i=a(5924),l=a(4681),s=a(2289);const c="anchorWithStickyNavbar_yfMR",o="anchorWithHideOnScrollNavbar_KW95";function m(e){let{as:t,id:a,...m}=e;const{navbar:{hideOnScroll:d}}=(0,s.L)();return"h1"!==t&&a?r.createElement(t,(0,n.Z)({},m,{className:(0,i.Z)("anchor",d?o:c),id:a}),m.children,r.createElement("a",{className:"hash-link",href:`#${a}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,(0,n.Z)({},m,{id:void 0}))}},2288:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(9496),r=a(5924),i=a(5082);function l(e){const{permalink:t,title:a,subLabel:l,isNext:s}=e;return n.createElement(i.Z,{className:(0,r.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}}}]);