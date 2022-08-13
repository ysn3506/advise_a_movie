import './style.scss'
import { Card, Image, Icon, Divider } from "semantic-ui-react"

function MovieCard({ movie }: any) {
    const { poster_path, title, release_date, overview, vote_average, vote_count
    } = movie;
    
   

    return (
        <Card className='movie-card'>
            <Image src={`https://image.tmdb.org/t/p/w300/${poster_path}`} wrapped ui={false} />
            <Card.Content>
                <Card.Header><p className='title'>{title}{" "}{release_date.split("-")[0]}</p></Card.Header>
                <Card.Description>
                    <p className='description'>{overview}</p>
                </Card.Description>
                <Card.Meta><Divider />
                    <a>
                        <span> <Icon name='star' /> {"Score:"}
                            {vote_average}</span>

                        {"   "}
                        <span>
                            {vote_count}
                            {" rates"}</span>



                    </a></Card.Meta>
            </Card.Content>
        </Card>
    );
}

export default MovieCard;