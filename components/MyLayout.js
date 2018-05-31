import Page from './Page.js';
import Header from './Header';
import Footer from './Footer';
import NavMenu from './NavMenu';

const Layout = props => {
  return (
    <Page name={props.pageName}>
      <div className="genLayout">
        <div className="genHeader">
          <Header />
        </div>

        <div className="genMenu">
          <NavMenu />
        </div>

        <section className="genContent">{props.children}</section>

        <div className="genFooter">
          <Footer />
        </div>
      </div>
      <style jsx>
        {`
          .genLayout {
            width: 70%;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 20% 25% 25% 25%;
          }

          .genHeader {
            color: red;
            grid-column: span 4;
            grid-row: span 2;
            text-align: center;
          }

          .genContent {
            grid-column: span 3;
          }

          .genFooter {
            color: green;
            grid-column: span 4;
            text-align: center;
          }
        `}
      </style>
    </Page>
  );
};

export default Layout;
