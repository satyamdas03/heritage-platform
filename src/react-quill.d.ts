declare module 'react-quill-new' {
    import React from 'react';
    export interface ReactQuillProps {
        theme?: string;
        value?: string;
        onChange?: (value: string) => void;
        placeholder?: string;
        modules?: any;
        formats?: string[];
        className?: string;
    }
    export default class ReactQuill extends React.Component<ReactQuillProps> { }
}
