import { useEffect, useState, useRef, FormEvent } from 'react'
import { saveAs } from 'file-saver'
import html2canvas from 'html2canvas'
import styles from '../styles/Terminal.module.css'

type HistoryEntry = {
  type: 'user' | 'system';
  text: string;
}

const Terminal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [command, setCommand] = useState<string>('')
  const [history, setHistory] = useState<HistoryEntry[]>([])

  const takeScreenshot:Function = () => {
    const element = document.getElementById('map')

    const options = {
      scale: 4,
      backgroundColor: '#222222',
    }

    html2canvas(element, options).then(canvas => {
      if(canvas) {
        canvas.toBlob(blob => {
          if(blob) {
            saveAs(blob, 'screenshot.png')
          } else {
            console.error('Failed to create Blob object')
          }
        })
      } else {
        console.error('Failed to create canvas')
      }
    }).catch(error => {
      console.error('html2canvas error:', error)
    })
  }

  const sataandagi:Function = () => {
    const osaka = `
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⢶⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣄⡀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⣿⣮⣶⣶⣮⣞⣭⡝⡽⢻⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣛⠿⣿⣿⣿⣷⣄⠀⠀
    ⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⢟⣿⡿⣫⣿⣿⠟⣿⣿⣿⣿⣶⣧⣬⣛⠻⡟⣆⠀
    ⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⡿⢅⣿⠏⣠⡿⡿⠋⠀⣿⣿⡿⣹⣿⣿⣿⣿⣿⣧⣿⡀
    ⠀⠀⠀⢰⣿⣿⣿⣿⣳⣋⣤⣾⣥⡠⡟⡹⠁⠀⠀⣿⢿⡇⢸⣿⣿⣿⣿⣿⣿⣿⡇
    ⠀⠀⢠⣿⣿⣿⣿⢣⠎⣠⣿⣿⣿⡿⠀⠀⠀⠀⠀⢋⢸⢻⢸⣿⠱⣿⣿⣿⣿⣿⡇
    ⠀⢠⣿⣿⣿⣿⠁⠸⠀⠿⢿⣿⣿⠀⠀⠀⠀⠀⠀⢨⣶⣶⣬⠏⢹⣟⣿⣿⣿⣿⠃
    ⠀⣾⣿⣿⣿⡿⠀⠀⠠⢲⣾⡯⠃⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⢶⢸⢹⣿⣿⣿⣿⠀
    ⣼⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⢙⣿⣿⡇⢸⡌⣾⣿⣿⣿⡗⠀
    ⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠙⠿⣛⠋⠀⠁⣰⣿⣿⣿⣿⠃⠀
    ⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⡏⠀⠀
    ⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠁⠂⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⡿⠀⠀⠀
    ⣿⣿⣿⣿⣿⣿⣿⣿⠃⠳⢄⢀⡀⢀⡀⡀⢀⣀⣠⣤⣶⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀
    ⡟⢸⡿⠃⠉⣠⡿⠃⠀⠀⠈⠹⠿⠯⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀
    ⠉⠀⠀⢀⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⠀⠹⡿⣽⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⡄⠀⠀⠄⠀⠀⠀⢀⡀⠀⠁⠀⠀⠱⣿⣿⣿⣿⢿⣿⡟⠀⠀⠀⠀⠀⠀
    `
  
    setHistory((prevHistory) => [
      ...prevHistory,
      { type: 'system', text: osaka },
    ])
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if(event.ctrlKey && event.key === '`') {
        setIsOpen((prevState) => !prevState)
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    if(isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleCommandSubmit = (e: FormEvent) => {
    e.preventDefault()

    setHistory((prevHistory) => [
      ...prevHistory,
      { type: 'user', text: `~$ ${command}` },
    ])

    const response = processCommand(command)
    setHistory((prevHistory) => {
      if(command.trim().toLowerCase() === 'clear') {
        return []
      }
      return [
        ...prevHistory,
        { type: 'system', text: response },
      ]
    })
    setCommand('')
  }

  const processCommand = (command: string): string => {
    switch(command.trim().toLowerCase()) {
      case 'help':
        return 'Available commands: help, clear, screenshot'
      case 'clear':
        return ''
      case 'screenshot':
        takeScreenshot()
        return ''
      case 'sataandagi':
        sataandagi()
        return ''
      default:
        return `Command not found: ${command}`
    }
  }

  return (
    <div className={`${styles.terminal} ${isOpen ? styles.open : ''}`}>
      <div className={styles.body}>
        {history.map((entry, index) => (
          <pre key={index} className={entry.type === 'user' ? styles.userInput : styles.systemResponse}>
            {entry.text}
          </pre>
        ))}
        <form onSubmit={handleCommandSubmit} className={styles.commandForm}>
          <span className={styles.prompt}>~$ </span>
          <input
            ref={inputRef}
            type='text'
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className={styles.commandInput}
            autoFocus={false}
            spellCheck='false'
            autoCapitalize='off'
            autoCorrect='off'
            placeholder=' '
          />
        </form>
      </div>
    </div>
  )
}

export default Terminal