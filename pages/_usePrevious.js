import { useRef, useEffect } from 'react';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  },[value.passport]);
  return ref.current;
}

export default usePrevious