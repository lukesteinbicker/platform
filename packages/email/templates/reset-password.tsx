import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ResetPasswordProps {
  name: string;
  resetUrl: string;
}

export const ResetPassword = ({ name, resetUrl }: ResetPasswordProps) => (
  <Html>
    <Head />
    <Preview>Reset your password</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Reset your password</Heading>
        <Text style={text}>Hi {name},</Text>
        <Text style={text}>
          We received a request to reset your password. Click the button below to create a new password:
        </Text>
        <Section style={buttonContainer}>
          <Button style={button} href={resetUrl}>
            Reset Password
          </Button>
        </Section>
        <Text style={text}>
          Or copy and paste this URL into your browser:
        </Text>
        <Link href={resetUrl} style={link}>
          {resetUrl}
        </Link>
        <Text style={footer}>
          If you didn't request a password reset, you can safely ignore this email.
          Your password will remain unchanged.
        </Text>
        <Text style={footer}>
          This link will expire in 1 hour.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ResetPassword;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  textAlign: "center" as const,
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "16px 0",
  padding: "0 48px",
};

const buttonContainer = {
  padding: "27px 0 27px",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#000",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px 24px",
  margin: "0 auto",
};

const link = {
  color: "#0066cc",
  fontSize: "14px",
  textDecoration: "underline",
  wordBreak: "break-all" as const,
  padding: "0 48px",
  display: "block",
};

const footer = {
  color: "#8898aa",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "32px 0",
  padding: "0 48px",
};
