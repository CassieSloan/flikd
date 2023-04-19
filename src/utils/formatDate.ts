import moment, { MomentInput } from 'moment';

/**
 * Format date DD MMMM YYYY.
 */
export const formatDate = (date: MomentInput) => moment(date).format('DD MMMM YYYY') || '';
