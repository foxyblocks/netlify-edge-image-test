import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  console.log('params', JSON.stringify(router.query));
  return (
    <div>
      <h1>Filter Page</h1>
      <div> params: {JSON.stringify(router.query)}</div>
    </div>
  );
}
