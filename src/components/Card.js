import React from 'react';
// The classNames package makes dynamic and conditional className props simpler to work with (especially more so than conditional string manipulation)
import classNames from 'classnames';
import { Container, Body, Title, Text, Image, Button } from './styles/Card'

// Setting up the compound component
export const Card = ({ classes, children, ...restProps }) => {
    return (
      // Add a default class 'card'. classes refer to the rest of the classes you have passed down from App.js
      <Container className={classNames("card", classes)} {...restProps}>
        {children}
      </Container>
    );
}

Card.Body = function CardBody({ classes, children, ...restProps }) {
  return (
    <Body className={classNames("card__body", classes)} {...restProps}>
      {children}
    </Body>
  )
}

Card.Title = function CardTitle({ classes, children, ...restProps }) {
  return (
    <Title className={classNames("card__title", classes)} {...restProps}>
      {children}
    </Title>
  );
};

Card.Text = function CardText({ classes, children, ...restProps }) {
  return (
    <Text className={classNames("card__text", classes)} {...restProps}>
      {children}
    </Text>
  );
};

Card.Image = function CardImage({ src, alt, classes, children, ...restProps }) {
  return (
    <Image src={src} alt={alt} className={classNames("card__image", classes)} {...restProps}>
      {children}
    </Image>
  );
};

Card.Button = function CardButton({ classes, children, ...restProps }) {
  return (
    <Button className={classNames("card__button", classes)} {...restProps}>
      {children}
    </Button>
  );
};