import CardList from "@/components/CardList";
import { ChartAreaGradient } from "@/components/ChartArea";
import { ChartBarMultiple } from "@/components/ChartBarMultiple";
import { ChartPieDonutText } from "@/components/ChartPie";
import ToDoList from "@/components/ToDoList";

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <ChartBarMultiple title="Visitors" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <ChartPieDonutText title="Viewers" />
      </div>
      <div className="bg-primary-foreground py-6 px-4 rounded-lg">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground py-6 px-4 rounded-lg ">
        <CardList title="Popular Content" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <ChartAreaGradient title="Transactions" />
      </div>
      <div className="bg-primary-foreground py-6 px-4 rounded-lg">
        <ToDoList />
      </div>
    </main>
  );
}

