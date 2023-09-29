"use strict";
(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 7160:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 2336:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 7887:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 120:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 8231:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 982:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 9618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8423:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 4126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'our-work',
        {
        children: [
        'wally',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5119)), "/Users/tahirhameed/Documents/kriss.ai/src/app/our-work/wally/page.jsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2911)), "/Users/tahirhameed/Documents/kriss.ai/src/app/layout.js"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["/Users/tahirhameed/Documents/kriss.ai/src/app/our-work/wally/page.jsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/our-work/wally/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/our-work/wally/page",
        pathname: "/our-work/wally",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 8615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);


const Image = ({ src })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:w-[90%] mb-16 mt-4 md:mt-16 md:mb-16 lg:mt-32 lg:mb-32 lg:w-[80%] w-[95%] flex items-center flex-col mx-auto h-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            className: "lg:h-[900px] w-full object-cover   ",
            src: src
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ }),

/***/ 5119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var _components_inividualPage_MainBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2721);
/* harmony import */ var _components_inividualPage_ServiceImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2606);
/* harmony import */ var _components_inividualPage_AnimatedQuotes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(562);
/* harmony import */ var _components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8230);
/* harmony import */ var _components_inividualPage_ProjectCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9283);
/* harmony import */ var _components_inividualPage_SideBySide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4608);
/* harmony import */ var _components_inividualPage_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8615);
/* harmony import */ var _components_inividualPage_NextProjects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5454);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7844);











