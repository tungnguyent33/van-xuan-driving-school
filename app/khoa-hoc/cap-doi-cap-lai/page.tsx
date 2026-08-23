import type { Metadata } from "next";
import KhoaHocDetailLayout from "@/components/KhoaHocDetailLayout";
import { COURSES } from "@/data/courses";

const course = COURSES["cap-doi-cap-lai"];

export const metadata: Metadata = {
  title: `${course.shortName} | Khóa học`,
  description: course.shortDescription,
};

export default function CapDoiCapLaiPage() {
  return <KhoaHocDetailLayout course={course} />;
}
