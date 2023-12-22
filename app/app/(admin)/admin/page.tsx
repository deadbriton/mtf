// "use client";
import { Grid, Col, Card, Text, AreaChart, Metric } from "@tremor/react";
import UsageAnalysis from "./usage-analysis";
// import EchartsComponent from "./testchart";
import dynamic from "next/dynamic";

const UsageByModelChart = dynamic(() => import("./usage-by-model"), {
  ssr: false,
});

export default function AdminPage() {
  return (
    <>
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
        <Col numColSpan={1} numColSpanLg={1}>
          <UsageAnalysis />
        </Col>
        <Col numColSpan={1} numColSpanLg={2}>
          <UsageByModelChart />
        </Col>
      </Grid>
    </>
  );
}
