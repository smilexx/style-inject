const styleInjectPath = require
    .resolve('style-inject-package/dist/style-inject.es')
    .replace(/[\\/]+/g, '/')

const inject = (name: string) => (cssVariableName: string) =>
    '\n' +
    `import styleInject from '${styleInjectPath}';\n` +
    `styleInject(${cssVariableName}, '${name.replace('@', '').replace('/', '-')}');`;

export default inject;
