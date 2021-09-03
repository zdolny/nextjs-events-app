import MainHeader from "./mainHeader";

const Layout = (props) => (
  <>
    <MainHeader />
    <main>{props.children}</main>
  </>
);

export default Layout;
