import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import { useFavoritoContext } from 'contextos/Favoritos';

// const videos = [
//     {
//       "id": 1,
//       "titulo": "O labirinto do Logcat",
//       "capa": "https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img2.png",
//       "link": "https://www.youtube.com/embed/ypvGqZGJBls"
//     },
//     {
//       "id": 2,
//       "titulo": "Um componente no espaço",
//       "capa": "https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img1.png",
//       "link": "https://www.youtube.com/embed/jK0uiQ1ZQQQ"
//     }
// ]

function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem="favoritos"></Banner>
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {/* {videos.map(video => <Card id={video.id} titulo={video.titulo} capa={video.capa} key={video.id} />)} */}
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;