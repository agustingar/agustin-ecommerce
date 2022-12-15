import React, { Component } from "react";
import {
  FacebookShareButton,
  
  WhatsappShareButton,
  PinterestShareButton,


  FacebookIcon,

  WhatsappIcon,
  PinterestIcon,

} from "react-share";



class SubShare extends Component {

  render() {



    return (
     
<>
          <FacebookShareButton
            quote={title}
          >
            <FacebookIcon
              size={size}
            />
          </FacebookShareButton>

      
         

          <WhatsappShareButton
            title={title}
            separator=":: "
          >
            <WhatsappIcon size={size} />
          </WhatsappShareButton>

      
          <PinterestShareButton
            url={String(window.location)}
            media={`${shareImage}`}
            windowWidth={1000}
            windowHeight={730}
          >
            <PinterestIcon size={size} />
          </PinterestShareButton>
       </> 
     
    );
  }
}

export default SubShare;

