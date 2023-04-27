// Las paginas se crean dentro de directorios.
// La URL de la pagina será el nombre del archivo JS

import Link from "next/link";
import Head from 'next/head';

export default function FirstPost(){
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href='/'>Back Home</Link>
            </h2>
        </>
        );
}