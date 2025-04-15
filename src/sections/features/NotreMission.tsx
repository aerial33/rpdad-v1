import { DotPattern } from "@/components/DotPattern"

const NotreMission = () => {
  return (
    <section className="before:to-primary-lightest before:border-flamingo-lightest relative border-0 bg-gradient-to-bl before:absolute before:top-[-4rem] before:right-0 before:z-0 before:block before:border-0 before:border-t-[4rem] before:border-r-[100vw] before:!border-y-transparent before:border-l-transparent before:bg-gradient-to-bl before:content-[''] after:absolute after:right-0 after:bottom-[-4rem] after:z-0 after:block after:border-0 after:border-r-[100vw] after:!border-y-transparent after:border-l-transparent after:bg-gradient-to-bl after:content-['']">
      <div className="container mx-auto px-4 py-[4.5rem] md:!py-24 lg:!py-24 xl:!py-24">
        <div className="mx-[-15px] !mt-[-50px] !mb-[4.5rem] flex flex-wrap items-center md:!mb-[7rem] lg:mx-[-20px] lg:!mb-[7rem] xl:mx-[-35px] xl:!mb-[7rem]">
          <div className="!relative !mt-[50px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:!order-2 lg:w-6/12 lg:!px-[20px] xl:!order-2 xl:w-6/12 xl:!px-[35px]">
            <DotPattern
              className="absolute top-0 left-30"
              dotColor="bg-picton-blue"
              dotSize="md"
            />
            <div className="overlap-grid-2 !relative flex flex-wrap">
              <div className="item md:z-[3] md:!mt-0 md:ml-[30%] md:w-[70%] lg:z-[3] lg:!mt-0 lg:ml-[30%] lg:w-[70%] xl:z-[3] xl:!mt-0 xl:ml-[30%] xl:w-[70%]">
                <figure className="relative rounded-lg shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]">
                  <img
                    className="rounded-lg"
                    src="https://sandbox-tailwind-template.netlify.app/assets/img/photos/about2.jpg"
                    srcSet="https://sandbox-tailwind-template.netlify.app/assets/img/photos/about2.jpg"
                    alt="image"
                  />
                </figure>
              </div>
              <div className="item md:z-[4] md:!mt-[-45%] md:ml-0 md:w-[55%] lg:z-[4] lg:!mt-[-45%] lg:ml-0 lg:w-[55%] xl:z-[4] xl:!mt-[-45%] xl:ml-0 xl:w-[55%]">
                <figure className="relative rounded-lg shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]">
                  <img
                    className="rounded-lg"
                    src="https://sandbox-tailwind-template.netlify.app/assets/img/photos/about3.jpg"
                    srcSet="https://sandbox-tailwind-template.netlify.app/assets/img/photos/about3.jpg"
                    alt="image"
                  />
                </figure>
              </div>
            </div>
          </div>
          {/*<!--/column -->*/}
          <div className="!mt-[50px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-6/12 lg:!px-[20px] xl:w-6/12 xl:!px-[35px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 409.6 362.5"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/megaphone.svg"
              className="svg-inject icon-svg icon-svg-md !mb-4 !h-[2.6rem] !w-[2.6rem]"
            >
              <path
                className="lineal-stroke"
                d="M343.4 302.9L61 302.5c-25.3-.2-47.5-16.8-54.8-40.9l-3.9-12.9c-7.1-24.2 2.5-50.3 23.5-64.2L262.1 29.8c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.3 249.8c2.4 6.4-.9 13.5-7.3 15.8-1.3.5-2.8.7-4.2.7zM261.8 59.4L39.3 205c-12 7.9-17.4 22.8-13.4 36.6l3.8 12.9c4.2 13.8 16.8 23.3 31.2 23.4l265.8.4-64.9-218.9z"
              ></path>
              <path
                className="lineal-stroke"
                d="M138 362.5c-40.4 0-72.8-31.1-73.6-70.8 0-6.8 5.5-12.3 12.3-12.3 6.6 0 12.1 5.2 12.3 11.8.6 26.2 22.1 46.7 49 46.7 14.2 0 27.7-6.2 37-16.9 4.5-5.1 12.2-5.7 17.4-1.2 5.1 4.5 5.7 12.2 1.2 17.4-14 16.1-34.3 25.3-55.6 25.3z"
              ></path>
              <path
                className="lineal-fill"
                d="M183.4 96l57.8 194.5 102.1.1-74.5-250.5L183.4 96z"
              ></path>
              <path
                className="lineal-stroke"
                d="M343.4 302.9l-102.1-.1c-5.4 0-10.2-3.6-11.8-8.8L171.6 99.5c-1.6-5.2.5-10.8 5.1-13.8l85.4-55.9c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.5 250.6c1.9 6.5-1.8 13.4-8.3 15.3-1.1.2-2.3.4-3.4.4zm-92.9-24.7l76.4.1-65.1-218.9-63.9 41.8 52.6 177z"
              ></path>
              <path
                className="lineal-stroke"
                d="M351.8 330.6c-5.4 0-10.2-3.6-11.8-8.8l-91-306c-2.1-6.5 1.3-13.4 7.8-15.6 6.5-2.1 13.4 1.3 15.6 7.8.1.3.2.5.2.8l91 305.9c1.9 6.5-1.8 13.4-8.3 15.3-1.1.4-2.3.6-3.5.6zM338 91.7c-6.8 0-12.3-5.5-12.3-12.3 0-1.8.4-3.6 1.2-5.3l13.4-28.5c2.9-6.2 10.2-8.8 16.4-5.9 6.2 2.9 8.8 10.2 5.9 16.4l-13.4 28.5c-2.1 4.3-6.4 7.1-11.2 7.1zm28.2 64.9c-6.8 0-12.3-5.5-12.3-12.3 0-5.7 3.9-10.6 9.4-12l31.1-7.5c6.6-1.5 13.2 2.6 14.7 9.3 1.5 6.5-2.5 13-9 14.7l-31.2 7.4c-.8.3-1.8.4-2.7.4zm29.1 90c-2.7 0-5.4-.9-7.5-2.6l-24.9-19.4c-5.4-4.2-6.3-11.9-2.2-17.3s11.9-6.3 17.3-2.2l24.9 19.4c5.4 4.2 6.3 11.9 2.1 17.3-2.3 3-5.9 4.7-9.7 4.8z"
              ></path>
            </svg>
            <h2 className="!mb-3 !text-[calc(1.305rem_+_0.66vw)] !leading-[1.3] font-bold xl:!text-[1.8rem]">
              Who Are We?
            </h2>
            <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
              We are a digital and branding company that believes in the power
              of creative strategy and along with great design.
            </p>
            <p className="!mb-6">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </p>
            <div className="mx-[-15px] !mt-[-15px] flex flex-wrap xl:mx-[-20px]">
              <div className="!mt-[15px] w-full max-w-full flex-[0_0_auto] !px-[15px] xl:w-6/12 xl:!px-[20px]">
                <ul className="bullet-bg bullet-soft-primary !mb-0 list-none pl-0">
                  <li className="relative !pl-6">
                    <span>
                      <i className="uil uil-check absolute top-[0.2rem] left-0 flex h-4 w-4 items-center justify-center rounded-[100%] bg-[#dce7f9] !text-center text-[0.8rem] leading-none !tracking-[normal] !text-[#3f78e0] before:table-cell before:align-middle before:content-['\\e9dd']"></i>
                    </span>
                    <span>
                      Aenean eu leo quam ornare curabitur blandit tempus.
                    </span>
                  </li>
                  <li className="relative !mt-3 !pl-6">
                    <span>
                      <i className="uil uil-check absolute top-[0.2rem] left-0 flex h-4 w-4 items-center justify-center rounded-[100%] bg-[#dce7f9] !text-center text-[0.8rem] leading-none !tracking-[normal] !text-[#3f78e0] before:table-cell before:align-middle before:content-['\\e9dd']"></i>
                    </span>
                    <span>
                      Nullam quis risus eget urna mollis ornare donec elit.
                    </span>
                  </li>
                </ul>
              </div>
              {/*<!--/column -->*/}
              <div className="!mt-[15px] w-full max-w-full flex-[0_0_auto] !px-[15px] xl:w-6/12 xl:!px-[20px]">
                <ul className="bullet-bg bullet-soft-primary !mb-0 list-none pl-0">
                  <li className="relative !pl-6">
                    <span>
                      <i className="uil uil-check absolute top-[0.2rem] left-0 flex h-4 w-4 items-center justify-center rounded-[100%] bg-[#dce7f9] !text-center text-[0.8rem] leading-none !tracking-[normal] !text-[#3f78e0] before:table-cell before:align-middle before:content-['\\e9dd']"></i>
                    </span>
                    <span>Etiam porta sem malesuada magna mollis euismod.</span>
                  </li>
                  <li className="relative !mt-3 !pl-6">
                    <span>
                      <i className="uil uil-check absolute top-[0.2rem] left-0 flex h-4 w-4 items-center justify-center rounded-[100%] bg-[#dce7f9] !text-center text-[0.8rem] leading-none !tracking-[normal] !text-[#3f78e0] before:table-cell before:align-middle before:content-['\\e9dd']"></i>
                    </span>
                    <span>Fermentum massa vivamus faucibus amet euismod.</span>
                  </li>
                </ul>
              </div>
              {/*<!--/column -->*/}
            </div>
            {/*<!--/.row -->*/}
          </div>
          {/*<!--/column -->*/}
        </div>
        {/*<!--/.row -->*/}
        <div className="mx-[-15px] !mb-5 flex flex-wrap">
          <div className="xxl:w-7/12 !mx-auto w-full max-w-full flex-[0_0_auto] !px-[15px] !text-center md:w-10/12 lg:w-10/12 xl:w-8/12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 447"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/list.svg"
              className="svg-inject icon-svg icon-svg-md m-[0_auto] !mb-4 !h-[2.6rem] !w-[2.6rem]"
            >
              <path
                className="lineal-stroke"
                d="M102.4 447C45.8 447 0 401.1 0 344.6s45.9-102.4 102.4-102.4c36.3 0 69.9 19.2 88.3 50.5 4.1 6.9 1.8 15.8-5.2 19.9-6.9 4.1-15.8 1.8-19.9-5.2-20.5-34.9-65.4-46.6-100.3-26.1s-46.6 65.4-26.1 100.3 65.4 46.6 100.3 26.1c10.2-6 18.8-14.3 25-24.3 4.3-6.8 13.2-8.9 20.1-4.6 6.8 4.3 8.9 13.2 4.6 20.1-18.7 30-51.5 48.2-86.8 48.1zm395.1-119.8H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.9h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.7-6.5 14-14.2 14.2z"
              ></path>
              <circle
                className="lineal-fill"
                cx="102.4"
                cy="102.4"
                r="87.8"
              ></circle>
              <path
                className="lineal-stroke"
                d="M102.4 204.8C45.8 204.8 0 158.9 0 102.4S45.8 0 102.4 0s102.4 45.8 102.4 102.4c-.1 56.5-45.9 102.3-102.4 102.4zm0-175.7c-40.5 0-73.3 32.8-73.3 73.3s32.8 73.3 73.3 73.3 73.3-32.8 73.3-73.3c-.1-40.5-32.9-73.2-73.3-73.3zM497.5 85H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.8h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.5 14-14.2 14.2z"
              ></path>
            </svg>
            <h2 className="!mb-4 !text-[calc(1.305rem_+_0.66vw)] !leading-[1.3] font-bold lg:!px-[4.5rem] xl:!px-[4.5rem] xl:!text-[1.8rem]">
              Here are 3 working steps to organize our business projects.
            </h2>
          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="mx-[-15px] !mt-[-50px] flex flex-wrap items-center lg:mx-[-20px] xl:mx-[-35px]">
          <div className="!mt-[50px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:!order-2 lg:w-6/12 lg:!px-[20px] xl:!order-2 xl:w-6/12 xl:!px-[35px]">
            <div className="card lg:!mr-6 xl:!mr-6">
              <div className="card-body p-6">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 inline-flex !h-12 !w-12 items-center justify-center !rounded-[100%] !p-0 !text-[calc(1.255rem_+_0.06vw)] leading-none xl:!text-[1.3rem]">
                      <span className="number m-[0_auto] table-cell text-center align-middle text-[1.1rem] font-bold">
                        01
                      </span>
                    </span>
                  </div>
                  <div>
                    <h4 className="!mb-1">Collect Ideas</h4>
                    <p className="!mb-0">
                      Nulla vitae elit libero pharetra augue dapibus.
                    </p>
                  </div>
                </div>
              </div>
              {/*<!--/.card-body -->*/}
            </div>
            {/*<!--/.card -->*/}
            <div className="card !mt-6 lg:!ml-16 xl:!ml-16">
              <div className="card-body p-6">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 inline-flex !h-12 !w-12 items-center justify-center !rounded-[100%] !p-0 !text-[calc(1.255rem_+_0.06vw)] leading-none xl:!text-[1.3rem]">
                      <span className="number m-[0_auto] table-cell text-center align-middle text-[1.1rem] font-bold">
                        02
                      </span>
                    </span>
                  </div>
                  <div>
                    <h4 className="!mb-1">Data Analysis</h4>
                    <p className="!mb-0">
                      Vivamus sagittis lacus vel augue laoreet.
                    </p>
                  </div>
                </div>
              </div>
              {/*<!--/.card-body -->*/}
            </div>
            {/*<!--/.card -->*/}
            <div className="card !mt-6 lg:mx-6 xl:mx-6">
              <div className="card-body p-6">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 inline-flex !h-12 !w-12 items-center justify-center !rounded-[100%] !p-0 !text-[calc(1.255rem_+_0.06vw)] leading-none xl:!text-[1.3rem]">
                      <span className="number m-[0_auto] table-cell text-center align-middle text-[1.1rem] font-bold">
                        03
                      </span>
                    </span>
                  </div>
                  <div>
                    <h4 className="!mb-1">Finalize Product</h4>
                    <p className="!mb-0">
                      Cras mattis consectetur purus sit amet.
                    </p>
                  </div>
                </div>
              </div>
              {/*<!--/.card-body -->*/}
            </div>
            {/*<!--/.card -->*/}
          </div>
          {/*<!--/column -->*/}
          <div className="!mt-[50px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-6/12 lg:!px-[20px] xl:w-6/12 xl:!px-[35px]">
            <h2 className="!mb-3 !text-[calc(1.265rem_+_0.18vw)] !leading-[1.35] font-bold xl:!text-[1.4rem]">
              How It Works?
            </h2>
            <p className="lead text-[1rem] lg:!pr-5 xl:!pr-5">
              Find out everything you need to know and more about how we create
              our business process models.
            </p>
            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
              id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
              eget urna mollis ornare.
            </p>
            <p className="!mb-6">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum
              id ligula porta felis euismod semper. Aenean lacinia bibendum
              nulla sed consectetur. Sed posuere consectetur est at lobortis.
              Vestibulum id ligula porta felis.
            </p>
            <a
              href="#"
              className="btn btn-primary !mb-0 !rounded-[50rem] border-[#3f78e0] !bg-[#3f78e0] !text-white hover:translate-y-[-0.15rem] hover:!border-[#3f78e0] hover:bg-[#3f78e0] hover:text-white hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] active:border-[#3f78e0] active:bg-[#3f78e0] active:text-white disabled:border-[#3f78e0] disabled:bg-[#3f78e0] disabled:text-white"
            >
              Learn More
            </a>
          </div>
          {/*<!--/column -->*/}
        </div>
        {/*<!--/.row -->*/}
      </div>
      {/* <!-- /.container --> */}
    </section>
  )
}

export default NotreMission
