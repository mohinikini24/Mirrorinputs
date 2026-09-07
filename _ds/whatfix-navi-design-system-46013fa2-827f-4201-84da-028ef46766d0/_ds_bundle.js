/* @ds-bundle: {"format":4,"namespace":"WhatfixNaviDesignSystem_46013f","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Kbd","sourcePath":"components/core/Kbd.jsx"},{"name":"Link","sourcePath":"components/core/Link.jsx"},{"name":"SplitButton","sourcePath":"components/core/SplitButton.jsx"},{"name":"ToggleButton","sourcePath":"components/core/ToggleButton.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/data/AvatarGroup.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"List","sourcePath":"components/data/List.jsx"},{"name":"ListItem","sourcePath":"components/data/List.jsx"},{"name":"AlertPictogram","sourcePath":"components/feedback/AlertPictogram.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Chip","sourcePath":"components/feedback/Chip.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NumberInput","sourcePath":"components/forms/NumberInput.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextArea","sourcePath":"components/forms/TextArea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"ContentSwitcher","sourcePath":"components/navigation/ContentSwitcher.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"AlertModal","sourcePath":"components/overlay/AlertModal.jsx"},{"name":"Drawer","sourcePath":"components/overlay/Drawer.jsx"},{"name":"Menu","sourcePath":"components/overlay/Menu.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"},{"name":"Popover","sourcePath":"components/overlay/Popover.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"9a04a954e7e6","components/core/Button.jsx":"44ff7c4b783b","components/core/Divider.jsx":"a6ea77f025e1","components/core/Icon.jsx":"6d56deb331a7","components/core/IconButton.jsx":"702ed837e5e1","components/core/Kbd.jsx":"82e0f105e771","components/core/Link.jsx":"75b17cac4667","components/core/SplitButton.jsx":"bd0c6177711d","components/core/ToggleButton.jsx":"e840a7ed719d","components/data/Avatar.jsx":"989368243090","components/data/AvatarGroup.jsx":"375f65b40b0e","components/data/Card.jsx":"6aa352772e5c","components/data/List.jsx":"5c990d7ac8d9","components/feedback/AlertPictogram.jsx":"24fcb71b9db3","components/feedback/Badge.jsx":"152467a2d6ea","components/feedback/Banner.jsx":"9f4d08809140","components/feedback/Callout.jsx":"6ead32953e82","components/feedback/Chip.jsx":"02ebff3e4fd1","components/feedback/EmptyState.jsx":"1ad2065b68bd","components/feedback/ProgressBar.jsx":"5619f8a25a03","components/feedback/Skeleton.jsx":"9288efa5b9c8","components/feedback/Spinner.jsx":"7ae552d4cd6d","components/feedback/Tag.jsx":"1d514ae1b556","components/feedback/Tooltip.jsx":"ba54ceabc078","components/forms/Checkbox.jsx":"cef76899369a","components/forms/Input.jsx":"afa5038cd388","components/forms/NumberInput.jsx":"10fa956b849e","components/forms/Radio.jsx":"bb2eb36a3f6e","components/forms/SearchField.jsx":"f7d818a5a737","components/forms/Select.jsx":"4cee66a9dc44","components/forms/Slider.jsx":"cee78a6b53da","components/forms/Switch.jsx":"5a765f5c2933","components/forms/TextArea.jsx":"a20d8023949f","components/navigation/Accordion.jsx":"df02f5b2cb04","components/navigation/Breadcrumbs.jsx":"bd458f96369b","components/navigation/ContentSwitcher.jsx":"27af561ca034","components/navigation/Pagination.jsx":"184215c3a478","components/navigation/Stepper.jsx":"421c97cf6416","components/navigation/Tabs.jsx":"34d6820c5626","components/overlay/AlertModal.jsx":"dfe02006dc3b","components/overlay/Drawer.jsx":"2e0d9fd0d2b7","components/overlay/Menu.jsx":"c9c22c2944c9","components/overlay/Modal.jsx":"bde455c4a5aa","components/overlay/Popover.jsx":"3dc98762053e","ui_kits/creator-studio/ContentScreen.jsx":"6302596af101","ui_kits/creator-studio/Sidebar.jsx":"a9bfae03164c","ui_kits/dap-widget/HostApp.jsx":"2dbc0190ed5c","ui_kits/dap-widget/SelfHelpWidget.jsx":"6c2f3afc21b9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WhatfixNaviDesignSystem_46013f = window.WhatfixNaviDesignSystem_46013f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
/**
 * Whatfix logo. `mark` renders the flame glyph only (authentic vector from
 * the source file); `full` pairs the mark with the "whatfix" wordmark set
 * in Inkredible ink.
 */
function Logo({
  variant = 'mark',
  size = 32,
  color,
  wordmarkColor = 'var(--color-secondary-1000)',
  style = {}
}) {
  const ratio = 34.505 / 26.312;
  const h = size;
  const w = h * ratio;
  const mark = /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: "0 0 34.505 26.312",
    style: {
      display: 'block',
      flexShrink: 0
    },
    "aria-hidden": variant === 'full'
  }, /*#__PURE__*/React.createElement("path", {
    transform: "translate(10.971 0.019)",
    d: "M 17.881 12.665 L 17.88 12.665 L 11.467 12.665 L 16.989 0 L 23.534 0 L 17.881 12.665 Z M 11.467 12.666 L 11.466 12.666 L 7.57 21.602 L 7.413 21.602 L 6.387 12.666 L 0 12.666 L 1.835 26.293 L 11.799 26.293 L 12.953 23.707 L 17.859 12.714 L 17.881 12.666 L 11.467 12.666 Z",
    fill: color || '#FFA450',
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    transform: "matrix(-1,0,0,-1,23.534,26.293)",
    d: "M 7.57 21.602 L 16.988 0 L 23.534 0 L 11.799 26.293 L 1.835 26.293 L 1.486 23.708 L 0 12.667 L 6.414 12.667 L 7.413 21.602 L 7.57 21.602 Z",
    fill: color || '#F55800',
    fillRule: "evenodd"
  }));
  if (variant === 'mark') return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      ...style
    }
  }, mark);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.34,
      ...style
    }
  }, mark, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: size * 0.9,
      letterSpacing: '-0.02em',
      color: wordmarkColor,
      lineHeight: 1
    }
  }, "whatfix"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/** Thin rule / separator. */
