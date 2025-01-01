interface Props {
  text:string
}

const MessageBox:React.FC<Props> = ({ text }) => {
  return (
    <div className={'container'}>
      <style jsx>{`
        .container {
          background-color:#1a1d23;
          border-left:4px solid #32cd32;
          padding:16px;
          color:#e1e1e1;
          font-family:'Arial', sans-serif;
          border-radius:4px;
          margin:16px 0;
        }
        .container p {
          margin:0;
        }
        .link {
          color:#3db3f9;
          text-decoration:none;
        }
        .link:hover {
          text-decoration:underline;
        }
      `}</style>
      <p>{text}</p>
    </div>
  )
}

export default MessageBox