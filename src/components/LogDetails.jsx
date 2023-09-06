import React from 'react';

function createExercise(exercise) {
  return (
    <div>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
        <div class="d-flex w-100 justify-content-between">
          <input class="mb-1">{exercise.name}</input>
        </div>
        <input class="mb-1" text={exercise.sets}></input>
        <small>{exercise.notes}</small>
      </a>
    </div>
  );
}

function LogDetails(props) {
  return (
    <div class="card border-warning mb-3" style="max-width: 18rem;">
      <div class="card-header">Added: {props.date_added}</div>
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>

        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">Location</span>
          </div>
          <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </div>

        <div class="list-group">
          {props.exercises.map(createExercise)}
        </div>

        <p>Last Updated: {props.last_updated} </p>

        <div class="input-group">
          <span class="input-group-text">Notes</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>

      </div>
    </div>
  );
}

export default LogDetails;
