import { useEffect } from 'react'

const AdBlog:React.FC = () => {
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
      style={{display: 'inline-block'}}
      data-ad-client="ca-pub-2147951612524944"
      data-ad-slot="7264562755"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}

export default AdBlog