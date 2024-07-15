import './App.css'
import { useForm } from 'react-hook-form'
import { FruitList } from './components/FruitList'
import { Form } from './components/Form'

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>     
      <Form />
      <h1>Fruit List</h1>
      <FruitList />
    </>
  )
}

export default App
