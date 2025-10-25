import type { Repository } from "@/types"
import { calculateMostPopularLanguages } from "@/utils"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const UsedLanguage = ({repositories}: {repositories: Repository[]}) => {
  
  const popularlanguages = calculateMostPopularLanguages(repositories);

  const chartConfig = {
    language: {
      label: 'Language',
      color: '#2563eb',

    }
  } satisfies ChartConfig;
  
  return (
    <div>
      <h2 className="text-2xl semi-bold text-center mb-4">
        Used Languages
      </h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={popularlanguages}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey={'language'} tickLine={false} tickMargin={10} />
          <YAxis dataKey='count' />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey='count' fill='var(--color-language)' radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default UsedLanguage
