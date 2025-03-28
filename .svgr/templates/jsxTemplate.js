const jsxTemplate = ({ componentName, jsx, imports, props }, { tpl }) => {
  const formattedComponentName = componentName.replace('Svg', '');

  return tpl`
    ${imports}
    
    export const ${formattedComponentName} = (${props}) => (
      ${jsx}
    );
  `;
};

module.exports = jsxTemplate;
