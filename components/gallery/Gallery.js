import { useEffect } from 'react';
import Link from 'next/link'
// import { identitytoolkit } from 'googleapis/build/src/apis/identitytoolkit';

const Gallery = (props) => {
    useEffect(()=>{
        $('.alime-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.alime-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    },[])
    const theProds =props.productos;
    console.log(theProds);
    // theProds.map(({Name, id})=>{
    //     console.log(Name + ' and id : ' + id )
    // })
    return (
      <div className="clearfix alime-portfolio-area section-padding-80">
        {theProds.map(
          (item) => {
              
                <p key={item.id}> {item.brand.Name}</p>
            
          }
        )}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="alime-projects-menu">
                <div className="text-center portfolio-menu">
                  <button className="btn active" data-filter="*">
                    Todos
                  </button>
                  <button className="btn" data-filter=".cornisa">
                    Cornisas
                  </button>
                  <button className="btn" data-filter=".esquinas">
                    Esquinas
                  </button>
                  <button className="btn" data-filter=".moldura">
                    Molduras
                  </button>
                  <button className="btn" data-filter=".rosetón">
                    Rosetón
                  </button>
                  <button className="btn" data-filter=".wallpanel">
                    Wall panel
                  </button>
                  <button className="btn" data-filter=".pegamento">
                    Pegamentos
                  </button>
                  <button className="btn" data-filter=".rastrera">
                    Rastreras
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row alime-portfolio">
            {theProds.map(
              (item) => {
                return (
                  <div
                    key={item.id}
                    className={`"col-12 col-sm-6 col-lg-4 single_gallery_item ${item.category.Name.toLowerCase().replace(' ','')} mb-30 wow fadeInUp"`}
                    data-wow-delay="100ms"
                  >
                    <div className="single-portfolio-content">
                      <img
                        src={
                          item.Product_Image ? 'http://localhost:1337'+item.Product_Image.url : "img/bg-img/3.jpg"
                        }
                        alt=""
                      />
                      <div className="prodInfo">
                        <p>
                          {item.category.Name} - {item.brand.Name} - {item.Name}
                        </p>
                        <p>
                          H: <span>{item.Measures.H}</span>
                        </p>
                      </div>
                      <div className="hover-content">
                        <Link href={`productos/${item.Name}`}>
                          <img
                            src={
                              item.Image_data
                                ? 'http://localhost:1337'+item.Image_data.url
                                : "img/bg-img/3.jpg"
                            }
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    );
}

export default Gallery