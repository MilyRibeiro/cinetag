import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
// import videos from "json/db.json";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";

function Player() {
    const [video, setVideo] = useState([]);
    const parametros = useParams();
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/MilyRibeiro/cinetag/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados);
            })
    }, [parametros.id]);

    // const video = videos.find((video) => {
    //     return video.id === Number(parametros.id);
    // })


    if(!video) {
        return <NaoEncontrada />
    }
    
    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    // src="https://www.youtube.com/embed/BwRxBGsT_f0"
                    src={video.link}
                    // title="YouTube video player"
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                >
                </iframe>
            </section>
        </>
    )
}

export default Player;