function Divider({
  orientation = 'horizontal',
  label,
  spacing = 16,
  style = {}
}) {
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("div", {
      role: "separator",
      "aria-orientation": "vertical",
      style: {
        width: 1,
        alignSelf: 'stretch',
        background: 'var(--border-subtle)',
        margin: `0 ${spacing}px`,
        ...style
      }
    });
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", {
      role: "separator",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        margin: `${spacing}px 0`,
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--border-subtle)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--font-weight-medium) 0.75rem/1 var(--font-sans)',
        color: 'var(--text-tertiary)',
        letterSpacing: '0.03em'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--border-subtle)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      height: 1,
      width: '100%',
      background: 'var(--border-subtle)',
      margin: `${spacing}px 0`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — thin wrapper over Tabler Icons (Navi's icon set), rendered via
 * the Tabler webfont. Load the webfont once in the host page:
 *   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3/dist/tabler-icons.min.css">
 */
function Icon({
  name = 'circle',
  size = 20,
  color,
  strokeWidth,
  style = {},
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    className: `ti ti-${name} ${className}`,
    "aria-hidden": "true",
    style: {
      fontSize: size,
      lineHeight: 1,
      color: color || 'inherit',
      display: 'inline-flex',
      flexShrink: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  small: {
    height: 32,
    padding: '0 12px',
    font: '0.875rem',
    gap: 6,
    icon: 16,
    radius: 'var(--radius-small)'
  },
  default: {
    height: 40,
    padding: '0 16px',
    font: '0.875rem',
    gap: 8,
    icon: 18,
    radius: 'var(--radius-small)'
  },
  large: {
    height: 48,
    padding: '0 20px',
    font: '1rem',
    gap: 8,
    icon: 20,
    radius: 'var(--radius-small)'
  }
};
const INTENTS = {
  primary: {
    base: 'var(--color-primary-400)',
    hover: 'var(--color-primary-500)',
    active: 'var(--color-primary-600)',
    soft: 'var(--color-primary-50)',
    text: 'var(--color-primary-400)'
  },
  neutral: {
    base: 'var(--color-secondary-1000)',
    hover: 'var(--color-secondary-900)',
    active: 'var(--color-secondary-800)',
    soft: 'var(--color-secondary-100)',
    text: 'var(--color-secondary-800)'
  },
  success: {
    base: 'var(--color-success-500)',
    hover: 'var(--color-success-600)',
    active: 'var(--color-success-700)',
    soft: 'var(--color-success-100)',
    text: 'var(--color-success-600)'
  },
  critical: {
    base: 'var(--color-critical-400)',
    hover: 'var(--color-critical-500)',
    active: 'var(--color-critical-600)',
    soft: 'var(--color-critical-100)',
    text: 'var(--color-critical-500)'
  },
  warning: {
    base: 'var(--color-warning-500)',
    hover: 'var(--color-warning-600)',
    active: 'var(--color-warning-700)',
    soft: 'var(--color-warning-100)',
    text: 'var(--color-warning-600)'
  },
  info: {
    base: 'var(--color-info-400)',
    hover: 'var(--color-info-500)',
    active: 'var(--color-info-600)',
    soft: 'var(--color-info-100)',
    text: 'var(--color-info-500)'
  }
};
function Button({
  children,
  variant = 'primary',
  intent = 'primary',
  size = 'default',
  iconLeft,
  iconRight,
  rounded = false,
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  style = {},
  ...rest
}) {
  const sz = SIZES[size] || SIZES.default;
  const it = INTENTS[intent] || INTENTS.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  let bg,
    color,
    border = 'none',
    shadow = 'none';
  if (variant === 'primary') {
    bg = active ? it.active : hover ? it.hover : it.base;
    color = 'var(--color-white)';
  } else if (variant === 'secondary') {
    bg = active ? it.soft : hover ? it.soft : 'transparent';
    color = it.text;
    border = `1px solid ${hover ? it.base : 'var(--border-default)'}`;
  } else {
    /* tertiary / ghost */
    bg = active ? it.soft : hover ? it.soft : 'transparent';
    color = it.text;
  }
  if (disabled) {
    bg = variant === 'primary' ? 'var(--color-secondary-200)' : 'transparent';
    color = 'var(--color-secondary-400)';
    border = variant === 'secondary' ? '1px solid var(--border-subtle)' : border === 'none' ? 'none' : '1px solid var(--border-subtle)';
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sz.gap,
      height: sz.height,
      padding: sz.padding,
      font: `var(--font-weight-medium) ${sz.font}/1 var(--font-sans)`,
      color,
      background: bg,
      border,
      borderRadius: rounded ? 'var(--radius-full)' : sz.radius,
      boxShadow: shadow,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background 120ms ease, border-color 120ms ease',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-2",
    size: sz.icon,
    style: {
      animation: 'navi-spin 0.7s linear infinite'
    }
  }), !loading && iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: sz.icon
  }), children, !loading && iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: sz.icon
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes navi-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  small: {
    box: 32,
    icon: 18
  },
  default: {
    box: 40,
    icon: 20
  },
  large: {
    box: 48,
    icon: 24
  }
};

