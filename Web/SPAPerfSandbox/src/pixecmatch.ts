import pixelmatch from 'pixelmatch';
import sharp from 'sharp';

export async function imgDiff(imgPath1: string, imgPath2: string) {
  const img1MetaData = await sharp(imgPath1).metadata();
  const img1Buffer = await sharp(imgPath1).toBuffer(); 
  console.log('w', img1MetaData.width);

  const result = pixelmatch(img1Buffer, img1Buffer,null , 274, 500);
  console.log('meta', img1MetaData);
  console.log('buffer', img1Buffer);
  console.log('result', result);
}

(async () => {
  await imgDiff('./dist/1.jpeg', '');
})();
