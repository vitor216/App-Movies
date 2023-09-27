import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category, { Categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import ScrollToButton from "../../components/ScrollToButton";

function Home() {
    return (
        <>
            <Header />
            <Banner image="home" />
            <Container>
                {Categories.map((category, index) =>
                    <Category category={category}>
                        <Carousel>
                        {filterCategory(index).map((video) => <Card id={video.id} key={video.id} />)}
                        </Carousel>
                    </Category>)}
            </Container>
            <ScrollToButton/>
            <Footer />
        </>
    );
}

export default Home;
