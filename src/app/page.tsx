import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/sign-up">Sing Up</Link>
      <Link href="/sign-in">Sing In</Link>
    </div>
  );
}
