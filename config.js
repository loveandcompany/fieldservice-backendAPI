
module.exports = {
	JWT_SECRET: process.env.JWT_SECRET || 'boost',
	DB_URI: process.env.DB_URI || 'mongodb+srv://fieldserviceadmin:fhKYXJdeixG3JwIk@fieldservice.hca92.mongodb.net/fieldservice?retryWrites=true&w=majority',
	MISSING_PARAMETER: 'MISSING_PARAMETER',
	DB_ERROR: 'DB_ERROR',
	EMAIL_DUPLICATION: 'EMAIL_DUPLICATION',
	AUTHENTICATION_FAILED: 'AUTHENTICATION_FAILED',
	NOT_FOUND: 'NOT_FOUND',
	UPDATED: 'UPDATED',
	REMOVED: 'REMOVED',
};
