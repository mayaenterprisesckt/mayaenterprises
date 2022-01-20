/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
    title: "MayaEnterprises",
    titleTemplate: "%s | MayaEnterprises",
    defaultTitle: "MayaEnterprises",
    description:
        "MayaEnterprises is a finance managing software where you can allow your users to view finantial report , publish roadmap, and complete your customer feedback loop.",
    openGraph: {
        url: "https://mayaenterprises.co.in",
        title: "MayaEnterprises",
        description:
            "MayaEnterprisesis a finance managing software where you can allow your users to view finantial report , publish roadmap, and complete your customer feedback loop.",
        images: [
            {
                url: "https://mayaenterprises.co.in",
                alt: "MayaEnterprises.co.in og-image",
            },
        ],
        site_name: "MayaEnterprises",
    },
    twitter: {
        handle: "@MayaEnterprises",
        cardType: "summary_large_image",
    },
};

export default defaultSEOConfig;
