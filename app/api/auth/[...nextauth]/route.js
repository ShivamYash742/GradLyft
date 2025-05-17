// Route handlers for [...nextauth]

// Route handlers required by Next.js when using [...nextauth]
export async function GET() {
  return new Response("Auth endpoint", { status: 200 });
}

export async function POST() {
  return new Response("Auth endpoint", { status: 200 });
} 