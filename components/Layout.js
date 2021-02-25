import Head from 'next/head'
import Header from "./Header"
import Footer from "./Footer"
import Body from "./Body"

const Layout = (props)=>{
  return (
    <div className="container">
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/layout.css" />
        <title>Test Page</title>
      </Head>
      <Header />
      <Body>
        {props.children}
      </Body>
      <Footer />
    </div>
  )
}

export default Layout