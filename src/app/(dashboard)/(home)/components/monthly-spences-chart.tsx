import { BarChart } from "@mui/x-charts/BarChart";

interface MonthlyChartProps {
  filters: string[];
}

const initialData = [
  "Marketing",
  "Sales",
  "Engineering",
  "HR",
  "Finance",
].flatMap((dept) =>
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ].map((m, i, months) => ({
    month: m,
    department: dept,
    spent: 200 + i * 10 + Math.random() * 50,
    budget: months.length * 100 + i * 50 + Math.random() * 200,
  }))
);

export function MonthlySpencesChart({ filters }: MonthlyChartProps) {
  const filteredData = filters.includes("All")
    ? initialData
    : initialData.filter((item) => filters.includes(item.department));

  return (
    <BarChart
      dataset={filteredData}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        {
          data: filteredData
            .filter((data) => data.department === "Sales")
            .map((data) => data.spent),
          label: "Sales",
          valueFormatter: (v) => `$${v}`,
          stack: "department",
          color: "#f87171",
        },
        {
          data: filteredData
            .filter((data) => data.department === "Marketing")
            .map((data) => data.spent),
          label: "Marketing",
          valueFormatter: (v) => `$${v}`,
          stack: "department",
          color: "#fb923c",
        },
        {
          data: filteredData
            .filter((data) => data.department === "Finance")
            .map((data) => data.spent),
          label: "Finance",
          valueFormatter: (v) => `$${v}`,
          stack: "department",
          color: "#fbbf24",
        },
        {
          data: filteredData
            .filter((data) => data.department === "Engineering")
            .map((data) => data.spent),
          label: "Engineering",
          valueFormatter: (v) => `$${v}`,
          stack: "department",
          color: "#a3e635",
        },
        {
          data: filteredData
            .filter((data) => data.department === "HR")
            .map((data) => data.spent),
          label: "HR",
          valueFormatter: (v) => `$${v}`,
          stack: "department",
          color: "#34d399",
        },
        {
          data: initialData.map((data) => data.budget),
          label: "Budget",
          valueFormatter: (v) => `$${v}`,
          color: "#22d3ee",
        },
      ]}
      height={400}
      borderRadius={8}
    />
  );
}
