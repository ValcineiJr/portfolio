import html2canvas from 'html2canvas';
import { MutableRefObject } from 'react';

const downloadImage = (blob: string, fileName: string) => {
  const fakeLink = window.document.createElement(`a`);
  fakeLink.style.display = `none`;
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};

const exportAsImage = async (
  element: MutableRefObject<any>,
  imageFileName: string,
) => {
  const canvas = await html2canvas(element.current);
  const image = canvas.toDataURL(`image/png`, 0.95);

  downloadImage(image, imageFileName);
};

export default exportAsImage;
