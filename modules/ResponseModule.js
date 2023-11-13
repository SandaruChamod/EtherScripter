const Response = (code, status, message, data) => {
	return {
		code,
		status,
		message,
		data,
	};
};

module.exports = { Response };
