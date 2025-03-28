import styles from "@/styles/page.module.css";
import Image from "next/image";
import BlogCard from "@/components/ReusableComponents/BlogCard";

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Unwind & Glow: Your Guide To Ultimate Relaxation',
            date: '6 January 2025',
            imageUrl: '/blog_card.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 2,
            title: 'The Benefits of Deep Tissue Massage',
            date: '6 January 2025',
            imageUrl: '/blog_card.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 3,
            title: 'Aromatherapy: Healing Through Scent',
            date: '6 January 2025',
            imageUrl: '/blog_card.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 4,
            title: 'Mindfulness and Meditation for Stress Relief',
            date: '6 January 2025',
            imageUrl: '/blog_card.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 5,
            title: 'Healthy Skin Starts from Within',
            date: '6 January 2025',
            imageUrl: '/blog_card.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 6,
            title: 'Top 10 Spa Treatments for Rejuvenation',
            date: '6 January 2025',
            imageUrl: '/blog_card.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ];

    return (
        <div>
            <div>
                <Image
                    className={`m-0 p-0 ${styles.blogCon}`}
                    src="/blog_banner.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{width: '100%', height: 'auto'}}
                    alt="Blog Banner"
                />
            </div>

            <div className={`${styles.contactContainer} py-5 px-4 px-lg-5`}>
                <h3 className={`${styles.section_title} mb-5 text-start`}>Our Recent Posts</h3>
                <div className="row g-4">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="col-md-4">
                            <BlogCard post={post}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;