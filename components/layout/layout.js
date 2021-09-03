import MainHeader from "./main-header";

const Layout = (props) => (
  <>
    <MainHeader />
    <main>{props.children}</main>
  </>
);

export default Layout;
