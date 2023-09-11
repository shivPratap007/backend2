
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
async function hello(){
    return await sleep(344)
}
hello()
console.log("hello")