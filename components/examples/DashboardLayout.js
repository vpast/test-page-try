import Head from "next/head";

const DashboardLayout = (props) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
          integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/css/dashboard.css" />
        <title>Dashboard Page</title>
      </Head>
      <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        {props.children}
      </main>
    </div>
  );
};
export default DashboardLayout;
