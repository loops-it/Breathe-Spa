"use client";
import Image from "next/image";
import styles from "@/styles/page.module.css";
import React, {useState} from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        privacyPolicy: false,
    });

    const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value, type} = e.target;
        const checked = "checked" in e.target ? (e.target as HTMLInputElement).checked : false;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmissionStatus(null);
        setIsLoading(true);
        try {
            console.log("Form submitted:", formData);
            setSubmissionStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
                privacyPolicy: false,
            });
        } catch (error) {
            setSubmissionStatus("error");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div>
                <Image
                    className={`m-0 p-0`}
                    src="/contact_hero.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{width: "100%", height: "auto"}}
                    alt=""
                />
            </div>

            <section className={`${styles.contactContainer} pt-5 ${styles.formSection}`}>
                <div className={`row align-items-stretch ${styles.equalHeightRow}`}>
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className={styles.imageContainer}>
                            <Image
                                src="/spa_contact.png"
                                alt="Spa treatment"
                                fill
                                className={`img-fluid ${styles.responsiveImage}`}
                                style={{objectFit: 'cover'}}
                            />
                        </div>
                    </div>
                    <div className={`col-md-6 ${styles.formWrapper}`}>
                        <div className={styles.formContainer}>
                            <h2 className={styles.section_title}>Schedule your in Haus presence</h2>
                            <p className={`text-muted ${styles.sectionSubTitle}`}>Get in touch with us</p>

                            {submissionStatus === "success" && (
                                <div className="alert alert-success" role="alert">
                                    Thank you for your message! We&#39;ll get back to you soon.
                                </div>
                            )}
                            {submissionStatus === "error" && (
                                <div className="alert alert-danger" role="alert">
                                    Something went wrong. Please try again later.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="mt-4">
                                <div className="row">
                                    <div className={`col-md-6 ${styles.contactFormDiv}`}>
                                        <label htmlFor="firstName" className={styles.form_label}>
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            className={styles.formControl}
                                            id="firstName"
                                            name="firstName"
                                            placeholder="First name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.contactFormDiv}`}>
                                        <label htmlFor="lastName" className={styles.form_label}>
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            className={styles.formControl}
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Last name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className={styles.contactFormDiv}>
                                    <label htmlFor="email" className={styles.form_label}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className={styles.formControl}
                                        id="email"
                                        name="email"
                                        placeholder="you@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.contactFormDiv}>
                                    <label htmlFor="phone" className={styles.form_label}>
                                        Phone number
                                    </label>
                                    <input
                                        type="tel"
                                        className={styles.formControl}
                                        id="phone"
                                        name="phone"
                                        placeholder="+94 1128 4571 174"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.contactFormDiv}>
                                    <label htmlFor="message" className={styles.form_label}>
                                        Message
                                    </label>
                                    <textarea
                                        className={styles.formControl}
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className={`flex flex-row align-content-center ${styles.contactFormDiv}`}>
                                    <input
                                        type="checkbox"
                                        className={styles.formCheckBox}
                                        id="privacyPolicy"
                                        name="privacyPolicy"
                                        checked={formData.privacyPolicy}
                                        onChange={handleChange}
                                    />
                                    <label className={`form-check-label ${styles.formCheck}`} htmlFor="privacyPolicy">
                                        I agree to our friendly <a href="#">Privacy Policy</a>.
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className={`btn btn-dark w-100 ${styles.submit_button}`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                    <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                    ></span>
                                            Sending...
                                        </>
                                    ) : (
                                        "Send message"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.mapHouContainer}>
                <div className={styles.mapMain}>
                    <div className={`${styles.contactContainer} p-4`}>
                        <div className="row">
                            <div className={`col-lg-6 col-md-12 mb-4 ${styles.contact_info_container}`}>
                                <h1 className={styles.sectionTitle}>Schedule your in-Haus presence</h1>
                                <p className={styles.map_hours_desc}>
                                    Lorem ipsum dolor sit amet consectetur. Amet ultricies pulvinar
                                    amet aliquet consequat lectus tortor. Felis consectetur tempus
                                    luctus habitasse lacus elit vel sapien. Magna massa sed tempus
                                    sagittis lorem. Velit sit neque interdum nisl.
                                </p>

                                <h3 className={`${styles.map_hours_title}`}>OPENING
                                    HOURS</h3>
                                <div className="">
                                    <div
                                        className="d-flex justify-content-between border-top border-1 border-secondary py-2">
                                        <span className={styles.map_hours_days}>TUESDAY TO SATURDAY</span>
                                        <span className={styles.map_hours_time}>9:00am - 8:00pm</span>
                                    </div>
                                    <div className="d-flex justify-content-between border-top py-2">
                                        <span className={styles.map_hours_days}>MONDAY</span>
                                        <span className={styles.map_hours_time}>Closed</span>
                                    </div>
                                </div>

                                <h3 className={`mt-4 border-bottom border-1 border-secondary py-4 ${styles.map_hours_title}`}>CONTACT
                                    US</h3>
                                <div className="">
                                    <p className={`d-flex align-items-center gap-4 ${styles.contact_info}`}>
                                        <Image src="/location.png" alt="location icon" width={24} height={24}/>
                                        14 Albert Cres, Colombo 007
                                    </p>
                                    <p className={`d-flex align-items-center gap-4 ${styles.contact_info}`}>
                                        <Image src="/email.png" alt="email icon" width={24} height={24}/>
                                        <span>breathe@gmail.com</span>
                                    </p>
                                    <p className={`d-flex align-items-center gap-4 ${styles.contact_info}`}>
                                        <Image src="/call.png" alt="phone icon" width={24} height={24}/>
                                        <span>+94 77 231 4888</span>
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className={styles.map_container}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.847711096713!2d79.85992937481267!3d6.90880641856629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594fe67ad047%3A0x958aa9f666117ab1!2sBreathe%20Day%20Spa!5e0!3m2!1sen!2slk!4v1742980011520!5m2!1sen!2slk"
                                        width="100%"
                                        height="100%"
                                        style={{border: 0, borderRadius: '15px'}}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={`${styles.exclusiveDeals} mt-6`}>
                    <h3 className={styles.exclusiveTitle}>Exclusive Deals</h3>
                    <p className={styles.exclusiveDescription}>
                        &#34;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et
                        dolore &#34;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;