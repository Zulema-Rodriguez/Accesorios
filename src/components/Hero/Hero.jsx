import { HeroContainerStyled, HeroTextContainerStyled, HeroImageContainerStyled } from "./HeroStyles"


function Hero() {
  return (
    <HeroContainerStyled>
      <HeroTextContainerStyled>
        <h1>Delicada y elegante</h1>
        <p>Te ofrecemos calidad en cada detalle para resaltar tu belleza.</p>
      </HeroTextContainerStyled>
      <HeroImageContainerStyled>
        <img src="https://i.blogs.es/279705/portada-tous-eci/840_560.jpeg" alt="" />
      </HeroImageContainerStyled>
    </HeroContainerStyled>
  )
}

export default Hero