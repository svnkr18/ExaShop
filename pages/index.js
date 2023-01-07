import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>ExaShop</title>
        <meta
          name="description"
          content="Next Generation Shopping Experience with ExaShop"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/E.jpg" />
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}

        <Banner />

        {/* product section */}

        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
