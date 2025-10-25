import type { Repository } from '@/types'
import { calculateMostForkedRepos } from '@/utils'
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";


const ForkedRepos = ({repositories}: {repositories: Repository[]}) => {
  const mostForkedRepos = calculateMostForkedRepos(repositories)
const chartConfig = {
    repo: {
      label: 'Repository',
      color: '#facd12',

    }
  } satisfies ChartConfig;
  return (
    <div>
      <h2 className="text-2xl semi-bold text-center mb-4">
              Forked Repos
            </h2>
            <ChartContainer config={chartConfig} className="h-100 w-full">
              <BarChart accessibilityLayer data={mostForkedRepos}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey={'repository'} tickLine={true} axisLine={false} tickMargin={10} tickFormatter={value => value.slice(0, 10)} />
                <YAxis dataKey='count' />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey='count' fill='var(--color-repo)' radius={4} />
              </BarChart>
            </ChartContainer>
    </div>
  )
}

export default ForkedRepos
