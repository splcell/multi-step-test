import { Button } from "@components/Button"
import { Container } from "@components/Container"
import { useNavigate } from "react-router-dom"


export const MainPage = () => {
  const navigate = useNavigate()

  return(
    <Container>
      <h2>Добро пожаловать в тестирование</h2>
      <p>После старта теста у вас будет 5 минут на его прохождение</p>
      <Button onClick={() => navigate('/steps/1')}>Начать тестирование</Button>
    </Container>
  )
}