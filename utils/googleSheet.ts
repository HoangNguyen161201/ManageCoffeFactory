import {google} from 'googleapis'
export const authGoogle = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
})

//handle instance google sheet
export const getGoogleSheet = async () => {
    //create client instance for auth
    const client = await authGoogle.getClient()

    //instance of google sheet api
    const googleSheets = google.sheets({ version: 'v4', auth: client })

    return googleSheets
}

//ranges of google sheet connect
export const rangeGoogleSheet = {
    product: 'sản phẩm',
}

