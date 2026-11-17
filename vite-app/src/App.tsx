
import { goals } from "./lib/goals"
import GoalCard from "./components/GoalCrad"

export function App() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <h1 className="font-bold text-3xl">My goals for this book</h1>
        {goals.map((goal) =>(
          <div key={goal.id}>
            <GoalCard title={goal.title} description={goal.description} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
