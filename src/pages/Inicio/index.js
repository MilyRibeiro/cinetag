import Banner from "components/Banner";
// import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
// import Rodape from "components/Rodape";
import Titulo from "components/Titulo";
import styles from "./Inicio.module.css";
import videos from "json/db.json";

function  Inicio() {
    return (
        <>
            {/* <Cabecalho /> */}
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            {/* <Card id='1' titulo="Gato fofo" imagem='C:\Users\ribei\OneDrive\Imagens\muito fofo.webp' /> */}
            <section className={styles.container}>{videos.map((video) => {
                return <Card {...video} key={video.id} />
            })}</section>
            {/* <Rodape /> */}
        </>
     
    )
}

export default Inicio;