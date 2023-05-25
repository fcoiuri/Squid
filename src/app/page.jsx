import Image from 'next/image';
import logo from '../../public/assets/logo.svg';
import './page.scss';
import { convertDate } from '@/_utils/convertDate';

async function getData() {
  const res = await fetch(
    'https://us-central1-squid-apis.cloudfunctions.net/test-front-basic'
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="container justify-content-center">
      <div className="display-flex justify-content-center mt-4 mb-4">
        <Image src={logo} alt="Logo da Squid" />
      </div>
      <div className="row">
        {data.map((data) => (
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
