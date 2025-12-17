import React from 'react'

function ButtonComponent({style, content,url,outerStyle}) {
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
  const processedOuterStyle = processStyle(outerStyle);

  return (
    <div>
        <a href={url} style={processedOuterStyle}>
            <button style={processedStyle} className='p-2 bg-blue-500 text-white rounded-md'>{content}</button>
        </a>
    </div>
  )
}

export default ButtonComponent