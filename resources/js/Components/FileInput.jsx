import React, { forwardRef } from 'react';

const FileInput = forwardRef(
  ({ id, className, value, onChange, ...props }, ref) => (
    <input
      id={id}
      type="file"
      className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ${className}`}
      ref={ref}
      onChange={(e) => onChange(e.target.files[0])}
      {...props}
    />
  )
);

export default FileInput;