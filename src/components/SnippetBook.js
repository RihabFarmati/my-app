import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./SnippetBook.css"
import { useNavigate } from 'react-router-dom'

export default function SnippetBook({ book }) {
    const navigate = useNavigate()

    const navigateToDetails = async e => {
        navigate('/book', { state: { book } })
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="book.png"
                title={book.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    by {book.auth}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={navigateToDetails} size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}