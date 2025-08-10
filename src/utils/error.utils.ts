export type DatabaseTimeoutLikeError = {
  code?: string | number;
  name?: string;
  message?: string;
};

export function isDatabaseTimeoutError(
  error: unknown,
): error is DatabaseTimeoutLikeError {
  if (!error || typeof error !== 'object') return false;

  const err = error as Record<string, unknown>;
  const code = err['code'];
  const name = String(err['name'] ?? '');
  const message = String(err['message'] ?? '');

  const codeStr = typeof code === 'number' ? String(code) : String(code ?? '');
  const messageLower = message.toLowerCase();

  return (
    codeStr === 'ETIMEDOUT' ||
    codeStr === 'ESOCKETTIMEDOUT' ||
    name === 'MongoNetworkTimeoutError' ||
    name === 'MongoServerSelectionError' ||
    name === 'MongoTimeoutError' ||
    messageLower.includes('timeout') ||
    messageLower.includes('timed out') ||
    messageLower.includes('server selection timed out')
  );
}

export function getErrorMessage(error: unknown): string {
  if (typeof error === 'string') return error;
  if (
    error &&
    typeof error === 'object' &&
    'message' in error &&
    typeof (error as any).message === 'string'
  ) {
    return (error as any).message as string;
  }
  try {
    return JSON.stringify(error);
  } catch {
    return 'Unknown error';
  }
}
