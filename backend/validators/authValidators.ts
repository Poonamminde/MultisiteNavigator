import Joi from 'joi';

export const registerSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(20)
    .required()
    .messages({
      'string.base': 'Username must be a string',
      'string.empty': 'Username cannot be empty',
      'string.alphanum': 'Username can only contain letters and numbers',
      'string.min': 'Username must be at least 3 characters',
      'string.max': 'Username must be at most 20 characters',
      'any.required': 'Username is required'
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.base': 'Email must be a string',
      'string.empty': 'Email cannot be empty',
      'string.email': 'Please provide a valid email',
      'any.required': 'Email is required'
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.base': 'Password must be a string',
      'string.empty': 'Password cannot be empty',
      'string.min': 'Password must be at least 6 characters long',
      'any.required': 'Password is required'
    })
});

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.base': 'Email must be a string',
      'string.empty': 'Email cannot be empty',
      'string.email': 'Please provide a valid email',
      'any.required': 'Email is required'
    }),
  password: Joi.string()
    .required()
    .messages({
      'string.base': 'Password must be a string',
      'string.empty': 'Password cannot be empty',
      'any.required': 'Password is required'
    })
});