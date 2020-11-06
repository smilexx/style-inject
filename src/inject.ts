const styleInject = (css: string, packageName: string) => {
    if (!css || typeof document === 'undefined') return;

    const head = document.head || document.getElementsByTagName('head')[0];
    let style: HTMLStyleElement | null = head.querySelector(`style[${packageName}]`);

    if (!style) {
        style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.setAttribute(packageName, '');
        if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
        } else {
            head.appendChild(style);
        }
    }

    if (style.style) {
        style.style.cssText = style.style.cssText + css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
};

export default styleInject;
