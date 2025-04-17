import { Cpu, Zap } from "lucide-react"

import { ContentImgGradient } from "@/sections/sections/content/ContentImgGradient"

export function ContentThree() {
  return (
    <section className="flex flex-col gap-8 py-16 md:py-32">
      <ContentImgGradient
        title="The Lyra ecosystem brings together our models."
        paragraphs={[
          <>
            Lyra is evolving to be more than just the models.{" "}
            <span className="text-title font-medium">
              It supports an entire ecosystem
            </span>{" "}
            — from products innovate.
          </>,
          "It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate",
        ]}
        features={[
          {
            icon: <Zap className="size-4" />,
            title: "Faaast",
            description:
              "It supports an entire helping developers and innovate.",
          },
          {
            icon: <Cpu className="size-4" />,
            title: "Powerful",
            description:
              "It supports an entire helping developers and businesses.",
          },
        ]}
        image={{
          src: "/about-9.jpg",
          alt: "payments illustration light",
          fill: true,
        }}
      />
    </section>
  )
}
