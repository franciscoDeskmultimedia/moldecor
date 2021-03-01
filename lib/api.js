import { google } from "googleapis";
// import marked from "marked";
// const renderer = new marked.Renderer();
// renderer.link = (href, title, text) =>
//   `<a target="_blank" rel="noopener noreferrer" href="${href}" title="${
//     title || ""
//   }">${text}</a>`;

export async function moldecorProd() {
    console.log(process.env.GOOGLE_SHEETS_CLIENT_EMAIL)
    console.log(process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"))
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      // we need to replace the escaped newline characters
      // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1oRwyRkVbExbI3yWdYTNyPtfzyH80ZiCydXkY60vTCKI',
      range: "moldeprod",
    });

    const rows = response.data.values;

    if (rows.length) {
      return rows.map((row) => ({
        categoria: row[0],
        marca: row[1],
        modelo: row[2] || null,
        hcm: row[3],
        image:row[16] || null
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}