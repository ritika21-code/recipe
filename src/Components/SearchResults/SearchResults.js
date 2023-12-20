import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../DataContext';

//style
import { Card, Container, Row, Col, Alert } from 'react-bootstrap';

import noImage from '../../assets/no-image.jpeg';

export default function SearchResults() {
  const { recipes, handleClick } = useContext(DataContext);

  //display loading message while api is being retrieved
  if (!recipes) {
    return (
      <div className='d-flex justify-content-center'>
        <h1>Loading...</h1>
      </div>
    );
  } else if (recipes.hits.length === 0) {
    //show invalid input message if response comes back enpty
    return (
      <div className='d-flex justify-content-center'>
        <Alert variant='danger'>
          No recipes found when searching for the parameters entered. Please try
          something else.
        </Alert>
      </div>
    );
  }

  return (  <div className='recipe-link'>
    <Container className='mt-3'>
      <Row>
        {recipes.hits?.map(({ recipe, _links }, index) => {
          return (
            <Col className='colHeight mb-5' key={index}>
              <Card
                className='h-100 overflow-auto text-center p-3'
                style={{ minWidth: 250,textDecoration: 'none' }}>
              
                <Link
                  to={`/recipe/${recipe.label.toLowerCase()}`}
                  onClick={() => handleClick(_links.self.href)}
                >
                  <Card.Title>{recipe.label}</Card.Title>
                  <Card.Img
                    src={
                      recipe.images.SMALL ? recipe.images.SMALL.url : noImage
                    }
                    alt={recipe.label}
                    style={{ width: 200, height: 'auto' }}
                  />
              
                  {recipe.totalTime ? (
                    <small className='d-block' style={{ textDecoration: 'none' }}>
                      Average prep time: {recipe.totalTime} minutes.
                    </small>
                  ) : null}
                  <small className='d-block' style={{ textDecoration: 'none' }}>{recipe.yield} servings.</small>
                  <small className='d-block'>
                    Calories per serving:{' '}
                    {(+recipe.calories / +recipe.yield).toFixed(2)}
                  </small>
                  <h5>Ingredients:</h5>
                  <div>
                    {recipe.ingredientLines.map((ingredient, index) => (
                      <div key={index}>{ingredient}</div>
                    ))}
                  </div>
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
    </div>
  );
}
