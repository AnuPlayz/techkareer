import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  id: string;
};

export async function GET(request: NextRequest, context: { params: Params }) {
  try {
    const id = parseInt(context.params.id);
    const bounty = await db.gigs.findUnique({ where: { id: id } });
    if (!bounty) {
      return NextResponse.json(
        {
          error: `Bounty Not found with id ${id}`,
        },
        { status: 404 }
      );
    }
    return NextResponse.json({ bounty: bounty }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
