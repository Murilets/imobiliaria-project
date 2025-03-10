import React, { Fragment } from 'react'
import { Header, Wrapper } from './styles'
import Banner from "../../components/Banner"
import Search from '../../components/Search'
import Cards from '../../components/Cards'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Home = () => {
  const {elementRef, isVisible} = useScrollAnimation();
  let Card = [];
  for(let i = 0; i<8; ++i){
    Card.push(<Cards key={i}/>)

  }
  return (
    <Fragment>
      <Banner />
      <Search />
      <Header>
        <h2>Propriedades em Destaque</h2>
      </Header>
      <Wrapper ref={elementRef} className={isVisible ? "visible": ""}>
       {Card}
      </Wrapper>
    </Fragment>
  )
}

export default Home