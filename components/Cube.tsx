import React from 'react'

type Props = {}

function Cube({}: Props) {
  return (
    <div>
        <div className="css-3d-cube">
                <div className="cube">
                    <div className="top"></div>
                    <div>
                    <span className="i-0"></span>
                    <span className="i-1"></span>
                    <span className="i-2"></span>
                    <span className="i-3"></span>
                    </div>
                </div>
                </div>
                <style jsx>{
                    `
                    .css-3d-cube {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 550px;
                        background: #000;
                        overflow: hidden;
                        transition: all 2s ease-in-out;
                    }
                    .css-3d-cube .cube {
                        position: relative;
                        width: 150px;
                        height: 150px;
                        transform-style: preserve-3d;
                        transform: rotateX(-30deg);
                        animation: animate 4s linear infinite;
                    }

                    @keyframes animate {
                        0% {
                        transform: rotateX(-30deg) rotateY(0deg);
                        }
                        100% {
                        transform: rotateX(-30deg) rotateY(360deg);
                        }
                    }

                    .css-3d-cube .cube div {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        transform-style: preserve-3d;
                    }

                    .css-3d-cube .cube div span {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        transform-style: preserve-3d;
                        background: linear-gradient(#ff2500, #f2f217);
                        transform: rotateY(calc(90deg * 0)) translateZ(75px);
                    }
                    .css-3d-cube .cube div span.i-1 {
                        transform: rotateY(calc(90deg * 1)) translateZ(75px);
                    }
                    .css-3d-cube .cube div span.i-2 {
                        transform: rotateY(calc(90deg * 2)) translateZ(75px);
                    }
                    .css-3d-cube .cube div span.i-3 {
                        transform: rotateY(calc(90deg * 3)) translateZ(75px);
                    }
                    .css-3d-cube .cube .top {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 150px;
                        height: 150px;
                        background: rgba(255,37,0,1);
                        transform: rotateX(90deg) translateZ(75px);
                    }
                    .css-3d-cube .cube .top::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 150px;
                        height: 150px;
                        background: rgba(255, 30, 0, 0.2);
                        transform: translateZ(-200px);
                        filter: blur(20px);
                        box-shadow: 0 0 60px rgba(255, 30, 0, 0.2),
                        0 0 100px rgba(255, 30, 0, 0.4), 0 0 150px rgba(255,30, 0, 0.6),
                        0 0 100px rgba(255, 30, 0, 0.8), 0 0 150px rgba(255,30, 0, 1);
                    }`
                }</style>
    </div>
  )
}

export default Cube