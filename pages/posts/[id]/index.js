import { useRouter } from "next/router";
import Link from "next/link";
import MainLayout from "../../../Layouts/MainLayout";
import { request, gql } from "graphql-request";

const Post = ({data1, data2}) => {
    const router = useRouter();
    const { id, name } = router.query;

    return (
        <MainLayout pageTitle={`Data of ${name ? name : ''}`}>
            <div className={'w-1/6 min-h-6 p-5 flex flex-col justify-center items-center bg-blue-300 text-white mt-10 mx-auto rounded-md selection:bg-white selection:text-blue-400 dark:bg-gray-600'}>
                <h3>Post: {id}</h3>
                <Link href={'/posts'}><a className={'mt-4 hover:text-blue-400 dark:hover:text-gray-400'}>Go Back</a></Link>
            </div>
            <pre className={'w-2/3 overflow-hidden text-ellipsis whitespace-pre-wrap ml-10'}>
                <p>{ parseInt(id) === 1 ? JSON.stringify(data1, null, '  ') : JSON.stringify(data2, null, '  ') }</p>
            </pre>
            { parseInt(id) === 1 &&
                <img src={`http://localhost:1337${data1.restaurants.data[0].attributes.image.data[0].attributes.url}`} alt={'image'} width={'300px'} className={'ml-10 my-5'} />
            }
        </MainLayout>
    );
}

Post.getInitialProps = async (ctx) => {
    const queryRestaurants = gql`
        query{
          restaurants{
            data{
              id
              attributes{
                name
                description
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
    `;

    const queryCategories = gql`
        query{
          categories{
            data{
              id
              attributes{
                name
              }
            }
          }
        }
    `;

    const dataRestaurants = await request('http://localhost:1337/graphql', queryRestaurants);
    const dataCategories = await request('http://localhost:1337/graphql', queryCategories);

    return {data1: dataRestaurants, data2: dataCategories};
}

export default Post;