(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9640],{5316:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/components/specialFeatured/list",function(){return l(4771)}])},4771:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return u}});var t=l(5893);l(7294);var s=l(5675),i=l.n(s),n=l(1758),c=l(5121),o=l(1664),r=l.n(o),d=l(8191),m=l(126);function u(){let{data:e,error:a,isLoading:l}=(0,n.ZP)("".concat("https://kaunlaran.c3-interactive.ph","/api/specials"),e=>c.Z.get(e).then(e=>e.data)),s=e?e.filter(e=>0!==e.publish):[],o=s.slice(1,4);return(0,t.jsx)("div",{className:"flex flex-col max-w-[1180px] pb-6 md:pb-0 w-full mx-auto px-6 md:flex-row",children:(0,t.jsx)("ul",{role:"list",className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:divide-x space-y-6 md:space-y-0 sm:space-y-0  ",children:o.map((e,a)=>(0,t.jsxs)("li",{className:"mb-5 md:mb-0 first:pl-0 pl-6",children:[0===e.special_type&&(0,t.jsxs)("div",{className:"flex  gap-x-4",children:[(0,t.jsxs)("div",{className:"w-[100px] relative",children:[(0,t.jsx)(i(),{src:"".concat("https://kaunlaran.c3-interactive.ph","/images/specials/").concat(e.thumbnail),className:"block h-100 m-w-100",height:100,width:100,alt:e.title}),(0,t.jsx)(r(),{className:"absolute top-0 w-full h-full z-2",title:e.title,href:"/special/".concat(e.slug)})]}),(0,t.jsx)("div",{className:"flex-1 flex ",children:(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"text-[12px] font-normal font-poppins capitalize text-[#797979] tracking-[1px]",children:e.created_at&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:"font-[400]",children:new Date(e.created_at).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})})}),(0,t.jsx)("p",{className:"mt-1 mb-2 font-semibold  text-sm  font-poppins text-[#2C2C2C] leading-5",children:(0,t.jsx)(r(),{className:"tracking-[0] normal-case  font-semibold text-[16px]  font-poppins text-[#2C2C2C] leading-5 line-clamp-2",title:e.title,href:"/special/".concat(e.slug),children:e.name})}),(0,t.jsx)("div",{className:"mt-auto",children:(0,t.jsxs)(r(),{className:"relative group",href:"/special/".concat(e.slug),title:"Read ",children:["Read",(0,t.jsx)("span",{className:"absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "})]})})]})})]}),1===e.special_type&&(0,t.jsx)(d.default,{dataProps:e}),2===e.special_type&&(0,t.jsx)(m.default,{dataProps:e})]},a))})})}},8191:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return d}});var t=l(5893);l(7294);var s=l(1664),i=l.n(s),n=l(5675),c=l.n(n),o=l(1758),r=l(5121);function d(e){var a,l,s,n,d,m,u,p,x,h,f;let{dataProps:v}=e,g="".concat("https://kaunlaran.c3-interactive.ph","/api/stories?id=").concat(null==v?void 0:v.link_id,"&wo-paginate=1"),{data:j,error:N,isLoading:b}=(0,o.ZP)(g,e=>r.Z.get(e).then(e=>e.data)),w=j&&j;return b?(0,t.jsx)("div",{children:"Loading..."}):N?(0,t.jsxs)("div",{children:["Error: ",N.message]}):j?(0,t.jsxs)("div",{className:"flex   gap-x-4",children:[(0,t.jsxs)("div",{className:"w-[100px] relative",children:[(0,t.jsx)(c(),{src:"".concat("https://kaunlaran.c3-interactive.ph","/").concat(null===(l=w[0])||void 0===l?void 0:null===(a=l.images[0])||void 0===a?void 0:a.image_directory),className:"block h-100 m-w-100",height:100,width:100,alt:null===(s=w[0])||void 0===s?void 0:s.title}),(0,t.jsx)(i(),{className:"absolute top-0 w-full h-full z-2",title:null===(n=w[0])||void 0===n?void 0:n.title,href:"/stories/".concat(null===(d=w[0])||void 0===d?void 0:d.slug)})]}),(0,t.jsx)("div",{className:"flex-1 flex",children:(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"text-[12px] font-normal font-poppins capitalize text-[#797979] tracking-[1px]",children:(null===(m=w[0])||void 0===m?void 0:m.created_at)&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:"font-[400]",children:new Date(null===(u=w[0])||void 0===u?void 0:u.created_at).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})})}),(0,t.jsx)("p",{className:"mt-1 mb-2 font-semibold  text-sm  font-poppins text-[#2C2C2C] leading-5",children:(0,t.jsx)(i(),{className:"tracking-[0] normal-case font-semibold text-[16px] font-poppins text-[#2C2C2C] leading-5 line-clamp-2",title:null===(p=w[0])||void 0===p?void 0:p.title,href:"/stories/".concat(null===(x=w[0])||void 0===x?void 0:x.slug),children:null===(h=w[0])||void 0===h?void 0:h.name})}),(0,t.jsx)("div",{className:"mt-auto",children:(0,t.jsxs)(i(),{className:"relative group",href:"/stories/".concat(null===(f=w[0])||void 0===f?void 0:f.slug),title:"Read More",children:["Read",(0,t.jsx)("span",{className:"absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "})]})})]})})]}):(0,t.jsx)("div",{children:"No data available"})}},126:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return d}});var t=l(5893);l(7294);var s=l(1758),i=l(5121),n=l(1664),c=l.n(n),o=l(5675),r=l.n(o);function d(e){let{dataProps:a}=e,l="".concat("https://kaunlaran.c3-interactive.ph","/api/videos?id=").concat(null==a?void 0:a.link_id,"&wo-paginate=1"),{data:n,error:o,isLoading:d}=(0,s.ZP)(l,e=>i.Z.get(e).then(e=>e.data)),m=n&&n[0];return d?(0,t.jsx)("div",{children:"Loading..."}):o?(0,t.jsxs)("div",{children:["Error: ",o.message]}):n?(0,t.jsxs)("div",{className:"flex   gap-x-4",children:[(0,t.jsxs)("div",{className:"w-[100px] relative",children:[(0,t.jsx)(r(),{src:"".concat("https://kaunlaran.c3-interactive.ph","/images/videos/").concat(null==m?void 0:m.thumbnail),className:"block h-100 m-w-100",height:100,width:100,alt:null==m?void 0:m.title}),(0,t.jsx)(c(),{className:"absolute top-0 w-full h-full z-2",title:null==m?void 0:m.name,href:"/videos/".concat(null==m?void 0:m.slug)})]}),(0,t.jsx)("div",{className:"flex-1 flex",children:(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"text-[12px] font-normal font-poppins capitalize text-[#797979]",children:(null==m?void 0:m.created_at)&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:"font-[400]",children:new Date(null==m?void 0:m.created_at).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})})}),(0,t.jsx)("p",{className:"mt-1 mb-2 font-semibold  text-sm  font-poppins text-[#2C2C2C] leading-5",children:(0,t.jsx)(c(),{className:"tracking- normal-case font-semibold text-[16px] font-poppins text-[#2C2C2C] leading-5 line-clamp-2",title:null==m?void 0:m.title,href:"/videos/".concat(null==m?void 0:m.slug),children:null==m?void 0:m.name})}),(0,t.jsx)("div",{className:"mt-auto",children:(0,t.jsxs)(c(),{className:"relative group",href:"/videos/".concat(null==m?void 0:m.slug),title:"Watch",children:["Watch",(0,t.jsx)("span",{className:"absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "})]})})]})})]}):(0,t.jsx)("div",{children:"No data available"})}}},function(e){e.O(0,[3061,1758,5121,9774,2888,179],function(){return e(e.s=5316)}),_N_E=e.O()}]);