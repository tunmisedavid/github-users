import type { Repository } from "@/types";
import { calculateMostStarredRepos } from "@/utils";
import {  type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const PopularRepos = ({ repositories }: { repositories : Repository[]}) => {
  const popularRepos = calculateMostStarredRepos(repositories);

  const chartConfig = {
      repo: {
        label: 'Repository',
        color: '#e11c47',
  
      }
    } satisfies ChartConfig;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Popular repos</h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={popularRepos}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="repo"
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 10)}
          />
          <YAxis dataKey="stars" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="stars" fill="var(--color-repo)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default PopularRepos
