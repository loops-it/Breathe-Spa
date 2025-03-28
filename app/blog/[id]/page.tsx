"use client"
import {useParams} from "next/navigation";
import Image from "next/image";
import styles from "@/styles/page.module.css";

const BlogPost = () => {
    const params = useParams();
    const id = params?.id;

    const blogPost = {
        id: id,
        title: "Unwind & Glow: Your Guide To Ultimate Relaxation",
        date: "6 January 2025",
        imageUrl: "/blog_card.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2>Why Relaxation Matters</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        `,
    };

    return (
        <div className={`${styles.contactContainer} py-5 px-4 px-lg-5`}>
            <div className="text-center mb-5">
                <h1 className={`${styles.sectionTitle} mb-3`}>{blogPost.title}</h1>
                <p className={`text-[14px] ${styles.blogCardDate}`}>{blogPost.date}</p>
            </div>

            <div className={`${styles.blogImageContainer} mb-5`}>
                <Image
                    src={blogPost.imageUrl}
                    alt={blogPost.title}
                    layout="responsive"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover rounded-3"
                />
            </div>

            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div
                        className={`${styles.blogContent} mb-5`}
                        dangerouslySetInnerHTML={{__html: blogPost.content}}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogPost;