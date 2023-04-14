import React, {SVGAttributes} from 'react';
// icon by: https://github.com/feathericons/feather
export const Facebook: React.FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"

    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
  </svg>
);
