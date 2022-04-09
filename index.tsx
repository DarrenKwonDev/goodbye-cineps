import { serve } from "./deps.ts";
import { h, renderSSR } from "./deps.ts";
import { HEADER_NAME_ONE, HEADER_NAME_TWO } from "./constants/index.ts";

function App() {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Goodbye cineps</title>
      </head>
      <body>
        <h1>Goodbye cineps</h1>
        <nav>
          <ol>
            <li>
              <a href={`#${HEADER_NAME_ONE}`}>{HEADER_NAME_ONE}</a>
            </li>
            <li>
              <a href={`#${HEADER_NAME_TWO}`}>{HEADER_NAME_TWO}</a>
            </li>
          </ol>
        </nav>
        <ul>
          <li id={HEADER_NAME_ONE}>
            <h2>{HEADER_NAME_ONE}</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae tempora, animi doloribus maxime a veritatis ipsum
                earum provident. Temporibus recusandae, eaque, cupiditate dolor
                atque excepturi facere illo perspiciatis necessitatibus
                aspernatur cum odio nobis earum autem, culpa veritatis quos
                magnam! Harum explicabo tenetur saepe quidem officiis ipsam
                placeat. Aspernatur a labore reiciendis eaque inventore
                voluptatibus neque at autem quos excepturi! Rerum culpa fugit
                quia, mollitia quae unde at, quod magni placeat laboriosam
                excepturi neque minima dicta suscipit aliquam voluptatibus a
                cumque obcaecati cum. Debitis repellendus provident minima
                blanditiis eveniet impedit voluptatum et dolor voluptates enim,
                similique cupiditate! Quo dicta libero dolorum quam harum
                voluptates temporibus. Ex porro nisi id eius vel tempore
                pariatur, placeat fugit ratione! Obcaecati consequuntur,
                voluptate aliquam ullam quaerat mollitia perferendis. Placeat
                pariatur obcaecati eveniet eum harum quaerat aliquid, iusto
                porro temporibus dignissimos veniam sint vero, architecto eos
                alias dolore veritatis. Unde doloremque facilis aspernatur quasi
                ullam distinctio culpa? Sed quas possimus, minus delectus libero
                accusamus error eius voluptates quis consequuntur laborum
                maxime, magni sunt ab voluptate asperiores, ut facere cumque
                accusantium at expedita repellendus. Cupiditate magnam possimus
                autem nemo eaque minus amet, consequuntur nam placeat laboriosam
                corrupti ducimus exercitationem porro nesciunt alias voluptatem
                dolores pariatur nulla nostrum.
              </p>
            </div>
          </li>
          <li id={HEADER_NAME_TWO}>
            <h2>{HEADER_NAME_TWO}</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut
                nulla veniam iure id facilis, numquam quibusdam iusto dolorem
                adipisci totam ratione reiciendis vel consequuntur labore
                fugiat, officiis deserunt accusantium harum unde explicabo
                quidem quod voluptatem ipsam. In quos sapiente doloribus
                voluptates consequatur tenetur eum nostrum atque iusto debitis
                aspernatur, ducimus quidem quas id neque eligendi distinctio
                harum officiis illum praesentium blanditiis a! Aspernatur
                ducimus incidunt distinctio nemo voluptatem. Rerum similique
                eaque non rem eveniet fugiat facere eius, minima placeat. Unde
                ex quas impedit soluta nostrum ad repellat, dolore, quaerat
                tempora ea vel deserunt. Molestias numquam quod natus nam
                adipisci laudantium perspiciatis nesciunt. Hic consequatur illum
                laudantium alias blanditiis culpa, exercitationem quos esse
                facilis ullam provident aut numquam minima veniam similique
                cupiditate est in! Laboriosam impedit obcaecati nisi nihil,
                facilis error quisquam! Quidem aut cum tempore quis a sint est,
                alias cupiditate quae molestias, optio quasi modi similique,
                dolorem obcaecati.
              </p>
            </div>
          </li>
        </ul>
      </body>
    </html>
  );
}

function handler(req: Request) {
  const html = renderSSR(<App />);
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
}

console.log("Listening on http://localhost:8000");
serve(handler);
