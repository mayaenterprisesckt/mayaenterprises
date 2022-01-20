import dynamic from "next/dynamic";
const BlogCard = dynamic(() => import("../../components/card/BlogCard"));
function BlogContainer() {
    return (
        <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-10">
                <h1 className="mb-3 text-6xl Avenir font-semibold text-gray-900 dark:text-white">
                    Blog
                </h1>
                <h1 className="mb-9 text-2xl font-semibold text-gray-600 dark:text-gray-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.
                    Gastropub indxgo juice poutine, ramps microdosing banh mi pug.
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex-col  mb-8">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
}

export default BlogContainer;
