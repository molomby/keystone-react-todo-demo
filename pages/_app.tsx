import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { createClient, Provider } from 'urql';
import { useQuery, gql } from 'urql';
const client = createClient({
  url: 'http://localhost:3000/graphql',
});

// useQuery({
//   query: gql`
//     query {
//       allTodos {
//         id
//         name
//         isComplete
//       }
//     }
//   `,
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
