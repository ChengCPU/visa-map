import Head from 'next/head'

const Layout = ({ children }) => (
  <div className="container">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <main>{children}</main>
    <style jsx global>{`
      body {
        font-family:Arial, sans-serif;
        line-height:1.6;
        color:#000;
        background-color:rgba(11, 11, 11, 0.8);
        padding:30px;
      }
      .container {
        margin: 0 auto;
        max-width: 1000px;
        padding: 0 15px;
      }
      h1 {
        margin-left:10px;
        font-size:2.5em;
        margin-bottom:0.5em;
        color:#FFFFFF;
      }
      .author {
        font-style:italic;
      }
      .date {
        font-size:0.9em;
      }
      article {
        margin-bottom:40px;
      }
      p, ul {
        margin-left:10px;
        margin-right:10px;
        margin-bottom:1.2em;
        color:#FFFFFF;
      }
    `}</style>
  </div>
)

export default Layout