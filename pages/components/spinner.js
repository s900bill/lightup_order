import LottieAnimation from './lottieAnimation' // 假設你的組件叫做LottieAnimation
import loading from '../lottieAnimation/loading.json' // 導入你的Lottie動畫文件

export default function Spinner({ className }) {
  return (
    // <svg
    //   width="16"
    //   height="16"
    //   stroke="currentColor"
    //   viewBox="0 0 24 24"
    //   className={className} // 允許從外部傳入類別名稱
    //   style={{ color: 'inherit' }} // 確保顏色繼承自父元素
    // >
    //   <style>
    //     {`.spinner_V8m1 { transform-origin: center; animation: spinner_zKoa 2s linear infinite; }
    //       .spinner_V8m1 circle { stroke-linecap: round; animation: spinner_YpZS 1.5s ease-in-out infinite; }
    //       @keyframes spinner_zKoa { 100% { transform: rotate(360deg); } }
    //       @keyframes spinner_YpZS { 0% { stroke-dasharray: 0 150; stroke-dashoffset: 0; } 47.5% { stroke-dasharray: 42 150; stroke-dashoffset: -16; } 95%, 100% { stroke-dasharray: 42 150; stroke-dashoffset: -59; } }`}
    //   </style>
    //   <g className="spinner_V8m1">
    //     <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" />
    //   </g>
    // </svg>
    <LottieAnimation className={`${className} text-primary`} animationData={loading} />
  )
}
