import ContentForm from "../components/contact&checkout/contact-form";
import { ContactPageContainer } from "../styles/layoutes/contact/containers";

export function Contact() {
    return (
        <ContactPageContainer>
            <h1>Contact</h1>
            <ContentForm />
        </ContactPageContainer>
    );
}
