import ContentForm from "../components/contact-form";
import { ContactPageContainer } from "../styles/contact";

export function Contact() {
    return (
        <ContactPageContainer>
            <h1>Contact</h1>
            <ContentForm />
        </ContactPageContainer>
    );
}
