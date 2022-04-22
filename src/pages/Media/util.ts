export const generatorArray = (len: number, initValue: any) => {
  return new Array(len).fill(initValue)
}

export const changeCell = (columns, handleSave: (row: any) => void) => {
  return columns.map((col) => {
    if (col?.children?.length) {
      col.children = changeCell(col.children, handleSave)
    }
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave,
      }),
    }
  })
}
