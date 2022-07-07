import { Button } from "antd"
import axios from "axios"
import { useEffect, useRef } from "react"
const url = `http://local.zhenguanyu.com:8080/tutor-headlesschrome-node/api/render?renderParams=%7B%22renderUrl%22%3A%22https%3A%2F%2Fsite-test.zhenguanyu.com%2Ftutor-keynote-web%2Fv2%2F%23%2Fimages%2F2qlsvon6o_1656389000437.png%3FuseOss%3Dtrue%26fontFamily%3DFZLanTingYuanS-R-GB%252C%2522Source%2520Han%2520Sans%2520SC%2522%252C%2522TeX%2520Gyre%2520Termes%2520Math%2522%252C%2522Times%2520New%2520Roman%2522%252CLastResort%26useSVG%3Dtrue%26themeId%3D13843%26subjectId%3D1%26phase%3Dxiaoxue%26sectionResourceType%3D1%22%2C%22options%22%3A%7B%22options%22%3A%7B%22paperWidth%22%3A%22780px%22%2C%22paperHeight%22%3A%22585px%22%7D%7D%7D`
const testUrl = `https://tutor-test.zhenguanyu.com/tutor-headlesschrome-node/api/render?renderParams=%7B%22renderUrl%22%3A%22https%3A%2F%2Fsite-test.zhenguanyu.com%2Ftutor-keynote-web%2Fv2%2F%23%2Fimages%2F2qlsvon6o_1656389000437.png%3FuseOss%3Dtrue%26fontFamily%3DFZLanTingYuanS-R-GB%252C%2522Source%2520Han%2520Sans%2520SC%2522%252C%2522TeX%2520Gyre%2520Termes%2520Math%2522%252C%2522Times%2520New%2520Roman%2522%252CLastResort%26useSVG%3Dtrue%26themeId%3D13843%26subjectId%3D1%26phase%3Dxiaoxue%26sectionResourceType%3D1%22%2C%22options%22%3A%7B%22options%22%3A%7B%22paperWidth%22%3A%22780px%22%2C%22paperHeight%22%3A%22585px%22%7D%7D%7D`
export default () => {
    const btnRef = useRef()
    const sendRequest = async () => {
        console.log("sendRequest,start")
        axios
          .get(testUrl)
          .then((res) => {
            console.log(res, "res")
          })
          .then((res) => {
            console.log("res")
          })
        console.log('sendRequest,end')
    }
    useEffect(() => {
        axios.all([
          sendRequest(),
          sendRequest(),
          sendRequest(),
          sendRequest(),
          sendRequest(),
        //   sendRequest(),
        //   sendRequest(),
        //   sendRequest(),
        //   sendRequest(),
        //   sendRequest(),
        //   sendRequest(),
        //   sendRequest(),
        //   sendRequest(),
        ])
    })
    // useEffect(() => {
    //     console.log('+++')
    //     if (btnRef && btnRef.current) {
    //         console.log('----')
    //         fromEvent(btnRef.current, "click")
    //           .pipe(throttleTime(1000),scan((count) => count + 1, 0))
    //           .subscribe((count) => console.log(`Clicked ${count} times`))
    //     }
    // },[btnRef])
    return <div>
        <Button ref={btnRef}>按钮</Button>
    </div>
}