/** Square/round icon-only button. */
function IconButton({
  icon = 'dots',
  variant = 'tertiary',
  intent = 'neutral',
  size = 'default',
  rounded = false,
  disabled = false,
  'aria-label': ariaLabel = 'action',
  onClick,
  style = {},
  ...rest
}) {
  const sz = SIZES[size] || SIZES.default;
  const [hover, setHover] = React.useState(false);
  const soft = {
    neutral: 'var(--color-secondary-100)',
    primary: 'var(--color-primary-50)',
    critical: 'var(--color-critical-100)',
    info: 'var(--color-info-100)'
  }[intent] || 'var(--color-secondary-100)';
  const fg = {
    neutral: 'var(--icon-primary)',
    primary: 'var(--color-primary-400)',
    critical: 'var(--color-critical-400)',
    info: 'var(--color-info-500)'
  }[intent] || 'var(--icon-primary)';
  let bg = 'transparent',
    color = fg,
    border = 'none';
  if (variant === 'primary') {
    bg = hover ? 'var(--color-primary-500)' : 'var(--color-primary-400)';
    color = 'var(--color-white)';
  } else if (variant === 'secondary') {
    border = `1px solid ${hover ? 'var(--border-strong)' : 'var(--border-default)'}`;
    bg = hover ? soft : 'transparent';
  } else {
    bg = hover ? soft : 'transparent';
  }
  if (disabled) {
    color = 'var(--color-secondary-400)';
    bg = variant === 'primary' ? 'var(--color-secondary-200)' : 'transparent';
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: sz.box,
      height: sz.box,
      padding: 0,
      background: bg,
      color,
      border,
      borderRadius: rounded ? 'var(--radius-full)' : 'var(--radius-small)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background 120ms ease',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sz.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Kbd.jsx
try { (() => {
/** Keyboard key cap. */
function Kbd({
  children,
  size = 'default',
  style = {}
}) {
  const h = size === 'small' ? 20 : 24;
  return /*#__PURE__*/React.createElement("kbd", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: h,
      height: h,
      padding: '0 6px',
      fontFamily: 'var(--font-mono)',
      fontSize: size === 'small' ? '0.6875rem' : '0.75rem',
      fontWeight: 500,
      color: 'var(--text-secondary)',
      background: 'var(--color-secondary-50)',
      border: '1px solid var(--border-default)',
      borderBottomWidth: 2,
      borderRadius: 'var(--radius-small)',
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/core/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text link in Navi brand-orange. */
function Link({
  children,
  href = '#',
  size = 'default',
  underline = 'hover',
  iconRight,
  disabled = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    small: '0.875rem',
    default: '1rem',
    large: '1.125rem'
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: disabled ? undefined : href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-sans)',
      fontSize: sizes[size] || sizes.default,
      fontWeight: 'var(--font-weight-medium)',
      color: disabled ? 'var(--text-disabled)' : hover ? 'var(--text-link-hover)' : 'var(--text-link)',
      textDecoration: underline === 'always' || underline === 'hover' && hover ? 'underline' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), children, iconRight);
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Link.jsx", error: String((e && e.message) || e) }); }

// components/core/SplitButton.jsx
try { (() => {
/** Split button: a primary action plus a chevron dropdown trigger. */
function SplitButton({
  children,
  variant = 'primary',
  intent = 'primary',
  size = 'default',
  iconLeft,
  onClick,
  onMenu,
  disabled = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'stretch',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: variant,
    intent: intent,
    size: size,
    iconLeft: iconLeft,
    onClick: onClick,
    disabled: disabled,
    style: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: variant === 'primary' ? 'rgba(255,255,255,0.35)' : 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-down",
    variant: variant,
    intent: intent,
    size: size,
    onClick: onMenu,
    disabled: disabled,
    "aria-label": "More options",
    style: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    }
  }));
}
Object.assign(__ds_scope, { SplitButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SplitButton.jsx", error: String((e && e.message) || e) }); }

// components/core/ToggleButton.jsx
try { (() => {
/** Toggle button — pressable on/off, single or in a group (segmented). */
function ToggleButton({
  children,
  icon,
  pressed = false,
  size = 'default',
  onChange,
  disabled = false,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const h = size === 'small' ? 32 : size === 'large' ? 48 : 40;
  const iconSz = size === 'small' ? 16 : size === 'large' ? 20 : 18;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": pressed,
    disabled: disabled,
    onClick: () => onChange && onChange(!pressed),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: h,
      padding: children ? '0 14px' : 0,
      width: children ? 'auto' : h,
      justifyContent: 'center',
      font: `var(--font-weight-medium) ${size === 'small' ? '0.8125rem' : '0.875rem'}/1 var(--font-sans)`,
      color: pressed ? 'var(--color-primary-400)' : 'var(--text-secondary)',
      background: pressed ? 'var(--color-primary-50)' : hover ? 'var(--surface-hover)' : 'transparent',
      border: `1px solid ${pressed ? 'var(--color-primary-400)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-small)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background 120ms, border-color 120ms, color 120ms',
      boxSizing: 'border-box',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSz
  }), children);
}
Object.assign(__ds_scope, { ToggleButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ToggleButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64
};
const TONES = ['var(--color-primary-200)', 'var(--color-info-300)', 'var(--color-success-300)', 'var(--color-human-300)', 'var(--color-crimson-400)'];
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase() || '?';
}

/** Avatar — image, initials or icon, with optional presence dot. */
function Avatar({
  name,
  src,
  size = 'md',
  shape = 'circle',
  presence,
  style = {}
}) {
  const px = SIZES[size] || SIZES.md;
  const tone = TONES[(name || '').length % TONES.length];
  const radius = shape === 'square' ? 'var(--radius-medium)' : '50%';
  const presenceColor = {
    online: 'var(--color-success-500)',
    away: 'var(--color-warning-400)',
    busy: 'var(--color-critical-400)',
    offline: 'var(--color-secondary-400)'
  }[presence];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: px,
      height: px,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || '',
    style: {
      width: px,
      height: px,
      borderRadius: radius,
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px,
      borderRadius: radius,
      background: tone,
      color: 'var(--color-secondary-1000)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `var(--font-weight-semibold) ${px * 0.38}px/1 var(--font-sans)`
    }
  }, initials(name)), presence && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: px * 0.28,
      height: px * 0.28,
      minWidth: 8,
      minHeight: 8,
      borderRadius: '50%',
      background: presenceColor,
      border: '2px solid #fff'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/AvatarGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64
};

/** Overlapping avatar group with a +N overflow token. */
function AvatarGroup({
  users = [],
  size = 'md',
  max = 4,
  style = {}
}) {
  const px = SIZES[size] || SIZES.md;
  const shown = users.slice(0, max);
  const extra = users.length - shown.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, shown.map((u, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -px * 0.3,
      borderRadius: '50%',
      boxShadow: '0 0 0 2px #fff',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, _extends({}, u, {
    size: size
  })))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -px * 0.3,
      width: px,
      height: px,
      borderRadius: '50%',
      boxShadow: '0 0 0 2px #fff',
      background: 'var(--color-secondary-200)',
      color: 'var(--text-secondary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `var(--font-weight-semibold) ${px * 0.34}px/1 var(--font-sans)`
    }
  }, "+", extra));
}
Object.assign(__ds_scope, { AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/AvatarGroup.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
/** Container card with optional elevation, border and hover. */
function Card({
  children,
  elevation = 1,
  bordered = true,
  padding = 20,
  interactive = false,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const shadow = elevation === 0 ? 'none' : `var(--elevation-0${Math.min(5, elevation)})`;
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-large)',
      padding,
      border: bordered ? '1px solid var(--border-subtle)' : 'none',
      boxShadow: interactive && hover ? 'var(--elevation-03)' : shadow,
      transition: 'box-shadow 160ms ease, transform 160ms ease',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/List.jsx
try { (() => {
/** List + ListItem — vertical rows with leading/trailing slots. */
function List({
  children,
  bordered = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "list",
    style: {
      display: 'flex',
      flexDirection: 'column',
      border: bordered ? '1px solid var(--border-subtle)' : 'none',
      borderRadius: 'var(--radius-medium)',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      ...style
    }
  }, children);
}
function ListItem({
  children,
  leading,
  trailing,
  secondary,
  selected = false,
  disabled = false,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick && !disabled;
  return /*#__PURE__*/React.createElement("div", {
    role: "listitem",
    onClick: clickable ? onClick : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-subtle)',
      background: selected ? 'var(--color-primary-50)' : hover && clickable ? 'var(--surface-hover)' : 'transparent',
      cursor: clickable ? 'pointer' : 'default',
      opacity: disabled ? 0.5 : 1,
      transition: 'background 120ms',
      ...style
    }
  }, leading, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-weight-medium) 0.875rem/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, children), secondary && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-weight-regular) 0.75rem/1.4 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, secondary)), trailing);
}
Object.assign(__ds_scope, { List, ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/List.jsx", error: String((e && e.message) || e) }); }

// components/feedback/AlertPictogram.jsx
try { (() => {
/** Alert pictogram — a circular tinted icon used in modals/empty states. */
function AlertPictogram({
  intent = 'info',
  size = 'default',
  icon,
  style = {}
}) {
  const map = {
    info: {
      bg: 'var(--color-info-100)',
      fg: 'var(--color-info-500)',
      icon: 'info-circle'
    },
    success: {
      bg: 'var(--color-success-100)',
      fg: 'var(--color-success-600)',
      icon: 'circle-check'
    },
    warning: {
      bg: 'var(--color-warning-100)',
      fg: 'var(--color-warning-600)',
      icon: 'alert-triangle'
    },
    critical: {
      bg: 'var(--color-critical-100)',
      fg: 'var(--color-critical-500)',
      icon: 'alert-octagon'
    }
  }[intent] || {};
  const box = size === 'small' ? 40 : 56;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: box,
      height: box,
      borderRadius: '50%',
      background: map.bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || map.icon,
    size: size === 'small' ? 20 : 28,
    color: map.fg
  }));
}
Object.assign(__ds_scope, { AlertPictogram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/AlertPictogram.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const INTENTS = {
  neutral: {
    solid: 'var(--color-secondary-700)',
    soft: 'var(--color-secondary-100)',
    softText: 'var(--color-secondary-700)',
    line: 'var(--color-secondary-400)'
  },
  primary: {
    solid: 'var(--color-primary-400)',
    soft: 'var(--color-primary-50)',
    softText: 'var(--color-primary-500)',
    line: 'var(--color-primary-300)'
  },
  success: {
    solid: 'var(--color-success-500)',
    soft: 'var(--color-success-100)',
    softText: 'var(--color-success-700)',
    line: 'var(--color-success-300)'
  },
  warning: {
    solid: 'var(--color-warning-500)',
    soft: 'var(--color-warning-100)',
    softText: 'var(--color-warning-700)',
    line: 'var(--color-warning-300)'
  },
  critical: {
    solid: 'var(--color-critical-400)',
    soft: 'var(--color-critical-100)',
    softText: 'var(--color-critical-500)',
    line: 'var(--color-critical-200)'
  },
  info: {
    solid: 'var(--color-info-400)',
    soft: 'var(--color-info-100)',
    softText: 'var(--color-info-500)',
    line: 'var(--color-info-200)'
  }
};

/** Small status badge/label. */
function Badge({
  children,
  intent = 'neutral',
  variant = 'soft',
  size = 'default',
  dot = false,
  style = {}
}) {
  const it = INTENTS[intent] || INTENTS.neutral;
  const pad = size === 'small' ? '2px 6px' : '3px 8px';
  const fs = size === 'small' ? '0.6875rem' : '0.75rem';
  let bg,
    color,
    border = 'none';
  if (variant === 'solid') {
    bg = it.solid;
    color = '#fff';
  } else if (variant === 'outline') {
    bg = 'transparent';
    color = it.softText;
    border = `1px solid ${it.line}`;
  } else {
    bg = it.soft;
    color = it.softText;
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: pad,
      background: bg,
      color,
      border,
      borderRadius: 'var(--radius-full)',
      font: `var(--font-weight-medium) ${fs}/1.2 var(--font-sans)`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: variant === 'solid' ? '#fff' : it.solid
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
const INTENTS = {
  info: {
    bg: 'var(--color-info-50)',
    border: 'var(--color-info-200)',
    icon: 'info-circle',
    fg: 'var(--color-info-500)'
  },
  success: {
    bg: 'var(--color-success-50)',
    border: 'var(--color-success-200)',
    icon: 'circle-check',
    fg: 'var(--color-success-600)'
  },
  warning: {
    bg: 'var(--color-warning-50)',
    border: 'var(--color-warning-200)',
    icon: 'alert-triangle',
    fg: 'var(--color-warning-600)'
  },
  critical: {
    bg: 'var(--color-critical-50)',
    border: 'var(--color-critical-200)',
    icon: 'alert-octagon',
    fg: 'var(--color-critical-500)'
  }
};

/** Full-width banner alert. */
function Banner({
  intent = 'info',
  title,
  children,
  action,
  dismissible = false,
  onDismiss,
  style = {}
}) {
  const it = INTENTS[intent] || INTENTS.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      padding: '12px 16px',
      background: it.bg,
      border: `1px solid ${it.border}`,
      borderRadius: 'var(--radius-medium)',
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 20,
    color: it.fg,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-weight-semibold) 0.875rem/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-weight-regular) 0.875rem/1.5 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)), dismissible && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--icon-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
/** Callout — softer inline note with a left accent bar. */
function Callout({
  intent = 'info',
  title,
  children,
  icon,
  style = {}
}) {
  const map = {
    info: {
      accent: 'var(--color-info-400)',
      bg: 'var(--color-info-50)',
      icon: 'bulb'
    },
    success: {
      accent: 'var(--color-success-500)',
      bg: 'var(--color-success-50)',
      icon: 'circle-check'
    },
    warning: {
      accent: 'var(--color-warning-500)',
      bg: 'var(--color-warning-50)',
      icon: 'alert-triangle'
    },
    critical: {
      accent: 'var(--color-critical-400)',
      bg: 'var(--color-critical-50)',
      icon: 'alert-octagon'
    },
    neutral: {
      accent: 'var(--color-secondary-400)',
      bg: 'var(--color-secondary-50)',
      icon: 'info-circle'
    }
  }[intent] || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      background: map.bg,
      borderLeft: `3px solid ${map.accent}`,
      borderRadius: '0 var(--radius-medium) var(--radius-medium) 0',
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || map.icon,
    size: 20,
    color: map.accent,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-weight-semibold) 0.9375rem/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-weight-regular) 0.875rem/1.5 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Chip.jsx
try { (() => {
/** Chip — interactive selectable/removable token. */
function Chip({
  children,
  selected = false,
  icon,
  avatar,
  removable = false,
  disabled = false,
  size = 'default',
  onClick,
  onRemove,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const h = size === 'small' ? 28 : 32;
  return /*#__PURE__*/React.createElement("span", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: h,
      padding: avatar ? '0 10px 0 3px' : '0 12px',
      background: selected ? 'var(--color-primary-50)' : hover && !disabled ? 'var(--surface-hover)' : 'var(--surface-card)',
      color: selected ? 'var(--color-primary-500)' : 'var(--text-secondary)',
      border: `1px solid ${selected ? 'var(--color-primary-400)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-full)',
      font: `var(--font-weight-medium) ${size === 'small' ? '0.8125rem' : '0.875rem'}/1 var(--font-sans)`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      whiteSpace: 'nowrap',
      transition: 'background 120ms, border-color 120ms',
      ...style
    }
  }, avatar, icon && !avatar && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'small' ? 14 : 16
  }), children, removable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Chip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/** Empty state — centered pictogram, message and action. */
function EmptyState({
  title,
  description,
  intent = 'info',
  icon,
  action,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 12,
      padding: 32,
      maxWidth: 380,
      margin: '0 auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.AlertPictogram, {
    intent: intent,
    icon: icon
  }), title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-weight-semibold) 1.125rem/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-weight-regular) 0.875rem/1.5 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/** Progress bar — linear, determinate or intent-colored. */
function ProgressBar({
  value = 0,
  max = 100,
  size = 'default',
  intent = 'primary',
  showLabel = false,
  label,
  style = {}
}) {
  const pct = Math.min(100, Math.max(0, value / max * 100));
  const h = size === 'small' ? 4 : size === 'large' ? 12 : 8;
  const fill = {
    primary: 'var(--color-primary-400)',
    success: 'var(--color-success-500)',
    warning: 'var(--color-warning-500)',
    critical: 'var(--color-critical-400)',
    info: 'var(--color-info-400)'
  }[intent] || 'var(--color-primary-400)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, (showLabel || label) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--font-weight-medium) 0.75rem/1 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showLabel && /*#__PURE__*/React.createElement("span", null, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: h,
      background: 'var(--color-secondary-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      background: fill,
      borderRadius: h,
      transition: 'width 300ms ease'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
/** Skeleton loading placeholder. */
function Skeleton({
  width = '100%',
  height = 16,
  shape = 'rect',
  style = {}
}) {
  const radius = shape === 'circle' ? '50%' : shape === 'pill' ? 'var(--radius-full)' : 'var(--radius-small)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width,
      height: shape === 'circle' ? width : height,
      borderRadius: radius,
      background: 'linear-gradient(90deg, var(--color-secondary-100) 25%, var(--color-secondary-200) 37%, var(--color-secondary-100) 63%)',
      backgroundSize: '400% 100%',
      animation: 'navi-skeleton 1.4s ease infinite',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes navi-skeleton{0%{background-position:100% 50%}100%{background-position:0 50%}}`));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
/** Indeterminate spinner. */
function Spinner({
  size = 24,
  thickness,
  color = 'var(--color-primary-400)',
  track = 'var(--color-secondary-200)',
  style = {}
}) {
  const t = thickness || Math.max(2, Math.round(size / 10));
  return /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": "Loading",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: size,
      height: size,
      borderRadius: '50%',
      border: `${t}px solid ${track}`,
      borderTopColor: color,
      animation: 'navi-spinner 0.7s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes navi-spinner{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
/** Tag — square-cornered label, optionally removable. */
function Tag({
  children,
  intent = 'neutral',
  size = 'default',
  icon,
  removable = false,
  onRemove,
  style = {}
}) {
  const colors = {
    neutral: {
      bg: 'var(--color-secondary-100)',
      fg: 'var(--color-secondary-700)'
    },
    primary: {
      bg: 'var(--color-primary-50)',
      fg: 'var(--color-primary-500)'
    },
    success: {
      bg: 'var(--color-success-100)',
      fg: 'var(--color-success-700)'
    },
    warning: {
      bg: 'var(--color-warning-100)',
      fg: 'var(--color-warning-700)'
    },
    critical: {
      bg: 'var(--color-critical-100)',
      fg: 'var(--color-critical-500)'
    },
    info: {
      bg: 'var(--color-info-100)',
      fg: 'var(--color-info-500)'
    }
  }[intent] || {
    bg: 'var(--color-secondary-100)',
    fg: 'var(--color-secondary-700)'
  };
  const h = size === 'small' ? 20 : 24;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: h,
      padding: '0 8px',
      background: colors.bg,
      color: colors.fg,
      borderRadius: 'var(--radius-small)',
      font: `var(--font-weight-medium) ${size === 'small' ? '0.6875rem' : '0.75rem'}/1 var(--font-sans)`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'small' ? 12 : 14
  }), children, removable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      color: colors.fg,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: size === 'small' ? 12 : 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Tooltip — hover popover. Wrap a trigger. */
function Tooltip({
  label,
  children,
  placement = 'top',
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 40,
      ...pos,
      padding: '6px 10px',
      maxWidth: 240,
      width: 'max-content',
      background: 'var(--color-secondary-1000)',
      color: '#fff',
      font: 'var(--font-weight-regular) 0.75rem/1.4 var(--font-sans)',
      borderRadius: 'var(--radius-small)',
      boxShadow: 'var(--elevation-02)',
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with optional indeterminate state and label. */
function Checkbox({
  checked = false,
  indeterminate = false,
  label,
  description,
  disabled = false,
  size = 'default',
  error = false,
  onChange,
  id,
  style = {}
}) {
  const box = size === 'small' ? 16 : 18;
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      gap: 10,
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: box,
      height: box,
      flexShrink: 0,
      marginTop: description ? 2 : 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: on ? 'var(--color-primary-400)' : 'var(--surface-card)',
      border: `1.5px solid ${error ? 'var(--color-critical-400)' : on ? 'var(--color-primary-400)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-small)',
      transition: 'background 120ms, border-color 120ms'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: box - 4,
    color: "#fff"
  }) : checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: box - 4,
    color: "#fff"
  }) : null), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--font-weight-regular) ${size === 'small' ? '0.8125rem' : '0.875rem'}/1.4 var(--font-sans)`,
      color: 'var(--text-primary)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-weight-regular) 0.75rem/1.4 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input field with label, helper, validation and adornments. */
function Input({
  label,
  value,
  placeholder,
  helperText,
  error,
  success,
  disabled = false,
  readOnly = false,
  size = 'default',
  iconLeft,
  iconRight,
  type = 'text',
  required = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'small' ? 32 : 40;
  const state = error ? 'error' : success ? 'success' : focus ? 'focus' : 'default';
  const borderColor = {
    error: 'var(--color-critical-400)',
    success: 'var(--color-success-500)',
    focus: 'var(--color-info-400)',
    default: 'var(--border-default)'
  }[state];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: 'var(--font-weight-medium) 0.875rem/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-critical-400)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 12px',
      background: disabled ? 'var(--color-secondary-50)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-medium)',
      boxShadow: focus && !error && !success ? '0 0 0 3px var(--color-info-100)' : 'none',
      transition: 'border-color 120ms, box-shadow 120ms',
      boxSizing: 'border-box',
      cursor: disabled ? 'not-allowed' : 'text'
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: size === 'small' ? 16 : 18,
    color: "var(--icon-secondary)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: `var(--font-weight-regular) ${size === 'small' ? '0.8125rem' : '0.875rem'}/1.4 var(--font-sans)`,
      color: 'var(--text-primary)',
      padding: 0
    }
  }, rest)), error && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert-circle",
    size: 18,
    color: "var(--color-critical-400)"
  }), success && !error && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-check",
    size: 18,
    color: "var(--color-success-500)"
  }), iconRight && !error && !success && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === 'small' ? 16 : 18,
    color: "var(--icon-secondary)"
  })), (helperText || error || success) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-weight-regular) 0.75rem/1.4 var(--font-sans)',
      color: error ? 'var(--color-critical-400)' : success ? 'var(--color-success-600)' : 'var(--text-tertiary)'
    }
  }, error || success || helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/NumberInput.jsx
try { (() => {
/** Stepper number input with +/- controls. */
function NumberInput({
  label,
  value = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  disabled = false,
  size = 'default',
  onChange,
  id,
  style = {}
}) {
  const h = size === 'small' ? 32 : 40;
  const set = v => {
    const c = Math.min(max, Math.max(min, v));
    onChange && onChange(c);
  };
  const btn = (icon, delta, side) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => set(value + delta),
    "aria-label": delta > 0 ? 'Increment' : 'Decrement',
    style: {
      width: h,
      height: h,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'var(--color-secondary-50)',
      color: 'var(--icon-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      [side]: '1px solid var(--border-default)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: 'var(--font-weight-medium) 0.875rem/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'stretch',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-medium)',
      overflow: 'hidden',
      width: 'fit-content',
      boxSizing: 'border-box'
    }
  }, btn('minus', -step, 'borderRight'), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "number",
    value: value,
    disabled: disabled,
    onChange: e => set(Number(e.target.value)),
    style: {
      width: 56,
      textAlign: 'center',
      border: 'none',
      outline: 'none',
      background: 'var(--surface-card)',
      font: 'var(--font-weight-medium) 0.875rem/1 var(--font-sans)',
      color: 'var(--text-primary)',
      MozAppearance: 'textfield'
    }
  }), btn('plus', step, 'borderLeft')));
}
Object.assign(__ds_scope, { NumberInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NumberInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio button with label. */
function Radio({
  checked = false,
  label,
  description,
  name,
  value,
  disabled = false,
  size = 'default',
  onChange,
  id,
  style = {}
}) {
  const box = size === 'small' ? 16 : 18;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      gap: 10,
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: box,
      height: box,
      flexShrink: 0,
      marginTop: description ? 2 : 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-card)',
      border: `1.5px solid ${checked ? 'var(--color-primary-400)' : 'var(--border-strong)'}`,
      borderRadius: '50%',
      transition: 'border-color 120ms'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: box / 2,
      height: box / 2,
      borderRadius: '50%',
      background: 'var(--color-primary-400)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--font-weight-regular) ${size === 'small' ? '0.8125rem' : '0.875rem'}/1.4 var(--font-sans)`,
      color: 'var(--text-primary)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-weight-regular) 0.75rem/1.4 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
/** Search input with leading magnifier and clearable value. */
function SearchField({
  value = '',
  placeholder = 'Search',
  size = 'default',
  rounded = true,
  disabled = false,
  onChange,
  onClear,
  style = {}
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'small' ? 32 : 40;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 12px',
      background: 'var(--surface-card)',
      border: `1px solid ${focus ? 'var(--color-info-400)' : 'var(--border-default)'}`,
      borderRadius: rounded ? 'var(--radius-full)' : 'var(--radius-medium)',
      boxShadow: focus ? '0 0 0 3px var(--color-info-100)' : 'none',
      transition: 'border-color 120ms, box-shadow 120ms',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: size === 'small' ? 16 : 18,
    color: "var(--icon-secondary)"
  }), /*#__PURE__*/React.createElement("input", {
    type: "search",
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: `var(--font-weight-regular) ${size === 'small' ? '0.8125rem' : '0.875rem'}/1 var(--font-sans)`,
      color: 'var(--text-primary)',
      padding: 0
    }
  }), value && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClear,
    "aria-label": "Clear",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      color: 'var(--icon-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Select / dropdown (visual; opens a simple native-style menu). */
function Select({
  label,
  value,
  placeholder = 'Select…',
  options = [],
  disabled = false,
  error,
  size = 'default',
  onChange,
  id,
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const h = size === 'small' ? 32 : 40;
  const selected = options.find(o => (o.value ?? o) === value);
  const borderColor = error ? 'var(--color-critical-400)' : open ? 'var(--color-info-400)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      position: 'relative',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: 'var(--font-weight-medium) 0.875rem/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: id,
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      height: h,
      padding: '0 12px',
      width: '100%',
      background: disabled ? 'var(--color-secondary-50)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-medium)',
      boxShadow: open && !error ? '0 0 0 3px var(--color-info-100)' : 'none',
      font: `var(--font-weight-regular) ${size === 'small' ? '0.8125rem' : '0.875rem'}/1 var(--font-sans)`,
      color: selected ? 'var(--text-primary)' : 'var(--text-placeholder)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", null, selected ? selected.label ?? selected : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--icon-secondary)",
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform 120ms'
    }
  })), open && !disabled && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: `calc(100% + 4px)`,
      left: 0,
      right: 0,
      zIndex: 20,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-medium)',
      boxShadow: 'var(--elevation-03)',
      padding: 4,
      maxHeight: 240,
      overflowY: 'auto'
    }
  }, options.map((o, i) => {
    const val = o.value ?? o,
      lbl = o.label ?? o;
    const sel = val === value;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => {
        onChange && onChange(val);
        setOpen(false);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        padding: '8px 10px',
        borderRadius: 'var(--radius-small)',
        cursor: 'pointer',
        font: 'var(--font-weight-regular) 0.875rem/1 var(--font-sans)',
        color: 'var(--text-primary)',
        background: sel ? 'var(--color-primary-50)' : 'transparent'
      },
      onMouseEnter: e => {
        if (!sel) e.currentTarget.style.background = 'var(--surface-hover)';
      },
      onMouseLeave: e => {
        if (!sel) e.currentTarget.style.background = 'transparent';
      }
    }, lbl, sel && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 16,
      color: "var(--color-primary-400)"
    }));
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
/** Range slider (single value). */
function Slider({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  showValue = false,
  size = 'default',
  onChange,
  style = {}
}) {
  const pct = (value - min) / (max - min) * 100;
  const trackH = size === 'small' ? 4 : 6;
  const knob = size === 'small' ? 14 : 18;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      height: knob,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: trackH,
      borderRadius: trackH,
      background: 'var(--color-secondary-200)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `${pct}%`,
      height: trackH,
      borderRadius: trackH,
      background: disabled ? 'var(--color-secondary-400)' : 'var(--color-primary-400)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `calc(${pct}% - ${knob / 2}px)`,
      width: knob,
      height: knob,
      borderRadius: '50%',
      background: '#fff',
      border: `2px solid ${disabled ? 'var(--color-secondary-400)' : 'var(--color-primary-400)'}`,
      boxShadow: 'var(--elevation-01)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    value: value,
    min: min,
    max: max,
    step: step,
    disabled: disabled,
    onChange: e => onChange && onChange(Number(e.target.value)),
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      width: '100%',
      margin: 0,
      opacity: 0,
      height: knob,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  })), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 32,
      textAlign: 'right',
      font: 'var(--font-weight-medium) 0.875rem/1 var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, value));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** On/off switch. */
