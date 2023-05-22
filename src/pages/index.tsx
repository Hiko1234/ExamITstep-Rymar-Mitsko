// import styles
import s from "@/styles/Home.module.scss";
// import components
import Container from "@/components/container";
import Partnership from "@/components/partnership";

export default function Home() {
  return (
    <>
      <Container>
        <main>
          <Partnership />
        </main>
      </Container>
    </>
  );
}
