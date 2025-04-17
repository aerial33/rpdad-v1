export const TeamBlock = () => {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-28 lg:pb-20 xl:pt-28 xl:pb-20">
        <div className="mx-[-15px] !mt-[-50px] flex flex-wrap items-center lg:mx-[-20px] xl:mx-[-35px]">
          <div className="!mt-[50px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-4/12 lg:!px-[20px] xl:w-4/12 xl:!px-[35px]">
            <h2 className="text-line relative !mb-3 inline-flex !pl-[1.4rem] align-top !text-[.75rem] !leading-[1.35] !tracking-[0.02rem] !text-[#3f78e0] uppercase before:absolute before:top-2/4 before:left-0 before:inline-block before:h-[0.05rem] before:w-3 before:translate-y-[-60%] before:bg-[#3f78e0] before:content-['']">
              Rencontrez l'Équipe
            </h2>
            <h3 className="!mb-5 !text-[calc(1.285rem_+_0.42vw)] !leading-[1.3] font-bold xl:!text-[1.6rem]">
              Économisez votre temps et votre argent en choisissant notre équipe
              professionnelle.
            </h3>
            <p>
              Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros tempus porttitor.
            </p>
            <a
              href="#"
              className="btn btn-primary !mt-3 !rounded-[50rem] border-[#3f78e0] !bg-[#3f78e0] !text-white hover:translate-y-[-0.15rem] hover:!border-[#3f78e0] hover:bg-[#3f78e0] hover:text-white hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] active:border-[#3f78e0] active:bg-[#3f78e0] active:text-white disabled:border-[#3f78e0] disabled:bg-[#3f78e0] disabled:text-white"
            >
              Voir Tous les Membres
            </a>
          </div>
          {/*column */}
          <div className="!mt-[50px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-8/12 lg:!px-[20px] xl:w-8/12 xl:!px-[35px]">
            <div
              className="swiper-container !mb-6 !text-center"
              data-margin="30"
              data-dots="true"
              data-items-xl="3"
              data-items-md="2"
              data-items-xs="1"
            >
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img
                      className="!mx-auto !mb-4 w-40 rounded-[50%]"
                      src="../../assets/img/avatars/t1.jpg"
                      srcSet="../../assets/img/avatars/t1@2x.jpg 2x"
                      alt="image"
                    />
                    <h4 className="!mb-1">Cory Zamora</h4>
                    <div className="!mb-2 !text-[0.65rem] font-bold !tracking-[0.02rem] !text-[#aab0bc] uppercase">
                      Spécialiste Marketing
                    </div>
                    <p className="!mb-2">
                      Etiam porta sem magna malesuada mollis.
                    </p>
                    <nav className="nav social !mb-0 justify-center !text-center">
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-twitter text-[1rem] !text-[#5daed5] before:content-['\\ed59']"></i>
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-slack text-[1rem] !text-[#d4135c] before:content-['\\ecdd']"></i>
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-linkedin text-[1rem] !text-[#3393c1] before:content-['\\ebd1']"></i>
                      </a>
                    </nav>
                    {/* /.social */}
                  </div>
                  {/*/.swiper-slide */}
                  <div className="swiper-slide">
                    <img
                      className="!mx-auto !mb-4 w-40 rounded-[50%]"
                      src="../../assets/img/avatars/t2.jpg"
                      srcSet="../../assets/img/avatars/t2@2x.jpg 2x"
                      alt="image"
                    />
                    <h4 className="!mb-1">Coriss Ambady</h4>
                    <div className="!mb-2 !text-[0.65rem] font-bold !tracking-[0.02rem] !text-[#aab0bc] uppercase">
                      Analyste Financier
                    </div>
                    <p className="!mb-2">
                      Aenean eu leo quam. Pellentesque ornare lacinia.
                    </p>
                    <nav className="nav social !mb-0 justify-center !text-center">
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-youtube text-[1rem] !text-[#c8312b] before:content-['\\edb5']"></i>
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-facebook-f text-[1rem] !text-[#4470cf] before:content-['\\eae2']"></i>
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-dribbble text-[1rem] !text-[#e94d88] before:content-['\\eaa2']"></i>
                      </a>
                    </nav>
                    {/* /.social */}
                  </div>
                  {/*/.swiper-slide */}
                  <div className="swiper-slide">
                    <img
                      className="!mx-auto !mb-4 w-40 rounded-[50%]"
                      src="../../assets/img/avatars/t3.jpg"
                      srcSet="../../assets/img/avatars/t3@2x.jpg 2x"
                      alt="image"
                    />
                    <h4 className="!mb-1">Nikolas Brooten</h4>
                    <div className="!mb-2 !text-[0.65rem] font-bold !tracking-[0.02rem] !text-[#aab0bc] uppercase">
                      Directeur Commercial
                    </div>
                    <p className="!mb-2">
                      Donec ornare elit quam porta gravida at eget.
                    </p>
                    <nav className="nav social !mb-0 justify-center !text-center">
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-linkedin text-[1rem] !text-[#3393c1] before:content-['\\ebd1']"></i>
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-tumblr-square text-[1rem] !text-[#5d82a4] before:content-['\\ed54']"></i>
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-facebook-f text-[1rem] !text-[#4470cf] before:content-['\\eae2']"></i>
                      </a>
                    </nav>
                    {/* /.social */}
                  </div>
                  {/*/.swiper-slide */}
                  <div className="swiper-slide">
                    <img
                      className="!mx-auto !mb-4 w-40 rounded-[50%]"
                      src="../../assets/img/avatars/t4.jpg"
                      srcSet="../../assets/img/avatars/t4@2x.jpg 2x"
                      alt="image"
                    />
                    <h4 className="!mb-1">Jackie Sanders</h4>
                    <div className="!mb-2 !text-[0.65rem] font-bold !tracking-[0.02rem] !text-[#aab0bc] uppercase">
                      Planificateur d'Investissement
                    </div>
                    <p className="!mb-2">
                      Nullam risus eget urna mollis ornare vel eu leo.
                    </p>
                    <nav className="nav social !mb-0 justify-center !text-center">
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-twitter text-[1rem] !text-[#5daed5] before:content-['\\ed59']"></i>
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-facebook-f text-[1rem] !text-[#4470cf] before:content-['\\eae2']"></i>
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-dribbble text-[1rem] !text-[#e94d88] before:content-['\\eaa2']"></i>
                      </a>
                    </nav>
                    {/* /.social */}
                  </div>
                  {/*/.swiper-slide */}
                  <div className="swiper-slide">
                    <img
                      className="!mx-auto !mb-4 w-40 rounded-[50%]"
                      src="../../assets/img/avatars/t5.jpg"
                      srcSet="../../assets/img/avatars/t5@2x.jpg 2x"
                      alt="image"
                    />
                    <h4 className="!mb-1">Tina Geller</h4>
                    <div className="!mb-2 !text-[0.65rem] font-bold !tracking-[0.02rem] !text-[#aab0bc] uppercase">
                      Acheteur Assistant
                    </div>
                    <p className="!mb-2">
                      Vivamus sagittis lacus vel augue laoreet rutrum.
                    </p>
                    <nav className="nav social !mb-0 justify-center !text-center">
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-facebook-f text-[1rem] !text-[#4470cf] before:content-['\\eae2']"></i>
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-slack text-[1rem] !text-[#d4135c] before:content-['\\ecdd']"></i>
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-dribbble text-[1rem] !text-[#e94d88] before:content-['\\eaa2']"></i>
                      </a>
                    </nav>
                    {/* /.social */}
                  </div>
                  {/*/.swiper-slide */}
                </div>
                {/*/.swiper-wrapper */}
              </div>
              {/* /.swiper */}
              <div className="swiper-pagination"></div>
              <div className="swiper-navigation">
                <div className="swiper-button swiper-button-prev"></div>
                <div className="swiper-button swiper-button-next"></div>
              </div>
            </div>
            {/* /.swiper-container */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
    </section>
  )
}
