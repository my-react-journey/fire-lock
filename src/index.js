import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"

import About from "./routes/About"
import Account from "./routes/Account"
import Create from "./routes/Create"
import Export from "./routes/Export"
import Import from "./routes/Import"
import Menu from "./routes/Menu"

import NotFoundError from "./routes/NothingHere"

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="about" element={<About />} />
			<Route path="create" element={<Create />} />
			<Route path="export" element={<Export />} />
			<Route path="import" element={<Import />} />
			<Route path="menu" element={<Menu />} />
			<Route path="account/:accountId" element={<Account />} />

			<Route path="*" element={<NotFoundError />} />
		</Routes>
	</BrowserRouter>
)
