import Carousel from "react-multi-carousel";

const MultiCarousel = ({productDatas}) => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

      console.log(productDatas.product_image.length);
      if(productDatas.product_image.length === 1){
        return <Carousel className="carousel" responsive={responsive}>
        
          <img
            src={
              productDatas.product_image[0].secure_url
            }
            alt="photo du vetement"
          />
        
        </Carousel>
              }
              else if(productDatas.product_image.length === 2){
                return <Carousel className="carousel" responsive={responsive}>
                
                  <img
                    src={
                      productDatas.product_image[0].secure_url
                    }
                    alt="photo du vetement"
                  />
                
                <img
                    src={
                      productDatas.product_image[1].secure_url
                    }
                    alt="photo du vetement"
                  />
                
                </Carousel>
                      }

                      else if(productDatas.product_image.length === 3){
                        return <Carousel className="carousel" responsive={responsive}>
                        
                          <img
                            src={
                              productDatas.product_image[0].secure_url
                            }
                            alt="photo du vetement"
                          />
                        
                        <img
                            src={
                              productDatas.product_image[1].secure_url
                            }
                            alt="photo du vetement"
                          />
                            <img
                            src={
                              productDatas.product_image[2].secure_url
                            }
                            alt="photo du vetement"
                          />
                 
                        
                        </Carousel>
                              }

     else if(productDatas.product_image.length === 4){
return <Carousel className="carousel" responsive={responsive}>

  <img
    src={
      productDatas.product_image[0].secure_url
    }
    alt="photo du vetement"
  />

<img
    src={
      productDatas.product_image[1].secure_url
    }
    alt="photo du vetement"
  />
    <img
    src={
      productDatas.product_image[2].secure_url
    }
    alt="photo du vetement"
  />
    <img
    src={
      productDatas.product_image[3].secure_url
    }
    alt="photo du vetement"
  />

</Carousel>
      } else if(productDatas.product_image.length === 5){
        return <Carousel className="carousel" responsive={responsive}>
        
          <img
            src={
              productDatas.product_image[0].secure_url
            }
            alt="photo du vetement"
          />
        
        <img
            src={
              productDatas.product_image[1].secure_url
            }
            alt="photo du vetement"
          />
            <img
            src={
              productDatas.product_image[2].secure_url
            }
            alt="photo du vetement"
          />
            <img
            src={
              productDatas.product_image[3].secure_url
            }
            alt="photo du vetement"
          />

<img
            src={
              productDatas.product_image[4].secure_url
            }
            alt="photo du vetement"
          />
        
        </Carousel>
              }
      
    }

export default MultiCarousel

