"use client"
import "./Section.scss";
import { useParams } from "next/navigation";

function Section () {
  const router = useParams()
  const id = router.id
  console.log(+id)
  return (
  <></>
)
}

export default Section;
