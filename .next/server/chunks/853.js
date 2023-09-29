exports.id = 853;
exports.ids = [853];
exports.modules = {

/***/ 46:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 719:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8839))

/***/ }),

/***/ 671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(569);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1691);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const FullScreenMenu = ({ isOpen, setIsOpen })=>{
    const navLinks = [
        {
            title: "OUR WORK",
            href: "/our-work"
        },
        {
            title: "ABOUT",
            href: "/about"
        },
        {
            title: "CONTACT",
            href: "/contact"
        }
    ];
    const menuVars = {
        initial: {
            scaleY: 0
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [
                    0.12,
                    0,
                    0.39,
                    0
                ]
            }
        },
        exit: {
            opacity: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        }
    };
    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1
            }
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .AnimatePresence */ .M, {
        children: isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
            variants: menuVars,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            className: `fixed top-0 left-0 text-[#4a4036] bg-[#ecece4] w-full h-full origin-top  z-[999] menu-container `,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-full p-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "absolute text-2xl   z-50 top-4 right-4 text-black hover:text-gray-700 cursor-pointer",
                        onClick: ()=>setIsOpen(false),
                        children: "CLOSE"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
                        variants: containerVars,
                        initial: "initial",
                        animate: "open",
                        exit: "initial",
                        className: "flex flex-col h-full justify-center font-lora items-center gap-4 ",
                        children: navLinks.map((link, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>setIsOpen(false),
                                className: "overflow-hidden",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNavLink, {
                                    title: link.title,
                                    href: link.href
                                }, index)
                            });
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullScreenMenu);
const mobileLinkVars = {
    initial: {
        y: "30vh",
        transition: {
            duration: 0.5,
            ease: [
                0.37,
                0,
                0.63,
                1
            ]
        }
    },
    open: {
        y: 0,
        transition: {
            ease: [
                0,
                0.55,
                0.45,
                1
            ],
            duration: 0.7
        }
    }
};
const MobileNavLink = ({ title, href })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
        variants: mobileLinkVars,
        className: "text-5xl uppercase text-black",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: href,
            children: title
        })
    });
};


/***/ }),

/***/ 8094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ShineOnHover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6447);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Navbar = ({ setIsOpen })=>{
    const [logoHover, setLogoHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [lastScrollY, setLastScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("top-0");
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
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        window.addEventListener("scroll", controlNavbar);
        return ()=>{
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [
        lastScrollY
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `sticky p-3 m-0 overflow-auto whitespace-nowrap h-fit max-w-[100vw] transition-all ease duration-1000 ${show} z-[100] bg-transparent`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex bg-transparent font-[surtRegular] lg:text-[24.96px] items-center justify-between",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    onMouseLeave: ()=>setLogoHover(false),
                    onMouseEnter: ()=>setLogoHover(true),
                    className: "flex lg:text-3xl md:text-[35px] bg-transparent cursor-pointer text-lg",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "lg:w-32 md:w-28 w-20 bg-transparent  min-h-full ",
                        src: "Logo-Kriss-Black@4x.png"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>setIsOpen(true),
                    className: "text-sm lg:text-2xl md:text-2xl bg-transparent  cursor-pointer",
                    children: "MENU"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 6447:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ShineOnHover = ({ onClick, className, text })=>{
    return /*#__PURE__*/ _jsx("div", {
        onClick: onClick,
        className: `shine ${className} `,
        children: text
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ShineOnHover)));


/***/ }),

/***/ 8839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(158);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FullScreenMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3824);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8094);
/* __next_internal_client_entry_do_not_use__ default auto */ 





// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }
function RootLayout({ children }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            const LocomotiveScroll = (await __webpack_require__.e(/* import() */ 704).then(__webpack_require__.t.bind(__webpack_require__, 7704, 23))).default;
            const locomotiveScroll = new LocomotiveScroll({
                globalVelocity: -1000
            });
        })();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 2911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/tahirhameed/Documents/kriss.ai/src/app/layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 3824:
/***/ (() => {



/***/ })

};
;