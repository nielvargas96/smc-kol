(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[480],{4939:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stories/[slug]",function(){return l(7821)}])},7821:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return p}});var t=l(5893);l(7294);var a=l(5675),n=l.n(a),i=l(1664),c=l.n(i),r=l(2261),d=l(2074);function o(e){let{data:s}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"relative my-6  ",children:[(0,t.jsx)(r.tq,{spaceBetween:50,slidesPerView:1,modules:[d.W_],navigation:{nextEl:".swiper-btn-next-component",prevEl:".swiper-btn-prev-component"},children:s.map(e=>(0,t.jsx)(r.o5,{children:(0,t.jsx)(n(),{className:"select-none",src:"".concat("https://kaunlaran.c3-interactive.ph").concat(e.file_directory),alt:e.file,width:"730",height:"460"})},e.id))}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"swiper-btn-next-component swiper-button-next bg-white mr-4 rounded-full",children:" "}),(0,t.jsx)("div",{className:"swiper-btn-prev-component swiper-button-prev bg-white ml-4 rounded-full",children:" "})]}),(0,t.jsx)("p",{className:"font-poppins text-xs text-[#797979] mt-4",children:s.title})]})})}l(6268),l(333);var m=l(1163),x=l(2418),u=l(1758);let h=async e=>{let s=await fetch(e,{cache:"no-store"});return s.json()};function p(){var e,s;let l=(0,m.useRouter)(),{slug:a}=l.query,{data:i}=(0,u.ZP)("".concat("https://kaunlaran.c3-interactive.ph","/api/stories?slug=").concat(a),h),r=null==i?void 0:null===(e=i.data[0])||void 0===e?void 0:e.id,{data:d}=(0,u.ZP)(r?"".concat("https://kaunlaran.c3-interactive.ph","/api/stories?w-content=1&id=").concat(r,"&wo-paginate=1"):null,h),p=null==d?void 0:d[0],v=null==p?void 0:p.images[0],f=null==p?void 0:p.contents;return(0,t.jsx)(x.Z,{children:(0,t.jsxs)("section",{className:"mb-20",children:[(0,t.jsx)("div",{className:" w-full bg-[#F9F0DF] pt-[0rem] flex  justify-center items-end",children:(0,t.jsxs)("div",{className:"flex w-full items-end justify-between mx-auto flex-col md:flex-row  mt-[4rem]",children:[(0,t.jsx)("div",{className:"relative flex justify-end flex-1 w-full md:w-50",children:v?(0,t.jsx)(n(),{src:"".concat("https://kaunlaran.c3-interactive.ph").concat(v.image_directory),alt:null==p?void 0:p.name,height:"645",width:"780"}):(0,t.jsx)(n(),{src:"/images/kol.png",alt:null==p?void 0:p.name,height:"645",width:"780"})}),(0,t.jsx)("div",{className:"flex flex-1 flex-col w-full md:w-50",children:(0,t.jsxs)("div",{className:"m-7 md:m-14",children:[(0,t.jsx)("h1",{className:"mb-4 text-3xl md:text-[2.25rem] md:leading-10",children:null==p?void 0:p.name}),(0,t.jsx)("p",{className:"text-lg lg:text-xl font-poppins",children:null==p?void 0:p.sub_title})]})})]})}),(0,t.jsxs)("div",{className:"max-w-[1480px] mx-auto mt-10 md:mt-14 mb-20 px-6 flex flex-col lg:flex-row justify-center lg:space-x-20",children:[(0,t.jsx)("div",{className:"flex-none w-[200px] lg:pt-3 mb-6",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-poppins capitalize text-xs font-light text-[#797979]",children:(null==p?void 0:p.words_by)&&(0,t.jsxs)(t.Fragment,{children:["Presented by",(0,t.jsx)("span",{className:"font-bold",children:null==p?void 0:p.words_by})]})}),(null==p?void 0:p.words_by)&&(0,t.jsx)("div",{className:" border-b border-[#CDCBCB] my-3 w-[75%] "}),(0,t.jsxs)("p",{className:"font-poppins capitalize text-xs font-light text-[#797979]",children:["Published ",new Date(null==p?void 0:p.created_at).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]})}),(0,t.jsxs)("div",{className:"flex-1 w-full lg:max-w-[700px]",children:[(0,t.jsx)("div",{className:" border-b border-[#CDCBCB] mb-6 w-full "}),null==f?void 0:f.map((e,s)=>(0,t.jsx)("div",{className:"customized-contents mb-7",children:(0,t.jsxs)("div",{className:"content",children:["text"===e.type&&(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:null==e?void 0:e.content}}),"quote"===e.type&&(0,t.jsxs)("blockquote",{className:"mb-10",children:[(0,t.jsxs)("div",{className:"w-auto max-w-[420px]  mb-5 relative",children:[(0,t.jsx)(n(),{src:"/images/qout-left.svg",width:"30",height:"28",className:"mb-2",alt:"Quote"}),(0,t.jsx)("h2",{className:"qoute-text",dangerouslySetInnerHTML:{__html:null==e?void 0:e.content}}),(0,t.jsx)(n(),{src:"/images/qout-right.svg",width:"30",height:"28",className:"absolute bottom-[-.5rem] right-[-2rem]",alt:"Quote"})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"border-2 border-[#E8412C] w-[42px]"})}),(0,t.jsx)("span",{className:"font-tabletgothic text-[#7F7F7F] text-xl",children:null==e?void 0:e.additional_content})]})]}),(null==e?void 0:e.additional_content)==="two-columns"&&(0,t.jsx)("div",{className:"grid grid-cols-2 gap-5 mb-10 two-columns",children:e.content_items.map((e,s)=>(0,t.jsxs)("figure",{children:[(0,t.jsx)(n(),{src:"".concat("https://kaunlaran.c3-interactive.ph").concat(e.file_directory),width:"355",height:"295",alt:null==e?void 0:e.caption.replace(/<\/?p>/g,"")}),(0,t.jsx)("figcaption",{children:(0,t.jsx)("div",{className:"my-4",dangerouslySetInnerHTML:{__html:null==e?void 0:e.caption}})})]},null==e?void 0:e.id))}),"normal"===e.additional_content&&(0,t.jsx)(o,{data:e.content_items})]})},null==e?void 0:e.id))]}),(0,t.jsxs)("div",{className:"flex-none lg:w-[200px] pt-3",children:[(null==p?void 0:p.related_name)&&(0,t.jsxs)("div",{className:"flex flex-col mb-2",children:[(0,t.jsx)("h3",{className:"mb-3",children:"Related Stories"}),(0,t.jsx)("span",{className:"block border-b-4 border-[#EFA9A9]  w-[50%]"})]}),(0,t.jsx)("div",{className:"flex flex-col space-y-6 divide-y-2",children:(null==p?void 0:p.related_name)&&(null==p?void 0:null===(s=p.related_name)||void 0===s?void 0:s.map(e=>(0,t.jsxs)("div",{className:"pt-5",children:[(0,t.jsx)("h5",{className:"text-[#4E4E4E] font-opensans leading-5 font-bold mb-3 text-[16px] line-clamp-3",children:null==e?void 0:e.name}),(0,t.jsx)("p",{className:"font-poppins text-[#797979] text-[14px] mb-1 capitalize tracking-[1px]",children:new Date(e.created_at).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),(0,t.jsxs)(c(),{className:"relative group",href:"/stories/".concat(e.slug),title:"Read",children:["Read",(0,t.jsx)("span",{className:"absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "})]})]},e)))})]})]}),(0,t.jsxs)("article",{className:"max-w-[1180px] mx-auto px-6",children:[(0,t.jsx)("h2",{className:"mb-6",children:"Read this next"}),(0,t.jsx)("div",{className:"border-b-2 border-[#D9D9D9] mb-10 w-full "}),(0,t.jsx)("div",{className:"grid sm:grod-cols-2 md:grid-cols-3 sm:gap-7 md:gap-14 space-y-12 md:space-y-0",children:(0,t.jsxs)("div",{className:"w-full space-y-4",children:[(0,t.jsxs)("div",{className:"relative group z-0 overflow-hidden",children:[(0,t.jsx)(n(),{className:"block w-full transition ease-in-out delay-100 group-hover:scale-105 duration-300",src:"/images/stories.png",alt:"Featured Image",width:360,height:210}),(0,t.jsx)(c(),{className:"absolute top-0 w-full h-full z-2",href:"/",title:"title"})]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("div",{className:"flex justify-between items-center",children:(0,t.jsx)("span",{className:"text-[12px] text-[#797979] capitalize tracking-[1px]",children:"January 2, 2024"})}),(0,t.jsx)("h4",{className:"leading-6 pb-1",children:"Mus sem odio vel amet ultricies sed lacus. Leo ipsum tempor et orci."}),(0,t.jsxs)(c(),{className:"group relative",href:"/",title:"title",children:["Read",(0,t.jsx)("span",{class:"absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "})]})]})]})})]})]})})}}},function(e){e.O(0,[3061,1758,383,4625,1895,2418,9774,2888,179],function(){return e(e.s=4939)}),_N_E=e.O()}]);