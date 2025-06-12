import noImage from '../assets/no-image.jpg';

export const croppedImageUrl = (url: string): string => {
  if (!url) return noImage;

  const target = '/media';
  const index = url.indexOf('media/') + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};
