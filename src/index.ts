const styleInject = (css: string, packageName: string) => {
    if (!css || typeof document === 'undefined') return;

    const head = document.head || document.getElementsByTagName('head')[0];
    let style: HTMLStyleSheetElement | null = head.querySelector(`style[${packageName}]`);

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

    if (style.styleSheet) {
        style.styleSheet.addRule(css);
    } else {
        style.appendChild(document.createTextNode(css));
    }
};


const inject = (name: string) => (cssVariableName: string) =>
    `\n (${styleInject.toString()})(${cssVariableName}, '${name.replace('@', '').replace('/', '-')}');`;

export default inject;
