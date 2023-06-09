import Image from 'next/image';
import logo from '../../public/assets/logo.svg';
import './page.scss';
import { convertDate } from '@/_utils/convertDate';

const getPosts = async () => {
  try {
    const res = await fetch(
      'https://us-central1-squid-apis.cloudfunctions.net/test-front-basic',
      { cache: 'no-store' }
    );
    const feedData = await res.json();
    return { props: { feedData } };
  } catch (error) {
    return {
      props: {
        error: error.message
      }
    };
  }
};

export default async function Page() {
  const data = await getPosts();
  const { feedData, error } = data.props;
  if (error) {
    return (
      <div className="background-red white">
        <h1 className="pt-2 text-center">Ocorreu algum erro!</h1>
        <h3 className="text-center pb-4">Recarregue a página</h3>
      </div>
    );
  }

  return (
    <div className="container justify-content-center">
      <div className="display-flex justify-content-center mt-4 mb-4">
        <Image src={logo} alt="Logo da Squid" />
      </div>
      <div className="row">
        {feedData?.map((data) => (
          <div
            className="col-12 col-md-8 col-sm-12 col-lg-6 col-xl-4"
            key={data._id}
          >
            <div className="m-2">
              <a href={data.link} target="_blank" rel="noopener">
                <div class="img__hover img_scale">
                  <Image
                    src={data.imagens.resolucaoPadrao.url}
                    alt={data.usuario.username}
                    width={175}
                    height={175}
                  />
                  <div class="img__description">
                    <div className="container">
                      <div className="row pt-3 pl-2">
                        <div className="col-24">
                          <i className="fa-solid fa-at">
                            <span className="pl-2">
                              {data.usuario.username}
                            </span>
                          </i>
                        </div>
                        <div className="col-24">
                          <i className="fa-solid fa-heart">
                            <span className="pl-2">{data.upvotes}</span>
                          </i>
                        </div>
                        <div className="col-24">
                          <i className="fa-solid fa-comment">
                            <span className="pl-2">{data.comentarios}</span>
                          </i>
                        </div>
                        <div className="col-24">
                          <i className="fa-solid fa-calendar-days">
                            <span className="pl-2 date-text">
                              {convertDate(data.obtidoEm)}
                            </span>
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
