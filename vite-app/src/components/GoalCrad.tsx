// goald have 


export interface Goal {
    title: string;
    description: string;
}

export default function GoalCard({ title, description }: Goal) {
    return (
        <div className="bg-card border rounded p-4">

        <li className="">
            <h3 className="text-xl font-bold underline">{title}</h3>
            <p className="ml-4  text-sm">{description}</p>
        </li>
        </div>

    )

}