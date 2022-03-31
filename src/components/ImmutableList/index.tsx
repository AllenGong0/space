import { cloneDeep } from "lodash"
import { FC, useEffect } from "react"

const ImmutableList: FC<any> = ({ children, addons, onChange }) => {
  const { dependValues, dataPath } = addons
  const count = Number(dependValues[0] || 0)
  const defaultVal = addons.getSchemaByPath(`${dataPath}[]`).default

  useEffect(() => {
    const val = new Array(count).fill(cloneDeep(defaultVal))
    onChange(val)
  },[count])

  return <>{children}</>
}

export default ImmutableList
