exports = module.exports = {
    STATUS_CODE: {
        BAD_REQUEST: 400,
		UNAUTHORIZED: 401,
		OK: 200,
		CREATED: 201,
		CONFLICT: 409,
		INTERNAL_ERROR: 500,
		PAYMENT_REQUIRED: 402,
		UNPROCESSABLE_ENTITY: 422,
		ALREADY_EXISTS: 403

    },
    STATUS_MESSAGE: {
        BAD_REQUEST: 'Required Data not found',
		CONFLICT: 'Data already exists',
		INTERNAL_SERVER_ERROR: 'Internal Server Error',
        POLLING_CREATED: 'Polling created successfully'
    }
}