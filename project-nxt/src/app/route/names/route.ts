import { NextRequest } from "next/server";
import { data } from "./data"

export async function GET(
    request: NextRequest
) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query')

    const filteredNames = query ? data.filter(name => name.name.includes(query)) : data
    return Response.json(filteredNames)
}

export async function POST(request: Request) {
    const name = await request.json()
    const newName = {
        id: data.length + 1,
        name: name.name
    }
    data.push(newName)

    return new Response(JSON.stringify(newName),  {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}