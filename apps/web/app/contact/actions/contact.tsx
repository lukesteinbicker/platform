"use server";

import { resend } from "@repo/email";
import { ContactTemplate } from "@repo/email/templates/contact";
import { parseError } from "@repo/observability/error";

export const contact = async (
  name: string,
  email: string,
  message: string
): Promise<{
  error?: string;
}> => {
  try {
    const from = process.env.RESEND_FROM;
    if (!from) {
      return { error: "Email not configured" };
    }
    await resend.emails.send({
      from,
      to: from,
      subject: "Contact form submission",
      replyTo: email,
      react: <ContactTemplate email={email} message={message} name={name} />,
    });

    return {};
  } catch (error) {
    const errorMessage = parseError(error);

    return { error: errorMessage };
  }
};
