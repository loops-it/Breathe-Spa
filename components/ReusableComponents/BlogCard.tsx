import Image from "next/image";
import styles from "@/styles/page.module.css";
import Link from "next/link";

const BlogCard = ({post}: {
    post: { id: number; title: string; date: string; imageUrl: string; description: string }
}) => {
    return (
        <Link href={`/blog/${post.id}`} className="text-decoration-none">
            <div
                className={`bg-white rounded-3 shadow-sm overflow-hidden transition-all duration-300 ease-in-out hover:shadow-md hover:scale-[1.02] cursor-pointer ${styles.blogCard}`}
            >
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    layout="responsive"
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover rounded-top-3"
                />
                <div className="p-4">
                    <p className={`text-[14px] ${styles.blogCardDate}`}>{post.date}</p>
                    <h3 className={`mb-2 ${styles.blogCardTitle}`}>
                        {post.title}
                    </h3>
                    <p className={styles.blogCardDesc}>{post.description}</p>
                    <p className={`${styles.blogCardRead}`}>
                        Read More...
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;