const page = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_MainBanner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                productName: "WALLY",
                src: "https://images.ctfassets.net/d9627l0amdl4/6y5ngUEfDl7jxlP2lhNX5S/f53659b45a76e607da3930746cb5063f/Wally_part02_image_VF3.jpg?h=1980&w=2200&q=80&fit=fill&&fm=webp&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ServiceImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                service: "STRATEGY + BRANDING + PACKAGING + WEBSITE",
                src: "https://images.ctfassets.net/d9627l0amdl4/73SfhvA8UhxrxpgclO2qFD/f2cdcc66496c31cd8aebae8c6db1c8e1/box1.gif?&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_AnimatedQuotes__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                bottomQuote: "Wally came to us with a bold plan—reimagining dental care end-to-end to make it smarter, more effective, affordable and enjoyable. With virtual custom care from the comfort of home and a curated product box built for your mouth only, Wally At Home helps you create a routine that really works, on your terms. We also helped them brand their in-studio service, Care by Wally, with unlimited in-person cleaning, whitening and more in NYC.",
                midText: "Mouth.",
                topQuote: "BE A SMART"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                src: "https://images.ctfassets.net/d9627l0amdl4/3DAUe0Mu388NqSPQFvLxrQ/ddedcf49f35d706bce6881eec7a3efa6/wally1.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ProjectCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                desc: "Here’s How: We positioned Wally as A Better Way to a Brighter Smile. In messaging, we expressed an irreverent personality, technology-driven style and disruptive mission in the tagline Be a Smart Mouth. To bring our strategy to life, we developed a visual identity with a bright and refreshing feel, pushing thoughtful design to a vibrant, poppy place. Our logomark feels bold yet friendly, with a subtle smile in the Y. We selected a fresh palette with patterns that highlight the way oral care tools like (toothpaste, floss and brush bristles) resemble W’s. Photography choices that feel approachable, joyful and modern support the design. As does animation that adds energy and dynamism to the brand. Together, the full ecosystem conveys the bold ethos and innovative vision of Wally.",
                src: "https://images.ctfassets.net/d9627l0amdl4/2UmFCOVMaiT3yazoMYqW8b/1686997dc0cb49dd77a0eef4e706d9c4/Wally_4.jpg?h=1463&w=1300&q=80&fit=fill&&fm=webp&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " lg:w-[70%] w-full md:h-[410px] h-[200px] mt-5 lg:h-[600px]  mx-auto ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                    className: "w-full h-full object-cover  ",
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                        type: "video/mp4",
                        src: "https://videos.ctfassets.net/d9627l0amdl4/5APbLMbLX2s0vZGyEssdWT/8f1735fac91b354b87598e15074c0efd/wallylogo__1_.mp4"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                src: "https://images.ctfassets.net/d9627l0amdl4/6Km9Pb36nmEUDA1lhMqiwO/8eff41540f452718f0cb4d1375ba0f87/Boxes.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "lg:h-[70vh] mb-10 h-[30vh] lg:mt-20 md:mt-10 mt-5 justify-between flex flex-col lg:w-[80%] w-[95%] md:w-[70%] mx-auto ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center flex flex-col items-center justify-center font-semibold ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "lg:text-8xl md:text-6xl text-center items-center justify-center flex text-3xl ",
                            children: "Redesigning Dental For A Truly Fresh Feeling."
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: " text-xs md:text-sm lg:text-base text-center",
                        children: "WALLY IS REIMAGINING DENTAL CARE END-TO-END TO BRIGHTEN YOUR SMILE, IMPROVE YOUR HEALTH AND BLOW YOUR MIND."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_SideBySide__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                src2: "https://images.ctfassets.net/d9627l0amdl4/6C5s3ujqHAO628AmDPgjLs/b43c0e86d94cf36f316d3711bdbf8229/ezgif.com-gif-maker__8_.gif?&q=80",
                src1: "https://images.ctfassets.net/d9627l0amdl4/4x5ddnEZqInsUTh4bE4im1/31598ec2aa7db609902b9f96aec26698/ezgif.com-gif-maker__1_.gif?&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_Image__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                src: "https://images.ctfassets.net/d9627l0amdl4/2zm4ojz8fQe8nL1Fyv4HwC/1126d9056049a8dcab2e423269b56715/Wally_anim_submark_1.gif?&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                src: "https://images.ctfassets.net/d9627l0amdl4/5cxHNtZP7tOyFVAWcxCITk/4ae8cd94d6d33e879a1aa6b15c232222/social.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_Image__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                src: "https://images.ctfassets.net/d9627l0amdl4/3nQ7ayxo8K2aWbVfQaOYnR/eda453ed7559a1e4f594f8ab09db7b82/Wally_anim_type_unlimited_cleaning_02-_1_.gif?&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_Image__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                src: "https://images.ctfassets.net/d9627l0amdl4/1tcK4s2UVYEtohIIuVuzOu/2a1dc6832d0dac20ff3ec3c17866763e/Screen_Shot_2023-07-06_at_3.37.56_PM.png?w=2000&q=80&fit=fill&&fm=webp&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                src: "https://images.ctfassets.net/d9627l0amdl4/5evuDykRdlvfuYtxcIqvEL/c2301698c3249c3fd8c6a79cc8cc300b/rooms2.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_Image__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                src: "https://images.ctfassets.net/d9627l0amdl4/3pCuB8V2ZlmMJPUWdumk0h/4cfceb66ce580d9037147cf712d115dc/tote1.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_Image__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                src: "https://images.ctfassets.net/d9627l0amdl4/I19TVEod1I39Yx840jUvX/09f132ad1121799976639c1f0439c7cb/Wally_anim_tagline.gif?&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                src: "https://images.ctfassets.net/d9627l0amdl4/4ZE4OVVx8FI5bGtkeJ6wME/1357c1a3060c128a628c6cfd12adc8b4/Flat_Postcard_Mockup_new.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_Image__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                src: "https://images.ctfassets.net/d9627l0amdl4/3UiJDXjKpI4c48odri6phD/8eaffed104d090da532c54581f530e8c/Wally_anim_toothpastepattern.gif?&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                src: "https://images.ctfassets.net/d9627l0amdl4/5zIV1zGhW0zGIAxNOZIi3p/bdae06cc9e9cb1b58e343262728bc107/wally2.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_Image__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                src: "https://images.ctfassets.net/d9627l0amdl4/51yjXX2SmyLjmMYRV2YhiK/31c977fefba49b4dcbac257312e88d5f/paper-tube.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_NextProjects__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                link1: "/our-work/lamaria",
                text1: "LAMARIA",
                text2: "HOMECOMING",
                link2: "/our-work/homecoming",
                src2: "https://images.ctfassets.net/d9627l0amdl4/50UqXbJTRq14d8UuDTHdFd/5db23802797ba31e13e5e223f6e08aa8/1_copy2.jpg?h=910&w=1300&q=80&fit=fill&&fm=webp&q=80",
                src1: "https://images.ctfassets.net/d9627l0amdl4/3va0JItFjdmFWNYB9SxEIy/570f26c4c61e6612e79a1dc448c64d95/rendering1.jpg?h=702&w=1300&q=80&fit=fill&&fm=webp&q=80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
                main: true,
                src: "https://images.ctfassets.net/d9627l0amdl4/7458nOY15iaWjP1g9L7j6V/382dc0c6072baf4cb2222735937b44b4/wallyfooter.jpg?h=2200&w=2200&q=80&fit=fill&&fm=webp&q=80"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,136,118,320,853,321,175,132,998], () => (__webpack_exec__(4126)));
module.exports = __webpack_exports__;

})();