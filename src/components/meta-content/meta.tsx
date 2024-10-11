import { Helmet } from "react-helmet";

type MetaContentProps = {
    title: string;
    description: string;
    keywords: string;
};

export function MetaContent({
    title,
    description,
    keywords,
}: MetaContentProps) {
    return (
        <Helmet>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="E-commerce" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href} />
        </Helmet>
    );
}
