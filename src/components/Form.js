import React, { useState } from 'react'

const Form = ({setRefresh}) => {

    const initialValue = {
        nama: "",
        alamat : "",
        kelamin: "",
        tglLahir: "",
        foto: "",
        cv: "",
        sertifikat: "",
    }

    const [user, setUser] = useState(initialValue)
    const {nama, alamat, kelamin, tglLahir, foto, cv, sertifikat} = user;

    const onValueChange = (e) =>
    {
        setUser({...user, [e.target.name]: e.target.value});
       
    }

    const handleChangeImage = (e) => {
        setUser({ ...user, [e.target.name]: URL.createObjectURL(e.target.files[0]) });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(user);

        if( !user.nama || !user.alamat || !user.kelamin || !user.tglLahir || !user.foto || !user.cv || !user.sertifikat){
            
            alert("File belum dimasukkan dan semua inputan belum terisi")
            return
        }

        fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(() => {
            setRefresh(true)
			alert("Data berhasil ditambahkan")
        });
    }

    const onReset = () => {
        setUser({
            nama: "",
            alamat : "",
            kelamin: "",
            tglLahir: "",
            foto: "",
            cv: "",
            sertifikat: "",
        })
    }

    return (
        <div className="container p-5">
            <h1 className='mb-5'>TK1 - Team 5 Web Application</h1>
            <form >
                <div className="form-group mt-3">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Nama"
                        onChange={(e) => onValueChange(e)}
                        name="nama" 
                        value={nama} />
                </div>
                <div className="form-group mt-3">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Alamat"
                        onChange={(e) => onValueChange(e)}
                        name="alamat" 
                        value={alamat} />
                </div>
                <div className="form-group mt-3">
                    <label className='mb-2'> Jenis Kelamin</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" 
                            name="kelamin" 
                            onChange={(e) => onValueChange(e)}     
                            value="Laki - Laki" />
                        <label className="form-check-label" >
                            Laki - laki
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"
                            name="kelamin" 
                            onChange={(e) => onValueChange(e)}     
                            value="Perempuan" />
                        <label className="form-check-label" for="exampleRadios2">
                            Perempuan
                        </label>
                    </div>
                </div>
                <div className="form-group mt-3">
                    <input type="date" className="form-control" placeholder="Tgl Lahir" 
                        name="tglLahir" 
                        onChange={(e) => onValueChange(e)}     
                        value={tglLahir} />
                </div>
                <div className="form-group mt-3">
                    <label>Foto</label>
                    <br/>
                    <input type="file" className="form-control-file" name="foto"  onChange={(e) => handleChangeImage(e)} />
                </div>
                <div className="form-group mt-3">
                    <label>CV</label>
                    <br/>
                    <input type="file" className="form-control-file" name="cv" onChange={(e) => handleChangeImage(e)} />
                </div>
                <div className="form-group mt-3">
                    <label>Sertifikat</label>
                    <br/>
                    <input type="file" className="form-control-file" name="sertifikat"  onChange={(e) => handleChangeImage(e)}/>
                </div>

                <button type="button" className="btn btn-warning mt-3 " onClick={onReset}>Reset</button>
                <button type="button" className="btn btn-primary mt-3 mx-3" onClick={onSubmit}>Submit</button>
            </form>

        </div>
    )
}

export default Form