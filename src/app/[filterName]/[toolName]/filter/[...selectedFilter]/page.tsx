export default function Page({
  params,
}: {
  params: { filterName: string; toolName: string; selectedFilter: string[] };
}) {
  return (
    <div>
      <h1>Filter Page</h1>
      <div> params: {JSON.stringify(params)}</div>
    </div>
  );
}
