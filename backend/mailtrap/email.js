import { VERIFICATION_EMAIL_TEMPLATE } from "../mailtrap/emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("email send successfully", response);
  } catch (error) {
    console.error(`Error sending verification`, error);
    throw new Error(`Error sending email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "b33075b7-dbb8-41cd-b199-b58f193d2528",
      template_variables: {
        name: name,
      },
    });

    console.log("Welcome email send successfully", response);
  } catch (error) {
    console.log(`Error sending welcome email`, error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};
