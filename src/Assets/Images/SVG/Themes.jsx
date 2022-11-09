import React from 'react';

const Themes = () => {
    return (
        <div>
           <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_dd_12386_56767)">
                <rect x="3" y="2.39844" width="36" height="36" rx="18" fill="white"/>
                <path d="M28.5 11H25V17H30V12.5C30 11.6716 29.3284 11 28.5 11Z" fill="#006A68"/>
                <path d="M30 19H25V29H28.5C29.3284 29 30 28.3284 30 27.5V19Z" fill="#006A68"/>
                <path d="M12 24H23V29H13.5C12.6716 29 12 28.3284 12 27.5V24Z" fill="#006A68"/>
                <path d="M13.5 11C12.6716 11 12 11.6716 12 12.5V22H23V11H13.5Z" fill="#006A68"/>
                </g>
                <defs>
                <filter id="filter0_dd_12386_56767" x="0" y="0.398438" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_12386_56767"/>
                <feOffset/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.247059 0 0 0 0 0.266667 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12386_56767"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="1.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.247059 0 0 0 0 0.266667 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_12386_56767" result="effect2_dropShadow_12386_56767"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_12386_56767" result="shape"/>
                </filter>
                </defs>
                </svg>
        </div>
    );
};
export default Themes;