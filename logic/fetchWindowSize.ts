
export default function fetchWindowSize(setWindowSize:Function, setMobile:Function) {
  if(typeof window !== "undefined") {
    setWindowSize({height: window.innerHeight, width: window.innerWidth})
    if(window.innerWidth <= 873) {
      setMobile(true)
    }
  }
}