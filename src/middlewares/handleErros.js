require('express-async-errors');

/**
 * middleware responsavel pela captação dos erros
 * lançados pela execções presentes no código
 */
function handleErrors(err, request, response, next) {
  if (err instanceof Error) {
    return response.status(400).json({ error: err.message });
  }
  return response
    .status(500)
    .json({ status: 'error', messgae: 'Internal server error' });
}

module.exports = handleErrors;
