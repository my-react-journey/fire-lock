# Fire Lock
A Privacy Respecting, Fully Private and Secure 2FA app that generate OTPs to securely login to your accounts.

## Installation
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm install`

In the project directory, run this command to install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Libraries I used for the creation of this project

- `React` Obviously for the UI
- `crypto-js` For Encryption and Decryption while importing and exporting accounts
- `idb-keyval` For Client side storage with IndexedDB 
- `otpauth` For generating the TOTP Codes
- `react-qr-reader` For reading the QR Code while adding accounts
- `react-simple-toasts` Toast notifications
- `uuid` Generating Random IDs for referencing with react router

## What does it do?? and How it is different from others? (Google Authenticator, Microsoft Authenticator, etc.)

- A Privacy Respecting, Fully Private and Secure 2FA app that generate OTPs to securely login to your accounts.
- No data is stored on our servers. All data is stored locally on your device. Import and Export your data to keep it safe with your preferred password using AES-256 encryption.
- Fire Lock doesn't track you, doesn't collect or use or sell your data, doesn't even know who you are or even if you're reading this. All it knows is that you are using it. And that makes Fire Lock happy :)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## What is the purpose of this project?
- I wanted to learn more about how OTP codes are generated and how apps orchestrates the codes creation and account management
- Google Authenticator revolves too much with your Google Account while Fire Lock does not :)
- With Bubblewrap, it's on Play Store [Fire Lock](https://play.google.com/store/apps/details?id=dev.pages.firelock.twa)