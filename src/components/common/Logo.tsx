import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <span className="text-primary text-2xl font-extrabold">Prop</span>
      <span className="text-foreground text-2xl">Ko</span>
    </Link>
  );
}
