import React from 'react';

const CircleAlert = () => {
    return (
        <div>
          <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_dd_12386_56772)">
                    <rect x="3" y="2.39844" width="36" height="36" rx="18" fill="white"/>
                    <g clip-path="url(#clip0_12386_56772)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 10C15.486 10 11 14.486 11 20C11 25.514 15.486 30 21 30C26.514 30 31 25.514 31 20C31 14.486 26.514 10 21 10ZM20 16C20 15.4477 20.4477 15 21 15C21.5523 15 22 15.4477 22 16V20C22 20.5523 21.5523 21 21 21C20.4477 21 20 20.5523 20 20V16ZM21 25C21.5523 25 22 24.5523 22 24C22 23.4477 21.5523 23 21 23C20.4477 23 20 23.4477 20 24C20 24.5523 20.4477 25 21 25Z" fill="#006A68"/>
                    </g>
                    </g>
                    <defs>
                    <filter id="filter0_dd_12386_56772" x="0" y="0.398438" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_12386_56772"/>
                    <feOffset/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.247059 0 0 0 0 0.266667 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12386_56772"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="1.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.247059 0 0 0 0 0.266667 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow_12386_56772" result="effect2_dropShadow_12386_56772"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_12386_56772" result="shape"/>
                    </filter>
                    <clipPath id="clip0_12386_56772">
                    <rect width="20" height="20" fill="white" transform="translate(11 10)"/>
                    </clipPath>
                    </defs>
                    </svg>

        </div>
    );
};
export default CircleAlert;