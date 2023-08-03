export async function GET() {
  return {
    status: 200,
    body: {
      message: 'Hello from the API',
    },
  };
}

export const config = {
  runtime: 'edge',
};
