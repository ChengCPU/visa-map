import { useCallback } from 'react'

interface Props {
  language: string;
  setLanguage: Function;
}

const languageArray: string[] = ['🇬🇧EN','🇪🇸ES','🇵🇹PT','🇫🇷FR','🇭🇷HR']

const LanguageSelect: React.FC<Props> = ({ language, setLanguage }) => {

  const handleChange = (event) => {
    setLanguage(event.target.value)
  };

  const renderOptions: Function = useCallback((languageArray: string[]) => {
    return languageArray.map(language =>
      <option key={language} value={language}>{language}</option>
    )
  }, [language])

  return (
    <div className="select-container">
      <select className="language-select" value={language} onChange={handleChange}>
        {renderOptions(languageArray)}
      </select>

      <style jsx>{`
        .select-container {
          height:30px;
          top:8px;
          right:25px;
          position: absolute;
        }
        
        .language-select {
          height: 30px;
          padding: 5px;
          background-color: #000;
          color: #fff;
          border: 1px solid #fff;
          border-radius: 5px;
          font-size: 14px;
          appearance: none;
          background-position-x: calc(100% - 10px);
          background-position-y: center;
        }
        
        .language-select:hover {
          border-color: #ccc;
        }

        .language-select:focus {
          outline: none;
          border-color: #ccc;
        }
      `}</style>
    </div>
  )
}

export default LanguageSelect