import { css } from 'styled-components';

/**
 * Dynamic Block Background.
 */
export const dynamicBlockBackground = () => css`
  animation: theme 21s linear infinite;
  
  &:after,
  &:before {
      content: '';
      display: block;
      position: fixed;
      z-index: -1;
      top: 0;
      width: 100vw;  // IE/Edge
      height: 100vh; // fallback
      width: 100vmax;
      height: 100vmax;
      background: rgba(0,0,0,0.05);
      animation: background 90s linear infinite;
  }

  &:after {
      left: 15vw;
  }

  &:before {
      right: 15vw;
      animation-delay: -30s;
      animation-direction: reverse;
  }

  @keyframes theme {
    0% {
        background: #FFF5F8;
    }
    
    50% {
        background: #51CBE4;
    }
    
    75% {
        background: #FFEE8E;
    }

    100% {
        background: #FA5374;
    }    
  }

  @keyframes background {
    0% {
        transform: rotate(0deg);
    }
    
    100% {
        transform: rotate(360deg);
    }
  }

`
