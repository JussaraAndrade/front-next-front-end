import { notFound } from "next/navigation";

interface ReviewParams {
    params : {
        productId: number;
        reviewId: string;
    }
}

export default function Review({params}: ReviewParams) {
    const convertType = parseInt(params.reviewId);
    if(convertType > 1000) {
        notFound()
    }

    if(convertType === 900){
        throw Error('Invalid 900 Id.')
    }
    
    return(
        <div>
            <p>Produto {params.productId}</p>
            <p>Review {params.reviewId}</p>
        </div>
    )
}