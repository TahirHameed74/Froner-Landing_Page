"use strict";
exports.id = 321;
exports.ids = [321];
exports.modules = {

/***/ 8021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6118);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4320);
/* __next_internal_client_entry_do_not_use__ default auto */ 



gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__/* .ScrollTrigger */ .i);
const Contact = ({ animation, about })=>{
    const aboutItems = [
        "VISUAL IDENTITY",
        "NAMING",
        "STRATEGY",
        "PRINT",
        " WEBSITES",
        " BRAND VOICE",
        "MESSAGING",
        "PACKAGING DESIGN",
        "PRINT PRODUCTION",
        "CAMPAIGN",
        " SOCIAL STRATEGY",
        "PHOTOGRAPHY & VIDEO",
        "PRODUCT RENDERING"
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(".container", {
            scrollTrigger: {
                trigger: ".container",
                scrub: 3
            },
            top: 300,
            duration: 3
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${animation ? "container lg:bottom-[600px]" : ""} absolute h-[400px]  p-10 md:h-[700px] w-[350px] md:w-[500px] lg:w-[800px] text-center z-[1]  lg:h-[900px] flex flex-col justify-between items-center  bg-[#cdeceb]`,
        children: [
            !about ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "lg:text-[33.28px] md:text-[20px] forner-heading-1 text-[#4a4036] font-[clashDisplay] bg-transparent  w-full lg:w-[670px] text-[10px] items-center flex justify-center",
                children: "Explore how Kriss.ai can revolutionize your dental clinic’s operations. Connect with us at Kriss.ai and join us on this transformative journey."
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "bg-transparent lg:text-8xl",
                children: "What We Do"
            }),
            !about && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "font-[lightItalic] md:text-[30px] text-[#4a4036] flex flex-col bg-transparent lg:text-[50px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "bg-transparent ",
                    children: "Book a free online demo"
                })
            }),
            !about ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "lg:text-[58.24px] md:text-[30px] text-[25px] bg-transparent text-[#4a4036] font-[clashDisplay]",
                children: "INFO@KRISS.AI"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center gap-1 text-lg md:text-xl lg:text-2xl bg-transparent text-[#969fa3] font-semibold flex-col",
                children: aboutItems.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "bg-transparent",
                        children: item
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./components/Contact.jsx
var Contact = __webpack_require__(8021);
// EXTERNAL MODULE: ./node_modules/gsap/dist/gsap.js
var gsap = __webpack_require__(6118);
// EXTERNAL MODULE: ./node_modules/gsap/ScrollTrigger.js + 1 modules
var ScrollTrigger = __webpack_require__(4320);
;// CONCATENATED MODULE: ./components/FooterShine.jsx


const FooterShine = ({ text, className, onClick })=>{
    return /*#__PURE__*/ _jsx("div", {
        onClick: onClick,
        className: ` ${className} `,
        children: text
    });
};
/* harmony default export */ const components_FooterShine = ((/* unused pure expression or super */ null && (FooterShine)));

;// CONCATENATED MODULE: ./components/Footer.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





// import { SplitText } from 'gsap/SplitText';
gsap.gsap.registerPlugin(ScrollTrigger/* ScrollTrigger */.i);
// gsap.registerPlugin(SplitText);
const Footer = ({ main, mainAbout, src })=>{
    const logo = "FORNER".split("");
    (0,react_.useEffect)(()=>{
    // gsap.from(".social1,.social2,.social3",{
    //   stagger:0.1,
    //   y:100,
    //   delay:0.8,
    //   opacity:0,
    //     scrollTrigger:{
    //         trigger:".socials",
    //         markers:true,
    //        start:"top-=150 bottom",
    //        end:"bottom+=2000 bottom",
    //     },
    // })
    // const split=new SplitText(".heading",{type:"chars"})
    // let chars=split.chars
    // gsap.from(chars,{
    //   yPercent:130,
    //   stagger:0.09,
    //   duration:1,
    //   ease:"back.out",
    //   scrollTrigger:{
    //     trigger:".heading"
    //   }
    // },
    // )
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-center",
                children: main && /*#__PURE__*/ jsx_runtime_.jsx(Contact/* default */.Z, {
                    animation: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "lg:h-[1800px]  z-[-1]  overflow-hidden h-screen w-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: " image_studio z-[-1] h-full w-full object-cover",
                    src: src
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex md:p-16 p-4 h-[800px] bg-transparent flex-col justify-between ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "bg-transparent text-white ",
                    src: "/Logo-Kriss-white.png"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);


/***/ })

};
;