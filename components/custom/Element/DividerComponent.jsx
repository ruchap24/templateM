import React from 'react'

function DividerComponent({style}) {
  const processStyle = (styleObj) => {
    if (!styleObj) return {};
    const processed = {};
    Object.keys(styleObj).forEach(key => {
      const value = styleObj[key];
      if (Array.isArray(value)) {
        processed[key] = value[0] || value.join(' ');
      } else if (value && typeof value === 'object' && value.value) {
        processed[key] = value.value;
      } else {
        processed[key] = value;
      }
    });
    return processed;
  };

  const processedStyle = processStyle(style);

  return (
    <hr style={processedStyle}/>
  )
}

export default DividerComponent