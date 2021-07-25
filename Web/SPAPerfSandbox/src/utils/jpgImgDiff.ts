import pixelmatch from 'pixelmatch';
import fs from 'fs-extra';
import JPEG from 'jpeg-js';

export async function imgDiff(
  imgPath1: string,
  imgPath2: string,
  diffImagePath?: string,
): Promise<number> {
  try {
    const img1JpegData = fs.readFileSync(imgPath1);
    const img1 = JPEG.decode(img1JpegData);
    const img2JpegData = fs.readFileSync(imgPath2);
    const img2 = JPEG.decode(img2JpegData);
    const diff: any = {
      data: Buffer.alloc(img1.width * img1.height * 4),
      width: img1.width,
      height: img1.height,
    };

    const result = pixelmatch(
      img1.data,
      img2.data,
      diff.data,
      img1.width,
      img1.height,
      {
        threshold: 0.3,
      },
    );

    const jpegImgData = JPEG.encode(diff, 50);
    if (diffImagePath) {
      fs.ensureFile(diffImagePath);
      fs.writeFileSync(diffImagePath, jpegImgData.data);
    }
    return result;
  } catch (err) {
    console.error(`SKIPPED!! :${imgPath1} and ${imgPath2} have different size.`); 
    return 0;
  }
}
