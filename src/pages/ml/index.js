import Ml from "../../components/Ml/index";
import Footer from "../../components/Shared/Footer";
import NavBar from "../../components/Shared/Navbar";

export default function MlPage(props) {

  return (
    <div className="App bg-black">
      <div className="container mx-auto max-w-screen-xl">
        <NavBar/>
        <Ml data={props.data}/>
        <Footer/>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from API
  const res = await fetch(`${process.env.API}/ml`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

