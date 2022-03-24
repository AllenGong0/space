import { useEffect, useState } from "react"
import { cloneDeep } from 'lodash'

const CustomArray = (props) => {
    const { addons, children } = props
    const { dependValues, dataPath } = addons
    const [controlVal, setControlVal] = useState(Number(dependValues[0] || 1))
    const defaultVal = addons.getSchemaByPath(`${dataPath}[]`).default
    useEffect(() => {
        dependValues[0] !== controlVal && setControlVal(Number(dependValues[0]))
    }, [dependValues])

    useEffect(()=>{
        const val = new Array(controlVal).fill(cloneDeep(defaultVal))
        addons.setValue(dataPath, val)
    },[controlVal])
    return <div>{children}</div>
}
export default CustomArray