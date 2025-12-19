import React, { useState, useEffect, useRef } from 'react'
import { useSelectedElement } from '@/app/provider'

function TextComponent({style, content, textarea, id}) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(content || textarea || '');
  const textRef = useRef(null);
  const { selectedElement, setSelectedElement } = useSelectedElement();

  useEffect(() => {
    setText(content || textarea || '');
  }, [content, textarea]);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (selectedElement?.layout && typeof selectedElement.index === 'number') {
      const fieldName = textarea !== undefined ? 'textarea' : 'content';
      const updatedLayout = {
        ...selectedElement.layout,
        [selectedElement.index]: {
          ...selectedElement.layout[selectedElement.index],
          [fieldName]: text,
        },
      };
      setSelectedElement({ ...selectedElement, layout: updatedLayout });
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      textRef.current?.blur();
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setText(content || textarea || '');
    }
  };

  const processedStyle = {};
  if (style) {
    Object.keys(style).forEach(key => {
      const value = style[key];
      if (Array.isArray(value)) {
        processedStyle[key] = value[0] || value.join(' ');
      } else if (value && typeof value === 'object' && value.value) {
        processedStyle[key] = value.value;
      } else {
        processedStyle[key] = value;
      }
    });
  }

  return (
    <div className='w-full' onClick={handleClick}>
      {isEditing ? (
        <textarea
          ref={textRef}
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          style={processedStyle}
          className='w-full border-2 border-purple-500 rounded p-2 focus:outline-none resize-none focus:ring-2 focus:ring-purple-300'
          autoFocus
        />
      ) : (
        <div style={processedStyle} className='cursor-text min-h-[20px]'>
          {text || 'Click to edit text'}
        </div>
      )}
    </div>
  )
}

export default TextComponent