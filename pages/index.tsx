import { GetStaticProps } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import slugify from 'slugify';

// Data
import graveyard from 'graveyard.json';

// Components
import Header from 'components/Header';
import App from 'components/App';
import Footer from 'components/Footer';
import { ProductWithSlug } from 'types/Product';

const HomePage: React.FC<{ items: ProductWithSlug[] }> = ({ items }) => {

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
                <link rel="shortcut icon" href="favicon.png" />
                <title>Find The Killed Products by Google In Google Graveyard</title>
                <meta itemProp="description" content="Explore the history of Google products that have been discontinued. From apps to hardware, discover what got killed by Google" />
            </Head>
            <Header />
            <App items={items} />
            <Footer />
        </>
    );
}
export default HomePage;

export const getStaticProps: GetStaticProps = async (_context) => {

    slugify.extend({
        '+': '-plus',
        '@': '-at',
    });

    const processed = graveyard.map((item) => ({
        ...item,
        slug: slugify(item.name, {
            lower: true,
        })
    })).sort((a, b) => (new Date(b.dateClose)).getTime() - (new Date(a.dateClose)).getTime());

    return {
        props: {
            items: processed
        }
    }
}
