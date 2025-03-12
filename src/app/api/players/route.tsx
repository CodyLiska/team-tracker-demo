// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   // Add proper error handling
//   try {
//     // Your data fetching logic here
//     return NextResponse.json({ players: [] });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to fetch players" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const data = await request.json();
//     // Your create logic here
//     return NextResponse.json({ message: "Player created" }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to create player" },
//       { status: 500 }
//     );
//   }
// }
