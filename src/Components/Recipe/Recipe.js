import React, { useContext } from 'react';
import { DataContext } from '../../DataContext';

import { Card, Container } from 'react-bootstrap';

import noImage from '../../assets/no-image.jpeg';

export default function Recipe() {
  const { recipe } = useContext(DataContext);

  //display loading message while recipe is being retrieve by the api call
  if (!recipe) {
    return (
      <div className='d-flex justify-content-center'>
        <h1>Loading...</h1>
      </div>
    );
  }

  const currentRecipe = recipe.recipe;
  return (
    <Container>
      <Card className='h-100 overflow-auto text-center p-3'>
        <Card.Title>{currentRecipe.label}</Card.Title>
        <Card.Img
          className='rounded mx-auto d-block recipeImage'
          src={
            currentRecipe.images.SMALL
              ? currentRecipe.images.SMALL.url
              : noImage
          }
          alt={currentRecipe.label}
        />
        <div >
        {currentRecipe.totalTime ? (
          <small className='d-block' style={{textDecoration: 'none'}}>
            Average prep time: {currentRecipe.totalTime} minutes.
          </small>
        ) : null}
        <small className='d-block' style={{textDecoration: 'none'}}>{currentRecipe.yield} servings.</small>
        <small className='d-block' style={{textDecoration: 'none'}}>
          Calories per serving:{' '}
          {(+currentRecipe.calories / +currentRecipe.yield).toFixed(2)}
        </small>
        <h5 className='mt-4' style={{textDecoration: 'none'}}>Ingredients:</h5>
        <ul className='list-group' style={{textDecoration: 'none'}}>
          {currentRecipe.ingredientLines.map((ingredient, index) => (
            <li className='list-group-item' key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
        <h1 >
          Instructions can be found at:{' '}
          <a href={currentRecipe.url} className='recipe-link' target=' _blank'>
            {currentRecipe.source}
          </a>
        </h1>
        </div>
      </Card>
    </Container>
  );
}
