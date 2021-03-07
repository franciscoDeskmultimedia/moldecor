import { useEffect } from 'react';
const Hero = () => {
    useEffect(()=>{
        var welcomeSlider = $('.welcome-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 10000,
            nav: true,
            navText: [('<i class="ti-arrow-left"></i>'), ('<i class="ti-arrow-right"></i>')]
        })

        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    },[])
    return (
      <section className="welcome-area">
        <div className="welcome-slides owl-carousel">
          <div
            className="single-welcome-slide bg-img bg-overlay"
            style={{backgroundImage: 'img/bg-img/1.jpg'}}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-lg-8 col-xl-6">
                  <div className="welcome-text">
                    <h2 data-animation="bounceInDown" data-delay="900ms">
                      Hello <br />
                      I'm Jackson
                    </h2>
                    <p data-animation="bounceInDown" data-delay="500ms">
                      I photograph very instinctively. I see how it is taken
                      like that. I do not follow certain styles, philosophies or
                      teachers.
                    </p>
                    <div
                      className="hero-btn-group"
                      data-animation="bounceInDown"
                      data-delay="100ms"
                    >
                      <a href="#" className="mb-3 mr-4 btn alime-btn mb-sm-0">
                        Get a Quote
                      </a>
                      <a
                        className="hero-mail-contact"
                        href="mailto:hello.alime@gmail.com"
                      >
                        hello.alime@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="single-welcome-slide bg-img bg-overlay"
            style={{backgroundImage: 'img/bg-img/2.jpg'}}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-lg-8 col-xl-6">
                  <div className="welcome-text">
                    <h2 data-animation="bounceInUp" data-delay="100ms">
                      Hello <br />
                      I'm Alime
                    </h2>
                    <p data-animation="bounceInUp" data-delay="500ms">
                      I photograph very instinctively. I see how it is taken
                      like that. I do not follow certain styles, philosophies or
                      teachers.
                    </p>
                    <div
                      className="hero-btn-group"
                      data-animation="bounceInUp"
                      data-delay="900ms"
                    >
                      <a href="#" className="mb-3 mr-4 btn alime-btn mb-sm-0">
                        Get a Quote
                      </a>
                      <a
                        className="hero-mail-contact"
                        href="mailto:hello.alime@gmail.com"
                      >
                        hello.alime@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default Hero