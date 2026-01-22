declare module 'mammoth' {
    export interface ConvertOptions {
        arrayBuffer: ArrayBuffer;
    }
    export interface ConvertResult {
        value: string;
        messages: any[];
    }
    export function convertToHtml(options: ConvertOptions): Promise<ConvertResult>;
}
