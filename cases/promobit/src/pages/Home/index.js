import { Container, MovieList, Movie } from "./styles";



function Home() {

    const movies = [
      {
           id: 1,
           title: '.',
           image_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FMulan-Elizabeth-Rudnick%2Fdp%2F8550304972&psig=AOvVaw1C8uA-58yLZVlYGb6wNMu6&ust=1666743023964000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNiMlfeL-voCFQAAAAAdAAAAABAD'
      },
      {
           id: 2,
           title: '.',
           image_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FMulan-Elizabeth-Rudnick%2Fdp%2F8550304972&psig=AOvVaw1C8uA-58yLZVlYGb6wNMu6&ust=1666743023964000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNiMlfeL-voCFQAAAAAdAAAAABAD'
      },
      {
           id: 3,
           title: '.',
           image_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FMulan-Elizabeth-Rudnick%2Fdp%2F8550304972&psig=AOvVaw1C8uA-58yLZVlYGb6wNMu6&ust=1666743023964000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNiMlfeL-voCFQAAAAAdAAAAABAD'
      },
      {
        id: 4,
        title: '.',
        image_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FMulan-Elizabeth-Rudnick%2Fdp%2F8550304972&psig=AOvVaw1C8uA-58yLZVlYGb6wNMu6&ust=1666743023964000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNiMlfeL-voCFQAAAAAdAAAAABAD'
   },
   {
        id: 5,
        title: '.',
        image_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FMulan-Elizabeth-Rudnick%2Fdp%2F8550304972&psig=AOvVaw1C8uA-58yLZVlYGb6wNMu6&ust=1666743023964000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNiMlfeL-voCFQAAAAAdAAAAABAD'
   },
   {
        id: 6,
        title: '.',
        image_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FMulan-Elizabeth-Rudnick%2Fdp%2F8550304972&psig=AOvVaw1C8uA-58yLZVlYGb6wNMu6&ust=1666743023964000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNiMlfeL-voCFQAAAAAdAAAAABAD'
   }
    ]


return (

    <Container>

    <h1>Movies</h1>
    <MovieList>

         {movies.map(movie => {
            return (
                <Movie key={movie.id}>
                <a href="https://google.com.br"><img src={movie.image_url} alt={movie.title}/></a>
                <span>{movie.title}</span>
                </Movie>
            )
         })}

        
    </MovieList>

    </Container>
)

}

export default Home;