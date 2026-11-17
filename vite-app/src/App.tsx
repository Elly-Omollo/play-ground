
import { goals } from "./lib/goals"
import GoalCard from "./components/GoalCrad"
import EmailInput from "./components/EmailInput"

export function App() {
  return (
    <div className="flex flex-col space-y-5 min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <h1 className="font-bold text-3xl">My goals for this book</h1>
        {goals.map((goal) =>(
          <div key={goal.id}>
            <GoalCard title={goal.title} description={goal.description} />
          </div>
        ))}
      </div>

      <div className="bg-card">
        <label htmlFor="email">Enter your Email</label>
        <EmailInput />
      </div>
    </div>
  )
}

export default App
