import { EcosystemSection } from "@/sections/sections/content/EcosystemSection"

export function ContentTwo() {
  return (
    <section className="bg-white py-16 md:py-32">
      <EcosystemSection
        title="The Lyra ecosystem brings together our models."
        image={{
          src: "/img/about-7.jpg",
          alt: "payments illustration light",
          width: 1207,
          height: 929,
        }}
        paragraphs={[
          <>
            Gemini is evolving to be more than just the models.{" "}
            <span className="gradient-primary font-bold">
              It supports an entire ecosystem
            </span>{" "}
            — from products innovate.
          </>,
          "It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate",
        ]}
        quote={{
          text: "Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.",
          author: "John Doe, CEO",
          logoSrc: "https://html.tailus.io/blocks/customers/nvidia.svg",
          logoAlt: "Nvidia Logo",
        }}
      />
    </section>
  )
}