function Switch({
  checked = false,
  label,
  disabled = false,
  size = 'default',
  onChange,
  id,
  style = {}
}) {
  const w = size === 'small' ? 32 : 40,
    h = size === 'small' ? 18 : 22,
    knob = h - 4;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: w,
      height: h,
      borderRadius: h,
      flexShrink: 0,
      position: 'relative',
      background: checked ? 'var(--color-primary-400)' : 'var(--color-secondary-300)',
      transition: 'background 160ms ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? w - knob - 2 : 2,
      width: knob,
      height: knob,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 2px rgba(0,0,0,0.25)',
      transition: 'left 160ms ease'
    }
  })), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-weight-regular) 0.875rem/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextArea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text area. */
function TextArea({
  label,
  value,
  placeholder,
  helperText,
  error,
  disabled = false,
  rows = 4,
  required = false,
  maxLength,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--color-critical-400)' : focus ? 'var(--color-info-400)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: 'var(--font-weight-medium) 0.875rem/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-critical-400)'
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    rows: rows,
    maxLength: maxLength,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      resize: 'vertical',
      padding: '10px 12px',
      font: 'var(--font-weight-regular) 0.875rem/1.5 var(--font-sans)',
      color: 'var(--text-primary)',
      background: disabled ? 'var(--color-secondary-50)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-medium)',
      outline: 'none',
      boxShadow: focus && !error ? '0 0 0 3px var(--color-info-100)' : 'none',
      transition: 'border-color 120ms, box-shadow 120ms',
      boxSizing: 'border-box'
    }
  }, rest)), (helperText || error || maxLength) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--font-weight-regular) 0.75rem/1.4 var(--font-sans)',
      color: error ? 'var(--color-critical-400)' : 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, error || helperText), maxLength && /*#__PURE__*/React.createElement("span", null, (value || '').length, "/", maxLength)));
}
Object.assign(__ds_scope, { TextArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextArea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
/** Accordion — single or multiple expandable rows. */
function Accordion({
  items = [],
  multiple = false,
  defaultOpen = [],
  style = {}
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => setOpen(prev => {
    const next = new Set(multiple ? prev : []);
    if (prev.has(i)) next.delete(i);else next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-medium)',
      overflow: 'hidden',
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: i < items.length - 1 ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '14px 16px',
        border: 'none',
        background: isOpen ? 'var(--color-secondary-50)' : 'var(--surface-card)',
        cursor: 'pointer',
        textAlign: 'left',
        font: 'var(--font-weight-semibold) 0.9375rem/1.4 var(--font-sans)',
        color: 'var(--text-primary)'
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 18,
      color: "var(--icon-secondary)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 18,
      color: "var(--icon-secondary)",
      style: {
        transform: isOpen ? 'rotate(180deg)' : 'none',
        transition: 'transform 160ms'
      }
    })), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 16px 16px',
        font: 'var(--font-weight-regular) 0.875rem/1.6 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
/** Breadcrumbs trail. */
function Breadcrumbs({
  items = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 4,
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    const label = it.label ?? it;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        font: 'var(--font-weight-semibold) 0.875rem/1 var(--font-sans)',
        color: 'var(--text-primary)'
      }
    }, label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      style: {
        font: 'var(--font-weight-medium) 0.875rem/1 var(--font-sans)',
        color: 'var(--text-tertiary)',
        textDecoration: 'none'
      }
    }, label), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 16,
      color: "var(--icon-secondary)"
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ContentSwitcher.jsx
try { (() => {
/** Content switcher — segmented control of equal-weight options. */
function ContentSwitcher({
  options = [],
  value,
  onChange,
  size = 'default',
  style = {}
}) {
  const h = size === 'small' ? 30 : 36;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-medium)',
      overflow: 'hidden',
      height: h,
      ...style
    }
  }, options.map((o, i) => {
    const val = o.value ?? o,
      label = o.label ?? (typeof o === 'string' ? o : '');
    const active = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      role: "tab",
      onClick: () => onChange && onChange(val),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '0 16px',
        border: 'none',
        borderLeft: i === 0 ? 'none' : '1px solid var(--border-default)',
        background: active ? 'var(--color-secondary-1000)' : 'var(--surface-card)',
        color: active ? '#fff' : 'var(--text-secondary)',
        font: 'var(--font-weight-medium) 0.875rem/1 var(--font-sans)',
        cursor: 'pointer',
        transition: 'background 120ms'
      }
    }, o.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: o.icon,
      size: 16
    }), label);
  }));
}
Object.assign(__ds_scope, { ContentSwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ContentSwitcher.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
/** Pagination control. */
function Pagination({
  page = 1,
  total = 1,
  onChange,
  style = {}
}) {
  const go = p => {
    if (p >= 1 && p <= total) onChange && onChange(p);
  };
  const pages = [];
  const range = 1;
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || p >= page - range && p <= page + range) pages.push(p);else if (pages[pages.length - 1] !== '…') pages.push('…');
  }
  const cell = (content, opts = {}) => {
    const {
      active,
      disabled,
      ariaLabel,
      onClick
    } = opts;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      disabled: disabled,
      "aria-label": ariaLabel,
      "aria-current": active ? 'page' : undefined,
      onClick: onClick,
      style: {
        minWidth: 32,
        height: 32,
        padding: '0 6px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid ${active ? 'var(--color-primary-400)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-small)',
        background: active ? 'var(--color-primary-50)' : 'var(--surface-card)',
        color: active ? 'var(--color-primary-500)' : disabled ? 'var(--text-disabled)' : 'var(--text-secondary)',
        font: 'var(--font-weight-medium) 0.875rem/1 var(--font-sans)',
        cursor: disabled ? 'not-allowed' : 'pointer'
      }
    }, content);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      ...style
    }
  }, cell(/*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 16
  }), {
    disabled: page <= 1,
    ariaLabel: 'Previous',
    onClick: () => go(page - 1)
  }), pages.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      padding: '0 4px',
      color: 'var(--text-tertiary)'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, cell(p, {
    active: p === page,
    onClick: () => go(p)
  }))), cell(/*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  }), {
    disabled: page >= total,
    ariaLabel: 'Next',
    onClick: () => go(page + 1)
  }));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
/** Horizontal stepper / progress indicator. */
function Stepper({
  steps = [],
  current = 0,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      ...style
    }
  }, steps.map((s, i) => {
    const label = s.label ?? s;
    const done = i < current,
      active = i === current;
    const color = done || active ? 'var(--color-primary-400)' : 'var(--color-secondary-300)';
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        minWidth: 72
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: done ? 'var(--color-primary-400)' : active ? 'var(--color-primary-50)' : 'var(--surface-card)',
        border: `2px solid ${color}`,
        color: done ? '#fff' : active ? 'var(--color-primary-500)' : 'var(--text-tertiary)',
        font: 'var(--font-weight-semibold) 0.8125rem/1 var(--font-sans)'
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 16
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `var(--font-weight-${active ? 'semibold' : 'regular'}) 0.75rem/1.3 var(--font-sans)`,
        color: active || done ? 'var(--text-primary)' : 'var(--text-tertiary)',
        textAlign: 'center'
      }
    }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 2,
        background: i < current ? 'var(--color-primary-400)' : 'var(--color-secondary-200)',
        marginTop: 13
      }
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Tabs — underline style by default. */
function Tabs({
  tabs = [],
  value,
  onChange,
  variant = 'underline',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: variant === 'pill' ? 4 : 24,
      borderBottom: variant === 'underline' ? '1px solid var(--border-subtle)' : 'none',
      background: variant === 'pill' ? 'var(--color-secondary-100)' : 'transparent',
      padding: variant === 'pill' ? 4 : 0,
      borderRadius: variant === 'pill' ? 'var(--radius-medium)' : 0,
      width: variant === 'pill' ? 'fit-content' : 'auto',
      ...style
    }
  }, tabs.map(t => {
    const val = t.value ?? t,
      label = t.label ?? (typeof t === 'string' ? t : '');
    const active = val === value;
    if (variant === 'pill') {
      return /*#__PURE__*/React.createElement("button", {
        key: val,
        role: "tab",
        onClick: () => onChange && onChange(val),
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '6px 14px',
          border: 'none',
          borderRadius: 'var(--radius-small)',
          cursor: 'pointer',
          font: `var(--font-weight-medium) 0.875rem/1 var(--font-sans)`,
          background: active ? 'var(--surface-card)' : 'transparent',
          color: active ? 'var(--text-primary)' : 'var(--text-tertiary)',
          boxShadow: active ? 'var(--elevation-01)' : 'none'
        }
      }, t.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: t.icon,
        size: 16
      }), label, t.count != null && /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: 2,
          padding: '0 6px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--color-secondary-200)',
          fontSize: '0.6875rem'
        }
      }, t.count));
    }
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      onClick: () => onChange && onChange(val),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '12px 2px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        font: `var(--font-weight-${active ? 'semibold' : 'medium'}) 0.875rem/1 var(--font-sans)`,
        color: active ? 'var(--color-primary-400)' : 'var(--text-tertiary)',
        borderBottom: `2px solid ${active ? 'var(--color-primary-400)' : 'transparent'}`,
        marginBottom: -1
      }
    }, t.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 16
    }), label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 2,
        padding: '0 6px',
        borderRadius: 'var(--radius-full)',
        background: active ? 'var(--color-primary-50)' : 'var(--color-secondary-100)',
        color: active ? 'var(--color-primary-500)' : 'var(--text-tertiary)',
        fontSize: '0.6875rem',
        fontWeight: 600
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/AlertModal.jsx
try { (() => {
/** Alert / confirmation modal — pictogram, message, actions. */
function AlertModal({
  open = true,
  intent = 'critical',
  title,
  children,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  style = {}
}) {
  if (!open) return null;
  const confirmBg = {
    critical: 'var(--color-critical-400)',
    warning: 'var(--color-warning-500)',
    success: 'var(--color-success-500)',
    info: 'var(--color-primary-400)'
  }[intent] || 'var(--color-primary-400)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(31,31,50,0.45)',
      padding: 24
    },
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    role: "alertdialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: 400,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-large)',
      boxShadow: 'var(--elevation-05)',
      padding: 24,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.AlertPictogram, {
    intent: intent
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-weight-semibold) 1.125rem/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-weight-regular) 0.875rem/1.6 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 8,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCancel,
    style: {
      flex: 1,
      height: 40,
      borderRadius: 'var(--radius-small)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      color: 'var(--text-secondary)',
      font: 'var(--font-weight-medium) 0.875rem/1 var(--font-sans)',
      cursor: 'pointer'
    }
  }, cancelLabel), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onConfirm,
    style: {
      flex: 1,
      height: 40,
      borderRadius: 'var(--radius-small)',
      border: 'none',
      background: confirmBg,
      color: '#fff',
      font: 'var(--font-weight-medium) 0.875rem/1 var(--font-sans)',
      cursor: 'pointer'
    }
  }, confirmLabel))));
}
Object.assign(__ds_scope, { AlertModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/AlertModal.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Drawer.jsx
try { (() => {
/** Drawer — side panel sliding in from an edge. */
function Drawer({
  open = true,
  side = 'right',
  title,
  children,
  footer,
  onClose,
  width = 400,
  style = {}
}) {
  if (!open) return null;
  const horiz = side === 'left' || side === 'right';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
      alignItems: horiz ? 'stretch' : side === 'top' ? 'flex-start' : 'flex-end',
      background: 'rgba(31,31,50,0.45)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: horiz ? width : '100%',
      height: horiz ? '100%' : 'auto',
      background: 'var(--surface-card)',
      boxShadow: 'var(--elevation-04)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '18px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--font-weight-semibold) 1.125rem/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--icon-secondary)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 20,
      overflowY: 'auto',
      font: 'var(--font-weight-regular) 0.9375rem/1.6 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '16px 20px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Menu.jsx
try { (() => {
/** Menu — list of actionable items (use inside a Popover). */
function Menu({
  items = [],
  onSelect,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, items.map((it, i) => {
    if (it.divider) return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        height: 1,
        background: 'var(--border-subtle)',
        margin: '4px 0'
      }
    });
    if (it.header) return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: '6px 10px 4px',
        font: 'var(--font-weight-bold) 0.6875rem/1 var(--font-sans)',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: 'var(--text-tertiary)'
      }
    }, it.header);
    return /*#__PURE__*/React.createElement(MenuRow, {
      key: i,
      it: it,
      critical: it.intent === 'critical',
      onSelect: onSelect
    });
  }));
}
function MenuRow({
  it,
  critical,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "menuitem",
    disabled: it.disabled,
    onClick: () => {
      it.onClick && it.onClick();
      onSelect && onSelect(it);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 10px',
      border: 'none',
      borderRadius: 'var(--radius-small)',
      width: '100%',
      textAlign: 'left',
      cursor: it.disabled ? 'not-allowed' : 'pointer',
      background: hover && !it.disabled ? critical ? 'var(--color-critical-50)' : 'var(--surface-hover)' : 'transparent',
      color: it.disabled ? 'var(--text-disabled)' : critical ? 'var(--color-critical-500)' : 'var(--text-primary)',
      font: 'var(--font-weight-medium) 0.875rem/1 var(--font-sans)'
    }
  }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 18,
    color: critical ? 'var(--color-critical-500)' : 'var(--icon-secondary)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label), it.shortcut && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '0.75rem/1 var(--font-mono)',
      color: 'var(--text-tertiary)'
    }
  }, it.shortcut), it.checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    color: "var(--color-primary-400)"
  }));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Menu.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Modal.jsx
