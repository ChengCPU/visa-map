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
     style={{display: 'block'}}
     data-ad-client="ca-pub-2147951612524944"
     data-ad-slot="4685072548"
     data-ad-format="auto"
     data-full-width-responsive="true"
    />
  );
}

export default Ad