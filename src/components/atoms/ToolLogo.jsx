import React from 'react';

export const ToolLogo = ({ name, className = "w-8 h-8" }) => {
  switch (name.toLowerCase()) {
    case 'notion':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#000000" />
          <path
            d="M4.5 5.2L15.3 4.4C16.8 4.3 17.5 4.8 17.7 5.9L19.2 16.5C19.4 17.8 18.6 18.6 17.2 18.7L6.4 19.5C4.9 19.6 4.3 19 4 17.9L2.6 7.3C2.4 6 3.1 5.3 4.5 5.2Z"
            fill="white"
          />
          <path
            d="M6.8 7.9L14.7 7.3L15.2 16.1L7.3 16.7L6.8 7.9Z"
            fill="#000000"
          />
          <path
            d="M8.8 9.5V15.1L10.3 15V11L12.5 15L14 14.9V9.2L12.5 9.3V13.2L10.3 9.4L8.8 9.5Z"
            fill="white"
          />
        </svg>
      );

    case 'asana':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="7" r="4" fill="#F06A6A" />
          <circle cx="6.5" cy="16.5" r="4" fill="#F06A6A" />
          <circle cx="17.5" cy="16.5" r="4" fill="#F06A6A" />
        </svg>
      );

    case 'clickup':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 14.5C4 18.6421 7.35786 22 11.5 22C15.6421 22 19 18.6421 19 14.5H16C16 16.9853 13.9853 19 11.5 19C9.01472 19 7 16.9853 7 14.5H4Z"
            fill="url(#clickup-gradient)"
          />
          <path
            d="M11.5 2L5 8.5L7.12 10.62L11.5 6.24L15.88 10.62L18 8.5L11.5 2Z"
            fill="#7B68EE"
          />
          <defs>
            <linearGradient id="clickup-gradient" x1="4" y1="18.25" x2="19" y2="18.25" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8932FF" />
              <stop offset="1" stopColor="#FF00DF" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'slack':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M5.5 10C6.32843 10 7 9.32843 7 8.5V5.5C7 4.67157 6.32843 4 5.5 4C4.67157 4 4 4.67157 4 5.5C4 6.32843 4.67157 7 5.5 7H8.5C9.32843 7 10 6.32843 10 5.5C10 4.67157 9.32843 4 8.5 4H5.5" stroke="#E01E5A" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 5.5C10 6.32843 10.6716 7 11.5 7H14.5C15.3284 7 16 6.32843 16 5.5C16 4.67157 15.3284 4 14.5 4C13.6716 4 13 4.67157 13 5.5V8.5C13 9.32843 13.6716 10 14.5 10C15.3284 10 16 9.32843 16 8.5V5.5" stroke="#36C5F0" strokeWidth="2" strokeLinecap="round" />
          <path d="M14.5 14C13.6716 14 13 14.6716 13 15.5V18.5C13 19.3284 13.6716 20 14.5 20C15.3284 20 16 19.3284 16 18.5C16 17.6716 15.3284 17 14.5 17H11.5C10.6716 17 10 17.6716 10 18.5C10 19.3284 10.6716 20 11.5 20H14.5" stroke="#2EB67D" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 18.5C10 17.6716 9.32843 17 8.5 17H5.5C4.67157 17 4 17.6716 4 18.5C4 19.3284 4.67157 20 5.5 20C6.32843 20 7 19.3284 7 18.5V15.5C7 14.6716 6.32843 14 5.5 14C4.67157 14 4 14.6716 4 15.5V18.5" stroke="#ECB22E" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'google workspace':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
      );

    case 'microsoft 365':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="8.5" height="8.5" rx="1" fill="#F25022" />
          <rect x="12.5" y="3" width="8.5" height="8.5" rx="1" fill="#7FBA00" />
          <rect x="3" y="12.5" width="8.5" height="8.5" rx="1" fill="#00A4EF" />
          <rect x="12.5" y="12.5" width="8.5" height="8.5" rx="1" fill="#FFB900" />
        </svg>
      );

    case 'calendly':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#006BFF" />
          <path
            d="M15.5 8.5C14.6 7.6 13.4 7 12 7C9.2 7 7 9.2 7 12C7 14.8 9.2 17 12 17C13.4 17 14.6 16.4 15.5 15.5"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'canva pro':
    case 'canva':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="url(#canva-grad)" />
          <path
            d="M15.8 14.6C14.7 15.7 13.2 16.2 11.5 16.2C8.8 16.2 7 14.5 7 12C7 9.5 8.9 7.8 11.7 7.8C13.3 7.8 14.6 8.4 15.4 9.3"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="canva-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C4CC" />
              <stop offset="1" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'shopify':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#95BF47" />
          <path
            d="M14.5 7.5L16.5 9L18 8L16.2 18.5H12L9 11L14.5 7.5Z"
            fill="#5E8E3E"
          />
          <path
            d="M12.8 5.5C12.8 5.5 12.1 5.3 11.5 5.7C10.9 6.1 10.5 7.1 10.5 7.1L9 8.2L12.5 18.5L17.5 18L18 8L12.8 5.5Z"
            fill="white"
          />
          <path
            d="M13.2 11.2C12.5 10.9 12.1 10.6 12.1 10.1C12.1 9.6 12.5 9.3 13.1 9.3C13.7 9.3 14.1 9.6 14.3 10L15.3 9.4C14.8 8.6 14 8.2 13 8.2C11.8 8.2 10.9 8.9 10.9 10.1C10.9 11.3 11.8 11.8 12.7 12.2C13.5 12.5 13.9 12.9 13.9 13.4C13.9 14 13.4 14.4 12.7 14.4C11.9 14.4 11.4 13.9 11.2 13.4L10.1 13.9C10.4 14.9 11.4 15.5 12.6 15.5C14 15.5 15.1 14.7 15.1 13.4C15.1 12.1 14.1 11.6 13.2 11.2Z"
            fill="#95BF47"
          />
        </svg>
      );

    case 'hubspot':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF7A59" />
          <path
            d="M15.5 10.5V8.5C16.1 8.2 16.5 7.6 16.5 7C16.5 6.2 15.8 5.5 15 5.5C14.2 5.5 13.5 6.2 13.5 7C13.5 7.6 13.9 8.2 14.5 8.5V10.5C13.8 10.7 13.2 11.2 12.8 11.8L9.2 9.4C9.3 9.1 9.3 8.8 9.3 8.5C9.3 7.4 8.4 6.5 7.3 6.5C6.2 6.5 5.3 7.4 5.3 8.5C5.3 9.6 6.2 10.5 7.3 10.5C7.7 10.5 8 10.4 8.3 10.2L11.8 12.6C11.7 13 11.7 13.3 11.8 13.7L7.8 16.1C7.5 15.9 7.1 15.8 6.7 15.8C5.6 15.8 4.7 16.7 4.7 17.8C4.7 18.9 5.6 19.8 6.7 19.8C7.8 19.8 8.7 18.9 8.7 17.8C8.7 17.5 8.6 17.2 8.5 16.9L12.5 14.5C13 15.2 13.9 15.7 14.9 15.7C16.3 15.7 17.4 14.6 17.4 13.2C17.4 11.9 16.6 10.8 15.5 10.5Z"
            fill="white"
          />
        </svg>
      );

    case 'zendesk':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#03363D" />
          {/* Top triangle */}
          <path d="M6 6H13L6 13V6Z" fill="#F8FAFC" />
          {/* Top circle */}
          <circle cx="15.5" cy="9.5" r="3.5" fill="#17B88C" />
          {/* Bottom circle */}
          <circle cx="8.5" cy="16.5" r="3.5" fill="#17B88C" />
          {/* Bottom triangle */}
          <path d="M18 18H11L18 11V18Z" fill="#F8FAFC" />
        </svg>
      );

    case 'zapier':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF4A00" />
          <path
            d="M12 5V19M5 12H19M7 7L17 17M17 7L7 17"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return (
        <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
          {name.charAt(0)}
        </div>
      );
  }
};

export default ToolLogo;
