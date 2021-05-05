// import { google } from "googleapis";

// export async function moldecorProd() {
//     console.log(process.env.GOOGLE_SHEETS_CLIENT_EMAIL)
//     console.log(process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"))
//   try {
//     const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    
//     const jwt = new google.auth.JWT(
//       process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
//       null,
//       process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
//       scopes
//     );

//     const sheets = google.sheets({ version: "v4", auth: jwt });
//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId: '1oRwyRkVbExbI3yWdYTNyPtfzyH80ZiCydXkY60vTCKI',
//       range: "moldeprod",
//     });

//     const rows = response.data.values;

//     if (rows.length) {
//       return rows.map((row) => ({
//         categoria: row[0],
//         marca: row[1],
//         modelo: row[2] || null,
//         hcm: row[3],
//         image:row[16] || null,
//         imageData:row[17] || null
//       }));
//     }
//   } catch (err) {
//     console.log(err);
//   }

//   return [];
// }

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getProducts() {
  const data = await fetchAPI(
    `
    query Product{
      products{
        id
        Name
        Product_Image{
          url
          width
          height
        }
        Image_data{
          url
          width
          height
        }
        brand{
          Name
        }
        category{
          Name
        }
        Material{
          Material
        }
        Measures{
          H
          W
          L
        }
        PVP
      }
    }
  `,
    {
      variables: {},
    }
  )
  return data?.products
}

export async function getHome() {
  const data = await fetchAPI(
    `
    query Home {
      home{
        page_builder{
          ... on ComponentSliderHeroSlider{
            id
            __typename
            hero_sliders{
              id
              hero_image{
                url
                width
                height
              }
              text
              button_text
              button_url
            }
          }
          ... on ComponentProductGridProductGrid{
            __typename
            id
            active_grid
          }
        }
      }
    }
  `,
    {
      variables: {},
    }
  )
  return data?.home.page_builder
}

export async function getCategories() {
  const data = await fetchAPI(
    `
    query Categories{
      categories{
        Name
        category_image{
          url
          width
          height
        }
      }
    }
  `,
    {
      variables: {},
    }
  )
  return data?.categories
}
