import { useEffect } from 'react'

const Ad:React.FC = () => {
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
      style={{display: 'block', width: '320px', height: '100px', position: 'fixed', bottom: '140px'}}
      data-ad-client="ca-pub-2147951612524944"
      data-ad-slot="7338144289"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}

export default Ad