import { useState, useEffect } from 'react';

const DeviceTypes = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile',
};

const getDeviceType = () => {
  if (typeof window === 'undefined') return DeviceTypes.DESKTOP; // Default to desktop on server side

  const width = window.innerWidth;

  if (width > 1024) return DeviceTypes.DESKTOP;
  else if (width > 768) return DeviceTypes.TABLET;
  return DeviceTypes.MOBILE;
};

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const newDeviceType = getDeviceType();

      if (newDeviceType !== deviceType) {
        setDeviceType(newDeviceType);
      }
    };

    setDeviceType(getDeviceType())

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;