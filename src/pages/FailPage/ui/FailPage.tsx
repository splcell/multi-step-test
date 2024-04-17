import { useNavigate } from "react-router-dom"

import { Button } from "@components/Button"
import { Container } from "@components/Container"


export const FailPage = () => {
  const navigate = useNavigate()


  return(
    <Container>
      <h2>Время вышло</h2>
      <p>К сожалению вы не уложились в отведенное время, но не расстраивайтесь, попробуйте еще раз</p>
      <Button onClick={() => navigate('/')}>Начать заново</Button>
    </Container>
  )
}