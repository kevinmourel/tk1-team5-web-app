
import React, { useEffect, useState } from 'react'

const Table = ({isRefresh, setRefresh}) => {
    const [Users, fetchUsers] = useState([])

    useEffect(() => {
        if (isRefresh) {
        fetch('http://localhost:8000/users')
            .then((res) => res.json())
            .then((res) => {
                setRefresh(false)
                fetchUsers(res)
            })
    }}, [isRefresh, setRefresh]);

    return (
        <div className=" container p-5">
            <h1 className='mb-5'>Tabel Data</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" >ID</th>
                        <th scope="col" >Nama</th>
                        <th scope="col" >Alamat</th>
                        <th scope="col" >Jenis Kelamin</th>
                        <th scope="col" >Tanggal Lahir</th>
                        <th scope="col" >Foto</th>
                        <th scope="col" >CV</th>
                        <th scope="col" >Sertifikat</th>

                    </tr>
                </thead>
                <tbody>
                    {Users.map((item, i) => {
                        return <tr>
                            <td>{i + 1}</td>
                            <td>{item.nama}</td>
                            <td>{item.alamat}</td>
                            <td>{item.kelamin}</td>
                            <td>{item.tglLahir}</td>
                            <td><img className="img-fluid w-50" src={item.foto}/></td>
                            <td><img className="img-fluid w-50" src={item.cv}/></td>
                            <td><img className="img-fluid w-50" src={item.sertifikat}/></td>
                        </tr>
                    })}
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Table