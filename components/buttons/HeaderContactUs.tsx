import Link from "next/link";
import { Button } from "../ui/button";

export default function HeaderContactUs() {
  return (
    <Button asChild size="sm" variant={"default"}>
      <Link href="/contact-us">Contact Us</Link>
    </Button>
  );
}
