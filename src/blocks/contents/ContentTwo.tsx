import Image from "next/image"

export function ContentTwo() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-2xl text-4xl font-medium lg:text-5xl">
          The Lyra ecosystem brings together our models.
        </h2>
        <div className="grid grid-cols-1 gap-6 md:gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="relative aspect-76/59 rounded-2xl bg-linear-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/img/about-7.jpg"
                className="rounded-[15px] shadow"
                alt="payments illustration light"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="feature-paragraph">
              Gemini is evolving to be more than just the models.{" "}
              <span className="gradient-primary font-bold">
                It supports an entire ecosystem
              </span>{" "}
              — from products innovate.
            </p>
            <p className="text-muted-foreground">
              It supports an entire ecosystem — from products to the APIs and
              platforms helping developers and businesses innovate
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  Using TailsUI has been like unlocking a secret design
                  superpower. It's the perfect fusion of simplicity and
                  versatility, enabling us to create UIs that are as stunning as
                  they are user-friendly.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">John Doe, CEO</cite>
                  <img
                    className="h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="auto"
                  />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
