const fs = require('fs-extra')
const path = require('path')
const editorPath = 'editorConfig'
const indexInfo = fs.readJSONSync(path.resolve(__dirname, editorPath, 'index.json'))
const { contentSchema, subSchema, seriesQuestion } = indexInfo

const contentSchemaPath = path.resolve(__dirname, editorPath, contentSchema)
const subSchemaPath = path.resolve(__dirname, editorPath, subSchema)
const seriesSchemaPath = path.resolve(__dirname, editorPath, seriesQuestion)

const contentSchemaInfo = fs.readJSONSync(contentSchemaPath)
const subSchemaInfo = fs.readJSONSync(subSchemaPath)
const seriesSchemaInfo = fs.readJSONSync(seriesSchemaPath)

/**
 *
 * @param {*} schema 数据格式
 * @param {*} nowKey 当前 schema 的 key
 * @param {*} parentHiddenStr 父 schema 的 hidden
 * @param {*} parentMap key->parent 映射关系
 */
const addHidden = (schema, nowKey = 'root', parentHiddenStr = undefined, parentMap = new Map()) => {
    const { type } = schema
    const reg = /(?<={{).+(?=}})/
    const oldHidden = `ui:hidden`
    const newHidden = `hidden`
    /** 取出当前 schema 的hidden（PS：如果该scheam 是对象/数组，则将该 hidden 值传递给子元素）*/
    let oldHiddenStr = (schema[oldHidden] || schema[newHidden])

    /** hidden: "{{***}}"，取出 hidden 的花括号中的内容 */
    let innerHiddenStr = ''
    if(oldHiddenStr){
        const hiddenInfo = oldHiddenStr.match(reg)[0]
        const hiddenInfoArr = hiddenInfo.split('.')
        innerHiddenStr = hiddenInfoArr.join('.')
       if(oldHidden in schema){
           delete schema[oldHidden]
       }

        /** rootValue 更改为相应的 formData */
        const newKey = getRoot(nowKey, parentMap)
        if(innerHiddenStr.includes('rootValue')){
            innerHiddenStr = innerHiddenStr.replaceAll('rootValue', newKey)
            console.log(innerHiddenStr, schema.title, nowKey)
        }
    }

    /** 设置当前 schema 的 hidden 值  */
    let newHiddenStr = innerHiddenStr
    if(parentHiddenStr && newHiddenStr){
        newHiddenStr = newHiddenStr.includes(parentHiddenStr) ? newHiddenStr : `${newHiddenStr} || ${parentHiddenStr}`
    }else if(parentHiddenStr){
        newHiddenStr = `${parentHiddenStr}`
    }
    newHiddenStr && (schema.hidden = `{{${newHiddenStr}}}`)

    /** 如果是对象或数组，将当前 hidden 传递下去 */
    let properties = {}
    if(type === 'object'){
        properties = schema.properties
    }
    if(type === 'array'){
        properties = schema?.items?.properties
    }
    if(properties && Object.keys(properties).length){
        for(key in properties){
            parentMap.set(key, nowKey)
            addHidden(properties[key], key, newHiddenStr, parentMap)
        }
    }
}




function getRoot(key,map) {
    let tmpStr = key
    let newStr = []
    while(tmpStr!=='root' && tmpStr !== undefined){
        tmpStr = map.get(tmpStr)
        tmpStr && tmpStr!=='root' && newStr.push(tmpStr)
    }
    newStr.push('formData')
    return newStr.reverse().join('.')
}

addHidden(contentSchemaInfo.schema || contentSchemaInfo)
subSchemaInfo && addHidden(subSchemaInfo)
addHidden(seriesSchemaInfo.schema || seriesSchemaInfo)

fs.writeFileSync(contentSchemaPath, JSON.stringify(contentSchemaInfo, null,"\t"))
fs.writeFileSync(subSchemaPath, JSON.stringify(subSchemaInfo, null,"\t"))
fs.writeFileSync(seriesSchemaPath, JSON.stringify(seriesSchemaInfo, null,"\t"))