try { (() => {
/** Modal dialog with overlay. */
function Modal({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 480,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(31,31,50,0.45)',
      padding: 24
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-large)',
      boxShadow: 'var(--elevation-05)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '18px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--font-weight-semibold) 1.125rem/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--icon-secondary)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      overflowY: 'auto',
      font: 'var(--font-weight-regular) 0.9375rem/1.6 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '16px 20px',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--color-secondary-50)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Popover.jsx
try { (() => {
/** Popover — anchored floating panel. Pass a trigger; toggles on click. */
function Popover({
  trigger,
  children,
  placement = 'bottom-start',
  width = 240,
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const pos = {
    'bottom-start': {
      top: '100%',
      left: 0,
      marginTop: 8
    },
    'bottom-end': {
      top: '100%',
      right: 0,
      marginTop: 8
    },
    'top-start': {
      bottom: '100%',
      left: 0,
      marginBottom: 8
    },
    'top-end': {
      bottom: '100%',
      right: 0,
      marginBottom: 8
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o),
    style: {
      display: 'inline-flex'
    }
  }, trigger), open && /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    style: {
      position: 'absolute',
      zIndex: 60,
      ...pos,
      width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-medium)',
      boxShadow: 'var(--elevation-03)',
      padding: 8,
      ...style
    }
  }, typeof children === 'function' ? children({
    close: () => setOpen(false)
  }) : children));
}
Object.assign(__ds_scope, { Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Popover.jsx", error: String((e && e.message) || e) }); }

// ui_kits/creator-studio/ContentScreen.jsx
try { (() => {
// Whatfix Creator Studio — main content area (flow list + analytics)
const NS = window.WhatfixNaviDesignSystem_46013f;
const {
  Breadcrumbs,
  Tabs,
  SearchField,
  Button,
  Badge,
  Avatar,
  AvatarGroup,
  IconButton,
  Popover,
  Menu,
  ContentSwitcher,
  Card,
  ProgressBar,
  Chip
} = NS;
const FLOWS = [{
  name: 'New user onboarding checklist',
  type: 'Task List',
  status: ['success', 'Live'],
  views: '12,480',
  done: 78,
  editor: 'Ada Byron',
  edited: '2h ago'
}, {
  name: 'Feature announcement — Insights 2.0',
  type: 'Pop-up',
  status: ['warning', 'Draft'],
  views: '—',
  done: 0,
  editor: 'Carl Sagan',
  edited: 'yesterday'
}, {
  name: 'How to create a segment',
  type: 'Flow',
  status: ['success', 'Live'],
  views: '8,220',
  done: 64,
  editor: 'Grace Hopper',
  edited: '3 days ago'
}, {
  name: 'Billing settings walkthrough',
  type: 'Flow',
  status: ['info', 'In review'],
  views: '—',
  done: 0,
  editor: 'Alan Turing',
  edited: '5 days ago'
}, {
  name: 'Legacy dashboard tour',
  type: 'Beacon',
  status: ['neutral', 'Archived'],
  views: '1,050',
  done: 41,
  editor: 'Ada Byron',
  edited: '2 weeks ago'
}];
function Metric({
  label,
  value,
  delta,
  up
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      flex: 1
    },
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 28,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: up ? 'var(--color-success-600)' : 'var(--color-critical-500)'
    }
  }, up ? '▲' : '▼', " ", delta)));
}
function ContentScreen({
  nav
}) {
  const [tab, setTab] = React.useState('flows');
  const [view, setView] = React.useState('list');
  const [q, setQ] = React.useState('');
  const titleMap = {
    content: 'Content',
    segments: 'Segments',
    analytics: 'Analytics',
    selfhelp: 'Self Help',
    settings: 'Settings'
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '20px 28px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Acme Corp',
      href: '#'
    }, 'Content']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '12px 0 18px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "navi-h2",
    style: {
      margin: 0
    }
  }, titleMap[nav] || 'Content'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    intent: "neutral",
    iconLeft: "download"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    iconLeft: "plus"
  }, "New content"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Active flows",
    value: "42",
    delta: "6%",
    up: true
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Total views (30d)",
    value: "98.6k",
    delta: "12%",
    up: true
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Avg. completion",
    value: "71%",
    delta: "3%",
    up: true
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Errors",
    value: "2",
    delta: "1",
    up: false
  })), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      label: 'Flows',
      value: 'flows',
      count: 42
    }, {
      label: 'Smart Tips',
      value: 'tips',
      count: 18
    }, {
      label: 'Task Lists',
      value: 'tasks',
      count: 6
    }, {
      label: 'Beacons',
      value: 'beacons',
      count: 9
    }],
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(SearchField, {
    value: q,
    onChange: e => setQ(e.target.value),
    onClear: () => setQ(''),
    placeholder: "Search content"
  })), /*#__PURE__*/React.createElement(Chip, {
    icon: "filter"
  }, "All statuses"), /*#__PURE__*/React.createElement(Chip, null, "Last 30 days"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(ContentSwitcher, {
    options: [{
      value: 'list',
      icon: 'list'
    }, {
      value: 'grid',
      icon: 'layout-grid'
    }],
    value: view,
    onChange: setView,
    size: "small"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--color-secondary-50)',
      textAlign: 'left'
    }
  }, ['Name', 'Type', 'Status', 'Views', 'Completion', 'Owner', 'Last edited', ''].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      padding: '10px 16px',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.02em',
      color: 'var(--text-tertiary)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, FLOWS.map((f, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: i < FLOWS.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-hover)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, f.name), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, f.type), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    intent: f.status[0],
    variant: "soft",
    dot: true
  }, f.status[1])), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px',
      fontSize: 13,
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, f.views), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px',
      minWidth: 120
    }
  }, f.done > 0 ? /*#__PURE__*/React.createElement(ProgressBar, {
    value: f.done,
    size: "small"
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      fontSize: 13
    }
  }, "\u2014")), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: f.editor,
    size: "xs"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, f.editor))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px',
      fontSize: 13,
      color: 'var(--text-tertiary)'
    }
  }, f.edited), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement(Popover, {
    placement: "bottom-end",
    trigger: /*#__PURE__*/React.createElement(IconButton, {
      icon: "dots-vertical",
      variant: "tertiary",
      "aria-label": "Actions",
      size: "small"
    })
  }, /*#__PURE__*/React.createElement(Menu, {
    items: [{
      icon: 'edit',
      label: 'Edit'
    }, {
      icon: 'copy',
      label: 'Duplicate'
    }, {
      icon: 'chart-line',
      label: 'View analytics'
    }, {
      divider: true
    }, {
      icon: 'trash',
      label: 'Delete',
      intent: 'critical'
    }]
  })))))))));
}
window.ContentScreen = ContentScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/creator-studio/ContentScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/creator-studio/Sidebar.jsx
try { (() => {
// Whatfix Creator Studio — left navigation rail (Inkredible dark chrome)
const {
  Logo,
  Icon,
  Avatar,
  Tooltip
} = window.WhatfixNaviDesignSystem_46013f;
const NAV = [{
  id: 'content',
  icon: 'files',
  label: 'Content'
}, {
  id: 'segments',
  icon: 'users-group',
  label: 'Segments'
}, {
  id: 'analytics',
  icon: 'chart-bar',
  label: 'Analytics'
}, {
  id: 'selfhelp',
  icon: 'help-circle',
  label: 'Self Help'
}, {
  id: 'settings',
  icon: 'settings',
  label: 'Settings'
}];
function NavItem({
  item,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '10px 12px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-medium)',
      textAlign: 'left',
      background: active ? 'rgba(255,255,255,0.10)' : hover ? 'rgba(255,255,255,0.05)' : 'transparent',
      color: active ? '#fff' : 'rgba(255,255,255,0.7)',
      font: `var(--font-weight-${active ? 'semibold' : 'medium'}) 0.875rem/1 var(--font-sans)`,
      position: 'relative'
    }
  }, active && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -12,
      top: 6,
      bottom: 6,
      width: 3,
      borderRadius: 3,
      background: 'var(--color-primary-300)'
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 20
  }), item.label);
}
function Sidebar({
  active,
  onNav
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 256,
      flexShrink: 0,
      background: 'var(--color-secondary-1000)',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 12px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 8px 16px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    size: 30
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: '-0.02em',
      color: '#fff'
    }
  }, "whatfix"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      color: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "selector",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.08)',
      margin: '0 4px 12px'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      flex: 1
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.id,
    item: n,
    active: active === n.id,
    onClick: () => onNav(n.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.08)',
      margin: '12px 4px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 8px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Priya Nair",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: 13,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Priya Nair"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.5)',
      fontSize: 11
    }
  }, "Acme Corp"))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/creator-studio/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dap-widget/HostApp.jsx
