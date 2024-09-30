import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: {
        absolute: 'Produtos'
    }
}

export default function Products(){
    const id = 1;

    return(
        <>
        <div>
            <Link href={`/products/${id}`}>Produto 1</Link>
            <Link href={'/products/2'}>Produto 2</Link>
            <Link href={'/products/3'} replace>Produto 3</Link>
        </div>
        </>
    )
}