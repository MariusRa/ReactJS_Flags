import Article from "../article/article";
import allData from "../../data/data";
import './main.css'

function Main() {
    const articlesComponents = allData.map(
        article => <Article country={article.country}
                            code = {article.code}
        />)
    return (
        <main>
            {articlesComponents}
        </main>
    );
}
export default Main;
