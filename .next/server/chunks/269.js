"use strict";
exports.id = 269;
exports.ids = [269];
exports.modules = {

/***/ 4792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6118);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9574);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);
const Brand = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const logo = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(".logo", {
            scrollTrigger: {
                trigger: ".logo",
                start: "top top",
                end: "bottom center",
                scrub: 1
            },
            opacity: 0
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute logo flex flex-col bg-transparent pl-3 pr-3  h-full items-center justify-between top-0 left-0   w-full ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            className: "bg-transparent text-white ",
            src: "/forner-logo.svg"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brand);


/***/ }),

/***/ 3261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Hero)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./components/Brand.jsx
var Brand = __webpack_require__(4792);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/ShineOnHover.jsx
var ShineOnHover = __webpack_require__(6447);
;// CONCATENATED MODULE: ./components/NavbarBanner.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const NavbarBanner = ({ setIsOpen })=>{
    const [logoHover, setLogoHover] = (0,react_.useState)(false);
    const [lastScrollY, setLastScrollY] = (0,react_.useState)(0);
    const [show, setShow] = (0,react_.useState)("top-0");
    const controlNavbar = ()=>{
        if (window.scrollY > 1700) {
            if (window.scrollY > lastScrollY) {
                setShow("translate-y-[-60px]");
            } else {
                setShow("top-0");
            }
        } else {
            setShow("top-0");
        }
        setLastScrollY(window.scrollY);
    };
    (0,react_.useEffect)(()=>{
        window.addEventListener("scroll", controlNavbar);
        return ()=>{
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [
        lastScrollY
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `absolute left-2 top-2 overflow-auto whitespace-nowrap h-fit max-w-[100vw] transition-all ease duration-1000 ${show} z-[100] bg-transparent`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex bg-transparent font-[surtRegular] lg:text-[24.96px] items-center justify-between",
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                onMouseLeave: ()=>setLogoHover(false),
                onMouseEnter: ()=>setLogoHover(true),
                className: "flex lg:text-3xl md:text-[35px] bg-transparent cursor-pointer text-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "lg:w-32 md:w-28 w-20 bg-transparent  min-h-full ",
                    src: "/Logo-Kriss-white.png"
                })
            })
        })
    });
};
/* harmony default export */ const components_NavbarBanner = (NavbarBanner);

;// CONCATENATED MODULE: ./components/Hero.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Hero = ()=>{
    const [isOpen, setIsOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_NavbarBanner, {
                setIsOpen: setIsOpen
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full video-wrapper relative   h-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: " bg-transparent banner-navigation  sm:items-center z-[999] text-black  font-[surtRegular] absolute top-1/2 left-1/3 md:text-[25px] text-[20px]  uppercase lg:text-[30px]",
                        children: "The Ultimate AI Chatbot for Dentists"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("video", {
                        className: "h-[100vh]   object-cover w-full overflow-hidden flex justify-center ic -z-[1] lg:block",
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                            type: "video/mp4",
                            src: "/kriss-banner.mp4"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " bg-transparent h-10 items-center justify-center  right-5 just z-[999]  text-white flex font-[surtRegular] absolute top-80   text-2xl  uppercase ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "bg-transparent",
                                    href: "#kriss.ai",
                                    children: "KRISS.AI"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " bg-transparent h-10 right-5  z-[999]  text-white flex font-[surtRegular] absolute top-[360px]  md:text-[25px] text-2xl   uppercase ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "bg-transparent",
                                    href: "#how-it-works",
                                    children: "HOW IT WORKS?"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " bg-transparent h-10 right-5  z-[999]  text-white flex font-[surtRegular] absolute top-[400px]  md:text-[25px] te  uppercase text-2xl ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "bg-transparent",
                                    href: "#pricing",
                                    children: "PRICING"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " bg-transparent h-10 right-5  z-[999]  text-white flex font-[surtRegular] absolute top-[440px]  md:text-[25px] text-2xl    uppercase  ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "bg-transparent",
                                    href: "#denchat",
                                    children: "DENCHAT"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " bg-transparent h-10 right-5  z-[999]  text-white flex font-[surtRegular] absolute top-[480px]  md:text-[25px] text-2xl   uppercase ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "bg-transparent",
                                    href: "#ai-vision",
                                    children: "AI VISION"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " bg-transparent h-10 right-5  z-[999]  text-white flex font-[surtRegular] absolute top-[520px]  md:text-[25px] text-2xl  uppercase ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "bg-transparent",
                                    href: "#sign-up",
                                    children: "SIGN UP"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Hero = (Hero);


/***/ }),

/***/ 7226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/tahirhameed/Documents/kriss.ai/components/Hero.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;