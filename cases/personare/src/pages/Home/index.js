import { Container, TarotList, Tarot } from "./styles";



function Home() {

    const cards = [
      {
           id: 1,
           title: 'back card',
           image_url: 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png'
      },
      {
           id: 2,
           title: 'back card',
           image_url: 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png'
      },
      {
           id: 3,
           title: 'back card',
           image_url: 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png'
      },
      {
        id: 4,
        title: 'back card',
        image_url: 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png'
   },
   {
        id: 5,
        title: 'back card',
        image_url: 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png'
   },
   {
        id: 6,
        title: 'back card',
        image_url: 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png'
   }
    ]


return (

    <Container>

    <h1>Tarot Personare</h1>
    <TarotList>

         {cards.map(card => {
            return (
                <Tarot key={card.id}>
                <a href="https://google.com.br"><img src={card.image_url} alt={card.title}/></a>
                <span>{card.title}</span>
                </Tarot>
            )
         })}

        
    </TarotList>

    </Container>
)

}

export default Home;