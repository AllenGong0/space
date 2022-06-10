import React, { useEffect, useState } from "react"
import Lottie from "react-lottie"
import * as animationData from "./data.json"
import * as successAnimate from "./a1d2.json"
import './index.less'
import photo from './photo.jpeg'
import SVGA from "svgaplayerweb"
import mySvga from './success.svga'
import { nextTick } from "process"


  const src1 = "https://cdn.jsdelivr.net/gh/svga/SVGA-Samples@master/angel.svga"

export const LottieControl = () => {
  const [state, setState] = useState({ isStopped: false, isPaused: false })
  const [ctx, setCtx] = useState<any>()
  const [canvas, setCanvas] = useState<any>()

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  console.log(mySvga, "sd")

  const laodAnimation = () => {
    var player = new SVGA.Player("#demoCanvas")
    var parser = new SVGA.Parser() // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。
    parser.load(mySvga, function (videoItem) {
      player.setVideoItem(videoItem)
      player.startAnimation()
    })
  }


  useEffect(() => {
    var canvas = document.getElementById("canvas") as any
    console.log(canvas, "canvas")
    var ctx = canvas.getContext("2d")
    setCanvas(canvas)
    setCtx(ctx)
      laodAnimation()
  }, [])

  useEffect(() => {
    if (ctx && canvas) {
    }
  }, [ctx, canvas])


  const draw = (ctx, canvas) => {
      const img = document.getElementById("my-img")
      canvas.width = img.clientWidth - 200
      canvas.height = img.clientHeight
      ctx.drawImage(img, 0, 0)
      const url = canvas.toDataURL("image/jpeg")
  }

    return (
      <div
        className="container"
        style={{
          background: "#f5f5f5",
        }}
      >
        <div>
          <canvas
            id="canvas"
            width={170}
            height={60}
            className="my-canvas"
          ></canvas>
        </div>
        <div></div>
        <div>
          <Lottie
            options={defaultOptions}
            eventListeners={[
              {
                eventName: "complete",
                callback: () => console.log("the animation completed:"),
              },
            ]}
          ></Lottie>
        </div>

        <img id="my-img" src={photo} alt="" />
        <div id="demoCanvas" style={{ width: '500px', height: '500px'}}></div>
      </div>
    )
}
export default LottieControl