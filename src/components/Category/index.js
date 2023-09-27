import videos from "../../Json/videos.json";
import styles from "./Category.module.css";

export const Categories =[
    "Filosofia",
    "Matemática",
    "Portugues",
    "Ingles",
    "Ciências"
]

export function filterCategory(id) {
    return videos.filter( video => video.category === Categories[id] )
}

function Category({ category, children }) {
    return (
        <section className={styles.category}>
            <h2>{category}</h2>
            <div>
                {children}
            </div>
        </section>
    );
}

export default Category;