try { (() => {
// Mock host SaaS app that the Whatfix widget overlays — deliberately muted chrome.
const HNS = window.WhatfixNaviDesignSystem_46013f;
const {
  Icon: HIcon
} = HNS;
function HostApp() {
  const gray = 'var(--color-secondary-300)';
  const Block = ({
    w,
    h,
    c
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      borderRadius: 6,
      background: c || 'var(--color-secondary-100)'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      filter: 'saturate(0.6)',
      opacity: 0.96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 7,
      background: 'var(--color-secondary-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--text-secondary)',
      fontSize: 16
    }
  }, "Acme Analytics"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginLeft: 24
    }
  }, ['Dashboard', 'Reports', 'Data', 'Settings'].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 14,
      fontWeight: i === 0 ? 600 : 500,
      color: i === 0 ? 'var(--text-primary)' : 'var(--text-tertiary)'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--color-secondary-300)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 'calc(100% - 56px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      background: '#fff',
      borderRight: '1px solid var(--border-subtle)',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, Array.from({
    length: 6
  }).map((_, i) => /*#__PURE__*/React.createElement(Block, {
    key: i,
    w: i === 0 ? '80%' : '100%',
    h: 12,
    c: i === 0 ? gray : 'var(--color-secondary-100)'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement(Block, {
    w: 220,
    h: 24,
    c: gray
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      margin: '24px 0'
    }
  }, Array.from({
    length: 3
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 110,
      borderRadius: 12,
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      padding: 18,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Block, {
    w: "50%",
    h: 10
  }), /*#__PURE__*/React.createElement(Block, {
    w: "70%",
    h: 22,
    c: gray
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 240,
      borderRadius: 12,
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      padding: 20,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Block, {
    w: 160,
    h: 14,
    c: gray
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 14,
      height: 150,
      marginTop: 24
    }
  }, [60, 90, 45, 120, 80, 140, 100, 70].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: h,
      borderRadius: '4px 4px 0 0',
      background: i === 5 ? 'var(--color-primary-200)' : 'var(--color-secondary-200)'
    }
  })))))));
}
window.HostApp = HostApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dap-widget/HostApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dap-widget/SelfHelpWidget.jsx
try { (() => {
// Whatfix Self Help — end-user in-app guidance widget (400px panel)
const NS = window.WhatfixNaviDesignSystem_46013f;
const {
  Logo,
  Icon,
  SearchField,
  Badge
} = NS;
const SECTIONS = [{
  title: 'Recommended for you',
  items: [{
    icon: 'route',
    kind: 'Flow',
    label: 'Set up your first project',
    meta: '4 steps · 2 min'
  }, {
    icon: 'checkbox',
    kind: 'Task List',
    label: 'Getting started checklist',
    meta: '3 of 6 done'
  }]
}, {
  title: 'Popular articles',
  items: [{
    icon: 'file-text',
    kind: 'Article',
    label: 'Inviting teammates to your workspace',
    meta: 'Article'
  }, {
    icon: 'player-play',
    kind: 'Video',
    label: 'Building a dashboard in 90 seconds',
    meta: 'Video · 1:30'
  }, {
    icon: 'file-text',
    kind: 'Article',
    label: 'Understanding roles & permissions',
    meta: 'Article'
  }]
}];
const KIND_COLOR = {
  Flow: 'primary',
  'Task List': 'info',
  Article: 'neutral',
  Video: 'success'
};
function HelpRow({
  it
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '11px 14px',
      border: 'none',
      background: hover ? 'var(--surface-hover)' : 'transparent',
      cursor: 'pointer',
      textAlign: 'left',
      borderRadius: 'var(--radius-medium)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      flexShrink: 0,
      borderRadius: 'var(--radius-medium)',
      background: 'var(--color-primary-50)',
      color: 'var(--color-primary-400)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      color: 'var(--text-tertiary)',
      marginTop: 1
    }
  }, it.meta)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--icon-secondary)"
  }));
}
function SelfHelpWidget({
  onClose
}) {
  const [q, setQ] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400,
      maxHeight: '86vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      borderRadius: 'var(--radius-large)',
      boxShadow: 'var(--elevation-05)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-secondary-1000)',
      padding: '18px 18px 20px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, "Help & resources"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      marginLeft: 'auto',
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,0.7)',
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement(SearchField, {
    value: q,
    onChange: e => setQ(e.target.value),
    onClear: () => setQ(''),
    placeholder: "Search for help"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 6px 12px'
    }
  }, SECTIONS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 14px 6px',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, s.title), s.items.map((it, j) => /*#__PURE__*/React.createElement(HelpRow, {
    key: j,
    it: it
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, [['home', 'Home', true], ['book', 'Guides', false], ['messages', 'Support', false]].map(([ic, lb, act], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      padding: '10px 0',
      color: act ? 'var(--color-primary-400)' : 'var(--text-tertiary)',
      fontSize: 11,
      fontWeight: act ? 600 : 500,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20
  }), lb))));
}
window.SelfHelpWidget = SelfHelpWidget;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dap-widget/SelfHelpWidget.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.SplitButton = __ds_scope.SplitButton;

__ds_ns.ToggleButton = __ds_scope.ToggleButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.List = __ds_scope.List;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.AlertPictogram = __ds_scope.AlertPictogram;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NumberInput = __ds_scope.NumberInput;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.ContentSwitcher = __ds_scope.ContentSwitcher;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.AlertModal = __ds_scope.AlertModal;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Popover = __ds_scope.Popover;

})();
