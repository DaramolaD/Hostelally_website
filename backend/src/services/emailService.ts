import { transporter } from "../config/email";
import { VERIFICATION_EMAIL_TEMPLATE } from "../templates/emailTemplates";

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
