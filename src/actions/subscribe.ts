"use server";

export const subscribe = async (formData: FormData) => {
  const { MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID, MAILCHIMP_API_SERVER } =
    process.env;

  try {
    const email = formData.get("email");

    const data = {
      email_address: email,
      status: "subscribed",
      tags: ["website"],
    };

    const url = `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${MAILCHIMP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (response.status === 200) {
      return { message: "success" };
    } else {
      throw new Error(json.detail);
    }
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    return String(error.message);
  } else if (typeof error === "string") {
    return error;
  } else {
    return "An unknown error occurred";
  }
};
