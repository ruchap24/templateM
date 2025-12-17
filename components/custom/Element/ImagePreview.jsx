import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React, { useRef } from 'react'
import { Upload, X } from 'lucide-react'

function ImagePreview({label,value,onHandleInputChange}) {
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target?.result;
        if (base64String) {
          onHandleInputChange(base64String);
        }
      };
      reader.onerror = () => {
        alert('Error reading file');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryClick = () => {
    fileInputRef.current?.click();
  };

  const handleClear = () => {
    onHandleInputChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      
      {value && (
        <div className="relative w-full">
          <img 
            src={value} 
            alt='preview' 
            className='w-full h-[150px] object-cover border rounded-xl'
          />
          <button
            onClick={handleClear}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      
      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={handleGalleryClick}
          className="flex items-center gap-2"
        >
          <Upload className="h-4 w-4" />
          {value ? 'Change Image' : 'Upload from Gallery'}
        </Button>
        
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
      
      <Input 
        value={value} 
        onChange={(e)=>onHandleInputChange(e.target.value)} 
        className="mt-2"
        placeholder="Or enter image URL"
      />
    </div>
  )
}

export default ImagePreview