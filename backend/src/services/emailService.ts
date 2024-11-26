import { transporter } from "../config/email";
import { EMAIL_VERIFICATION_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "../templates/emailTemplates";

export const sendVerificationEmail = async (
  email: string,
  verificationToken: string
) => {
  const emailHtml = VERIFICATION_EMAIL_TEMPLATE.replace(
    "{verificationCode}",
    verificationToken
  );

  const mailOptions = {
    from: '"HostelAlly Support" <no-reply@hostelally.com>',
    to: email,
    subject: "Verify Your Email - HostelAlly",
    html: emailHtml,
  };

  await transporter.sendMail(mailOptions);
};

export const sendWelcomeEmail = async (
  email: string,
  firstName: string,
  lastName: string
) => {
  const emailHtml = EMAIL_VERIFICATION_SUCCESS_TEMPLATE.replace(
    "{firstName}",
    firstName
  ).replace("{lastName}", lastName);
  try {
    const mailOptions = {
      from: '"HostelAlly Support" <no-reply@hostelally.com>',
      to: email,
      subject: "Verify Your Email - HostelAlly",
      html: emailHtml,
    };
    const response = await transporter.sendMail(mailOptions);
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error(`Error sending welcome email`, error);

    throw new Error(`Error sending welcome email: ${error}`);
  }
};
