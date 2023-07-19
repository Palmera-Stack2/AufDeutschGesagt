import axios from "axios";

export const sendMailChimp = async (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  //   const jsonData = JSON.stringify(data);

  const url = "https://us5.api.mailchimp.com/3.0/lists/a6e1377581";

  console.log(process.env.my_key);

  const options = {
    method: "POST",
    auth: process.env.my_key,
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.my_key).toString(
          "base64"
        )}`,
      },
    });

    if (response.status === 200) {
      return res.status(200).json({ message: "success" });
    } else {
      return res.status(400).json({ message: "fail" });
    }
  } catch (error) {
    return res.status(400).json({ message: "fail" });
  }
};
