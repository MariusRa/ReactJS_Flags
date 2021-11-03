import Flags from 'country-flag-icons/react/3x2'

function Article(props) {
    const Flag = Flags[props.code]
    return (
        <article>
            <h2>{props.country}</h2>
            <Flag class="flag"/>
        </article>
    );
}
export default Article;
