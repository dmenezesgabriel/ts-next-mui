"use client";

import { BarChart } from "@mui/x-charts/BarChart";

interface MonthlyChartProps {
  filters: string[];
}

const spentData = [
  { department: "Sales", spent: 800, month: "jan" },
  { department: "Sales", spent: 800, month: "fev" },
  { department: "Sales", spent: 800, month: "mar" },
  { department: "Sales", spent: 800, month: "apr" },
  { department: "Sales", spent: 800, month: "jun" },
  { department: "Sales", spent: 800, month: "jul" },
  { department: "Sales", spent: 800, month: "aug" },
  { department: "Sales", spent: 800, month: "sep" },
  { department: "Sales", spent: 800, month: "oct" },
  { department: "Sales", spent: 800, month: "dec" },
  { department: "Marketing", spent: 800, month: "jan" },
  { department: "Marketing", spent: 800, month: "fev" },
  { department: "Marketing", spent: 800, month: "mar" },
  { department: "Marketing", spent: 800, month: "apr" },
  { department: "Marketing", spent: 800, month: "jun" },
  { department: "Marketing", spent: 800, month: "jul" },
  { department: "Marketing", spent: 800, month: "aug" },
  { department: "Marketing", spent: 800, month: "sep" },
  { department: "Marketing", spent: 800, month: "oct" },
  { department: "Marketing", spent: 800, month: "dec" },
];

const budgetData = [
  { budget: 2000, month: "jan" },
  { budget: 2000, month: "fev" },
  { budget: 2000, month: "mar" },
  { budget: 2000, month: "apr" },
  { budget: 2000, month: "jun" },
  { budget: 2000, month: "jul" },
  { budget: 2000, month: "aug" },
  { budget: 2000, month: "sep" },
  { budget: 2000, month: "oct" },
  { budget: 2000, month: "dec" },
];

export function MonthlySpencesChart({ filters }: MonthlyChartProps) {
  const filteredData = filters.includes("All")
    ? spentData
    : spentData.filter((item) => filters.includes(item.department));

  const departments = Array.from(
    new Set(filteredData.map((item) => item.department))
  );

  function getColorForDepartment(department: string): string {
    const colors: { [key: string]: string } = {
      Sales: "#f87171",
      Marketing: "#fb923c",
    };
    return colors[department] || "#cccccc";
  }

  return (
    <BarChart
      xAxis={[
        { scaleType: "band", data: budgetData.map((data) => data.month) },
      ]}
      series={[
        ...departments.map((department) => ({
          data: filteredData
            .filter((item) => item.department === department)
            .map((item) => item.spent),
          label: department,
          valueFormatter: (v) => `$${v}`,
          stack: "department",
          color: getColorForDepartment(department),
        })),
        {
          data: budgetData.map((item) => item.budget),
          label: "Budget",
          valueFormatter: (v) => `$${v}`,
          color: "#6366f1",
        },
      ]}
      height={400}
      borderRadius={8}
    />
  );
}
