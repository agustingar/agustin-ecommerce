import React, { Component } from "react";
import { Passers } from "prop-passer";
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

    const {
      url = String(window.location),
      title = "Agustin",
      shareImage = "https://www.localhost:3000",
      size = "2.5rem",
    } = this.props;

    const ShareList = Passers({
      url,
      className: "network__share-button",
    })({
      className: "network cursor-pointer hover transition--default",
      title: `Share ${String(window.location)}`,
    })("li");

    return (
     
        <ShareList>
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
        </ShareList>
     
    );
  }
}

export default SubShare;

