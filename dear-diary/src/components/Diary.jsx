import React, { useState, useEffect } from 'react';
import { TextField, Button, Modal, TextareaAutosize } from '@material-ui/core';
import withAuth from '../axios';
import { DiaryStyle } from './style';
import Navigation from './Navigation.';

const Diary = props => {
    const [photo, setPhoto] = useState(null);
    const [open, setOpen] = useState(false);
    const [diary, setDiary] = useState({
        diaryText: ''
    });
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState(false);
    
    const date = props.match.params.date;

    useEffect(() => {
        withAuth().get(`https://my-dear-diary.herokuapp.com/api/diary/${date}`)
        .then(({data}) => {
            setDiary(data.diary)
            setIsLoading(false)
            if(data.diary) {
                setResults(true)
            }
        })
        .catch(err => alert(err))
    }, [date])
    
    const onDiaryTextChange = e => {
        setDiary({...diary, diaryText: e.target.value})
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onChange = e => {
        const file = e.target.files[0];
        console.log(file)
        setPhoto(file);
    };

    const onUpload = () => {
        let fd = new FormData();
        fd.append('photo', photo)
        withAuth('multipart/form-data').post('https://my-dear-diary.herokuapp.com/api/gallery', fd)
        .then(res => console.log(res.data))
        .catch(error => {
            alert(error);
        });
    }
    const onHandleSubmit = e => {
        e.preventDefault()
        if(results) {
            const payload = {
                diaryText: diary.diaryText,
            }
            withAuth().put(`https://my-dear-diary.herokuapp.com/api/diary/${diary.id}`, payload)
            .then(res => {
                console.log(res)
                props.history.push('/dashboard')
            })
            .catch(error => {
                alert(error);
            }); 
        } else {
            const payload = {
                diaryText: diary.diaryText,
                date: date
            }
            withAuth().post('https://my-dear-diary.herokuapp.com/api/diary', payload)
            .then(res => {
                console.log(res)
                props.history.push('/dashboard')
            })
            .catch(error => {
                alert(error);
            }); 
        }              
    }
    
    if(isLoading) return <div>Loading...</div> 
    return(
        <DiaryStyle>
            <Navigation />
            <Button onClick={handleOpen} variant="contained" color="primary">
                Upload Picture
            </Button>
            <div className='diary-form'>
                <TextareaAutosize id="diary-text" onChange={onDiaryTextChange} rowsMin={25} rowsMax={45} defaultValue={diary ? diary.diaryText : ''} variant="outlined" placeholder="Start writing..." />
                <Button className='diary-button' onClick={onHandleSubmit} variant="contained" color="primary">
                    Done
                </Button>
            </div>
            <footer>
                <p>&copy; Dear Diary</p>
            </footer>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div>
                    <h3>Upload your picture</h3>
                    <input type="file" name="Upload" onChange={onChange} />
                    <Button variant="contained" onClick={onUpload} color="primary">
                    Save
                    </Button>
                    <Button variant="contained" onClick={handleClose} color="primary">
                    Cancel
                    </Button>
                </div>
            </Modal>
        </DiaryStyle>
    )
};

export default Diary