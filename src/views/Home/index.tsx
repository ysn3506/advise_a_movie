
import { Container ,Grid} from 'semantic-ui-react';
import { useAppSelector } from '../../app/storage/store';
import MovieCard from '../../components/movieCard';
import "./style.scss"


function Home() {


    const userSelector = useAppSelector((state) => state.user)
    const { userInfo: { name } } = userSelector;
    const movies: any = useAppSelector((state) => state.movies)

    const titleConverter = (title:String) => {
        switch (title) {
            case "genreMovies":
                return "Movies of Favourite Genres";
            case "artistMovies":
                return "Movies of Favourite Artists";
            case "recommendedMovies":
                return "Latest Movies";
            case "preferedMovies":
                return "Top Rated Movies"

            default:
                break;
        }

       
    }
    return (
        <div className="home-wrapper">
            {
                Object.keys(movies).map((item) => {
                    if (movies[item].length > 0) {
                        return <Container>
                            <h2 className='section-title'>{titleConverter(item)}</h2>
                            <Grid className='movie-grid'>
                                {movies[item].map((el: any) =>
                                    <Grid.Column mobile={16} tablet={8} computer={4} key={el}><MovieCard movie={el} /></Grid.Column>)}
                            </Grid>

                        </Container>
                    }
                    return null;
                      
                }
                 
                )
            }

        </div>
    );
}

export default Home;