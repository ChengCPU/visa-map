import { useEffect } from 'react'

const AdTable:React.FC = () => {
  useEffect(() => {
    try {
      //@ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <ins className="adsbygoogle"
      style={{display: 'inline-block', width: '320px', height: '100px'}}
      data-ad-client="ca-pub-2147951612524944"
      data-ad-slot="8953121045"
      data-full-width-responsive="true"
    />
  )
}

export default AdTable