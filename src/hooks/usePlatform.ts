import { usePlatforms } from '@/hooks/UsePlatfroms.ts';

export const usePlatformById = (id?: number) => {
  const { platforms } = usePlatforms();

  return {
    platform: platforms?.find(platform => platform.id === id),
  };
};
