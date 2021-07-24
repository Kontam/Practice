import pixelmatch from 'pixelmatch';
import fs from 'fs';
import JPEG from 'jpeg-js';

export async function imgDiff(imgPath1: string, imgPath2: string): Promise<number> {
  const img1JpegData = fs.readFileSync(imgPath1);
  const img1 = JPEG.decode(img1JpegData);
  const img2JpegData = fs.readFileSync(imgPath2);
  const img2 = JPEG.decode(img2JpegData);
  const diff: any = {data: new Buffer(img1.width * img1.height * 4), width: img1.width, height: img1.height};

  const result = pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {
    threshold: 0.3,
  });

  console.log('result', result);
  const jpegImgData = JPEG.encode(diff, 50);
  fs.writeFileSync('image.jpg', jpegImgData.data);
  return result;
}

// test
/*
(async () => {
  imgDiff('./dist/1.jpeg', './dist/2.jpeg');
})();
*/
