import { TaskLisk } from './components/TaskLisk'
import { TaskForm } from './components/TaskForm'

export const App = () => {

  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskLisk />
      </div>
    </main>
  )
}

export default App

