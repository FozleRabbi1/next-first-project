import style from "./About.module.css"

export const metadata = {
    title : "About Page",
    description : "This is about Pageeeeee"
}

const Aroutpage = () => {
    return (
        <div  >
            <h2 className={style.heading}> this is about page </h2>
        </div>
    );
};

export default Aroutpage;