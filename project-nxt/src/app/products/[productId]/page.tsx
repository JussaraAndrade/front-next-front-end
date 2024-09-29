import { notFound } from "next/navigation";

interface InfoParams {
    params : {
        productId: number;
    }
}

export default function Info({params}: InfoParams){
    if(params.productId > 100) {
        notFound()
    }
    
    return(
        <div>
            <p>Informações do produto {params.productId}</p>
        </div>
    )
}