
export default function fetchWindowSize(setWindowSize:Function) {
  if(typeof window !== "undefined") {
    setWindowSize({height: window.innerHeight, width: window.innerWidth})
  }
}