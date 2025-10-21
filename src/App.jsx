import { useState } from 'react'
import './App.css'
import AccountForm from "./components/AccountForm.jsx";
import AccountList from "./components/AccountList.jsx";

const App = () => {
    const [reloadKey, setReloadKey] = useState(0)

    return (
        <main className="container">
            <h1>Bank Accounts</h1>

            <section className="card">
                <h2>Create Account</h2>
                <AccountForm onCreated={() => setReloadKey(k => k + 1)} />
            </section>

            <section className="card" key={reloadKey}>
                <h2>All Accounts</h2>
                <AccountList />
            </section>
        </main>
    )
}

export default App
