
export default function fetchWindowSize(setMobile:Function) {
  if(typeof window !== "undefined") {
    if(window.innerWidth <= 873) {
      setMobile(true)
    }
  }
}