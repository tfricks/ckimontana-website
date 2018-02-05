import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../../gatsby-config'

class Leadership extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const title = 'Leadership'
    return (
      <div>
        <Helmet
          title={`${title} | ${get(siteMetadata, 'title')}`}
          meta={[
            { property: 'og:title', content: title },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:description',
              content: get(siteMetadata, 'description'),
            },
            {
              property: 'og:url',
              content: `${get(siteMetadata, 'siteUrl')}/leadership`,
            }
          ]}
        />

        <section id="desc">
          <div className="container">
            <div className="row text-left ">
                <h2 className="section-heading">Our Leaders</h2>
                <p>
                  The District Board is the body that represents individual clubs bla bla something something.........orem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut quam turpis. Nam pretium volutpat venenatis. Donec cursus fringilla leo a gravida. Donec facilisis condimentum auctor. Maecenas non magna tincidunt, finibus orci et, iaculis ipsum. Aenean vitae neque vel nulla aliquet porttitor. In ultricies quis risus quis pellentesque.

Phasellus volutpat metus libero, vel maximus enim rhoncus vitae. Cras et risus in arcu pretium vulputate. Cras vitae dolor neque. Nunc sodales ex non leo commodo, ac tempor neque mattis. Ut vestibulum imperdiet mi, eget suscipit sapien. Curabitur ultrices pretium odio vel placerat. Praesent faucibus arcu rutrum purus rutrum molestie. Cras augue sem, cursus et tellus ut, cursus accumsan nisi. Integer rhoncus sodales urna ut efficitur. Donec sit amet orci at felis dapibus imperdiet.

Donec vestibulum, eros vel auctor accumsan, sapien metus vehicula augue, quis vehicula nulla diam ac sem. Nullam dolor mauris, consequat nec lacinia cursus, semper quis odio. Cras commodo finibus leo ac tincidunt. Ut imperdiet lorem quis urna faucibus finibus. Nunc arcu lorem, sodales at mi sit amet, ultricies pellentesque nibh. Maecenas sollicitudin imperdiet quam aliquet malesuada. Pellentesque ac urna vitae erat varius molestie. Nulla commodo nibh vitae massa aliquam, quis dignissim velit placerat. Praesent vehicula quam vel nulla efficitur porta id ut diam.

Fusce venenatis tincidunt semper. Cras sagittis convallis ligula vel sodales. Aliquam lacinia vitae dolor tristique mattis. Suspendisse euismod justo libero, nec consectetur lacus laoreet sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ut pellentesque turpis, nec posuere dui. Aliquam erat volutpat. Sed aliquet efficitur cursus. Aliquam elementum magna vitae dignissim eleifend. Mauris tincidunt rutrum lacus eget faucibus. Praesent arcu nisi, malesuada sit amet leo ac, consequat sollicitudin neque. Vestibulum varius risus elit, at cursus eros fringilla at. In luctus nisi nisi, sed ullamcorper magna iaculis et. Donec posuere enim nec neque convallis varius.

Praesent arcu ante, fermentum id nisi nec, aliquet mattis nulla. Cras tincidunt justo eget nibh imperdiet, non laoreet nibh eleifend. Vivamus accumsan nisi ut lorem dictum lobortis. Nullam cursus, turpis ac dignissim pellentesque, mi dolor ultricies nisi, vitae hendrerit urna ante sit amet orci. Fusce efficitur eget leo sit amet lacinia. Cras maximus volutpat velit vel porta. Integer vestibulum dignissim volutpat. Qui
                </p>
            </div>
          </div>
        </section>
        <section id="govenor" className="bg-primary text-white mt-0 mr-5 ml-5">
          <div data-emergence="hidden" className="container slide-right">
            <div className="row text-left ">
              <h2 className="section-heading">Govenor: Isabelle Monroe</h2>
              <hr />
            </div>
            <div className="row text-left ">
              <p>Photo and Bio here</p>
            </div>
            
          </div>
        </section>
        <section id="secretary" className="mt-0 mr-5 ml-5">
          <div data-emergence="hidden" className="container slide-right">
            <div className="row text-left ">
                <h2 className="section-heading">Secretary/Treasurer: Jackie McFarland</h2> <br />
            </div>
            <div className="row text-left ">
              <p>Photo and Bio here</p>
            </div>
          </div>
        </section>
        <section id="webmaster" className="bg-primary text-white mt-0 mr-5 ml-5">
          <div data-emergence="hidden" className="container slide-right">
            <div className="row text-left ">
                <h2 className="section-heading">Webmaster: Tyler Fricks</h2> <br />
            </div>
            <div className="row text-left ">
              <p>Photo and Bio here</p>
            </div>
          </div>
        </section>
        <section id="council" className="mt-0 mr-5 ml-5">
        <div data-emergence="hidden" className="container slide-right">
            <div className="row text-left ">
                <h2 className="section-heading">Council Of Presidents</h2> <br />
            </div>
            <div className="row text-left">
                <p>
                  Something about the council here.
                </p>
            </div>
            <div className="row text-left">
                <ul>
                  <li>
                    Carroll President: Ben Dulaney
                  </li>
                  <li>
                    MSU President: Jack Roberts
                  </li>
                  <li>
                    MT Tech President: Jordan Foster
                  </li>
                  <li>
                    UofM President: Jamie Sodering
                  </li>
                </ul>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Leadership
