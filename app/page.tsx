import Image from "next/image";
import Link from "next/link"
import Form from "../app/components/Form";
import CarCard from "../app/components/Car_Card";
import Hero from "../app/components/Hero";
export default function Home() {
  return (
    <div>

      <Hero></Hero>
      <CarCard></CarCard>
      <Form></Form>
    </div>
  );
}
