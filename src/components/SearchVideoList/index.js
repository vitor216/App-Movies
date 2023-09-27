import styles from "./SearchVideoList.module.css";
import Loader from "../../components/Loader";
import VideoList from "../../components/VideoList";
import { useEffect, useState } from "react";

function filterVideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({ videos }) {

    const [searchText, setSearchText] = useState ('')
    const foundVideos = filterVideos(videos, searchText)
    
    const[loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 500)
        }, [])

    return (
        <section className={styles.container}>
            <input
                type="Search"
                placeholder="Pesquisar..."
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
            {loading ? <Loader /> :
                <VideoList 
                videos={foundVideos}
                emptyHeading={`titulo nao localizado "${searchText}"`}
                />
            }
        </section>
    )
}

export default SearchVideoList;