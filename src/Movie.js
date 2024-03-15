import React, { useState } from 'react';
import Counter from './Counter';
import { Card, CardActions, CardContent } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandMore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Movie({ movieTake }) {
  const ratingStyles = {
    color: movieTake.rating >= 8.5 ? "green" : "red"
  };
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleToggleDescription = () => {
    setShow(!show);
  };

  const handleNavigate = () => {
    navigate(`/portal/view/${movieTake.id}`);
  };

  const handleEditMovie = () => {
    navigate(`/portal/edit/${movieTake.id}`);
  };

  const deleteMovie = (id) => {
    fetch(`https://65f16b84034bdbecc7627089.mockapi.io/Movie/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        // Optionally reload the movies after deletion
        // geMovies();
        alert("This card has been deleted.");
      })
      .catch(error => {
        console.error('Error deleting movie:', error);
      });
  };

  return (
    <Card className="movie-container">
      <img className="movie-poster" src={movieTake.poster} alt="movie poster" />
      <CardContent>
        <div className="movie-spec">
          <h2 className="movie-name" style={{ color: 'black' }}>
            {movieTake.name} {/* Display movie name */}
            <IconButton color="primary" aria-label="Toggle-Description" onClick={handleToggleDescription}>
              {show ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
            </IconButton>

            <IconButton color="primary" aria-label="Movie-Info" onClick={handleNavigate}>
              <InfoIcon fontSize="medium" />
            </IconButton>
            {movieTake.trailer}
          </h2>
          <h3 style={ratingStyles} className="movie-rating">⭐{movieTake.rating}</h3>
        </div>
      </CardContent>
      {show ? <p className="movie-summary" style={{ color: 'white' }}>{movieTake.summary}</p> : null}
      <CardActions>
        <Counter />
        <IconButton sx={{ marginLeft: "auto" }} aria-label="editMovie" onClick={handleEditMovie}>
          <EditIcon color="secondary" />
        </IconButton>
        <IconButton sx={{ marginLeft: "auto" }} aria-label="deleteMovie" onClick={() => deleteMovie(movieTake.id)}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
