import Experiences from "../components/Experiences/index";
import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/Navbar";
import Domain from "../components/Home/Domain";

export default function ExperiencePage(props) {

  return (
    <div className="App bg-black">
          <div className="container mx-auto max-w-screen-xl">
            <NavBar />
            <Domain data={props.data.domain} />s
            <Footer />
          </div>
        </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from API
  const res = await fetch(`${process.env.API}/home`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}