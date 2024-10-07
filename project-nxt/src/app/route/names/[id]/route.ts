import { redirect } from "next/navigation";
import { data } from "../data";

export async function GET(
    _request: Request,
    { params }: {params: { id: string } }
) {
    if(parseInt(params.id) > data.length) {
        redirect('/route/names')
    }
    const name = data.find(name => name.id == parseInt(params.id))
    return Response.json(name)
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
){
    const body = await request.json()

    const { text } = body
    const index = data.findIndex(user => user.id === parseInt(params.id))
    data[index].name = text
    return Response.json(data[index])
}