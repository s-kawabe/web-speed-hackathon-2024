import { fileTypeFromBuffer } from 'file-type';

const SUPPORTED_MIME_TYPE_LIST = ['image/bmp', 'image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/jxl'];

export async function isSupportedImage(image: File): Promise<boolean> {
  // NOTE: File型をArrayBufferに変換（バイナリ化）してMIMEを取得できるようにする
  const fileType = await fileTypeFromBuffer(await image.arrayBuffer());

  if (SUPPORTED_MIME_TYPE_LIST.includes(fileType?.mime ?? '')) {
    return true;
  }

  return false;
}
