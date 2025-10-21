import {useEffect, useState} from "react";
import {api} from "../lib/api.jsx";

import '../styles.css'


const AccountList = () => {
    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const loadAccounts = async () => {
        try {
            const response = await api.get('/api/accounts')
            setRows(response.data)
        }
        catch (error) {
            const message = error?.response?.data?.message || error.message
            setError(message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadAccounts()
    }, []);

    if (loading) return <p>Loading…</p>
    if (error) return <p className="err">{error}</p>
    if (!rows.length) return <p>No accounts yet.</p>

    return (
        <div className="table-wrap">
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th style={{textAlign: 'right'}}>Balance</th>
                </tr>
                </thead>
                <tbody>
                {rows.map(a => (
                    <tr key={a.id ?? a.accountId}>
                        <td>{a.id ?? a.accountId}</td>
                        <td>{a.accountName}</td>
                        <td>{a.accountType}</td>
                        <td style={{textAlign: 'right'}}>
                            {a.accountBalance?.toLocaleString()}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AccountList;