import { data } from "./data"

export async function GET() {
    return Response.json(data)
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