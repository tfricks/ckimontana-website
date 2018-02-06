import get from "lodash/get";
import React from "react";
import Helmet from "react-helmet";
import Script from "react-load-script";
import { siteMetadata } from "../../gatsby-config";

class HomeIndex extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }
  render() {
    const pathPrefix =
      process.env.NODE_ENV === "development" ? "" : __PATH_PREFIX__;
    const title = "Home";
    return (
      <div>
        <Helmet
          title={`${title} | ${get(siteMetadata, "title")}`}
          meta={[
            { property: "og:title", content: title },
            { property: "og:type", content: "website" },
            {
              property: "og:description",
              content: get(siteMetadata, "description")
            },
            {
              property: "og:url",
              content: `${get(siteMetadata, "siteUrl")}/profile`
            }
          ]}
        />
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <section id="content mt-0">
          <div className="container">
            <div className="row text-left bg-inverse">
              <h2 className="section-heading">
                {" "}
                Welcome to the Montana District of Circle K International{" "}
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur erat purus, tristique nec elementum placerat,
                hendrerit feugiat ligula. Cras tempor, arcu vitae maximus
                dictum, urna nunc hendrerit diam, eu viverra magna nibh eget
                sem. Nullam sollicitudin enim id felis mollis vehicula. Proin
                tincidunt velit vehicula volutpat semper. Aenean ante quam,
                mattis a urna sed, rutrum tempor mauris. Fusce ac felis a diam
                dapibus facilisis in at mi. Phasellus eu ante finibus, posuere
                odio in, congue sem. Sed eget ligula a odio ornare bibendum
                vitae eget mauris. Vestibulum auctor enim nec mollis viverra.
                Sed urna diam, consectetur sed facilisis vitae, tempor eu ante.
                Donec et maximus quam. Phasellus convallis convallis bibendum.
                Curabitur lacus elit, molestie vitae augue eu, pharetra eleifend
                nulla. Aliquam ac est a orci tempor luctus. Pellentesque sit
                amet posuere mi. Etiam at dictum augue. In hac habitasse platea
                dictumst. Vivamus consectetur metus quis viverra vehicula.
                Aenean lobortis, leo nec fermentum gravida, ipsum ipsum
                consequat ipsum, quis aliquam dolor eros vel dolor. Sed molestie
                nunc vel risus ultricies hendrerit. Donec pharetra velit enim,
                sit amet eleifend ligula cursus id. Curabitur ipsum mi,
                consectetur non lacus in, porttitor dictum ligula. Donec lectus
                purus, convallis sed urna non, venenatis lobortis felis. Etiam
                ultricies, massa nec auctor vestibulum, ipsum magna ullamcorper
                ligula, non rutrum eros diam at massa. Praesent quis neque sit
                amet lorem ornare vulputate. Vestibulum sit amet tellus gravida,
                tempus tellus in, dapibus mi. Praesent dapibus volutpat
                porttitor. Integer semper at est in fermentum. Nam ornare enim
                sem, porttitor faucibus dolor vehicula sed. Vestibulum suscipit
                risus sed feugiat sagittis. Duis interdum, mi nec tincidunt
                pulvinar, nibh purus eleifend urna, vitae dignissim leo ligula
                vel ante. Nulla vitae hendrerit nulla. Quisque dignissim, massa
                ac sagittis porta, nisl ipsum commodo est, eget pretium felis
                purus id purus. Proin non neque in arcu sollicitudin posuere.
                Nam iaculis consectetur ultrices. Donec tristique pharetra nibh
                vel commodo. Sed metus massa, rhoncus ut tortor volutpat,
                bibendum imperdiet dolor. Maecenas ex risus, rutrum sed sapien
                at, euismod sollicitudin nulla. Cras varius diam dignissim magna
                lacinia luctus. Praesent gravida nisl a odio finibus, ut semper
                velit faucibus. Cras sagittis risus ac tortor gravida dictum in
                eget mi. Nunc pulvinar, est nec elementum molestie, odio enim
                cursus nisi, eget volutpat erat orci a massa. Fusce quis libero
                mi. Suspendisse at libero nec turpis pharetra auctor ut id
                lacus. Vestibulum ullamcorper mi lorem, pellentesque tincidunt
                est consequat nec. In leo purus, faucibus sit amet malesuada et,
                laoreet vel est. Donec luctus magna felis, id convallis sem
                molestie at. Vestibulum ultricies ipsum vel justo mollis
                vehicula. Pellentesque libero justo, tincidunt pretium rutrum
                ut, cursus sit amet tellus. Aenean malesuada ipsum sed dignissim
                lobortis.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeIndex;
