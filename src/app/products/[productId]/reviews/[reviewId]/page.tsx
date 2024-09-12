import { notFound } from "next/navigation";

interface ReviewParams {
    params : {
        productId: number;
        reviewId: number;
    }
}

export default function Review({params}: ReviewParams) {
    if(params.reviewId > 1000) {
        notFound()
    }
    return(
        <div>
            <p>Produto {params.productId}</p>
            <p>Review {params.reviewId}</p>
        </div>
    )
}