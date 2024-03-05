'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('https://download.greenhuang47.online/GreenHuangCV.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
