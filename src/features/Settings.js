export const Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3, 
        responsive: [
            {
              breakpoint: 1500, 
              settings: {
                  slidesToShow: 3, 
                  slidesToScroll: 3, 
                  inifinte: true, 
                  dots: false
              },
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
}

export default Settings