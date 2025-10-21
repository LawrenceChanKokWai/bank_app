import {useState} from "react";
import {api} from "../lib/api.jsx";

import '../styles.css'

const AccountForm = ({ onCreated }) => {

    const [form, setForm] = useState({
        accountName: '',
        accountBalance: '',
        accountType: 'SAVINGS'
    })
    const [busy, setBusy] = useState(false)
    const [ok, setOk] = useState(null)
    const [err, setErr] = useState(null)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setBusy(true)
        setOk(null)
        setErr(null)

        try {
            const response = await api.post('/api/accounts', {
                accountName: form.accountName,
                accountBalance: parseFloat(form.accountBalance),
                accountType: form.accountType,
            })
            setOk(`Account "${response.data.accountName}" created successfully.`)
            setForm({accountName: '', accountBalance: '', accountType: 'SAVINGS'})
            onCreated && onCreated()
        }
        catch (error) {
            const message = error?.response?.data?.message || error.message
            setErr(message)
        }
        finally {
            setBusy(false)
        }
    }

    return(
        <form onSubmit={handleSubmit} className="grid">
            <label>
                <span>Account Name</span>
                <input
                    name="accountName"
                    value={form.accountName}
                    onChange={handleChange}
                    placeholder="Account Name"
                    required
                />
            </label>

            <label>
                <span>Balance</span>
                <input
                    name="accountBalance"
                    type="number"
                    step="0.01"
                    value={form.accountBalance}
                    onChange={handleChange}
                    placeholder="1000.00"
                    required
                />
            </label>

            <label>
                <span>Account Type</span>
                <select name="accountType" value={form.accountType} onChange={handleChange}>
                    <option value="SAVINGS">SAVINGS</option>
                    <option value="CURRENT">CURRENT</option>
                    <option value="FIXED">FIXED</option>
                </select>
            </label>

            <button disabled={busy}>
                {busy ? 'Creating…' : 'Create Account'}
            </button>

            {ok && <p className="ok">{ok}</p>}
            {err && <p className="err">{err}</p>}
        </form>
    )
}

export default AccountForm;