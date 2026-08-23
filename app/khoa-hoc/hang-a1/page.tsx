import type { Metadata } from "next";
import KhoaHocDetailLayout from "@/components/KhoaHocDetailLayout";
import { COURSES } from "@/data/courses";

const course = COURSES["hang-a1"];

export const metadata: Metadata = {
  title: `${course.shortName} | Khóa học`,
  description: course.shortDescription,
};

export default function HangA1Page() {
  return <KhoaHocDetailLayout course={course} />;
}
