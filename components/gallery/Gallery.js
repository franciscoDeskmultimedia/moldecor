import { useEffect } from 'react';
import Link from 'next/link'

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
    return (
        <div className="clearfix alime-portfolio-area section-padding-80">
            {props.productos.map(({ categoria, marca, modelo, hcm ,image})=>{
                    <p key={modelo}> {modelo}</p>
                })}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="alime-projects-menu">
                            <div className="text-center portfolio-menu">
                                <button className="btn active" data-filter="*">Todos</button>
                                <button className="btn" data-filter=".cornisa">Cornisas</button>
                                <button className="btn" data-filter=".esquinas">Esquinas</button>
                                <button className="btn" data-filter=".moldura">Molduras</button>
                                <button className="btn" data-filter=".rosetón">Rosetón</button>
                                <button className="btn" data-filter=".wallpanel">Wall panel</button>
                                <button className="btn" data-filter=".pegamento">Pegamentos</button>
                                <button className="btn" data-filter=".rastrera">Rastreras</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row alime-portfolio">

                    {theProds.slice(1, theProds.length - 1).map(({ categoria, marca, modelo, hcm ,image,imageData})=>{
                        return (
                          <div
                            key={modelo}
                            className={`"col-12 col-sm-6 col-lg-4 single_gallery_item ${categoria.toLowerCase().replace(' ','' )} mb-30 wow fadeInUp"`}
                            data-wow-delay="100ms"
                          >
                            <div className="single-portfolio-content">
                              <img
                                src={image ? image : "img/bg-img/3.jpg"}
                                alt=""
                              />
                              <div className='prodInfo'>
                                <p>{categoria} - {modelo}</p>
                                <p>H: <span>{hcm}</span></p>
                              </div>
                              <div className="hover-content">
                                  <Link href={`productos/${modelo}`}>
                                     
                                     <img
                                src={imageData ? imageData : "img/bg-img/3.jpg"}
                                alt=""
                              />
                              
                              </Link>
                             
                                {/* <a
                                  href={image ? image : "img/bg-img/3.jpg"}
                                  className="portfolio-img"
                                >
                                  +
                                </a> */}
                              </div>
                            </div>
                          </div>
                        );
                        
                    })}
                    
                </div>
    
                {/* <div className="row">
                    <div className="text-center col-12 wow fadeInUp" data-wow-delay="700ms">
                        <a href="#" className="btn alime-btn btn-2 mt-15">View More</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Gallery