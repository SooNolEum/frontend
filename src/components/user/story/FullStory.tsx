'use client';

import { useExplore } from '@/lib/api/user';
import { useParams } from 'next/navigation';

export default function FullStory() {
  const { id } = useParams();
  const { data } = useExplore();

  const story = data?.find((item) => item.id === parseInt(id as string));

  return (
    <div>
      <div className='mb-[10px] font-hakgyo text-hakgyo-l text-brand-black text-center'>
        {story?.title}
      </div>

      <div className='font-pretendard text-pretendard-m text-center text-brand-black py-3 px-8 h-[400px] overflow-y-auto'>
        {story?.fullDescription}
      </div>
    </div>
  );
}
