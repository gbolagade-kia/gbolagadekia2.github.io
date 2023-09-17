import { Modal } from "react-bootstrap";
import React, {useState} from "react";
import { Button } from "react-bootstrap";
const API_IMG="https://image.tmdb.org/t/p/w500/"

const MovieBox =({title,poster_path, vote_average, release_date, overview}) => {

   const [show, setShow] =useState(false);

   const handleShow=()=>setShow(true);
   const handleClose=()=>setShow(false);

 return(
    <div data-test-id:movie-card className="card text-center bg-secondary pb-3">
      <div className="card-body">
         <img data-test-id:movie-poster className="card-img-top"  src={API_IMG + poster_path} alt="" />
         <div className="card-body">
         <h6 data-test-id:movie-title>{title}</h6>
              <h4>ImDb: {vote_average}</h4>
              <h5 data-test-id:movie-release-date>Release Date: {release_date}</h5>
            <button type="button" className="btn btn-dark" onClick={handleShow}>View More</button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title> </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <img className="card-img-top" style={{width: '14rem'}} src={API_IMG + poster_path} alt="" />
              <h6 data-test-id:movie-title>{title}</h6>
              <h4>ImDb: {vote_average}</h4>
              <h5 data-test-id:movie-release-date>Release Date: {release_date}</h5>

              <br /><br />
              <h6>overview</h6>
              <p>{overview}</p>
              </Modal.Body>
              <Modal.Footer>
               <Button variant="secondary" onClick="handleClose">close</Button>
              </Modal.Footer>

            </Modal>
         </div>
      </div>
    </div>
 )


}
export default MovieBox;