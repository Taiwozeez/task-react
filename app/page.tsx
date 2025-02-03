"use client";

import Head from "next/head";
import Header from "@/app/src/components/header";
import Filter from "@/app/src/components/filter";
import Welcome from "@/app/src/components/welcome";
import Items from "@/app/items";
import Promo from "@/app/promo";
import Testimonialmap from "@/app/testimonialmap";
import Footer from "@/app/footer";
// import Cart from "@/app/cart";
// import Form from "@/app/form";

const Index = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Anthentic Cars</title>
      </Head>
      <Header />
      <Filter />
      <Welcome />
      <Items />
      <Promo />
      <Testimonialmap />
      <Footer />
      {/* <Cart /> */}
      {/* <Form /> */}
    </div>
  );
};

export default Index;
