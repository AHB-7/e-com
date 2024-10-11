import { Helmet } from "react-helmet-async";

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
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    );
}
