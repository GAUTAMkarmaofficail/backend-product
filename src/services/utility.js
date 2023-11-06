import httpStatus from "http-status";
exports.httpStatus = (status) => {
  try {
    return httpStatus[status];
  } catch (error) {
    throw new Error(error);
  }
};
