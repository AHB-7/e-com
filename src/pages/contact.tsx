import ContentForm from "../components/contact/contact-form";
import { MetaContent } from "../components/meta-content/meta";
import { ContactPageContainer } from "../styles/contact/form";

export function Contact() {
    return (
        <ContactPageContainer>
            <MetaContent
                title="Contact"
                description="Get in touch with our customer support for any inquiries, order issues, or product information. We're here to help with fast, friendly service."
                keywords="contact, customer support, help, inquiries, order issues, product information"
            />
            <h1>Contact</h1>
            <ContentForm />
        </ContactPageContainer>
    );
}
