import Link from "next/link";


export default function Home() {
  return (
   <>
    <h1>Olá next</h1>
    <Link href={'/products'}>Ir para página de produtos</Link>
   </>
  );
}
