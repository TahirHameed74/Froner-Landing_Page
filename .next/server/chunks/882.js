exports.id = 882;
exports.ids = [882];
exports.modules = {

/***/ 2260:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
"use client"


function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(8038);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

___$insertStyle(".rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}");

const Marquee = React.forwardRef(function Marquee({ style = {}, className = "", autoFill = false, play = true, pauseOnHover = false, pauseOnClick = false, direction = "left", speed = 50, delay = 0, loop = 0, gradient = false, gradientColor = "white", gradientWidth = 200, onFinish, onCycleComplete, onMount, children, }, ref) {
    // React Hooks
    const [containerWidth, setContainerWidth] = React.useState(0);
    const [marqueeWidth, setMarqueeWidth] = React.useState(0);
    const [multiplier, setMultiplier] = React.useState(1);
    const [isMounted, setIsMounted] = React.useState(false);
    const rootRef = React.useRef(null);
    const containerRef = ref || rootRef;
    const marqueeRef = React.useRef(null);
    // Calculate width of container and marquee and set multiplier
    const calculateWidth = React.useCallback(() => {
        if (marqueeRef.current && containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const marqueeRect = marqueeRef.current.getBoundingClientRect();
            let containerWidth = containerRect.width;
            let marqueeWidth = marqueeRect.width;
            // Swap width and height if direction is up or down
            if (direction === "up" || direction === "down") {
                containerWidth = containerRect.height;
                marqueeWidth = marqueeRect.height;
            }
            if (autoFill && containerWidth && marqueeWidth) {
                setMultiplier(marqueeWidth < containerWidth
                    ? Math.ceil(containerWidth / marqueeWidth)
                    : 1);
            }
            else {
                setMultiplier(1);
            }
            setContainerWidth(containerWidth);
            setMarqueeWidth(marqueeWidth);
        }
    }, [autoFill, containerRef, direction]);
    // Calculate width and multiplier on mount and on window resize
    React.useEffect(() => {
        if (!isMounted)
            return;
        calculateWidth();
        if (marqueeRef.current && containerRef.current) {
            const resizeObserver = new ResizeObserver(() => calculateWidth());
            resizeObserver.observe(containerRef.current);
            resizeObserver.observe(marqueeRef.current);
            return () => {
                if (!resizeObserver)
                    return;
                resizeObserver.disconnect();
            };
        }
    }, [calculateWidth, containerRef, isMounted]);
    // Recalculate width when children change
    React.useEffect(() => {
        calculateWidth();
    }, [calculateWidth, children]);
    React.useEffect(() => {
        setIsMounted(true);
    }, []);
    // Runs the onMount callback, if it is a function, when Marquee is mounted.
    React.useEffect(() => {
        if (typeof onMount === "function") {
            onMount();
        }
    }, []);
    // Animation duration
    const duration = React.useMemo(() => {
        if (autoFill) {
            return (marqueeWidth * multiplier) / speed;
        }
        else {
            return marqueeWidth < containerWidth
                ? containerWidth / speed
                : marqueeWidth / speed;
        }
    }, [autoFill, containerWidth, marqueeWidth, multiplier, speed]);
    const containerStyle = React.useMemo(() => (Object.assign(Object.assign({}, style), { ["--pause-on-hover"]: !play || pauseOnHover ? "paused" : "running", ["--pause-on-click"]: !play || (pauseOnHover && !pauseOnClick) || pauseOnClick
            ? "paused"
            : "running", ["--width"]: direction === "up" || direction === "down" ? `100vh` : "100%", ["--transform"]: direction === "up"
            ? "rotate(-90deg)"
            : direction === "down"
                ? "rotate(90deg)"
                : "none" })), [style, play, pauseOnHover, pauseOnClick, direction]);
    const gradientStyle = React.useMemo(() => ({
        ["--gradient-color"]: gradientColor,
        ["--gradient-width"]: typeof gradientWidth === "number"
            ? `${gradientWidth}px`
            : gradientWidth,
    }), [gradientColor, gradientWidth]);
    const marqueeStyle = React.useMemo(() => ({
        ["--play"]: play ? "running" : "paused",
        ["--direction"]: direction === "left" ? "normal" : "reverse",
        ["--duration"]: `${duration}s`,
        ["--delay"]: `${delay}s`,
        ["--iteration-count"]: !!loop ? `${loop}` : "infinite",
        ["--min-width"]: autoFill ? `auto` : "100%",
    }), [play, direction, duration, delay, loop, autoFill]);
    const childStyle = React.useMemo(() => ({
        ["--transform"]: direction === "up"
            ? "rotate(90deg)"
            : direction === "down"
                ? "rotate(-90deg)"
                : "none",
    }), [direction]);
    // Render {multiplier} number of children
    const multiplyChildren = React.useCallback((multiplier) => {
        return [
            ...Array(Number.isFinite(multiplier) && multiplier >= 0 ? multiplier : 0),
        ].map((_, i) => (React__default['default'].createElement(React.Fragment, { key: i }, React.Children.map(children, (child) => {
            return (React__default['default'].createElement("div", { style: childStyle, className: "rfm-child" }, child));
        }))));
    }, [childStyle, children]);
    return !isMounted ? null : (React__default['default'].createElement("div", { ref: containerRef, style: containerStyle, className: "rfm-marquee-container " + className },
        gradient && React__default['default'].createElement("div", { style: gradientStyle, className: "rfm-overlay" }),
        React__default['default'].createElement("div", { className: "rfm-marquee", style: marqueeStyle, onAnimationIteration: onCycleComplete, onAnimationEnd: onFinish },
            React__default['default'].createElement("div", { className: "rfm-initial-child-container", ref: marqueeRef }, React.Children.map(children, (child) => {
                return (React__default['default'].createElement("div", { style: childStyle, className: "rfm-child" }, child));
            })),
            multiplyChildren(multiplier - 1)),
        React__default['default'].createElement("div", { className: "rfm-marquee", style: marqueeStyle }, multiplyChildren(multiplier))));
});

exports.Z = Marquee;
//# sourceMappingURL=index.js.map


/***/ })

};
;