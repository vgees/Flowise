// GradientIcon.js
import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const GradientIcon = ({ color1, color2, ...props }) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      {/* Replace the path below with the path of your desired Material-UI icon */}
      <path fill={`url(#gradient-${color1}-${color2})`} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z" />
      <defs>
        <linearGradient id={`gradient-${color1}-${color2}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: color1 }} />
          <stop offset="100%" style={{ stopColor: color2 }} />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

export default GradientIcon;
