"use strict";
(() => {
var exports = {};
exports.id = 602;
exports.ids = [602];
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

/***/ 7414:
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
        'apothekary',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1693)), "/Users/tahirhameed/Documents/kriss.ai/src/app/our-work/apothekary/page.jsx"],
          
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
const pages = ["/Users/tahirhameed/Documents/kriss.ai/src/app/our-work/apothekary/page.jsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/our-work/apothekary/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/our-work/apothekary/page",
        pathname: "/our-work/apothekary",
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

/***/ 1693:
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
/* harmony import */ var _components_OurWorkCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(995);
/* harmony import */ var _components_inividualPage_AnimatedQuote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3171);
/* harmony import */ var _components_inividualPage_SideBySide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4608);
/* harmony import */ var _components_inividualPage_NextProjects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5454);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7844);
/* harmony import */ var _components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8230);
/* harmony import */ var _components_inividualPage_ProjectCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9283);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1919);













const page = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full h-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_MainBanner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                productName: "APOTHEKARY",
                src: "https://images.ctfassets.net/d9627l0amdl4/2My9RgqgVVlSLN6VaoqaV9/3fe14c973b857017d80bee5e0710f78a/Apothekary_Image_01_copy.jpg?h=1728&w=1920&q=80&fit=fill&&fm=webp&q=80"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ServiceImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        service: "BRANDING + PACKAGING",
                        src: "https://images.ctfassets.net/d9627l0amdl4/yYbQaJzf2U915hJB3uDU7/c304c4e34897912cc7e0b8c58ad5bb27/Apothekary_Image_02_sm.jpg?h=1100&q=80&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_AnimatedQuotes__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        topQuote: "NATURE IS ",
                        midText: "MEDICINE.",
                        bottomQuote: "With herbal blends, tinctures and education, Apothekary makes building a plant medicine practice simple, accessible and enjoyable. They asked Forner to help them connect with a wider audience and set the stage for future growth. We helped them share an ethos that bridges East and West in experiences of everyday healing."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        src: "https://images.ctfassets.net/d9627l0amdl4/3798hKUwKVUwHMYfMlxlF1/c185a468f1ced2731f71d3bc5a79432b/Blue_Me_Away_Shot_wide_sm.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ProjectCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        desc: "Here’s how: In strategy, we focused on breaking down barriers to entry for newcomers, making building a plant medicine practice feel enjoyable and empowering. To do that, we positioned Apothekary as your plant medicine partners, guiding customers to connect with a more natural way of life. We celebrated their connective ethos with custom bridge-like connections in the logomark. Then, we helped them take a stand for herbal healing with the powerful tagline Nature is Medicine. To evoke a personalized way of herbal medicine, we warmly invite people into the Apothekary community with design and messaging throughout the suite. The packaging provides a window into the product via die-cut, a simple how-to, and illustrations that deepen understanding of ingredient benefits. A golden dosing spoon elevates the ritual of mixing your own healing medicine, every day.",
                        src: "https://images.ctfassets.net/d9627l0amdl4/yYbQaJzf2U915hJB3uDU7/c304c4e34897912cc7e0b8c58ad5bb27/Apothekary_Image_02_sm.jpg?h=1400&q=80&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        src: "https://images.ctfassets.net/d9627l0amdl4/7BikFfLctnrpZdgYJeayc0/cff22b27aa87e268a125124a1ba3b78e/Apothekary_Image_05_copy.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_AnimatedQuote__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        quote: "Plant Medicine For Everyday Healing."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_SideBySide__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        src1: "https://images.ctfassets.net/d9627l0amdl4/7IiNqeWx1OHkPbKxlS7x2f/061c24f06ad0b7ab7d5440d5446a3331/1b.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80",
                        src2: "https://images.ctfassets.net/d9627l0amdl4/1bXCX9xQ37AtKFM8E5O644/ece5239c5ffa6627a746db9bdda5c431/3.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        src: "https://images.ctfassets.net/d9627l0amdl4/3Sdn4jolx6XzxYPTzg2kkv/852534a0059630d6192c0744538b1a86/Apothekary_Image_04_copy.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        src: "https://images.ctfassets.net/d9627l0amdl4/51PWg7Uu62RDXMRgmvySDy/03f5488d936409e1aeb0d624253b138f/social.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_SideBySide__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        video: "https://videos.ctfassets.net/d9627l0amdl4/31v351XBjUPlEGJiWQbkDR/8c2e8c1f2d2d9d5f276e429a4b7653cc/logovidwide.mp4",
                        src2: "https://images.ctfassets.net/d9627l0amdl4/6Gij33V1EJOMlnNXpaRbcn/68bf15a528d069991a173f41f8d5e471/Apothekary_Image_03_sq_copy.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        src: "https://images.ctfassets.net/d9627l0amdl4/WreShBBhCUIY9Zb0O4oR4/9f001e4bf6c7ec6b5604a9ff6df1d865/OOH1_copy.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        src: "https://images.ctfassets.net/d9627l0amdl4/3nZppWq6KOk8dfhg8pyGj9/0e83e8d2e38b2dd1d9f734b838e68550/IMG_5308.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_SideBySide__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        src2: "https://images.ctfassets.net/d9627l0amdl4/4OjiulY16LZBVV791TaEYc/e3549b3b311091f4ffec767b915bf027/rosedrink.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80",
                        src1: "https://images.ctfassets.net/d9627l0amdl4/1rvs7OPFX35x9yJgbPIrbe/be6b914ed04e23bab5de7e2ad24d5e79/aptimage.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        src: "https://images.ctfassets.net/d9627l0amdl4/1Zg5NQguJNOmgdDzbUsalg/144c328d34312598ebf495e7fb8416c7/layout3.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_ResponsiveBanner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        src: "https://images.ctfassets.net/d9627l0amdl4/6nz2nUVrhBHXuF9IrbkBSl/5e550d503afd2686ee14362a30ee0db9/DailyEssentials-black2.png?w=1920&q=80&fit=fill&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_SideBySide__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        src2: "https://images.ctfassets.net/d9627l0amdl4/IP2S456mETVlMVFOBUWFx/ca9e909ce3e5e753470a8ba04568f573/shipping1_copy_2b_sm.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80",
                        src1: "https://images.ctfassets.net/d9627l0amdl4/6RBmBQnJmc70kFSwugvaX6/cf4e900cde28ab2979d12e2bf1e98995/refill_copy1.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inividualPage_NextProjects__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        link2: "/our-work/be-well",
                        link1: "/our-work/fig-and-thistle",
                        text2: "BE WELL",
                        text1: "FIG & THISTLE",
                        src2: "https://images.ctfassets.net/d9627l0amdl4/IP2S456mETVlMVFOBUWFx/ca9e909ce3e5e753470a8ba04568f573/shipping1_copy_2b_sm.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80",
                        src1: "https://images.ctfassets.net/d9627l0amdl4/6RBmBQnJmc70kFSwugvaX6/cf4e900cde28ab2979d12e2bf1e98995/refill_copy1.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
                        main: true,
                        src: "https://images.ctfassets.net/d9627l0amdl4/kt4iz01zPBrbsLdD17sak/971db7158949018cc3da6f53a16a187a/apoth.jpg?h=1920&w=1920&q=80&fit=fill&&fm=webp&q=80"
                    })
                ]
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
var __webpack_exports__ = __webpack_require__.X(0, [587,136,118,320,853,321,175,132,995,129], () => (__webpack_exec__(7414)));
module.exports = __webpack_exports__;

})();