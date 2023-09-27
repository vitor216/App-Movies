import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import videos from "../../Json/videos.json";
import styles from "./Search.module.css";
import SearchVideoList from "../../components/SearchVideoList";

function Search() {
    return(
        <>
        <Header />
        <Container>
        <section className={styles.search}>
            <SearchVideoList videos={videos} />
        </section>
        </Container>
        <Footer />
        </>
    );
}

export default Search;