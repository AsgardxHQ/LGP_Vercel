// Vercel sets this at build and runtime; process spawning/persistent-fs actions can't run there.
export const isProcessManagementSupported = () => !process.env.VERCEL;

export const assertProcessManagementSupported = () => {
  if (isProcessManagementSupported()) return;

  throw createError({
    statusCode: 501,
    statusMessage: 'This action requires a self-hosted/local environment and is not available on Vercel.'
  });
};
