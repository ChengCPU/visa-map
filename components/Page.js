function Page({ isServer }) {
  return <div>Is this page on the server? - {isServer ? 'YES' : 'NO'}</div>;
}

Page.getInitialProps = async ({ req }) => {
  return { isServer: !!req };
};

export default Page;