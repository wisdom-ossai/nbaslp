export default function mapAuthCodeToMessage(authCode: string) {
  switch (authCode) {
    case "auth/invalid-password":
      return { password: "Password provided is not corrected" };

    case "auth/invalid-email":
      return { email: "Email provided is invalid" };

    case "auth/user-not-found":
      return { email: "Email does not exist" };

    // Many more authCode mapping here...

    default:
      return "";
  }
}
