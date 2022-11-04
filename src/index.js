import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"

import About from "./routes/About"
import Account from "./routes/Account"
import Create from "./routes/Create"
import Export from "./routes/Export"
import Import from "./routes/Import"
import ManualEntry from "./routes/ManualEntry"
import Menu from "./routes/Menu"
import Privacy from "./routes/Privacy"
import Settings from "./routes/Settings"

import NotFoundError from "./routes/NothingHere"

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="about" element={<About />} />
			<Route path="create" element={<Create />} />
			<Route path="export" element={<Export />} />
			<Route path="import" element={<Import />} />
			<Route path="manual-entry" element={<ManualEntry />} />
			<Route path="menu" element={<Menu />} />
			<Route path="privacy" element={<Privacy />} />
			<Route path="account/:accountId" element={<Account />} />
			<Route path="settings/:accountId" element={<Settings />} />

			<Route path="*" element={<NotFoundError />} />
		</Routes>
	</BrowserRouter>
)
