import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface VerifyEmailProps {
  name: string;
  verificationUrl: string;
}

export const VerifyEmail = ({ name, verificationUrl }: VerifyEmailProps) => (
  <Html>
    <Head />
    <Preview>Verify your email address</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Heading style={h1}>Verify your email address</Heading>
        </Section>
        <Section style={contentSection}>
          <Text style={greeting}>Hi {name},</Text>
          <Text style={text}>
            Thanks for signing up! Please verify your email address by clicking the button below:
          </Text>
        </Section>
        <Section style={buttonContainer}>
          <Button style={button} href={verificationUrl}>
            Verify Email
          </Button>
        </Section>
        <Section style={footerSection}>
          <Text style={footer}>
            If you didn't create an account, you can safely ignore this email.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default VerifyEmail;

const main = {
  backgroundColor: "#f5f7fa",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  marginBottom: "64px",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
  maxWidth: "600px",
  overflow: "hidden",
};

const headerSection = {
  backgroundColor: "#1a1a1a",
  padding: "40px 48px",
  textAlign: "center" as const,
};

const h1 = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "600",
  margin: "0",
  padding: "0",
  textAlign: "center" as const,
  letterSpacing: "-0.5px",
};

const contentSection = {
  padding: "48px 48px 32px",
};

const greeting = {
  color: "#1a1a1a",
  fontSize: "18px",
  lineHeight: "28px",
  margin: "0 0 24px",
  padding: "0",
  fontWeight: "500",
};

const text = {
  color: "#4a5568",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "0 0 32px",
  padding: "0",
};

const buttonContainer = {
  padding: "0 48px 48px",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#1a1a1a",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 32px",
  margin: "0 auto",
  transition: "background-color 0.2s",
};

const footerSection = {
  backgroundColor: "#f9fafb",
  padding: "32px 48px",
  borderTop: "1px solid #e5e7eb",
};

const footer = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "0",
  padding: "0",
  textAlign: "center" as const,
};
