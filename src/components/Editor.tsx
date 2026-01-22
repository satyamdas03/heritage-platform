'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image'],
        ['clean'],
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list',
    'link', 'image',
];

export default function Editor({ value, onChange, placeholder }: EditorProps) {
    return (
        <div className="bg-white dark:bg-[#2d221a] text-black dark:text-white rounded-lg overflow-hidden">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                modules={modules}
                formats={formats}
                className="min-h-[300px]"
            />
            <style jsx global>{`
                .ql-container {
                    min-height: 300px;
                    font-size: 1.125rem; /* text-lg */
                }
                .ql-editor {
                    min-height: 300px;
                    background-color: transparent;
                }
                .ql-toolbar {
                    background-color: #f8f7f6;
                    border-color: #e6e0db !important;
                }
                 .dark .ql-toolbar {
                    background-color: #221810;
                    border-color: #3d2e23 !important;
                }
                .ql-container.ql-snow {
                    border-color: #e6e0db !important;
                }
                .dark .ql-container.ql-snow {
                    border-color: #3d2e23 !important;
                }
                .dark .ql-editor {
                     color: #dcd6d0;
                }
                .dark .ql-stroke {
                    stroke: #dcd6d0 !important;
                }
                .dark .ql-fill {
                    fill: #dcd6d0 !important;
                }
                .dark .ql-picker {
                    color: #dcd6d0 !important;
                }
            `}</style>
        </div>
    );
}
