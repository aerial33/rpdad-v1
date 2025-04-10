import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function SectionContact() {
  return (
    <section className="bg-flamingo-lightest container mx-auto py-10">
      <div className="pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-28 lg:pb-20 xl:pt-28 xl:pb-20">
        <div className="mx-[-15px] !mt-[-50px] flex flex-wrap items-center lg:mx-[-20px] xl:mx-[-35px]">
          <div className="!relative !mt-[50px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-7/12 lg:!px-[20px] xl:w-7/12 xl:!px-[35px]">
            {/* Decorative dots */}
            <div className="absolute -top-10 left-0 hidden flex-col gap-3 lg:flex">
              {[...Array(11)].map((_, i) => (
                <div key={`row-${i}`} className="flex gap-3">
                  {[...Array(11)].map((_, j) => (
                    <div
                      key={`dot-${i}-${j}`}
                      className="bg-picton-blue h-1 w-1 rounded-full"
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="mx-[-15px] !mt-[-25px] flex flex-wrap md:mx-[-12.5px] lg:mx-[-12.5px] xl:mx-[-12.5px]">
              <div className="!mt-[25px] w-full max-w-full flex-[0_0_auto] px-[12.5px] md:w-6/12 lg:w-6/12 xl:w-6/12">
                <figure className="!relative !rounded-[.4rem] md:!mt-10 lg:!mt-10 xl:!mt-10">
                  <img
                    className="!rounded-[.4rem]"
                    src="https://sandbox-tailwind-template.netlify.app/assets/img/photos/g5@2x.jpg"
                    srcSet="https://sandbox-tailwind-template.netlify.app/assets/img/photos/g5@2x.jpg"
                    alt="image"
                  />
                </figure>
              </div>
              {/* /column */}
              <div className="!mt-[25px] w-full max-w-full flex-[0_0_auto] px-[12.5px] md:w-6/12 lg:w-6/12 xl:w-6/12">
                <div className="mx-[-15px] !mt-[-25px] flex flex-wrap md:mx-[-12.5px] lg:mx-[-12.5px] xl:mx-[-12.5px]">
                  <div className="!mt-[25px] w-full max-w-full flex-[0_0_auto] px-[12.5px] md:!order-2 lg:!order-2 xl:!order-2">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        src="https://sandbox-tailwind-template.netlify.app/assets/img/photos/g5@2x.jpg"
                        srcSet="https://sandbox-tailwind-template.netlify.app/assets/img/photos/g6@2x.jpg"
                        alt="image"
                      />
                    </figure>
                  </div>
                  {/* /column */}
                  <div className="!mt-[25px] w-full max-w-full flex-[0_0_auto] px-[12.5px] md:w-10/12 lg:w-10/12 xl:w-10/12">
                    <div className="card !bg-[#e0e9fa] !text-center">
                      <div className="card-body counter-wrapper !px-[2rem] !py-12">
                        <h3 className="counter !mb-2 !text-[calc(1.325rem_+_0.9vw)] !leading-none !tracking-[normal] !whitespace-nowrap xl:!text-[2rem]">
                          5000+
                        </h3>
                        <p className="!mb-0 text-[0.8rem] font-medium">
                          Satisfied Customers
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /column */}
          <div className="!mt-[50px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-5/12 lg:!px-[20px] xl:w-5/12 xl:!px-[35px]">
            <h2 className="!mb-3 !text-[calc(1.305rem_+_0.66vw)] !leading-[1.3] font-bold xl:!text-[1.8rem]">
              Let&apos;s Talk
            </h2>
            <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
              Let&apos;s make something great together. We are{" "}
              <span className="relative z-[2] whitespace-nowrap after:absolute after:bottom-[9%] after:left-[-1.5%] after:z-[-1] after:!mt-0 after:block after:h-[30%] after:w-[102.5%] after:rounded-[5rem] after:bg-[rgba(63,120,224,.12)] after:transition-all after:duration-[0.2s] after:ease-in-out after:content-[''] motion-reduce:after:transition-none">
                trusted by
              </span>{" "}
              over 5000+ clients. Join them by using our services and grow your
              business.
            </p>
            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.
            </p>
            <Button className="group !mt-2">
              Join Us
              <ArrowRight className="ml-2 text-lg transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
    </section>
  )
}
