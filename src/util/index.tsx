export const createFileAndDownload = (content: object, fileName: string) => {
  const jsr = JSON.stringify(content)
  const blob = new Blob([jsr], { type: "application/json" })
  const url = URL.createObjectURL(blob)

  const a = document.createElement("a")
  a.href = url
  a.download = `${fileName}.json`
  document.documentElement.appendChild(a)
  a.click()
  document.documentElement.removeChild(a)
}
