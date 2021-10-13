import FileBase64RepPayload from '../../../InterfaceAdapters/Payloads/FileBase64RepPayload';
import { IsBase64, IsMimeType, IsString } from 'class-validator';

class FileBase64RepRequest implements FileBase64RepPayload
{
    @IsMimeType()
    mimeType: string;

    @IsString()
    filename: string;

    @IsBase64()
    base64: string;

    constructor(data: Record<string, any>)
    {
        this.filename = data.filename;
        this.base64 = data.base64.split(';base64,').pop();
        this.mimeType = data.base64.split(';base64').shift().split('data:').pop();
    }

    get_name(): string
    {
        return this.filename.split('.').shift();
    }

    get_original_name(): string
    {
        return this.filename;
    }

    get_mime_type(): string
    {
        return this.mimeType;
    }

    get_path(): string
    {
        return '/';
    }

    get_extension(): string
    {
        return this.filename.split('.').pop();
    }

    get_size(): number
    {
        const MIMETYPE_SIZE = 814;
        const ENCODING_INCREMENT_SIZE = 1.37;
        return Math.floor((this.base64.length - MIMETYPE_SIZE) / ENCODING_INCREMENT_SIZE);
    }

    get_base64(): string
    {
        return this.base64;
    }
}

export default FileBase64RepRequest;
